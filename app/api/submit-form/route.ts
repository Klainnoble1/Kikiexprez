import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'

// Initialize Google Sheets API
async function getGoogleSheets() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })
  return sheets
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    const sheets = await getGoogleSheets()
    const spreadsheetId = process.env.GOOGLE_SHEET_ID

    if (!spreadsheetId) {
      return NextResponse.json(
        { error: 'Google Sheet ID not configured' },
        { status: 500 }
      )
    }

    // Append row to the sheet
    const timestamp = new Date().toISOString()
    const values = [[timestamp, name, email, phone || '', company || '', message || '']]

    // Check if headers exist, if not create them
    const range = 'Sheet1!A1:F1'
    const headerResponse = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    })

    if (!headerResponse.data.values || headerResponse.data.values.length === 0) {
      // Add headers
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: 'Sheet1!A1:F1',
        valueInputOption: 'RAW',
        requestBody: {
          values: [['Timestamp', 'Name', 'Email', 'Phone', 'Company', 'Message']],
        },
      })
    }

    // Append the new row
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:F',
      valueInputOption: 'RAW',
      requestBody: {
        values,
      },
    })

    return NextResponse.json({ success: true, message: 'Form submitted successfully' })
  } catch (error: any) {
    console.error('Error submitting form:', error)
    return NextResponse.json(
      { error: 'Failed to submit form', details: error.message },
      { status: 500 }
    )
  }
}


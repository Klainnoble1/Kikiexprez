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

export async function GET(request: NextRequest) {
  try {
    // Simple password protection - check for password in query or header
    const password = request.nextUrl.searchParams.get('password') || request.headers.get('x-password')
    
    if (password !== process.env.DASHBOARD_PASSWORD) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
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

    // Get all rows from the sheet
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Sheet1!A:F',
    })

    const rows = response.data.values || []
    
    if (rows.length === 0) {
      return NextResponse.json({ submissions: [] })
    }

    // First row is headers, rest are data
    const headers = rows[0]
    const submissions = rows.slice(1).map((row, index) => {
      const submission: any = { id: index + 1 }
      headers.forEach((header: string, i: number) => {
        submission[header.toLowerCase()] = row[i] || ''
      })
      return submission
    })

    // Reverse to show newest first
    return NextResponse.json({ submissions: submissions.reverse() })
  } catch (error: any) {
    console.error('Error fetching submissions:', error)
    return NextResponse.json(
      { error: 'Failed to fetch submissions', details: error.message },
      { status: 500 }
    )
  }
}


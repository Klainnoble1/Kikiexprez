import { NextRequest, NextResponse } from 'next/server'
import { Client } from '@microsoft/microsoft-graph-client'
import { ConfidentialClientApplication } from '@azure/msal-node'

// Initialize MSAL
const msalConfig = {
  auth: {
    clientId: process.env.MICROSOFT_CLIENT_ID || '',
    clientSecret: process.env.MICROSOFT_CLIENT_SECRET || '',
    authority: `https://login.microsoftonline.com/${process.env.MICROSOFT_TENANT_ID || ''}`,
  },
}

const msalInstance = new ConfidentialClientApplication(msalConfig)

// Get access token for Microsoft Graph
async function getAccessToken() {
  try {
    const clientCredentialRequest = {
      scopes: ['https://graph.microsoft.com/.default'],
    }

    const response = await msalInstance.acquireTokenByClientCredential(clientCredentialRequest)
    return response?.accessToken
  } catch (error: any) {
    console.error('Error acquiring token:', error)
    throw new Error('Failed to acquire access token')
  }
}

// Initialize Graph client
function getGraphClient(accessToken: string) {
  return Client.init({
    authProvider: (done) => {
      done(null, accessToken)
    },
  })
}

export async function POST(request: NextRequest) {
  try {
    // Check password
    const password = request.headers.get('x-password') || request.nextUrl.searchParams.get('password')
    
    if (password !== process.env.DASHBOARD_PASSWORD) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { to, subject, message, replyToEmail, replyToName } = body

    if (!to || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: to, subject, message' },
        { status: 400 }
      )
    }

    // Get access token
    const accessToken = await getAccessToken()
    if (!accessToken) {
      throw new Error('Failed to get access token')
    }

    // Initialize Graph client
    const client = getGraphClient(accessToken)

    // Prepare email message
    const emailMessage = {
      message: {
        subject: subject,
        body: {
          contentType: 'HTML',
          content: message.replace(/\n/g, '<br>'),
        },
        toRecipients: [
          {
            emailAddress: {
              address: to,
              name: replyToName || 'Kikiexprez Business Solutions',
            },
          },
        ],
        from: {
          emailAddress: {
            address: process.env.MICROSOFT_SENDER_EMAIL || '',
            name: 'Kikiexprez Business Solutions',
          },
        },
        replyTo: replyToEmail ? [
          {
            emailAddress: {
              address: replyToEmail,
              name: replyToName || 'Kikiexprez Business Solutions',
            },
          },
        ] : undefined,
      },
      saveToSentItems: true,
    }

    // Send email
    await client.api(`/users/${process.env.MICROSOFT_SENDER_EMAIL}/sendMail`).post(emailMessage)

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully' 
    })
  } catch (error: any) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { 
        error: 'Failed to send email', 
        details: error.message 
      },
      { status: 500 }
    )
  }
}


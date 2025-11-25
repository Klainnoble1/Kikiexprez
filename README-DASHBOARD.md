# Dashboard Setup Guide

This guide will help you set up the Google Sheets integration for the form submission dashboard.

## Prerequisites

1. A Google account
2. Access to Google Cloud Console

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Sheets API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

## Step 2: Create a Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the service account details:
   - Name: `kikiexprez-dashboard`
   - Click "Create and Continue"
   - Skip the optional steps and click "Done"
4. Click on the newly created service account
5. Go to the "Keys" tab
6. Click "Add Key" > "Create new key"
7. Choose "JSON" format
8. Download the JSON file (keep it secure!)

## Step 3: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new spreadsheet
3. Name it "Kikiexprez Form Submissions" (or any name you prefer)
4. Copy the Sheet ID from the URL:
   - The URL looks like: `https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit`
   - Copy the `YOUR_SHEET_ID` part

## Step 4: Share the Sheet with Service Account

1. Open your Google Sheet
2. Click the "Share" button
3. Add the service account email (from the JSON file, it's the `client_email` field)
4. Give it "Editor" permissions
5. Click "Send" (you can uncheck "Notify people")

## Step 5: Configure Environment Variables

1. Open the JSON key file you downloaded
2. Copy the `client_email` value
3. Copy the `private_key` value (keep the full key including `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`)
4. Create a `.env.local` file in the root of your project:

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your-google-sheet-id
DASHBOARD_PASSWORD=your-secure-password-here
```

**Important Notes:**
- The `GOOGLE_PRIVATE_KEY` must be wrapped in quotes and include `\n` for newlines
- Replace `your-google-sheet-id` with the Sheet ID from Step 3
- Set a strong password for `DASHBOARD_PASSWORD`

## Step 6: Test the Setup

1. Start your development server: `pnpm dev`
2. Submit a test form on the contact page
3. Check your Google Sheet - you should see the submission appear
4. Visit `/dashboard` and log in with your password
5. You should see all form submissions in a table

## Accessing the Dashboard

- URL: `http://localhost:3000/dashboard` (development)
- URL: `https://yourdomain.com/dashboard` (production)
- Password: The password you set in `DASHBOARD_PASSWORD`

## Troubleshooting

### "Google Sheet ID not configured"
- Make sure `.env.local` exists and has `GOOGLE_SHEET_ID` set
- Restart your development server after adding environment variables

### "Unauthorized" error
- Check that the service account email has been shared with the Google Sheet
- Verify the service account has "Editor" permissions

### "Failed to submit form"
- Check that the Google Sheets API is enabled in your Google Cloud project
- Verify the private key is correctly formatted with `\n` for newlines
- Make sure the service account email matches the one in your JSON key file

### Submissions not appearing
- Check the browser console for errors
- Verify the Sheet ID is correct
- Make sure the sheet is shared with the service account

## Security Notes

- Never commit `.env.local` to version control
- Keep your service account JSON key file secure
- Use a strong password for the dashboard
- Consider adding additional authentication for production use


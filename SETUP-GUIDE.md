# Step-by-Step Guide: Getting Google Sheets API Credentials

Follow these steps to set up your Google Sheets integration for the dashboard.

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with your Google account
3. Click on the project dropdown at the top (next to "Google Cloud")
4. Click **"New Project"**
5. Enter project name: `Kikiexprez Dashboard` (or any name you prefer)
6. Click **"Create"**
7. Wait for the project to be created, then select it

## Step 2: Enable Google Sheets API

1. In the Google Cloud Console, go to **"APIs & Services"** > **"Library"** (in the left menu)
2. Search for **"Google Sheets API"**
3. Click on **"Google Sheets API"**
4. Click the **"Enable"** button
5. Wait for it to enable (takes a few seconds)

## Step 3: Create a Service Account

1. Go to **"APIs & Services"** > **"Credentials"** (in the left menu)
2. Click **"+ CREATE CREDENTIALS"** at the top
3. Select **"Service account"**
4. Fill in the details:
   - **Service account name**: `kikiexprez-dashboard` (or any name)
   - **Service account ID**: Will auto-fill (you can change it if needed)
   - **Description**: `Service account for Kikiexprez form submissions`
5. Click **"CREATE AND CONTINUE"**
6. Skip the optional steps (click **"CONTINUE"** then **"DONE"**)

## Step 4: Create and Download Service Account Key

1. You'll see your service account in the list. Click on it
2. Go to the **"Keys"** tab
3. Click **"ADD KEY"** > **"Create new key"**
4. Select **"JSON"** format
5. Click **"CREATE"**
6. A JSON file will download automatically - **SAVE THIS FILE SECURELY!**

### What to get from the JSON file:

Open the downloaded JSON file. You'll see something like this:

```json
{
  "type": "service_account",
  "project_id": "your-project-id",
  "private_key_id": "...",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n",
  "client_email": "kikiexprez-dashboard@your-project-id.iam.gserviceaccount.com",
  ...
}
```

**Copy these values:**
- `client_email` → This is your **GOOGLE_SERVICE_ACCOUNT_EMAIL**
- `private_key` → This is your **GOOGLE_PRIVATE_KEY** (keep the entire key including BEGIN/END lines)

## Step 5: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com/)
2. Click **"Blank"** to create a new spreadsheet
3. Name it: **"Kikiexprez Form Submissions"** (or any name)
4. **Copy the Sheet ID from the URL:**
   - The URL looks like: `https://docs.google.com/spreadsheets/d/1ABC123xyz789/edit`
   - The part between `/d/` and `/edit` is your Sheet ID: `1ABC123xyz789`
   - This is your **GOOGLE_SHEET_ID**

## Step 6: Share the Sheet with Service Account

1. In your Google Sheet, click the **"Share"** button (top right)
2. In the "Add people and groups" field, paste the **service account email** (the `client_email` from Step 4)
3. Make sure the permission is set to **"Editor"**
4. **Uncheck** "Notify people" (optional, since it's a service account)
5. Click **"Share"**

## Step 7: Create Environment Variables File

1. In your project root folder, create a file named `.env.local`
2. Add the following content (replace with your actual values):

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=kikiexprez-dashboard@your-project-id.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour full private key here\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=1ABC123xyz789
DASHBOARD_PASSWORD=YourSecurePassword123!
```

### Important Notes:

- **GOOGLE_PRIVATE_KEY**: 
  - Must be wrapped in quotes `"`
  - Must include `\n` for each line break
  - Must include the full key with `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`
  
  Example format:
  ```env
  GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n...more lines...\n-----END PRIVATE KEY-----\n"
  ```

- **GOOGLE_SHEET_ID**: Just the ID part, no URL
- **DASHBOARD_PASSWORD**: Choose a strong password for accessing the dashboard

## Step 8: Test the Setup

1. **Restart your development server** (important!):
   ```bash
   # Stop the server (Ctrl+C) and restart:
   pnpm dev
   ```

2. **Test form submission:**
   - Go to your contact page
   - Fill out and submit the form
   - Check your Google Sheet - you should see a new row appear!

3. **Test dashboard:**
   - Go to `http://localhost:3000/dashboard`
   - Enter your dashboard password
   - You should see all form submissions in a table

## Troubleshooting

### "Google Sheet ID not configured"
- Make sure `.env.local` file exists in the project root
- Check that all environment variables are set correctly
- **Restart your development server** after creating/updating `.env.local`

### "Unauthorized" error
- Make sure you shared the Google Sheet with the service account email
- Verify the service account has "Editor" permissions
- Double-check the email address matches exactly

### "Failed to submit form"
- Check that Google Sheets API is enabled in Google Cloud Console
- Verify the private key is correctly formatted with `\n` for newlines
- Make sure the private key includes the BEGIN/END lines

### Submissions not appearing
- Check browser console for errors (F12)
- Verify the Sheet ID is correct (just the ID, not the full URL)
- Make sure the sheet is shared with the service account
- Check that the service account email matches the one in your JSON file

## Security Reminders

⚠️ **IMPORTANT:**
- Never commit `.env.local` to Git (it's already in `.gitignore`)
- Keep your service account JSON file secure
- Don't share your dashboard password publicly
- The service account should only have access to the specific sheet you created

## Quick Reference

| What You Need | Where to Find It |
|--------------|------------------|
| **GOOGLE_SERVICE_ACCOUNT_EMAIL** | From the JSON key file → `client_email` field |
| **GOOGLE_PRIVATE_KEY** | From the JSON key file → `private_key` field |
| **GOOGLE_SHEET_ID** | From Google Sheet URL → between `/d/` and `/edit` |
| **DASHBOARD_PASSWORD** | Choose your own secure password |

## Need Help?

If you're stuck:
1. Check the browser console (F12) for error messages
2. Check your server terminal for error logs
3. Verify all environment variables are set correctly
4. Make sure you restarted the server after creating `.env.local`


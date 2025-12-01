# Microsoft 365 Email Setup Guide

This guide will help you set up email sending functionality using Microsoft 365 (Office 365) for the dashboard.

## Prerequisites

1. Microsoft 365 account with admin access
2. Access to Azure Portal (portal.azure.com)

## Step 1: Register Application in Azure AD

1. Go to [Azure Portal](https://portal.azure.com/)
2. Navigate to **Azure Active Directory** > **App registrations**
3. Click **"New registration"**
4. Fill in the details:
   - **Name**: `Kikiexprez Dashboard Email`
   - **Supported account types**: Choose based on your setup (usually "Accounts in this organizational directory only")
   - **Redirect URI**: Leave blank for now
5. Click **"Register"**
6. **Copy the Application (client) ID** - This is your `MICROSOFT_CLIENT_ID`
7. **Copy the Directory (tenant) ID** - This is your `MICROSOFT_TENANT_ID`

## Step 2: Create Client Secret

1. In your app registration, go to **"Certificates & secrets"**
2. Click **"New client secret"**
3. Add a description: `Dashboard Email Secret`
4. Choose expiration (recommended: 24 months)
5. Click **"Add"**
6. **IMPORTANT**: Copy the secret value immediately (you won't be able to see it again!)
   - This is your `MICROSOFT_CLIENT_SECRET`

## Step 3: Grant API Permissions

1. In your app registration, go to **"API permissions"**
2. Click **"Add a permission"**
3. Select **"Microsoft Graph"**
4. Choose **"Application permissions"**
5. Search for and add:
   - `Mail.Send` - Send mail as any user
   - `User.Read.All` - Read all users' full profiles (if needed)
6. Click **"Add permissions"**
7. Click **"Grant admin consent"** for your organization
   - This is required for the permissions to work

## Step 4: Configure Environment Variables

Add these to your `.env.local` file:

```env
# Microsoft 365 Email Configuration
MICROSOFT_CLIENT_ID=your-client-id-here
MICROSOFT_CLIENT_SECRET=your-client-secret-here
MICROSOFT_TENANT_ID=your-tenant-id-here
MICROSOFT_SENDER_EMAIL=info@kikiexprez.com
```

**Important Notes:**
- `MICROSOFT_SENDER_EMAIL` should be the email address you want to send emails from
- This email must exist in your Microsoft 365 tenant
- The app needs permission to send emails on behalf of this account

## Step 5: Grant Mailbox Permissions (Optional but Recommended)

If you want to send emails from a specific mailbox:

1. Go to **Microsoft 365 Admin Center** (admin.microsoft.com)
2. Navigate to **Users** > **Active users**
3. Find the user account for `info@kikiexprez.com`
4. Click on the user > **Mail** tab
5. Under **Email apps**, ensure the account is enabled

Alternatively, you can use Exchange Admin Center to grant application permissions to the mailbox.

## Step 6: Test the Setup

1. Restart your development server
2. Go to `/dashboard` and log in
3. Click "Reply" on any submission
4. Compose and send a test email
5. Check if the email is received

## Troubleshooting

### "Failed to acquire access token"
- Verify `MICROSOFT_CLIENT_ID`, `MICROSOFT_CLIENT_SECRET`, and `MICROSOFT_TENANT_ID` are correct
- Check that admin consent was granted for the API permissions
- Ensure the client secret hasn't expired

### "Failed to send email"
- Verify `MICROSOFT_SENDER_EMAIL` is correct and exists in your tenant
- Check that the app has `Mail.Send` permission
- Ensure admin consent was granted
- Verify the email address format is correct

### "Insufficient privileges"
- Make sure you granted admin consent in Step 3
- Check that all required permissions are added
- Verify the app registration is in the correct Azure AD tenant

### Email not appearing in sent items
- This is normal if sending via application permissions
- The email should still be delivered to the recipient
- Check the recipient's inbox and spam folder

## Alternative: Using SMTP (Simpler Setup)

If you prefer a simpler setup using SMTP instead of Microsoft Graph API, you can use SMTP with OAuth2. However, the current implementation uses Microsoft Graph API which is more secure and recommended for production.

## Security Notes

- Never commit `.env.local` to version control
- Keep your client secret secure
- Rotate client secrets regularly
- Use application permissions (not delegated) for server-to-server communication
- Consider using Azure Key Vault for production environments

## Production Considerations

For production:
1. Use Azure Key Vault to store secrets
2. Enable logging and monitoring
3. Set up alerts for failed email sends
4. Consider rate limiting
5. Use a dedicated service account for sending emails


# Quick Setup Checklist ✅

Follow these steps in order to get your dashboard working:

## ✅ Step 1: Google Cloud Console Setup
- [ ] Go to https://console.cloud.google.com/
- [ ] Create new project: "Kikiexprez Dashboard"
- [ ] Enable "Google Sheets API"

## ✅ Step 2: Create Service Account
- [ ] Go to: APIs & Services > Credentials
- [ ] Click: "CREATE CREDENTIALS" > "Service account"
- [ ] Name: `kikiexprez-dashboard`
- [ ] Click: "CREATE AND CONTINUE" > "DONE"

## ✅ Step 3: Download JSON Key
- [ ] Click on the service account you just created
- [ ] Go to "Keys" tab
- [ ] Click "ADD KEY" > "Create new key" > "JSON"
- [ ] **SAVE THE DOWNLOADED JSON FILE**

## ✅ Step 4: Get Credentials from JSON
Open the JSON file and copy:
- [ ] `client_email` → This is **GOOGLE_SERVICE_ACCOUNT_EMAIL**
- [ ] `private_key` → This is **GOOGLE_PRIVATE_KEY** (full key with BEGIN/END)

## ✅ Step 5: Create Google Sheet
- [ ] Go to https://sheets.google.com/
- [ ] Create new blank spreadsheet
- [ ] Name it: "Kikiexprez Form Submissions"
- [ ] Copy Sheet ID from URL:
  - URL: `https://docs.google.com/spreadsheets/d/1ABC123xyz/edit`
  - ID: `1ABC123xyz` → This is **GOOGLE_SHEET_ID**

## ✅ Step 6: Share Sheet
- [ ] Click "Share" button in Google Sheet
- [ ] Paste the service account email (from Step 4)
- [ ] Set permission to "Editor"
- [ ] Uncheck "Notify people"
- [ ] Click "Share"

## ✅ Step 7: Create .env.local File
Create `.env.local` in your project root with:

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-email@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYourKeyHere\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your-sheet-id-here
DASHBOARD_PASSWORD=YourPassword123!
```

**Important:** 
- Private key must be in quotes with `\n` for line breaks
- Include the full key with BEGIN/END lines

## ✅ Step 8: Restart Server
- [ ] Stop your dev server (Ctrl+C)
- [ ] Run: `pnpm dev`
- [ ] Test form submission
- [ ] Check Google Sheet for new row
- [ ] Visit `/dashboard` and login

## 🎉 Done!

Your dashboard should now be working!

---

**Need detailed instructions?** See `SETUP-GUIDE.md` for step-by-step screenshots and troubleshooting.


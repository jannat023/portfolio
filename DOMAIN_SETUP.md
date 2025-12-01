# 🌐 Domain Setup Guide: syedajannatulferdous.portfolio.com

## ✅ **100% FREE on Vercel!**

**Good news:** Vercel's custom domain feature is **completely FREE** on their free tier! 🎉

**What you need:**
- ✅ Vercel account (FREE)
- ✅ Domain already registered (you already have `portfolio.com`)
- ✅ DNS access to add records (FREE)

**Cost breakdown:**
- Vercel custom domain: **$0** (FREE)
- SSL certificate: **$0** (FREE, automatic)
- DNS setup: **$0** (FREE)
- Domain registration: Only if you don't already own it

---

## Step-by-Step Instructions (All FREE!)

### Step 1: Access Your DNS Provider

You need to access where `portfolio.com` is registered. Common providers:
- GoDaddy
- Namecheap
- Cloudflare
- Google Domains
- Route53 (AWS)
- Your web hosting provider

**Find your DNS provider:**
- Check your email for domain registration confirmation
- Or visit `portfolio.com` and check "Whois" information

---

### Step 2: Add TXT Record (For Verification)

1. Log into your DNS provider's dashboard
2. Go to **DNS Management** or **DNS Settings**
3. Find **"Add Record"** or **"Add DNS Record"**
4. Add this record:

```
Type: TXT
Name/Host: _vercel
Value: vc-domain-verify=syedajannatulferdous.portfolio.com,0588683b97a11ae36a5c
TTL: Auto (or 3600)
```

5. **Save** the record

**⏱️ Wait 5-60 minutes** for DNS propagation

6. Go back to Vercel and click **"Verify"** or **"Refresh"**

---

### Step 3: After Verification - Add CNAME Record

Once verification is complete:

1. Go back to your DNS provider
2. Add this CNAME record:

```
Type: CNAME
Name/Host: syedajannatulferdous
Value/Target: 3402dedf8bb095f9.vercel-dns-017.com.
TTL: Auto (or 3600)
```

⚠️ **Important:** 
- The value MUST end with a dot (`.`)
- The name is just `syedajannatulferdous` (not the full domain)

3. **Save** the record

---

### Step 4: Wait for DNS Propagation

- ⏱️ **DNS propagation:** 5-60 minutes (sometimes up to 24 hours)
- ✅ Vercel will automatically detect when DNS is ready
- ✅ Your site will be live at: `https://syedajannatulferdous.portfolio.com`

---

## Common DNS Providers Instructions

### GoDaddy
1. Go to [GoDaddy.com](https://godaddy.com) → My Products → DNS
2. Click "Add" under Records
3. Follow Step 2 and 3 above

### Cloudflare
1. Go to Cloudflare Dashboard
2. Select your domain
3. Go to **DNS** → **Records**
4. Click **"Add record"**
5. Follow Step 2 and 3 above

### Namecheap
1. Go to [Namecheap.com](https://namecheap.com) → Domain List → Manage
2. Go to **Advanced DNS** tab
3. Click **"Add New Record"**
4. Follow Step 2 and 3 above

---

## Troubleshooting

### "Domain still not verified"
- Wait longer (up to 60 minutes)
- Make sure TXT record name is exactly `_vercel`
- Make sure value includes the full string with comma

### "DNS records not working"
- Ensure CNAME value ends with `.` (dot)
- Check that name is `syedajannatulferdous` (not full domain)
- Wait for DNS propagation

### "Domain linked to another account"
- You MUST add the TXT record first to verify ownership
- Once verified, you can proceed with CNAME

---

## Current Records to Add

### Record 1 (Verification - Do First):
```
Type: TXT
Name: _vercel
Value: vc-domain-verify=syedajannatulferdous.portfolio.com,0588683b97a11ae36a5c
```

### Record 2 (Production - Add After Verification):
```
Type: CNAME
Name: syedajannatulferdous
Value: 3402dedf8bb095f9.vercel-dns-017.com.
```

---

## Success!

Once both records are added and propagated:
✅ Your site will be live at: `https://syedajannatulferdous.portfolio.com`
✅ HTTPS certificate is automatically configured
✅ Your portfolio is accessible worldwide!


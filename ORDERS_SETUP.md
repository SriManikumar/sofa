# Order Management Setup Guide

## What's Installed

✅ **Admin Dashboard**: Access at `/admin` with password `1234`
✅ **Email Ready**: Configured to send notifications  
✅ **Order Storage**: Ready to connect to Supabase

## Step 1: Set Admin Password

Add this to your Netlify environment variables:

**Netlify Dashboard → Site Settings → Build & Deploy → Environment**

```
NEXT_PUBLIC_ADMIN_PASSWORD=1234
```

(Change `1234` to a secure password)

## Step 2: Set Up Email Notifications

### Option A: Resend (Recommended - Easiest)

1. Go to https://resend.com
2. Sign up for free
3. Create an API key
4. Add to Netlify environment variables:

```
RESEND_API_KEY=re_xxxxxxxxxxxxx
BUSINESS_EMAIL=gdurga18@gmail.com
```

### Option B: SendGrid

1. Go to https://sendgrid.com
2. Sign up for free
3. Create an API key
4. Add to Netlify environment variables:

```
SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
BUSINESS_EMAIL=gdurga18@gmail.com
```

## Step 3: Set Up Database (Supabase)

### Why?
Orders are currently stored in Netlify Function logs, which get cleared. For permanent storage, use a database.

### Setup Supabase

1. Go to https://supabase.com
2. Sign up (free tier available)
3. Create a new project
4. Create a table called `orders` with these columns:

```sql
CREATE TABLE orders (
  id BIGINT PRIMARY KEY,
  timestamp TEXT,
  status TEXT,
  name TEXT,
  email TEXT,
  phone TEXT,
  orderType TEXT,
  reclinerType TEXT,
  quantity TEXT,
  dimensions TEXT,
  fabric TEXT,
  delivery TEXT,
  message TEXT
);
```

5. Get your credentials:
   - Project URL (Settings → API)
   - Anon Key (Settings → API)

6. Add to Netlify environment variables:

```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=eyJhbGc...
```

## Step 4: Access Your Admin Dashboard

1. **Deployed site**: https://sreereclinersandsofas.netlify.app/admin
2. **Enter password**: `1234` (or your custom password)
3. **View orders** as they come in

## Step 5: Configure Email Responses

Once you receive an order, you can:
- ✅ Click the order to see full details
- ✅ Change status: Pending → Quoted → Completed
- ✅ Contact customer within 24 hours

## Environment Variables Summary

For Netlify:

```
NEXT_PUBLIC_ADMIN_PASSWORD=1234
BUSINESS_EMAIL=gdurga18@gmail.com
RESEND_API_KEY=re_xxxxxxxxxxxxx
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=eyJhbGc...
```

## Testing

1. Go to https://sreereclinersandsofas.netlify.app/contact
2. Fill out and submit the form
3. Go to `/admin` and log in
4. Order should appear after a few seconds
5. You'll receive an email notification

## Troubleshooting

**Orders not appearing?**
- Check Netlify Functions logs: Deployments → View Deploy Log → Functions
- Make sure environment variables are set

**Email not sending?**
- Verify API key is correct
- Check the email hasn't gone to spam

**Can't log in?**
- Password is `1234` by default
- Check `NEXT_PUBLIC_ADMIN_PASSWORD` env variable

## Next Features (Optional)

- [ ] SMS notifications to your phone
- [ ] Automatic quote template emails
- [ ] Customer portal to track order status
- [ ] Integration with accounting software

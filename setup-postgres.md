# Vercel Postgres Setup Guide

## 1. Create Vercel Postgres Database

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Click on your project (focus-researcher)
3. Go to the "Storage" tab
4. Click "Create Database"
5. Select "Postgres"
6. Choose a name (e.g., "focus-researcher-db")
7. Select a region (choose one close to you)
8. Click "Create"

## 2. Get Database Connection Details

After creating the database, Vercel will show you:
- **Database URL** (starts with `postgresql://`)
- **Database name**
- **Username**
- **Password**

## 3. Update Environment Variables

### For Local Development (.env.local):
```
OPENAI_API_KEY='your-openai-api-key'
DATABASE_URL="postgresql://username:password@host:port/database"
```

### For Vercel Production:
1. Go to your Vercel project settings
2. Go to "Environment Variables" tab
3. Add:
   - `DATABASE_URL` = your PostgreSQL connection string
   - `OPENAI_API_KEY` = your OpenAI API key

## 4. Run Database Migrations

After updating the DATABASE_URL, run:
```bash
npx prisma db push
```

## 5. Deploy to Vercel

The database will be automatically set up when you deploy!

## Troubleshooting

- If you get connection errors, make sure the DATABASE_URL is correct
- If tables don't exist, run `npx prisma db push` locally first
- Check Vercel function logs for any database errors

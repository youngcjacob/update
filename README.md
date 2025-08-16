This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Prerequisites

1. **OpenAI API Key**: You'll need an OpenAI API key to use the GPT functionality. Get one from [OpenAI's platform](https://platform.openai.com/api-keys).

2. **Environment Setup**: Create a `.env.local` file in the root directory with your OpenAI API key:
   ```
   OPENAI_API_KEY=your_actual_openai_api_key_here
   DATABASE_URL="file:./dev.db"
   ```

### Running the Application

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- **GPT Integration**: Click "Add" to ask GPT about any variable, concept, or topic. The system will automatically cluster related queries and generate research reports.
- **Automatic Clustering**: Similar thoughts and GPT queries are automatically grouped together.
- **Research Generation**: The system can generate research notes and reports for each cluster.
- **Delete Functionality**: Delete individual thoughts, research notes, reports, or entire clusters with confirmation dialogs.

## Usage

1. Enter a variable name, concept, or topic in the input field
2. Click "Add" to ask GPT about it
3. The response will be stored and clustered with similar queries
4. Use the "Research" and "Generate report" buttons to explore each cluster further
5. Delete unwanted content:
   - Hover over individual thoughts to see a "Delete" button
   - Click "Delete cluster" to remove an entire cluster and all its content
   - Delete individual research notes and reports using their respective delete buttons

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

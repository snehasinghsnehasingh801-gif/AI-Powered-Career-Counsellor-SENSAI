Team Name**THE SENSAI SCHOLORS**
# AI-Powered-Career-Counsellor-SENSAI
" SENSAI is a AI Career Coach that helps user take their careers to the next level. It includes an AI Resume Builder , AI Powered mock interview preparation with role-specific feedback , Automated industry trends updated weekly via background jobs &amp; AI generated cover letter ."

🌟**Key Features**

AI Resume Builder: Create ATS-friendly resumes & optimize content in real-time using Gemini AI. AI Mock Interviews: Practice interviews tailored to your specific role and recieve detailed feedback for improvement. Real-time Industry Insights: Monitor market trends,salary date and growth outlooks updated weekly. Intelligent Cover Letters: Generate professionals ,tailored cover letters based on specific job descriptions. Automated Market Tracking: Keeps all data synced and relevant using Inngest and Cron jobs.

 🛠️**Tech Stack--**
 
Frontend: Next.js 15 (App Router), Tailwind CSS, Shadcn UI Backend: Next.js Server Actions, Inngest (Background Jobs) AI Engine: Google Gemini API Database: PostgreSQL (Neon DB) with Prisma ORM Authentication:Clerk Auth State Management: React Hook Form & Zod

🚀**Getting Started--**

**Prerequisites--**

**-** Node.js 18+ installed
**-** Clerk Account (for Auth)
**-** Neon DB Account (for Database)
**-**Google AI Studio Key (for Gemini API)

**Installation Steps--**

**1.Clone the Repository:** bash git clone [https://github.com/snehasinghsnehasingh801-gif/AI-Powered-Career-Counsellor-SENSAI] cd AI-Powered-Career-Counselor-SENSAI  **2.Install Dependencies:** bash npm install  3.Setup Environment Variables:Create a .env file and add your credentials. env
DATABASE_URL=your_postgresql_url NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key CLERK_SECRET_KEY=your_key GEMINI_API_KEY=your_gemini_key  **4.Database Migration:** bash npx prisma generate npx prisma migrate dev  **5.Run Locally:** bash npm run dev 

📜**License--**

Ye project MIT License ke tahat licensed hai.

👥 **Contributors--**

Sneha Singh
Nigam Chaurasiya
Sadhana Maurya

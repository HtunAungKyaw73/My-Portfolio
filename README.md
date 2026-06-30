# Htun Aung Kyaw — Personal Portfolio Website

A sleek, modern, and minimalist single-page developer portfolio website built using Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4.

This website showcases my background as a fullstack developer, my core tech stack, key projects, and professional experience, and features a functional contact form powered by Next.js Server Actions.

---

## 🚀 Tech Stack

### Frontend
- **Framework**: Next.js 16 (App Router) & React 19
- **Languages**: TypeScript, JavaScript
- **Styling**: Tailwind CSS v4, postcss
- **UI Components**: Shadcn/ui (New York style), Lucide React Icons
- **State Management & Fetching**: Redux / RTK Query, Zustand, TanStack Query, Axios
- **Markup/Style**: HTML5, CSS3, Material UI

### Backend & Databases
- **Runtime**: Node.js & Express.js
- **Databases**: PostgreSQL (Prisma ORM, Neon DB), MongoDB (Mongoose)
- **APIs**: REST APIs, GraphQL, Server Actions

### Languages & Paradigms
- C++, Python, Object-Oriented Programming (OOP), Functional Programming

---

## 📂 Project Structure

```text
├── app/
│   ├── action.ts          # Server Action for SMTP Nodemailer contact form
│   ├── globals.css        # Tailwind v4 theme and design tokens
│   ├── layout.tsx         # Root layout (handles theme & Geist fonts injection)
│   ├── page.tsx           # Entry point rendering all sections in order
│   └── theme-provider.tsx # Theme context provider wrapping next-themes
├── components/
│   ├── ui/                # Generated Shadcn UI primitives
│   ├── about.tsx          # About me highlights card section
│   ├── contact.tsx        # Contact form with validation (Zod + React Hook Form)
│   ├── experience.tsx     # Career timeline (ISP-Myanmar, LPE Center) & Education
│   ├── footer.tsx         # Footer with copyright and social links
│   ├── header.tsx         # Navigation header and dark/light mode toggle
│   ├── hero.tsx           # Intro section with dynamic text and social buttons
│   ├── projects.tsx       # Showcases featured applications and repository links
│   └── skills.tsx         # Tech stack display with brand SVG icons
├── hooks/                 # React hooks folder (e.g. use-toast, use-mobile)
├── lib/
│   ├── skills-data.ts     # Config files holding SVG path data and brand colors
│   └── utils.ts           # Tailwind ClassName merge utility (`cn`)
├── package.json           # Project dependencies & scripts
├── pnpm-lock.yaml         # Pnpm lockfile
└── tsconfig.json          # TypeScript configurations
```

---

## 🛠️ Main Features

1. **Single-Page Architecture**: High performance, responsive layout that seamlessly transitions between sections (`Header → Hero → About → Skills → Projects → Experience → Contact → Footer`).
2. **Server-Side Action Emailing**: The contact form sends notifications to my personal email using **Nodemailer** over SMTP via Gmail.
3. **Dark / Light Mode**: Easily toggle styles with `next-themes` and a custom-designed theme switch.
4. **Clean Component Architecture**: Decoupled layout sections written in TypeScript using Shadcn/ui primitives.

---

## 💻 Getting Started

### Prerequisites
Make sure you have **Node.js** (v18+) and **pnpm** installed on your system.

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/HtunAungKyaw73/My-Portfolio.git
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root of the project and add your SMTP credentials:
   ```env
   EMAIL_USER=your-gmail-address@gmail.com
   EMAIL_PASS=your-gmail-app-password
   ```

### Scripts

- **Run local development server**:
  ```bash
  pnpm dev
  ```
- **Build the application for production**:
  ```bash
  pnpm build
  ```
- **Start the production server**:
  ```bash
  pnpm start
  ```
- **Lint code using ESLint**:
  ```bash
  pnpm lint
  ```

---

## 👤 Author

**Htun Aung Kyaw**
- **Live Portfolio**: [portfolio.htunaungkyaw.online](https://portfolio.htunaungkyaw.online/)
- **Github**: [@HtunAungKyaw73](https://github.com/HtunAungKyaw73)
- **LinkedIn**: [Htun Aung Kyaw](https://www.linkedin.com/in/htun-aung-kyaw-385285352/)
- **CMS Blog (Articles)**: [articles.htunaungkyaw.online](https://articles.htunaungkyaw.online/)

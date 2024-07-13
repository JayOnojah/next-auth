# NextJS Authentication Service (AuthJS)

<div align="center">
  <br />
    <a href="https://next-auth.onojah.com/" target="_blank">
      <img src="https://i.imgur.com/nxuxotf.png" alt="Next Auth Overview">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Next_._JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>
  <h3 align="center">A Complete NextJS Authentication Service (AuthJS) by Jeremiah</h3>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack & Tools](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## <a name="introduction">🤖 Introduction</a>

An authentication toolkit using the newest Next Auth v5 (Auth.js). Covering Two Factor Authentication (2FA), Forgot Password functionality, Email Verification functionality, Credential Login, OAuth (Google & Github) Login and much more.

## <a name="tech-stack">⚙️ Tech Stack & Tools</a>

- Next JS
- TypeScript
- Shadcn/ui
- Tailwind CSS
- PostgreSQL
- Prisma ORM
- OAuth Provider
- Resend Emailing

Application Link: [https://next-auth.onojah.com/](https://next-auth.onojah.com/)

## <a name="features">🔋 Key Features</a>

- 🔐 Next-auth v5 (Auth.js)
- 🚀 Next.js 14 with server actions
- 🔑 Credentials Provider
- 🌐 OAuth Provider (Social login with Google & GitHub)
- 🔒 Forgot password functionality
- ✉️ Email verification
- 📱 Two factor verification (2FA)
- 👥 User roles (Admin & User)
- 🔓 Login component (Opens in redirect or modal)
- 📝 Register component
- 🤔 Forgot password component
- ✅ Verification component
- ⚠️ Error component
- 🔘 Login button
- 🚪 Logout button
- 🚧 Role Gate
- 🔍 Exploring next.js middleware
- 📈 Extending & Exploring next-auth session
- 🔄 Exploring next-auth callbacks
- 👤 useCurrentUser hook
- 🛂 useRole hook
- 🧑 currentUser utility
- 👮 currentRole utility
- 🖥️ Example with server component
- 💻 Example with client component
- 👑 Render content for admins using RoleGate component
- 🛡️ Protect API Routes for admins only
- 🔐 Protect Server Actions for admins only
- 📧 Change email with new verification in Settings page
- 🔑 Change password with old password confirmation in Settings page
- 🔔 Enable/disable two-factor auth in Settings page
- 🔄 Change user role in Settings page (for development purposes only)

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/JayOnojah/next-auth.git
cd next-auth
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
DATABASE_URL=

AUTH_SECRET=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

RESEND_API_KEY=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

Replace the placeholder values with your actual PostgreSQL Database (connection string), Google Client ID, GitHub Client ID and Resend Emailing creadentials. You can obtain these credentials by signing up on the [Neon - Serverless PostgreSQL Platform](https://neon.tech/), [Google Console](https://console.cloud.google.com/), [GitHub](https://github.com) and [Resend Emailing](https://resend.com/) websites.

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

# Mohammed Muqthadir Ahmed | Portfolio

A modern, full-stack developer portfolio built with **Next.js, React, Tailwind CSS, MongoDB, Mongoose, and JWT authentication**.

The project includes a public-facing portfolio website and a protected admin dashboard that allows portfolio content to be managed dynamically without modifying the frontend code.

## 🌐 Live Demo

**Portfolio:**  
https://nextjs-portfolio-gamma-azure.vercel.app

---

## ✨ Features

### Public Portfolio

- Responsive developer portfolio
- Modern dark-themed UI
- Smooth section navigation
- Home / Hero section
- About section
- Experience section
- Education section
- Projects section
- Contact section
- Responsive mobile navigation
- Custom favicon and metadata
- Optimized Next.js application structure

### Admin Dashboard

A protected CMS-style dashboard for managing portfolio content.

- Admin authentication
- Login / signup
- JWT-based authentication
- HTTP-only authentication cookies
- Protected `/admin` routes
- Manage Home content
- Manage About content
- Manage Education content
- Manage Experience content
- Manage Projects
- Manage Contact submissions
- MongoDB-backed data management

### Backend

- REST API routes using Next.js App Router
- MongoDB database integration
- Mongoose models
- Authentication and authorization
- Protected admin operations
- Server-side data handling
- Environment-based configuration

---

## 🛠️ Tech Stack

### Frontend

- Next.js
- React
- JavaScript (ES6+)
- Tailwind CSS
- Framer Motion
- React Icons
- HTML5
- CSS3

### Backend

- Next.js API Routes
- Node.js
- REST APIs
- Mongoose
- MongoDB

### Authentication

- JWT
- HTTP-only cookies
- Protected routes
- Middleware / Proxy-based route protection

### Tools & Deployment

- Git
- GitHub
- VS Code
- Vercel
- MongoDB Atlas

---

## 📁 Project Structure

```text
nextjs-portfolio/
│
├── public/
│   ├── logo.png
│   └── ...
│
├── src/
│   │
│   ├── app/
│   │   ├── admin/
│   │   │   └── page.jsx
│   │   │
│   │   ├── api/
│   │   │   ├── about/
│   │   │   ├── auth/
│   │   │   ├── contact/
│   │   │   ├── education/
│   │   │   ├── experience/
│   │   │   ├── home/
│   │   │   └── project/
│   │   │
│   │   ├── auth/
│   │   │   └── page.jsx
│   │   │
│   │   ├── icon.png
│   │   ├── layout.js
│   │   ├── page.js
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── admin-view/
│   │   └── client-view/
│   │
│   ├── database/
│   │
│   ├── lib/
│   │   └── auth.js
│   │
│   ├── models/
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Education.js
│   │   ├── Experience.js
│   │   ├── Home.js
│   │   ├── Project.js
│   │   └── User.js
│   │
│   ├── services/
│   │
│   └── proxy.js
│
├── .env.local
├── .gitignore
├── next.config.mjs
├── package.json
└── README.md
```

---

## 🔐 Authentication Flow

The admin section uses JWT-based authentication.

```text
User
 │
 ▼
Login
 │
 ▼
/api/auth/login
 │
 ▼
Credentials verified
 │
 ▼
JWT generated
 │
 ▼
HTTP-only cookie
 │
 ▼
/admin
 │
 ▼
Protected by proxy/auth verification
```

Unauthenticated users attempting to access the admin dashboard are redirected to the authentication page.

---

## 🗄️ Database

The application uses **MongoDB** with **Mongoose** for data persistence.

Portfolio data is organized into separate collections/models:

```text
Home
About
Education
Experience
Project
Contact
User
```

The admin dashboard communicates with the backend through REST API routes, while the API layer handles database operations.

---

## 🔌 API Routes

### Authentication

```text
POST /api/auth/login
POST /api/auth/signup
POST /api/auth/logout
```

### Portfolio Data

```text
GET  /api/home/get
POST /api/home/add

GET  /api/about/get
POST /api/about/add

GET  /api/education/get
POST /api/education/add

GET  /api/experience/get
POST /api/experience/add

GET  /api/project/get
POST /api/project/add

GET  /api/contact/get
POST /api/contact/add
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mohammedmuqtadir41-cmyk/nextjs-portfolio.git
```

### 2. Navigate into the project

```bash
cd nextjs-portfolio
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
mongoURL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

> Never commit `.env.local` or expose database credentials and JWT secrets publicly.

### 5. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🏗️ Production Build

To test the production build locally:

```bash
npm run build
```

Then:

```bash
npm start
```

---

## 🚀 Deployment

The project is deployed using **Vercel**.

Production deployment:

```bash
npx vercel --prod
```

Environment variables must be configured in Vercel before deployment:

```text
NEXT_PUBLIC_BASE_URL
mongoURL
JWT_SECRET
```

---

## 🎨 Design

The portfolio uses a modern dark visual system with:

- Minimal layouts
- Emerald accent colors
- Glassmorphism elements
- Responsive navigation
- Motion-based interactions
- Mobile-first responsive styling
- Reusable React components

The admin dashboard uses a dedicated dark CMS-style interface to separate content management from the public portfolio experience.

---

## 📱 Responsive Design

The portfolio is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile

The navigation switches to a mobile-friendly bottom navigation interface on smaller screens.

---

## 🔒 Security Considerations

The project uses:

- JWT authentication
- HTTP-only cookies
- Protected admin routes
- Environment variables for secrets
- Server-side authentication verification

Sensitive values such as:

```text
mongoURL
JWT_SECRET
```

should never be committed to GitHub.

---

## 📌 Future Improvements

Potential improvements include:

- Admin edit/delete functionality for all content types
- Image upload management
- Contact email notifications
- Admin analytics
- Form validation improvements
- Rate limiting for public API endpoints
- Improved error handling and loading states
- Automated testing
- Custom domain

---

## 👨‍💻 Author

### Mohammed Muqthadir Ahmed

Final-year B.Tech Computer Science & Engineering student and full-stack developer focused on building modern web applications using React, Next.js, Node.js, Express.js, and MongoDB.

**GitHub:**  
https://github.com/mohammedmuqtadir41-cmyk

**Portfolio:**  
https://nextjs-portfolio-gamma-azure.vercel.app

---

## 📄 License

This project is intended for personal portfolio and educational purposes.

# Base URL

NEXT_PUBLIC_BASE_URL=http://localhost:3000

# MongoDB

mongoURL=your_mongodb_connection_string

# JWT

JWT_SECRET=your_jwt_secret

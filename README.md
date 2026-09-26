# Moltivay Solutions — Full-Stack Web & Mobile App Development Agency

A modern, production-ready full-stack website for **Moltivay Solutions**, an engineering agency specializing in high-performance Web Applications, iOS & Android Mobile Apps, UI/UX Design, and autonomous Social Media Assistant systems.

Inspired by the design aesthetics of **Cleveroad.com** (clean, modern, white + navy + electric blue palette, generous whitespace, bold typography, and smooth micro-animations).

---

## 🌟 Tech Stack

### Frontend (`frontend/`)
- **Core**: React 18 + Vite + React Router DOM v6
- **Styling**: Tailwind CSS (customized with `#0A1628` navy, `#0066FF` electric blue, `#FF6B35` accent)
- **Animations**: Framer Motion (smooth scroll reveals, interactive micro-interactions)
- **Icons**: Lucide React
- **Typography**: Poppins (headings) & Inter (body)

### Backend (`backend/`)
- **Runtime**: Node.js (ES Modules)
- **Framework**: Express.js
- **Database**: MongoDB via Mongoose ORM
- **Email Service**: Brevo (Sendinblue) Transactional REST API v3
- **Security & Config**: Dotenv, CORS enabled

---

## 📂 Project Structure

```text
moltivay-solutions/
├── frontend/                        # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx           # Sticky navbar with shadow on scroll & mobile menu
│   │   │   ├── Hero.jsx             # Headline, CTAs, interactive app architecture preview
│   │   │   ├── TrustBar.jsx         # Grayscale client logos & social proof
│   │   │   ├── Services.jsx         # 6 services grid with Social Media Assistant ⭐
│   │   │   ├── Portfolio.jsx        # Featured project case study cards
│   │   │   ├── CEO.jsx              # Engr. Ghulam Ahmed quote & photo section
│   │   │   ├── Process.jsx          # Discovery → Design → Development → Testing → Launch
│   │   │   ├── Testimonials.jsx     # Verified client reviews & ratings
│   │   │   ├── ContactForm.jsx      # Brevo integrated form with loading & toasts
│   │   │   └── Footer.jsx           # Dark navy footer, quick links, copyright
│   │   ├── pages/
│   │   │   ├── Home.jsx             # Main landing page
│   │   │   ├── Services.jsx         # Detailed capabilities, deliverables & tech stacks
│   │   │   ├── Portfolio.jsx        # Filterable project gallery (Web / Mobile / Social)
│   │   │   ├── About.jsx            # Story, mission, vision, CEO profile, values
│   │   │   └── Contact.jsx          # Brevo contact form, map placeholder & details
│   │   ├── App.jsx                  # React Router configuration & scroll management
│   │   ├── main.jsx                 # Entry point
│   │   └── index.css                # Custom scrollbars, Tailwind directives & utilities
│   ├── public/
│   │   ├── logo.svg                 # Vector brand mark & typography
│   │   ├── ceo-photo.jpg            # Professional portrait of Engr. Ghulam Ahmed
│   │   └── projects/                # UI mockups (fintech.jpg, mobile-health.jpg, social-assistant.jpg)
│   ├── tailwind.config.js           # Brand design tokens (navy, electric, accent)
│   ├── postcss.config.js
│   ├── vite.config.js               # Dev server & /api proxy to port 5000
│   └── package.json
│
├── backend/                         # Node.js Express backend
│   ├── models/
│   │   └── Contact.js               # Mongoose schema (name, email, subject, message)
│   ├── routes/
│   │   └── contact.js               # POST /api/contact & GET /api/contact/health
│   ├── services/
│   │   └── brevoService.js          # Brevo REST API v3 transactional email service
│   ├── .env                         # Server environment configuration
│   ├── .env.example                 # Config template
│   ├── server.js                    # Express application entry point
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

Follow these steps to run both backend and frontend locally:

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher (v24.x recommended)
- **MongoDB**: Local MongoDB instance (`mongodb://localhost:27017`) or free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cloud cluster.
- **Brevo Account**: Free account on [Brevo (Sendinblue)](https://www.brevo.com/) for transactional email dispatch.

---

### 2. Backend Setup (`backend/`)

1. Open your terminal and navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables in `backend/.env`:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/moltivay
   BREVO_API_KEY=xkeysib-your_brevo_api_key_here
   ADMIN_EMAIL=your@email.com
   SENDER_EMAIL=noreply@moltivay.com
   ```
   *(Note: If `BREVO_API_KEY` contains `xxxxxxxx` or is empty during local testing, the server logs a development simulation warning and proceeds gracefully without throwing.)*

4. Start the backend development server:
   ```bash
   npm run dev
   # or
   npm start
   ```
   Backend will run on **`http://localhost:5000`**.

---

### 3. Frontend Setup (`frontend/`)

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite React development server:
   ```bash
   npm run dev
   ```
   Frontend will launch at **`http://localhost:5173`**.

---

## 💼 Core Features & Architecture

### 1. Clean Cleveroad Design System
- **Colors**:
  - `navy`: `#0A1628` (Primary corporate background and strong headlines)
  - `electric`: `#0066FF` (High-contrast CTAs and interactive highlights)
  - `accent`: `#FF6B35` (Featured badges and callout accents)
  - `bg`: `#FFFFFF` (Whitespace-heavy layouts with subtle grid textures)
  - `text-dark`: `#1A1A2E`
  - `text-muted`: `#6B7280`
- **Typography**: Google Fonts `Poppins` (Bold, modern headings) + `Inter` (Legible body text).
- **Zero Certifications/Awards**: Strictly adheres to requirement omitting generic certifications and awards sections.

### 2. Specialized Services
1. **Web App Development**: High-performance React & Node.js cloud applications.
2. **Mobile App Development (iOS + Android)**: Native & cross-platform React Native / Flutter apps.
3. **UI/UX Design**: Human-centered Figma wireframes, clickable prototypes, and design systems.
4. **Social Media Assistant ⭐**: AI-augmented automated content generation, calendar scheduling, and engagement workflows.
5. **QA & Testing**: Automated end-to-end testing, regression suites, and load benchmarking.
6. **Maintenance & Support**: 24/7 proactive monitoring, security updates, and SLA uptime.

### 3. CEO & Founder Profile
- **Leader**: **Engr. Ghulam Ahmed**
- **Title**: CEO & Founder
- **Photo**: Accessible at `frontend/public/ceo-photo.jpg`
- **Quote**: *"We build world-class digital products for startups and enterprises."*

### 4. Interactive Portfolio
- Filterable case studies (`All`, `Web`, `Mobile`, `Social Media Assistant`).
- Mockup assets saved under `frontend/public/projects/`:
  - `fintech.jpg`: PaySphere Fintech SaaS
  - `mobile-health.jpg`: VitalPulse Telehealth iOS/Android App
  - `social-assistant.jpg`: SocialSync AI Autonomous Social Media Assistant

### 5. Brevo Email & Contact Form Integration
- Frontend posts to `http://localhost:5000/api/contact` (or relative `/api/contact` proxied via Vite).
- Form performs validation for Name, Email, and Message.
- Persists inquiry to MongoDB `Contact` model.
- Dispatches transactional HTML notification to `ADMIN_EMAIL` using Brevo REST API endpoint `POST https://api.brevo.com/v3/smtp/email` with `api-key` authentication.
- Returns JSON response with user-friendly confirmation toast and resets the form.

---

## 🔒 Production Build & Deployment

To generate an optimized production bundle of the frontend:
```bash
cd frontend
npm run build
```
Production assets are generated in `frontend/dist/`.

To run the production Node.js backend:
```bash
cd backend
npm start
```

---

## 📄 License
© 2026 **Moltivay Solutions**. All rights reserved.
#   M o l t i v a y - S o l u t i o n s  
 
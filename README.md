# HireMeet 🚀

A full-stack technical interview platform that enables interviewers and candidates to collaborate in real time through video calls, live chat, and an online code editor with code execution.

Built with modern web technologies including React, Node.js, Express, MongoDB, Clerk Authentication, Stream, Inngest, and the Piston API.

---

## 🌐 Live Demo

**Frontend:** https://hire-meet-eight.vercel.app

**Backend API:** https://your-render-url.onrender.com

---

## ✨ Features

### Authentication
- Secure authentication using Clerk
- Sign Up / Sign In
- Protected routes
- User profile synchronization

### Dashboard
- View all coding interview sessions
- Create new interview sessions
- Join existing sessions

### Coding Environment
- Online code editor
- Multiple programming language support
- Real-time code execution using Piston API
- Output panel for execution results

### Video Calling
- One-to-one video interviews
- Audio & video controls
- Screen sharing (if supported by Stream)

### Real-Time Chat
- Instant messaging during interviews
- Powered by Stream Chat

### Problem Library
- Browse coding problems
- Open individual problem pages
- Practice while interviewing

### User Synchronization
- Automatic Clerk user synchronization
- Background jobs using Inngest
- MongoDB user creation/deletion
- Stream user synchronization

### Security
- Helmet middleware
- Express Rate Limiting
- CORS protection
- Clerk authentication middleware

---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- React Router
- Tailwind CSS
- DaisyUI
- TanStack Query
- Clerk React SDK

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Clerk Express SDK
- Inngest
- Stream Chat
- Stream Video
- Helmet
- Express Rate Limit

## External Services

- Clerk Authentication
- Stream Chat
- Stream Video
- Inngest
- Piston API
- MongoDB Atlas

## Deployment

Frontend:
- Vercel

Backend:
- Render

Database:
- MongoDB Atlas

---

# 📁 Project Structure

```
HireMeet
│
├── frontend
│   ├── components
│   ├── hooks
│   ├── pages
│   ├── services
│   └── App.jsx
│
├── backend
│   ├── lib
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── controllers
│   └── server.js
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/your-username/HireMeet.git

cd HireMeet
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## Backend

```bash
cd backend

npm install

npm run dev
```

---

# 🔑 Environment Variables

## Frontend (.env)

```env
VITE_CLERK_PUBLISHABLE_KEY=

VITE_API_URL=

VITE_STREAM_API_KEY=
```

---

## Backend (.env)

```env
PORT=

MONGO_URI=

CLIENT_URL=

CLERK_SECRET_KEY=

CLERK_WEBHOOK_SECRET=

STREAM_API_KEY=

STREAM_API_SECRET=

INNGEST_EVENT_KEY=

INNGEST_SIGNING_KEY=
```

---

# 🔄 Application Flow

```
User
   │
   ▼
React Frontend
   │
   ▼
Express Backend
   │
   ├──────────────► MongoDB
   │
   ├──────────────► Clerk
   │
   ├──────────────► Stream Chat
   │
   ├──────────────► Stream Video
   │
   ├──────────────► Inngest
   │
   └──────────────► Piston API
```

---

# 🔐 Security

- Helmet
- Express Rate Limit
- CORS
- Clerk Authentication
- Protected Backend Routes

---

# 📸 Screenshots

## Home Page

<img width="1871" height="867" alt="image" src="https://github.com/user-attachments/assets/f4ae3f96-facb-4f1b-bb56-a86c3a973922" />


---

## Dashboard

<img width="1885" height="872" alt="image" src="https://github.com/user-attachments/assets/fa96c861-1ebe-44c2-ab8e-7202cbf3aec8" />


---

## Coding Interview Session

<img width="1888" height="863" alt="image" src="https://github.com/user-attachments/assets/cc135347-dfef-473b-992e-0ddaecc49258" />


---



# 🚀 Future Improvements

- Group interview sessions
- Whiteboard collaboration
- Interview recording
- AI-powered interview feedback
- Code playback
- Email notifications
- Session scheduling
- Interview analytics

---

# 👨‍💻 Author

**Om Kachhadiya**

LinkedIn:
https://www.linkedin.com/in/om-kachhadiya-2824a328b

GitHub:
https://github.com/OmKachhadiya12

---

# ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!

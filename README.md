# 🧑‍💼 Mployee - Job Listing Platform

Mployee is a full-stack job listing web application where users can explore job openings from various industries, locations, and companies. The project uses **Next.js** for the frontend and **Node.js + Express + MongoDB Atlas** for the backend.

---

## 🔗 Live Links

- 🌐 Frontend: [https://mployee-jobs.vercel.app](https://mployee-jobs.vercel.app/)
- ⚙️ Backend API: [https://mployee-jobs.onrender.com](https://mployee-jobs.onrender.com)

---

## 📂 Project Structure
```
mployee/
├── backend/
│   ├── controllers/
│   ├── models/
│   │   └── Job.ts
│   ├── routes/
│   │   └── jobRoutes.ts
│   ├── types/
│   │   └── job.ts
│   ├── config/
│   ├── .env
│   ├── index.ts
│   ├── package.json
│   ├── package-lock.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── JobDetail.tsx
│   │   │   └── JobList.tsx
│   │   ├── lib/
│   │   │   └── api.ts
│   │   ├── pages/
│   │   └── types/
│   │       └── job.ts
│   ├── public/
│   │   └── logo.ico
│   └── package.json
│
└── README.md
```

---

## 🛠️ Features

- ✅ Job listing fetched from backend API
- 🔍 Filter jobs by location
- 📄 Detailed job descriptions
- 💡 Clean UI with Tailwind CSS
- 🌐 Fully deployed frontend-backend integration

---

---

## 🚀 Technologies Used

### Frontend:
- Next
- React
- TypeScript
- Tailwind CSS
- Vercel (Deployment)

### Backend:
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Render (Deployment)

---

## 📦 API Endpoints

Base URL: `https://mployee-jobs.onrender.com/api/jobs`

| Method | Endpoint                   | Description                    |
|--------|----------------------------|--------------------------------|
| GET    | `/api/jobs`               | Get all jobs                   |
| GET    | `/api/jobs?location=XYZ`  | Get jobs filtered by location |

---

## 📥 Running Locally

### 🖥️ Backend Setup

```bash
cd backend
npm install
npm run dev
```

---

### 🌐 Environment Variables

```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

### 💻 Frontend Setup
## 🔧 Installation & Run
```bash
cd frontend
npm install
npm run dev
```

---

## ✏️ Update API Base URL
```bash
const BASE_URL = "http://localhost:5000/api/jobs"; // for local
// or
const BASE_URL = "https://mployee-jobs.onrender.com/api/jobs"; // for production
```

✨ Future Enhancements
- 📝 Job posting form (admin panel)
- 🔐 Authentication for recruiters & candidates
- 📧 Email job alerts
- 💾 Save/Favorite jobs
- 🗂 Advanced filters, pagination, search

🙌 Contributing
Feel free to fork this repo, raise issues, and submit pull requests to enhance this project.

👨‍💻 Developer
Aryan Shubbu
aryanshubbu171@gmail.com

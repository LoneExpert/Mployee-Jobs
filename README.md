# 🧑‍💼 Mployee - Job Listing Platform

Mployee is a full-stack job listing web application where users can explore job openings from various industries, locations, and companies. The project uses **React (Vite)** for the frontend and **Node.js + Express + MongoDB** for the backend.

---

## 🔗 Live Links

- 🌐 Frontend: [https://mployee-jobs.vercel.app](mployee-jobs.vercel.app/)
- ⚙️ Backend API: [https://mployee-jobs.onrender.com](https://mployee-jobs.onrender.com)

---

## 📂 Project Structure
mployee/<br>
├── backend/<br>
│   ├── controllers/<br>
│   ├── models/<br>
│   │   └── Job.ts<br>
│   ├── routes/<br>
│   │   └── jobRoutes.ts<br>
|   ├── types/<br>
│   │   └── job.ts<br>
│   ├── config/<br>
│   ├── .env<br>
│   ├── index.ts<br>
│   └── package.json<br>
│   └── package-lock.json<br>
│   └── tsconfig.json<br>
│<br>
├── frontend/<br>
│   ├── src/<br>
│   │   ├── app/<br>
|   |   |   └──page.tsx<br>
|   |   |   └──layout.tsx<br>
│   │   ├── components/<br>
|   |   |   └──Header.tsx<br>
|   |   |   └──Jobdetail.tsx<br>
|   |   |   └──JobList.tsx<br>
│   │   ├── lib/<br>
|   |   |   └──api.ts<br>
│   │   ├── pages/<br>
│   │   ├── types/<br>
│   │   │   └── job.ts<br>
│   ├── public/<br>
│   |   └── logo.ico<br>
│   └── package.json<br>
│<br>
├── README.md<br>

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

### Backend

```bash
cd backend
npm install
npm run dev
```

---

## Endpoints

```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

Frontend
```bash
cd frontend
npm install
npm run dev
```

---

## Update BASE_URL in frontend/src/api/jobs.ts:
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

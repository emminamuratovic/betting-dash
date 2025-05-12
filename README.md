# Betting Dashboard — Full Stack Assignment

An online betting dashboard built with **React + TypeScript + TailwindCSS (Vite)** on the frontend, and **Node.js + Express + TypeScript + PostgreSQL + JWT** on the backend.

---

## Tech Stack

- **Frontend:** React, TypeScript, TailwindCSS, Axios, Vite
- **Backend:** Node.js, Express, TypeScript, PostgreSQL
- **Auth:** JWT (register, login, protected routes)
- **Dev Tools:** Postman collection, ESLint, Prettier

---

## Getting Started

> Make sure you have **Node.js**, **npm**, and **PostgreSQL** installed.

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/betting-dashboard.git
cd betting-dashboard
```
### 2. Set Up the Backend

```bash
cd backend
npm install
```

#### Configure the environment
Create a ``` .env ``` file:
```bash
PORT=5000
DATABASE_URL=postgresql://postgres:<your-password>@localhost:5432/betting_dashboard
JWT_SECRET=yourSuperSecretKey
```

####  Set up the database
Create a database in PostgreSQL:
```bash
CREATE DATABASE betting_dashboard;
```

####  Seed initial events
Run the app to auto-seed events:
```bash
npm run dev
```

### 3. Set Up the Frontend

```bash
cd ../frontend
npm install
```

Create a ``` .env ``` file:
```bash
VITE_API_URL=http://localhost:5000/api
```

### 4. Run Both Apps
#### Start backend:
```bash
cd backend
npm run dev
```
#### Start frontend:
```bash
cd ../frontend
npm run dev
```

## Features
1. View a list of sports events with odds
2. Register / login with JWT auth
3. Place bets, create, edit, and delete events (only when logged in)
4. Responsive layout with mobile hamburger menu
5. Protected API routes and buttons
6. Clean UI with Tailwind
7. Fully documented Postman collection


## Postman Collection
Import the included file:
[Betting Dashboard API.postman_collection.json](https://github.com/user-attachments/files/20152444/Betting.Dashboard.API.postman_collection.json)

Contains:
1. ``` POST /auth/register ```
2. ``` POST /auth/login ```
3. ``` GET /events ```
4. ``` POST/PUT/DELETE /events ``` (JWT required)


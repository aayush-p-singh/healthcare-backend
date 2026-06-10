# Healthcare Backend API

A scalable backend system for managing patient records with secure authentication, built for healthcare applications.

---

## Problem Statement
Many small clinics and independent doctors lack affordable and secure systems to manage patient records and authentication.  
This project aims to provide a lightweight backend solution for handling patient data with proper access control.

---

## Features
- Doctor Signup & Login with JWT Authentication
- Protected Routes using Middleware
- Add and Manage Patient Records
- Doctor-specific data access (data isolation)
- MongoDB Atlas Integration for cloud database

---

## Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

---

## Architecture
Backend structured with separation of concerns:
config/ | middleware/ | models/ | routes/ | server.js

---

## Security
- JWT-based authentication
- Protected API routes
- Environment variables for sensitive data

---

## Run Locally

```bash
npm install
node server.js

Server runs on:
http://localhost:5000

API Endpoints
Auth
POST /api/auth/signup
POST /api/auth/login
Patients
POST /api/patients/add
GET /api/patients
Future Improvements
Role-based access (Admin/Doctor)
Patient history tracking
Frontend dashboard integration
Deployment on cloud (AWS/Render)

 Author
Aayush Pratap Singh

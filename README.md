#Healthcare Backend API

A Node.js + Express backend for managing patients with authentication.

##Features
- Doctor Signup & Login (JWT Authentication)
- Protected Routes using Middleware
- Add Patients
- Get Patients (Doctor-specific data)
- MongoDB Atlas Integration

##Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

##Project Structure
backend/
├── config/
├── middleware/
├── models/
├── routes/
├── server.js

##Environment Variables
Create a `.env` file:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

##Run Locally

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


Author
Aayush Pratap Singh

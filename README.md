# React + Vite

# Full-Stack Project: Student Management App UI (React + Tailwind) with Crud Operations Using Supabase and Prisma in Node.js Backend

## Overview
This project is a full-stack application with a **React + TailWind CSS** Frontend and a **Node.js with Supabse and Prisma ORM** Backend. The backend handles the full Crud opeartion for Students seamlessly.


## How to Run the Project Locally

### Prerequisites
- Node.js 
- Supabase with Prisma ORM

### Backend (Node.js + Supabse + Prisma ORM)

1. **Backend Repo**:
   ```bash
   https://github.com/Vkpro55/Imagify_Backend
   ```
   Backend Deployed Url: 
   ```bash
    https://instrictive-backend.onrender.com
   ```

2. **Clone the repository**:
   ```bash
   git clone https://github.com/Vkpro55/Instrictive_Backend.git
   cd Instrictive_Backend
   ```
3. **Install Packages**:
   ```bash
   npm install
   ```
3. **Run the backend server**:
   ```bash
   npm start
   ```
4. **Backend API Endpoints**:
   ```bash
   curl -X GET https://instrictive-backend.onrender.com/api/students
    
   ```
   ```bash
   curl -X PUT https://instrictive-backend.onrender.com/api/students/3 \
     -H "Content-Type: application/json" \
     -d '{
           "name": "Updated",
           "cohort": "AY25",
           "dateJoined": "2024-12-24T07:40:34.849Z",
           "lastLogin": "2024-12-24T07:40:34.849Z",
           "status": true,
           "courses": [
             {
                 "id": 1,
                 "name": "CBSE 9 Math"
             }
           ]
         }'

   ```

   ```bash
   curl -X DELETE http://localhost:3000/api/students/103

   ```
   ```bash
   curl -X POST https://instrictive-backend.onrender.com/api/students \
     -H "Content-Type: application/json" \
     -d '{
           "name": "New Student",
           "cohort": "AY25",
           "dateJoined": "2024-12-24T07:40:34.849Z",
           "lastLogin": "2024-12-24T07:40:34.849Z",
           "status": true,
           "courses": [
             {
                 "id": 1,
                 "name": "CBSE 9 Math"
             }
           ]
         }'


   ```



![Screenshot (478)](https://github.com/user-attachments/assets/a77d80ca-ae8b-4cfe-a66d-596e8a2ccb18)
![Screenshot (479)](https://github.com/user-attachments/assets/660fc900-bb5a-4cc8-b6e1-6136f2cc7fa5)
![Screenshot (480)](https://github.com/user-attachments/assets/aaeb379d-e324-4174-b6c5-73af3e475be3)
![Screenshot (481)](https://github.com/user-attachments/assets/edc69352-435f-4a7a-bab8-3041bb8e465d)

### Frontend (React)
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Vkpro55/Insrictive_frontend.git
   cd Insrictive_frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the server**:
   ```bash
   npm run dev
   ```

![Screenshot (482)](https://github.com/user-attachments/assets/bc6806ae-4d85-4a28-91c4-071a9eec0e95)


   

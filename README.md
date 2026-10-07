# 🏡 Wanderlust – Airbnb Clone

A full-stack Airbnb-inspired web application that allows users to explore destinations, create property listings, upload images, manage accommodations, and share reviews through a clean and responsive interface.

## 🌐 Live Demo

🔗 https://airbnb-clone-mern-aizr.onrender.com/listings

---

## 📖 Overview

Wanderlust is a MERN-based web application inspired by Airbnb. Users can create accounts, add property listings, upload images, edit and delete their own listings, view locations on maps, and leave reviews on properties.

This project demonstrates full-stack web development, authentication, database management, image handling, and map integration.

---

## ✨ Features

### 👤 Authentication

- User Registration
- User Login
- User Logout
- Secure Session-Based Authentication

### 🏠 Listing Management

- Create New Listings
- View Listing Details
- Edit Existing Listings
- Delete Listings
- Upload Listing Images

### 💬 Reviews & Comments

- Add Reviews
- Delete Reviews
- User Feedback System

### 🗺️ Maps Integration

- Display Property Locations
- Interactive Map Support

### 📱 Responsive UI

- Clean and Modern Interface
- Mobile-Friendly Design

---

## 🛠️ Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript
- Bootstrap
- EJS

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Authentication

- Passport.js
- Express Session

### Image Storage

- Cloudinary
- Multer

### Maps

- Mapbox API

### Development Tools

- Git
- GitHub
- VS Code
- Postman

---

## 🏗️ Architecture

```text
Browser
   │
   ▼
Express.js Server
   │
 ┌─┴─────────┐
 ▼           ▼
MongoDB   Mapbox API
   │
   ▼
Cloudinary
```

---

## 📂 Project Structure

```text
Wanderlust
│
├── models
├── routes
├── controllers
├── views
├── public
├── middleware
├── utils
├── app.js
├── cloudConfig.js
└── package.json
```

---

## 🚀 Installation & Setup

### Clone Repository

```bash
git clone https://github.com/Himanshipari/your-repository-name.git
cd Wanderlust
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
ATLASDB_URL=your_mongodb_connection_string

CLOUD_NAME=your_cloudinary_name

CLOUD_API_KEY=your_cloudinary_api_key

CLOUD_API_SECRET=your_cloudinary_api_secret

MAP_TOKEN=your_mapbox_token

SECRET=your_session_secret
```

### Start Application

```bash
npm start
```

---

## 📸 Screenshots

### Home Page

<img width="1920" height="943" alt="image" src="https://github.com/user-attachments/assets/e1af16a5-e23e-49ba-894a-9bf4550ab33e" />


### Listing Details

<img width="1877" height="932" alt="image" src="https://github.com/user-attachments/assets/ae393286-6b2d-4682-8257-8c2aeac0e7af" />


### Add New Listing

<img width="1877" height="932" alt="image" src="https://github.com/user-attachments/assets/a9010686-45e8-494d-9a9a-b6bbb25f74c6" />


### Reviews Section

<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/4b6ab8a6-911b-4e9a-9619-7f589f85d10e" />


### Map Integration

<img width="1859" height="918" alt="image" src="https://github.com/user-attachments/assets/22c8a3ac-65c1-4141-ad95-fee71df5a2a0" />

---

## 🎯 Learning Outcomes

Through this project, I strengthened my understanding of:

- Full-Stack Web Development
- Authentication & Authorization
- CRUD Operations
- MongoDB Database Design
- Cloudinary Image Uploads
- Map Integration
- REST APIs
- Session Management
- Deployment on Render

---

## 🔮 Future Enhancements

- Wishlist Feature
- Booking System
- Advanced Filters
- Payment Integration
- User Profile Dashboard
- Real-Time Notifications

---

## 👩‍💻 Developer

**Himanshi Parihar**

Computer Science Engineering Student | MERN Stack Developer

🔗 GitHub: https://github.com/Himanshipari

🔗 LinkedIn: https://www.linkedin.com/in/himanshiparihar/

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

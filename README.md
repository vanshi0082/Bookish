# 📚 Bookish – Online Bookstore Web App

Welcome to **Bookish** – a full-stack online bookstore that lets users explore, register, and discover great reads. Bookish features a secure auth system, book listings, AI-powered chatbot support, and dynamic carousels to create a rich user experience.

![React](https://img.shields.io/badge/Frontend-React-blue)
![Tailwind CSS](https://img.shields.io/badge/Styling-TailwindCSS-38b2ac)
![Firebase](https://img.shields.io/badge/Auth-Firebase-orange)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![Cloudinary](https://img.shields.io/badge/Image%20Upload-Cloudinary-lightblue)
![Render](https://img.shields.io/badge/Deployed%20On-Render-blueviolet)
![GitHub](https://img.shields.io/badge/Hosted%20On-GitHub-black)

---

## 🌐 Live Demo  
[🔗 View Live on Render](https://bookish-us45.onrender.com/)

---

## ⚙️ Tech Stack

- **Frontend**: React.js + Vite + Tailwind CSS  
- **Routing**: React Router DOM  
- **Styling**: Tailwind CSS + Swiper.js (for carousels)  
- **Authentication**: Firebase Auth (Email/Password & Google Sign-In)  
- **Image Upload**: Cloudinary  
- **Database**:  
  - **MongoDB**: Book and user data  
  - **Firebase Firestore**: Realtime storage for user data  
- **Chatbot**: Dialogflow (Google)  
- **Deployment**: Render (Frontend + Backend)

---

## 🚀 Features

- 👤 Firebase Auth login/register with Email & Google  
- 🧾 Add books with images using Cloudinary upload  
- 📚 Dynamic book listing & detail pages  
- 💬 AI Chatbot (via Dialogflow)  
- 🖼️ Swiper.js carousel for banners  
- 🧠 MongoDB + Firebase Firestore for persistence  
- 📦 Firebase Firestore for user/cart/wishlist storage  
- 🎨 Clean, responsive UI with Tailwind CSS

---

## 🔐 Firebase Authentication (Google Login Setup)

Firebase authentication is implemented with support for:
- **Email/Password login**
- **Google Sign-In**

📍 Implemented in: `context/AuthContext.jsx`, `Login.jsx`, and `Register.jsx`

---

## ☁️ Cloudinary Integration

Cloudinary is used for:
- Uploading book images
- Storing image URLs in MongoDB

📍 Implemented in the "Add Book" form (`AddBook.jsx`) and backend image handling route.

---

## 💬 Chatbot Integration

Integrated with **Dialogflow** to assist users with common questions:

- _"What’s your return policy?"_  
- _"How do I track my order?"_

📍 Chatbot UI: `components/Chatbot.jsx`

---

## 🧰 Swiper.js Carousel

Used to display featured and trending books with smooth transitions.

📍 Implemented in: `pages/home/Banner2.jsx`

---



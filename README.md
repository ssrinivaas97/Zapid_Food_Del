# Zapid Food Delivery Website

## Overview
Zapid Food Delivery is a comprehensive food ordering website and app built with modern web technologies. The project encompasses a full-stack application using React JS, MongoDB, Express, Node JS, and the Stripe payment gateway. It features a user-friendly frontend, a robust backend server, and an admin panel to manage operations.

## Features
- **User Authentication**: Users can create accounts and log in to place orders.
- **Shopping Cart**: Add food items to the cart and place orders.
- **Online Payment**: Integrated with Stripe for secure payments.
- **Order Status Updates**: Real-time updates on order status.
- **Admin Panel**: Admin can manage food items and orders, including creating, modifying, and deleting food items, tracking and updating order statuses in real time, and viewing all orders.

## Tech Stack
- **Frontend**: React JS, Vite, Axios, React Router DOM
- **Backend**: Node JS, Express, MongoDB, Mongoose
- **Admin Panel**: React JS, React Toastify, Vite
- **Payment Gateway**: Stripe
- **Authentication**: JWT, bcrypt
- **File Handling**: multer

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js
- npm or yarn
- MongoDB

### Clone the Repository

git clone https://github.com/SunilS97/zapid-food-delivery.git

cd zapid-food-delivery

### Setup Environment Variables
Create a .env file in the root directory of the frontend, backend, and admin folders with the following variables:

MONGO_DB_URL=your_mongodb_url

STRIPE_API_KEY=your_stripe_api_key

JWT_SECRET=your_jwt_secret

### Install Dependencies

**Front end**

cd frontend

npm install

**Backend**

cd backend

npm install

**Admin**

cd admin

npm install

### Running the Application

**Start the Frontend**

cd frontend

npm run dev

This will start the frontend on http://localhost:3000.

**Start the Backend**

cd backend

npm run server

This will start the backend server on http://localhost:5000.

**Start the Admin Panel**

cd admin

npm run dev

This will start the admin panel on http://localhost:3001.

**Scripts**

**Frontend**

npm run dev: Start the development server
npm run build: Build the application for production
npm run lint: Lint the codebase
npm run preview: Preview the production build

**Backend**

npm run server: Start the backend server with nodemon

**Admin Panel**

npm run dev: Start the development server
npm run build: Build the application for production
npm run lint: Lint the codebase
npm run preview: Preview the production build

### License

This project is licensed under the ISC License


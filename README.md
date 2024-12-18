<h1 align="center">MERN Netflix Clone 🎬</h1>

![Demo App](/frontend/public/screenshot-for-readme.png)

[Video Tutorial on Youtube](https://youtu.be/0Kzd4k1YuCA)

About This Course:

-   ⚛️ Tech Stack: React.js, Node.js, Express.js, MongoDB, Tailwind
-   🔐 Authentication with JWT
-   📱 Responsive UI
-   🎬 Fetch Movies and Tv Show
-   🔎 Search for Actors and Movies
-   🎥 Watch Trailers
-   🔥 Fetch Search History
-   🐱‍👤 Get Similar Movies/Tv Shows
-   💙 Awesome Landing Page
-   🌐 Deployment
-   🚀 And Many More Cool Features
-   ✅ This is a lot of work. Support my work by subscribing to the [Channel](https://www.youtube.com/@asaprogrammer_)

### Setup .env file

```bash
PORT=5000
MONGO_URI=your_mongo_uri
NODE_ENV=development
JWT_SECRET=your_jwt_secre
TMDB_API_KEY=your_tmdb_api_key
```

### Run this app locally

```shell
npm run build
```

### Start the app

```shell
npm run start
```

### Deployment Instructions

#### Backend Deployment (Render.com)

1. Create an account on [Render.com](https://render.com)
2. Click "New +" and select "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - Name: netflix-clone-backend
   - Root Directory: ./backend
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Add environment variables:
   ```
   PORT=5000
   MONGO_URI=your_mongo_uri
   NODE_ENV=production
   JWT_SECRET=your_jwt_secret
   TMDB_API_KEY=your_tmdb_api_key
   ```
6. Click "Create Web Service"

#### Frontend Deployment (Vercel)

1. Create an account on [Vercel](https://vercel.com)
2. Install Vercel CLI: `npm i -g vercel`
3. Navigate to frontend directory: `cd frontend`
4. Run: `vercel`
5. Follow the prompts to deploy
6. After deployment, update the backend CORS settings with your Vercel URL
7. Update `frontend/src/config.js` with your backend URL

#### Database (MongoDB Atlas)

1. Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Get your connection string
3. Update MONGO_URI in backend environment variables

## `Timestamps` for your convenience:

-   00:00:00 - App Showcase
-   00:07:50 - Backend Setup
-   00:23:00 - Database (MongoDB) Setup
-   00:35:54 - Signup Logic in Backend
-   00:54:26 - Generate JWT
-   01:02:40 - Logout Logic in Backend
-   01:04:30 - Login Logic in Backend
-   01:08:30 - A Quick Recap
-   01:11:25 - Fetching Movies From API
-   01:42:00 - Fetchin TV Shows From API
-   01:48:50 - Protecting Routes (Middleware)
-   01:59:15 - Search Routes
-   02:28:52 - Frontend Setup
-   02:41:45 - Signup Page and Login Page UI Design
-   02:55:25 - Auth Screen UI Design
-   03:28:30 - Signup, Login, Logout Functionality
-   04:03:45 - Building the Home Screen
-   05:13:00 - Building the Watch Page
-   05:49:50 - Building the Search Page
-   06:05:20 - Building the Search History Page
-   06:14:55 - Building a Custom 404 Page
-   06:18:55 - Testing Our App and Small Fixes
-   06:24:40 - Detailed Deployment Guide
-   06:48:53 - Oops! I almost forgot this... bye

### I'll see you in the next one! 🚀

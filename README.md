# Ashy Thoughts Blog App

Ashy Thoughts is a full-stack blog platform developed using React.js, Node.js, and MySQL.  
It allows users to create, read, update, delete, and export blog posts, demonstrating complete CRUD functionality and integration between frontend and backend technologies.

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)
- [Author](#author)

---

## Overview

Ashy Thoughts is developed as part of a full-stack internship assignment to demonstrate end-to-end application development.  
The project has a clean and responsive interface for managing personal blog posts, including the ability to export data for reporting purposes.

---

## Features

| Feature | Description |
|----------|-------------|
| Create | Add a new blog post with title, content, and author information. |
| Read | Display all existing posts from the database on the homepage. |
| Update | Edit an existing post using a structured form. |
| Delete | Remove a post with confirmation and success feedback. |
| Export | Download all posts in `.csv` format for offline use. |
| Toast Notifications | Real-time user feedback for success and error actions. |
| One-Click Launch | `start.bat` starts both the backend and frontend automatically. |

---

## Tech Stack

**Frontend:** React.js, Axios, React Router DOM, React Toastify  
**Backend:** Node.js, Express.js, MySQL2, dotenv, json2csv, cors  
**Database:** MySQL (Database name: `ashy_thoughts`)

---

## Folder Structure

AshyThoughts-Blog App/
│
├── backend/
│ ├── controllers/
│ ├── routes/
│ ├── db/
│ ├── models/
│ ├── utils/
│ ├── server.js
│ └── .env
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ ├── api.js
│ │ └── App.js
│ └── .env
│
├── start.bat
└── README.md

yaml
Copy code

---

## Installation

### 1. Backend Setup
```bash
cd backend
npm install
Create a .env file in the backend folder:

ini
Copy code
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=ashy_thoughts
Start the backend server:

bash
Copy code
node server.js
2. Frontend Setup
bash
Copy code
cd ../frontend
npm install
Create a .env file in the frontend folder:

bash
Copy code
REACT_APP_API_URL=http://localhost:5000/api
Start the React frontend:

bash
Copy code
npm start
3. One-Click Startup
To launch both servers simultaneously, double-click the start.bat file located in the main project directory.

Environment Variables
Key	Location	Purpose
PORT	backend	Defines the backend server port
DB_HOST	backend	MySQL server hostname
DB_USER	backend	MySQL username
DB_PASSWORD	backend	MySQL password
DB_NAME	backend	Database name
REACT_APP_API_URL	frontend	Base URL for API requests

Running the Application
Start MySQL and ensure the ashy_thoughts database is active.

Run the backend (node server.js) to start the API service on port 5000.

Run the frontend (npm start) to launch the React interface on port 3000.

Open http://localhost:3000 in your browser.

## Screenshots

### Home Page
![Home Page](./screenshots/screenshot-home.png)

### Create Page
![Create Page](./screenshots/screenshot-create.png)

### Edit Page
![Edit Page](./screenshots/screenshot-edit.png)

### Delete Confirmation
![Delete Confirmation](./screenshots/screenshot-delete.png)

### CSV Export
![CSV Export](./screenshots/screenshot-export.png)

Screen	Description
Home Page	Displays all blog posts.
Create Page	Add a new post.
Edit Page	Modify existing post content.
Delete Confirmation	Prompt before removal.
CSV Export	Example of exported data file.

Future Enhancements
Add user authentication for post authors.

Introduce a comments section for discussions.

Add “like” and “share” features.

Deploy the application on a cloud platform (Render, Vercel, or Railway).

Improve mobile responsiveness and accessibility.

Author
Ashlee Da Silva
Master of Computer Applications (MCA) Student
Email: ashleedasilva06a@gmail.com 
Passionate about full-stack development and building practical web solutions.

Acknowledgements
React.js documentation

Node.js and Express.js community

MySQL developers and resources

json2csv library for export functionality
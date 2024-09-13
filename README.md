# Dockerized MERN App

This repository contains a basic MERN (MongoDB, Express, React, Node.js) application that has been containerized using Docker and Docker Compose. The app consists of a frontend (React), backend (Node.js + Express), and a MongoDB database, all running in separate Docker containers.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

Follow these steps to get the application up and running:

### 1. Clone the Repository

```bash
git clone https://github.com/phsinghka/mern-app-dockerized.git
cd mern-app-dockerized
```

### 2. Create the `.env` File (Already present in repo for convinience)

Create a `.env` file in the root directory of the project to define the environment variables:


```bash
touch .env
```

Add the following content to the `.env` file:

```bash
MONGO_INITDB_ROOT_USERNAME=root
MONGO_INITDB_ROOT_PASSWORD=example
MONGO_URI=mongodb://root:example@mongo:27017/mernapp?authSource=admin
```

### 3. Run the Application

To start the application, run the following command:

```bash
docker-compose up --build
```

This will build and start the three services:
- **MongoDB**: Running on port `27017`
- **Backend (Node.js + Express)**: Running on port `5000`
- **Frontend (React)**: Running on port `3000`

### 4. Access the Application

Once the containers are running, you can access the frontend by navigating to:

```
http://localhost:3000
```

### 5. Stopping the Application

To stop and remove the containers, run:

```bash
docker-compose down
```

## Project Structure

```
.
├── backend/          # Backend code (Node.js + Express)
├── frontend/         # Frontend code (React)
├── docker-compose.yml
├── .env              # Environment variables (not committed to the repository)
└── README.md
```

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Containerization**: Docker, Docker Compose
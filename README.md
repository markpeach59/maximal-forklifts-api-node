# Maximal Forklifts API Node

This is the backend API for the Maximal Forklifts application.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Set environment variables:
   - `jwtMaximGB`: JWT private key for authentication
   - `MONGODB_URI`: MongoDB connection string (for remote MongoDB)

3. Start the server:
   ```
   node index.js
   ```

## MongoDB Configuration

The application can connect to either a local or remote MongoDB instance:

- **Local MongoDB**: By default, the application connects to a local MongoDB instance at `mongodb://localhost/maximal`.
- **Remote MongoDB**: To use a remote MongoDB instance, set the `MONGODB_URI` environment variable with your MongoDB connection string.

Example:
```
export MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/maximal
```

## Seed Data

The application includes several seed scripts to populate the database with initial data. To run the seed scripts:

```
./populate.sh
```

This will run all the seed scripts and populate the database with the initial data.

## API Endpoints

The API provides endpoints for managing forklifts, quotes, orders, and users. The API is accessible at `http://localhost:3900/api`.

## Authentication

The API uses JWT for authentication. To authenticate, send a POST request to `/api/auth` with your email and password.

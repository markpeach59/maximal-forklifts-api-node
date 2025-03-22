// MongoDB Connection Configuration
// This file provides instructions for setting up MongoDB connection

/*
To connect to a remote MongoDB instance:

1. Set the MONGODB_URI environment variable with your MongoDB connection string:

For MongoDB Atlas:
MONGODB_URI=mongodb+srv://username:password@cluster-url/database-name?retryWrites=true&w=majority

For other MongoDB hosts:
MONGODB_URI=mongodb://username:password@host:port/database-name

2. Start the application with the environment variable set:

On Windows:
set MONGODB_URI=mongodb+srv://username:password@cluster-url/database-name?retryWrites=true&w=majority
npm start

On macOS/Linux:
MONGODB_URI=mongodb+srv://username:password@cluster-url/database-name?retryWrites=true&w=majority npm start

3. Alternatively, you can update the production.json file with your MongoDB connection string:

{
  "db": "mongodb+srv://username:password@cluster-url/database-name?retryWrites=true&w=majority",
  "port": "3900",
  "jwtPrivateKey": ""
}

Then start the application in production mode:
NODE_ENV=production npm start
*/

// Example MongoDB Atlas connection string format:
// mongodb+srv://username:password@cluster-url/database-name?retryWrites=true&w=majority

// Example local MongoDB connection string format:
// mongodb://localhost:27017/database-name

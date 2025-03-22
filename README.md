# Maximal Forklifts API

This is the backend API for the Maximal Forklifts application.

## Setup

### MongoDB Connection

The application can connect to either a local MongoDB instance or a remote MongoDB instance:

#### Local MongoDB (Development)

By default, the application connects to a local MongoDB instance at `mongodb://localhost/maximal`. This is configured in the `config/default.json` file.

#### Remote MongoDB (Production)

To connect to a remote MongoDB instance (such as MongoDB Atlas), you have two options:

1. **Using Environment Variables (Recommended)**:
   - Set the `MONGODB_URI` environment variable to your MongoDB connection string:
   ```
   export MONGODB_URI="mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority"
   ```

2. **Using Production Config**:
   - Edit the `config/production.json` file and replace the `db` value with your MongoDB connection string.
   - Run the application with `NODE_ENV=production`:
   ```
   NODE_ENV=production node index.js
   ```

### JWT Private Key

Set the JWT private key for authentication:

```
export jwtMaximGB="your_private_key"
```

## Running the Application

```
node index.js
```

## Seeding the Database

Various seed scripts are available to populate the database with initial data:

```
node seedAdmin.js
node seedDealer.js
# ... and other seed scripts
```

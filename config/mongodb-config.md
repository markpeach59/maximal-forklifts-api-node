# MongoDB Configuration for samuknode

This server supports both local MongoDB and MongoDB Atlas connections.

## Database Name
- **Local**: `samuk`
- **Atlas**: `samuk`

## Connection Options

### 1. Local MongoDB (Default)
The server will connect to a local MongoDB instance by default:
```
mongodb://localhost/samuk
```

### 2. MongoDB Atlas via Environment Variable
Set the `MONGODB_URI` environment variable with your Atlas connection string:

**macOS/Linux:**
```bash
export MONGODB_URI="mongodb+srv://username:password@cluster-url/samuk?retryWrites=true&w=majority"
npm start
```

**Windows:**
```cmd
set MONGODB_URI=mongodb+srv://username:password@cluster-url/samuk?retryWrites=true&w=majority
npm start
```

### 3. Production Mode
Set `NODE_ENV=production` and update `config/production.json` with your Atlas credentials:

```json
{
  "db": "mongodb+srv://your-username:your-password@your-cluster.mongodb.net/samuk?retryWrites=true&w=majority",
  "port": "3900",
  "jwtPrivateKey": "your-jwt-key"
}
```

Then run:
```bash
NODE_ENV=production npm start
```

## Configuration Priority
1. `MONGODB_URI` environment variable (highest priority)
2. `NODE_ENV=production` → uses `production.json`
3. Default → uses `default.json` (local MongoDB)

## Atlas Connection String Format
```
mongodb+srv://username:password@cluster-url/samuk?retryWrites=true&w=majority
```

Replace:
- `username`: Your MongoDB Atlas username
- `password`: Your MongoDB Atlas password
- `cluster-url`: Your cluster URL (e.g., cluster0.abc123.mongodb.net)

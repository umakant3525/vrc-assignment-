# Environment Variables

## Database
- `DATABASE_URL=mongodb+srv://<username>:<password>@<cluster-url>?retryWrites=true&w=majority&appName=<app-name>`  # MongoDB connection string

## Server
- `SERVER_URL=http://localhost:5000`  # Backend server URL
- `NODE_ENV=development`  # Environment mode (development/production)
- `PORT=4000`  # Port for the backend server
- `CLIENT_URL=http://localhost:3000`  # Frontend app URL
- `PRODUCTION_CLIENT_URL=https://yourfrontend.com`  # Frontend URL for production

## Redis
- `REDIS_PASSWORD=<your-redis-password>`  # Redis password (if needed)
- `REDIS_URL=localhost`  # Redis server URL
- `REDIS_PORT=6379`  # Redis server port

## Tokens
- `SESSION_TOKEN_SECRET=<session-token-secret>`  # Secret for session tokens
- `ACCESS_TOKEN_SECRET=<access-token-secret>`  # Secret for access tokens
- `REFRESH_TOKEN_SECRET=<refresh-token-secret>`  # Secret for refresh tokens
- `OTP_TOKEN_SECRET=<otp-token-secret>`  # Secret for OTP tokens

## Admin
- `ADMIN_EMAIL=<admin-email>`  # Admin google mail for nodemailer
- `ADMIN_PASS=<admin-password>`  # Same mail password of google app  

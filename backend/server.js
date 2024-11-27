require('dotenv').config()
const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const mongoose = require('mongoose')
const helmet = require("helmet") // Commented out
// const corsMiddleware = require('./config/corsOptions') // Commented out
const cookieParser = require('cookie-parser')
const session = require('express-session')
const { logger } = require('./middleware/logger')
const { errorHandler, notFound } = require('./middleware/errorHandler')
const connectDB = require('./config/dbConn')
const setupSocket = require('./middleware/onlineStatus')
const requireAuth = require('./middleware/requireAuth')
const url = require('./config/url')

const port = process.env.PORT || 4000
const app = express()
const server = http.createServer(app)
const io = socketIo(server, { cors: { origin: url, methods: ['GET', 'POST' ] } })

connectDB()

// Security middleware 
app.use(helmet())
// app.use(corsMiddleware)

// Body parsers and cookie parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())

// Session management setup
app.use(session({ 
  secret: process.env.SESSION_TOKEN_SECRET, 
  resave: false, 
  saveUninitialized: false, 
  cookie: { 
    secure: process.env.NODE_ENV === 'production' || false,
    sameSite: 'Lax',
    httpOnly: true 
  }
}))

app.get('/hello', (req, res) => {
  res.send(`
    <h1>Welcome to the Role-Based Authentication Backend by Umakant Shinde! 🚀</h1>
    <p>Explore our APIs to register, log in 🔐, and manage users with different roles like Root, Admin, and User.</p>
    <p>You can also perform CRUD operations on tasks. Start building your app today! 🌐</p>
  `);
});


// Authentication route (now only for traditional methods, not OAuth)
app.use('/api/auth', require('./routes/auth'))

// Use the authentication middleware (for session-based or token-based auth)
app.use(requireAuth)
setupSocket(io)

// API routes
app.use('/api/users', require('./routes/user'))
app.use('/api/tasks', require('./routes/task'))

// Middleware for logging and error handling
app.use(logger)
app.use(notFound)
app.use(errorHandler)


// Database connection and server start
mongoose.connection.once('open', () => {
  console.log('Database Connected Successfully!')
  server.listen(port, () => console.log(`HTTP Server running on http://localhost:${port}/hello`))
})
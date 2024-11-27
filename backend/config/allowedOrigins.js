const url = require('./url')
// const allowedOrigins = [url]

// for current purpose 
const allowedOrigins = ["*"]

const paths = ['/api/auth/google', '/api/auth/google/callback']

module.exports = { allowedOrigins, paths }
const express = require('express')

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3000

/**
 * Express middleware to log incoming requests
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function requestLoggerMiddleware(req, res, next) {
    console.log(`${new Date()} - ${req.method} request received`)
    next()
}

app.use(requestLoggerMiddleware)

app.get('/',(req,res)=>{
    res.send("Welcome to express server")
})


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
const express = require('express')

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3000

/**
 * Logging middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function loggingMiddleware(req, res, next) {
    console.log(`Timestamp: ${new Date()}`)
    console.log(`Method: ${req.method}`)
    console.log(`URL: ${req.url}`)
    console.log(`Headers: ${JSON.stringify(req.headers)}`)
    console.log(`Body: ${JSON.stringify(req.body)}`)
    next()   
}

app.use(loggingMiddleware)

app.get('/test',(req,res)=>{
    res.send('<h1>Welcome to test page</h1>')
})

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to express server</h1>')
})


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
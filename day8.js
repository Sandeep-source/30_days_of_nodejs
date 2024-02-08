const express = require('express')

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3000


/**
 * Express route to handle requests with a positive integer parameter
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function positiveIntegerHandler(req, res, next) {
     const n = parseInt(req.query.number);
     if( isNaN(n) || n<=0){
        const error = new Error('Number should be a positive number')
        error.name = 'NegativeNumberError'
        next(error)
     }else{
        res.send('Number is a positive number')
     }
  }

app.get('/positive',positiveIntegerHandler)

app.get('/',(req,res)=>{
    res.send("Welcome to express server")
})


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
const express = require('express')

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3000

/**
 * Handles GET requests to "/greet" endpoint
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function greetHandler(req, res) {
    console.log(req.query)
    if(req.query.name){
        res.send(`Hello, ${req.query.name}!`)
    }else{
        res.send('Hello, Guest!')
    }
  }

app.get('/greet',greetHandler)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
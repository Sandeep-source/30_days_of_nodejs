const express = require('express')
const { rateLimit } = require('express-rate-limit')

const app = express()

const rate = rateLimit({
    windowMs: 60*1000,
    max: 10
})

app.use(rate)

const PORT = process.env.PORT | 3000

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to site for limit test refresh the page 10 times to see limit</h1>")
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}...`)
})
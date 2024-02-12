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
    res.send("<h1>Day 12 challenge</h1>")
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}...`)
})
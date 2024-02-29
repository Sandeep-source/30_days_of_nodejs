const express = require('express')

const app = express()

const PORT = process.env.PORT | 3000;

app.use(express.json())

app.get('/',(req,res)=>{
    throw new Error()
})

function errorHandler(err, req, res, next) {
    console.log("Caught Error...")
    res.send("Caught Error...")
}

app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}...`)
})
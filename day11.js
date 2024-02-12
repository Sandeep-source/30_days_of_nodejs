const jsonwebtoken = require('jsonwebtoken')
const express = require('express')
require('dotenv').config()

const app = express()

app.use(express.json())

const PORT = process.env.PORT | 3000

const users = [
    {
        username: 'Sandeep',
        password: '123456789'
    }
]

const posts  = [
    {
        title : "ChatGPt and prompt engineering",
        author: 'Sandeep kushwaha'
    },
    {
        title: 'JWT tokwn in nodejs',
        auther: 'Someone at scaler'
    }
]

app.get('/',authenticationMiddleware,(req,res)=>{
    res.json(posts)
})

app.post('/login',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    if(!username || !password){
        res.status(403).send("Login failed")
    }else{
        const user = users.find(user=> user.username==username)
        if(password==user.password){
           const token = jsonwebtoken.sign(user,process.env.ACCESS_TOKEN_SECRET)
           res.json({
            accessToken: token
           })
        }else{
            res.status(403).send("Incorrect credentials")
        }
        
    }
})

/**
 * Authentication middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function authenticationMiddleware(req, res, next) {
      const authHeader = req.headers['authorization']
      const token = authHeader && authHeader.split(' ')[1]
      if(token ==null){
        return res.sendStatus(401)
      }else{
        jsonwebtoken.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
            if(err) return res.sendStatus(403)
            req.user = user
            next()
        })
      }
  }

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
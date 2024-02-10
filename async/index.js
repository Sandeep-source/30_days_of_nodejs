const fs = require('fs')

console.log('First line')

// Reading files synchronously
// const data = fs.readFileSync('f1.txt')
// console.log(""+data)



// reading file asynchronously
fs.readFile('f1.txt',(err,data)=>{
    console.log(""+data)
})


console.log('last line')
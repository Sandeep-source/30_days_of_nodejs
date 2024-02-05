const fs = require('fs')

// const content = fs.readFileSync('test-files/f1.txt')

// console.log(""+content)

// fs.appendFileSync('test-files/output.txt','\ncreated new file and the content')

// // fs.unlinkSync('test-files/output.txt')

// fs.mkdirSync('mydir')

// let path = 'mydir'

const tree = fs.readdirSync('./test-files')

console.log("Files in mydir:",tree)

console.log(fs.existsSync('mydir'))

console.log(fs.existsSync('../course/test-files/f1.txt'))
console.log(fs.existsSync('test-files/f2.txt'))




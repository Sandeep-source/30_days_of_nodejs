const child = require("child_process")
const os = require('os')
const path = require('path')

//child.execSync('calc')

// child.execSync('start chrome www.google.com')
// console.log(os.arch())
// console.log(os.platform())
// console.log(os.cpus())

const ex = path.extname("./mod.js")
console.log(ex)


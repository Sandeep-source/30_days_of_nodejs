const path = require('path')

const ext = path.extname('first-code.js')

console.log("Ext: "+ext)

const p = path.resolve('first-code.js')

console.log("Full path: "+p)

console.log("Current file: "+__filename)
console.log("Current dir: "+__dirname)
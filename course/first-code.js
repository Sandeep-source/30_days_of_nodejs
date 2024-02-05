var name = "Sandeep"

const cal = require('./mod.js')

console.log(global.name)

var a = 1;

global.setInterval(()=>{
   console.log(cal.addition(10,a));
   a+=1;
},1000)
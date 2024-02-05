const path = require('path')

function resolvePath(relativePath) {
    try{
       const p = path.resolve(relativePath)
       console.log("Resolved Path:",p)
    }catch(e){
       console.log("Error:",e.message)
    }

}

resolvePath('day1.js')
resolvePath('day2.js')

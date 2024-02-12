let myPromise = new Promise((resolve,reject)=>{
    const a = 4;
    const b = 5;
    setTimeout(()=>{
            if(a===b){
                resolve("values are equal")
            }else{
                reject("values are not equal")
            }
    },2000)
})

myPromise.then((data)=>{
    console.log(data)
}).catch(err=>{
    console.log(`Error: ${err}`)
})
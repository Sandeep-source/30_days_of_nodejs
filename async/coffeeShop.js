function placeOrder(drink){
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(drink==='coffee'){
                resolve("Order placed successfully\n")
            }else{
                reject("We don't serve this drink")
            }
        },2000)
        
     })
}

function processOrder(order){
    console.log("Order is being prepared...")
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`Order is served`)
        },2000)
        
        
    })
}

// placeOrder('coffee').then((order)=>{
//     processOrder(order).then((data)=>{
//         console.log(data)
//     })
// }).catch((err)=>{
//     console.log("Error: "+err)
// })

// placeOrder('soda').then((order)=>{
//     processOrder(order).then((data)=>{
//         console.log(data)
//     })
// }).catch((err)=>{
//     console.log("Error: "+err)
// })

async function serverOrder(){
    let orderPlaced = await placeOrder('coffee')
    console.log(orderPlaced)
    let processedOrder = await processOrder(orderPlaced)
    console.log(processedOrder)
}

serverOrder()
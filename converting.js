//Converting Promise Based Code to Async/Await and error handling with (catch/try)
function placeOrder (onlineApp) {
    return new Promise ((received, reject)=>{
        console.log(`place your order on ${onlineApp}`)
        if(onlineApp === 'jumia') {received ('welcome to Jumia your order has been received!')
        } else {reject (`you can only request an order from jumia`)
        }
    })
}
function shipOrder(orderReceived) {
    return new Promise((received, reject)=>{
        console.log('processing yout order')
        received (`Extra Information + ${orderReceived}`)
    })
}

//Promise based
placeOrder('jumia')
.then ((orderReceived)=>{
    console.log('your item has been received')
    return shipOrder(orderReceived)
})
.then((processOrder)=>{
    console.log(processOrder)
})
.catch((error)=>{
    console.log(error)
});


//async await with (try/catch) error handling 
async function order() {
    try{
        const orderReceived = await placeOrder('temu')
        console.log('Order Received')
        const processOrder = await shipOrder(orderReceived)
        console.log(processOrder)
    }catch (error){
        console.log(error)
    }
}
order()

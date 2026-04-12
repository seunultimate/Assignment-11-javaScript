//Promise chaining to get an item online
function fetchItem() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
        const itemFound = true;
        if (itemFound) {resolve ("Iphone 16 promax available in stock") 
        } else {reject ("Item currently out of stock!")
        }
        }, 2000);
    }) 
}
function getPrice(item) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
       resolve (`the cost of this ${item} is $5000`)
    },3000)
    })
}
fetchItem()
.then((item)=>{
    console.log(item)
    return getPrice (item)
})
.then((price)=>{
    console.log(price)
})
.catch((error)=>{
    console.log("Error", error)
})
.finally (()=>{
    console.log('bye for now, Thank you for coming!')
})
//Callback functions
const getUserLogin =(callback)=>{
    setTimeout(()=>{

        callback("You login Successfuly!")
    },2000)
}
getUserlogin((login)=>{
    console.log(login)
})


//Promise Based
function getUserlogin() {return new Promise((resolve, reject)=> {
    setTimeout(()=>{
        successfulLogin = true;

        if(successfulLogin){resolve ("Login successful, you're welcome!");
        } else {
            reject ("invalied user, try again!");
        }
        }, 4000);
    });
}
getUserlogin()
.then((user)=>{
    console.log("User", user)
})
.catch ((error)=>{
    console.log("Error", error)
});

//Another Example
//callback function
const stocks = {
    Phones: ["S22 Ultra", "A51 8GB", "S23 5G", "FOLD7 256 ROM"],
    Earpods: ["Oraimo", "Itel", "Realme", "bensoo"],
    PackageHolders: ["Paper bag", "Nylon bag", "Rubber bin", "A cage"],
    Trucks: ["Mercedes Benz", "Toyota Spacebus", "J5 Bus"]
}

const order = (Phone_name, call_shipTeam) => {
    setTimeout(() =>{
        console.log(`${stocks.Phones[Phone_name]} was added to cart`);
        call_shipTeam ();
    }, 2000);
    
};


const shipTeam = () => {
    
    setTimeout (() => {
       console.log("Order has been send to warehouse for shipment")
        setTimeout(()=>{
        console.log("Samsung S22 ultra has been packaged inside the box")
        setTimeout(()=>{
            console.log(`${stocks.Earpods [1]} and ${stocks.Earpods[3]} Earpods has also been added to the order`)
            setTimeout(()=>{
                console.log("All orders has arrived, re-packaging has started")
                setTimeout(() =>{
                    console.log(`${stocks.PackageHolders[2]} has been selected to contain the 3 orders together`)
                    setTimeout(()=>{
                        console.log("The complete package has been masterbagged, waiting for the driver to take them to the various destinations")
                        setTimeout(()=>{
                            console.log(`${stocks.Trucks[1]} has arrived to tranport all the orders`)
                            setTimeout(()=>{
                                console.log("The orders has arrived succefully, thank you!");
                            },1000);
                        },5000);
                    },1000);
                }, 2000);
            },1000);
        },1000);
    },2000);
    }, 0);
};
order(0, shipTeam);

//Promised based
const stock = {
    SamsungPhones: ["S22 Ultra", "A51 8GB", "S23 5G", "FOLD7 256 ROM"],
    Earpods: ["Oraimo", "Itel", "Realme", "bensoo"],
    PackageHolders: ["Paper bag", "Nylon bag", "Rubber bin", "A cage"],
    Trucks: ["Mercedes Benz", "Toyota Spacebus", "J5 Bus"]
}
//Promises to start
const is_jumiaApp_up = true;

let orders = (time, work) => {

    return new Promise ((resolve, reject) => {
        if (is_jumiaApp_up) {
            setTimeout (() =>{
            resolve(work ());
            }, time);
            

        } else {
            reject(console.log("The server is currently down, kindly check back later"));
        }
    });
};
orders(2000, () =>console.log(`Samsung ${stock.SamsungPhones[3]} was added to cart`))

.then(() => {
return orders(0, () => console.log("Samsung S22 ultra has been packaged inside the box"));
})

.then(() =>{
return orders(1000, () => console.log(`${stock.Earpods[0]} and ${stock.Earpods[2]} earpods has also been added to cart to be shipped with the order`))
})
.then(() =>{
return orders(3000, ()=> console.log("All orders has arrived, re-packaging has started"));
})
.then(() =>{
return orders (1000, () => console.log(`${stock.PackageHolders[2]} has been selected, large enough to contain the 3 orders together`))
})
.then(() =>{
return orders(4000, ()=> console.log("The complete packages has been masterbagged, waiting for the driver to take them to the various destinations"));
})
.then(()=>{
return orders (2000, () =>console.log(`${stock.Trucks[2]} has arrived to tranport all the orders`));
})
.then(()=>{
return orders (1000, () =>console.log("Orders with tracking number 2546789176-JWCR has been shipped!"));
})
.then (()=>{
return orders (10000, ()=>console.log("All orders has arrived succefully, thank you!"))
})

.catch (()=>{
    console.log("Orders cannot be placed right now, customer to check back later!");
}) 

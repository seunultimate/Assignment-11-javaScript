//CallBack Hell with Nested Callbacks
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

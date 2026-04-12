const newAdmission = new Promise ((admitted, rejected)=>{
    const beatCtuff= (true);
    setTimeout(()=>{
        if (beatCtuff)
            {admitted ("Congratulations, you have been admitted by beaten the cutoff mark")
        } else {rejected ("You failed to beat the cutoff mark, your admission was rejected")}
    },5000)
})
newAdmission
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
});


const payments = new Promise ((successful, failed) =>{
    const completeTransfer = (false);
    setTimeout(()=>{
        if (completeTransfer) {successful  ("Payment successful! you can take your order, thank you")
        } else {failed ("Opps... your payment failed. you can try again!")}
    },6000)
})
payments.then((result)=>{
    console.log(result)
})
.catch ((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("thank you for shopping with us")
});
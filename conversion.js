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


//Simulating multiple asynchronous Operations
function getUsername(callback){
    setTimeout(()=>{
        callback("Oluwaseun Olajide")
    },2000)
}

function getUserage (callback){
    setTimeout(()=>{
         
        callback(35)
    }, 2000)
}
function getGender(callback) {
    setTimeout(()=>{
        callback("Male")
    },2000)
}
function getUserInfo(callback){
    setTimeout (() =>{
        callback("you Just got admitted to M4ACE institution to study Backend javaScript!")
    },5000)
}
getUsername((username)=>{
    console.log("the username is", username)

getUserage((userage) =>{
    console.log("Age is available:", userage)
getUserInfo((userinfo)=>{
    console.log("Congratulations:", userinfo)
getGender((gender)=>{
    console.log("The sex is", gender)
});
});
});
});
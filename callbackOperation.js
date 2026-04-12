//Asynchronous callbacks operation 
function fetchProfile(callBack) {
console.log("Fetching Profile...");
    setTimeout(()=>{
        const profile= {
            name: "Joy Donatus",
            age: "25",
            gender: "Female",
            tall: true,
        }
        
        callBack(profile);
    },3000);
}
fetchProfile((profile)=>{
        console.log("Profile fetched...", profile)
    });
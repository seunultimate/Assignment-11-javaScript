//Error first call back pattern
function multiplynumbers (a, b, callback) {
    setTimeout(() => {
        if (b === 0) {
            callback("cannot multiply number with zero", null)

        } else {
            callback(null, a * b,)
        }
    },1000)
}
multiplynumbers (10, 2,(error, result)=>{
    if (error) {
        console.log("error", error)
    } else {
        console.log("result", result)
    }  
});
//Sometimes data is missing, using chaining to check if a data exist before accessing to avoid code crash
//Optional Chaining
const schoolData = {
    user: {
        profile: {
            email: "existemail@gmail.com"
        }
    }
};
console.log(schoolData.user.profile.email); //output existemail@gmail
//console.log(schoolData.user?.profile?.email?); //without optional chaining

//Nullish coalescing
const name = null;
console.log(name ?? "Guest");


//Combine both
const profile = {
    name: "Donatus",
    address: {
        city: "Lagos",
        contry: "Nigeria"
    }
};
const street = profile.address?.street ?? "No street Available for now"
console.log(street);

//Practices: API-like Data
const reply ={
    data: null
};
const result = reply.data?.profile ?? "No Profile Found";
console.log(result);

//Practises:Safe Access
const student ={
    name: "Omotara",
}
const hometown =student.data?.hometown ?? "hometown does not exist"
console.log(hometown);

//Practices:Function
const getuserName = user => {
    return user?.profile?.username ?? "No username found";
};
console.log(getuserName({}));

//Built a mini app
const users = [
    {name: "Oluwaseun Olajide", profile: {email:"makanjuoladavid45@gmail.come"}},
    {name: "Abisola"},
    {name: "Joy Donatus", profile: {email: null}}
];
const getEmail = users => users.map(user => user.profile?.email ?? "No email available")
console.log(getEmail(users));
//Object user
const javaScriptUser = {
    firstname: "Adefemi Gaius",
    lastName: "Sanyaolu",
    maidenName: "Oluwanisola",
    age: 45,
    Nationality: "Nigerian",
    gender: "male",
    address: {
        houseNumber: 12,
        street: "alen avenue",
        city: "Ikeja",
        state: "Lagos-State",
        continents: "West Africa",
        isTall: true,
    },
    abouts: ["Wed developer", "Engineer", "Programmer", "JavaScript specialist", "Mentor", "freelancer"],
    hobbies: ["reading", "coding", "music"]
};
console.log(javaScriptUser);



//Object Destructuring with remaining and default values
const {
    firstname: name,
    lastName,
    maidenName,
    age,
    Tribe = "Yoruba",
} = javaScriptUser;
console.log(name, lastName, maidenName, age, Tribe);



//Nested Destructuring
const {
    address: {
        houseNumber, street, city, state, continents
    },
} = javaScriptUser;
console.log(houseNumber, city, state, continents);



//Array Destructuring
const [
    firstAbout, secondAbout, thirdAbout, fourthAbout, fifthAbout, sixthAbout, seventhAbout = "Foothballer"
] = javaScriptUser.abouts;
console.log(firstAbout, seventhAbout);



//Function parameters destructuring
function displayUser({firstname, age, Nationality}) { 
    return `${firstname} is ${age} years, and a ${Nationality}`;
}
console.log(displayUser(javaScriptUser));



//Spread operator, clone objects
const userClone = { ...javaScriptUser};
console.log(userClone);



//Spread operator, merge objects
const extraInfo = {
    profession: "Backend Developer",
    children: 3,
};
const updatedUser = {
    ...extraInfo, ...javaScriptUser
};
console.log(updatedUser);



//Spread operators, clone and merge arrays
const newHobbies = [...javaScriptUser.hobbies, "traveling", "gaming", "movie"];
console.log(newHobbies);
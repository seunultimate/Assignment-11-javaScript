//Object Fundamentals
const user = {
    FirstName: "Oluwaseun David",
    LastName: "Olajide",
    age: 33,

    HomeAddress: {
        Numb: "N0 5",
        Street: "Heavens gate",
        City: "Auchi",
        State: "Edo-State",
        Country: "Nigeria",
    },
    hobbies: ["Reading, Playing Game, Music"],

    getFullName() {
        return this.FirstName + "" + this.LastName;
    },

    increamentAge() {
        this.age++; 
        return this.age;
    },

    addHobby(hobby) {
        this.hobbies.push(hobby);
        return this.hobbies;
    },

    getAddress() {
        return `${this.HomeAddress.Numb}, ${this.HomeAddress.Street}, ${this.HomeAddress.City}, 
        ${this.HomeAddress.State}, ${this.HomeAddress.Country}`;
    },
};

console.log(user.hobbies);
console.log(user.getFullName());
console.log(user.increamentAge());
console.log(user.addHobby("coding"));
console.log(user.getAddress());




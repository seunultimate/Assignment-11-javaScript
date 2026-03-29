const userRoles = new Map();
userRoles.set("Format", 2);
userRoles.set("Bisola", 50);
userRoles.set("Table", true);

console.log(userRoles.get("Bisola"));
console.log(userRoles.size);

const numbers =[1, 2, 6];
const doubleNum = numbers.map(num => num * 5);

console.log(doubleNum);
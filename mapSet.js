//declaring map()
const map = new Map();


//use cache with map
const userCache = new Map()
userCache.set(1, {lecturerName: "Mr Oriola", Department: "Computer Edu", age: 55});
userCache.set(2, {lecturerName: "Engr. Obasanya", Department: "Computer Engineering", age: 45});
userCache.set(3, {lecturerName: "Dr. Smart", Department: "Zoology", age: 65});
userCache.set(4, {lecturerName: "Prof. Sanyaolu M4ACE", Department: "Zoology", age: 65});
console.log(userCache.get(3));
console.log(userCache.has(1));
console.log(userCache.delete(4));
//loop through the map
userCache.forEach((value, key) => {
    console.log(key, value);
});


//Phone book using map()
const phoneBook = new Map();
phoneBook.set("David", "+2348168755123");
phoneBook.set("Gaius", "+2348108017417");
phoneBook.set("Joy", "+2347035824454" );

const findNumber = name => phoneBook.get(name);
console.log(findNumber("Gaius"));


//Word frequency Tracker (Using Map)
const countwords = text => {
    const words = text.toLowerCase().split(" ");
    const frequency = new Map ();

    words.forEach(word => {
        if(frequency.has(word)) {
            frequency.set(word, frequency.get(word) +1);
        } else {
            frequency.set(word, 1);
        }
    });
    return frequency;
};
console.log(countwords("Learning code code is hard in learning in hard way"));


//set
const set = new Set();

//remove duplicates using set
const newNumbers = [1, 2, 2, 4, 6, 8, 10, 12, 14, 14, 15, 15, 16, 18, 20];
const uniqueNumbers = [...new Set(newNumbers)];
console.log(uniqueNumbers);


//Unique Characters
const getUniqueChars = str => {
    return [...new Set(str)];
};
console.log(getUniqueChars("M4ACE"));

//SET operations
const setA = new Set ([1, 3, 4, 5, 7, 9]);
const setB = new Set ([2, 4, 6, 8, 9, 10]);
//UNION set
const union = new Set([...setA, ...setB]);
console.log(union);
//INTERSECTION set
const intersection = new Set (
    [...setA].filter(x => setB.has(x))
);
console.log(intersection);
//DIFFERENCE values in A but not in B


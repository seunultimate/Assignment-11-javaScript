//Convert to Arrow function
function greet(name) {
    return "Hello M4ACE" + name;
};
//arrow func
const greetings = name => "Hello M4ACE" + name;


//Convert function with no parameters
function waveGoodbye () {
    return "Bye";
};
const waveGoodbyebye = () => "Bye";


//Convert function with multiple lines
function calculate (a, c) {
    let sum = a + c;
    return sum * 2;
};
const calculator = (a, c) => {
    let sum = a + c;
    return sum * 2;
}


//fix the this problem
//const person = {
//   name: "Sanyaolu",
//    greet: () => {
 //       return "hello" + (this.name);
 //   }
//}; //problem in the arrow function here

const person = {
    name: "Sanyaolu",
    greet () {
        return "hello" + (this.name);
    }
}; //error fixed 


//Mini project: Student Manager App
//Create student data
const students = [
    {name: "Joy", score: 90, age: 20},
    {name: "Donatus", score: 84, age: 50},
    {name: "David", score: 98, age: 35},
    {name: "Prince", score: 31, age: 40},
    {name: "Gaius", score: 75, age: 20},
    {name: "Ifedayo", score: 55, age: 20},
];

//using arrow function to get all students names
const getNames = students => students.map(students => students.name);
console.log(getNames (students));

//Getting students that passed (score >=50)
const getPassedStudents = students => students.filter(student => student.score >= 50);
console.log(getPassedStudents(students));

//calculate average score
const getAverageScore = students => {
    const total = students.reduce((sum, student) => sum + student.score, 0);
    return total / students.length;
};
console.log(getAverageScore(students));

//Add a New Student
const addStudent = (students, newStudent) => [...students, newStudent];
const updatedStudents = addStudent(students, {name: "Gaius", score: 62, age: 18});
console.log(updatedStudents);


//Understanding this.
const studentManager = {
    students,
    getNames () {
        return this.students.map(student => student.name);
    },
    getPassed() {
        return this.students.filter(student => student.score >= 50);
    },
    getAverage () {
        const total = this.students.reduce ((sum, s) => sum + s.score, 0);
        return total / this.students.length;
    }
};

console.log(studentManager.getNames());
console.log(studentManager.getPassed());
console.log(studentManager.getAverage());
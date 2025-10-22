// 1.Create an object named student with properties:
// var obj={name:"nani",age:20,course:"MCA",marks:80}
// console.log(obj)


// // 2) Add a new property grade and modify the marks value
// var obj={name:"nani",age:20,course:"MCA",marks:80}
// obj.grade="B"
// obj.marks=80
// console.log(obj)

// // 3) Use Object.keys() and Object.values() to display property names and their values separately
// var obj={name:"nani",age:20,course:"MCA",marks:80}
// keys=Object.keys(obj)
// values=Object.values(obj)
// console.log("keys:" keys)
// console.log("values:"values)

// // 4) Use Object.entries() to print key–value pairs together in array format.
// var obj={name:"nani",age:20,course:"MCA",marks:80}
// enries=Object.entries(obj)
// console.log(enries)


// // 5) Create another object extraDetails and merge it into student using Object.assign().
var obj={name:"nani",age:20,course:"MCA",marks:80}
extra={city:"bangolore",rollno:"15"}
Object.assign(obj,extra)
console.log(obj)



// // 6) Use Object.hasOwnProperty() to check if the student object has the property course and address.
var obj={name:"nani",age:20,course:"MCA",marks:80}
console.log(obj.hasOwnProperty("course"))
var obj={name:"nani",age:20,course:"MCA",marks:80}
console.log(obj.hasOwnProperty("address"))


// // 7) Make a copy of the student object and apply Object.freeze() on it.
// //  Try adding or modifying properties and observe that no changes happen.
// student={name:"nani",age:23,course:"mca"}
// Object.freeze(student)
// student.name="tharun"
// student.age=24
// console.log(student)
// delete student.name
// console.log(student)

// //8.Apply Object.seal() on another copy of the object and verify that:
// student={name:"nani",age:23,course:"mca"}
// console.log(student)
// Object.seal(student)
// student.name="tharun"
// console.log(student)
// student.age=24
// console.log(student)
// delete student.name
// console.log(student)


//seal 
const student = {
  name: "Tharun",
  age: 21
};

Object.seal(student);

student.age = 25;           // ✅ can modify
student.city = "Hyderabad"; // ❌ can't add
delete student.name;        // ❌ can't delete

console.log(student);



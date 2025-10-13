// array destructing
// var per=["nani",23,"white",6]
// console.log(fest);
// var[ name, age,color,]=per;
// console.log(name)
// console.log(age)

// object destructing

// var person={name:"nani",age:23,height:6}
// console.log(person)

// var{name,age,height}=person
// console.log(name)
// console.log(age)

// using spreading

var person={name:"nani",age:23,height:6}
// console.log(person)

var{name,...per}=person
// console.log(name)
console.log(name,per)


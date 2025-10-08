var nums=[1,2,3,4,5]
// console.log(nums)

// spreadin-----"..."
// console.log(...nums)

// cloning 
var num2=[...nums]
// console.log(num2)

// spreading with clone

// console.log(...num2)

// cocate dictinaries with spread operator
var obj1={a:1,b:2}
// console.log(obj1)
// with spreading
var obj2={c:3,d:4}
// console.log(obj2)

var obj3={...obj1,...obj2}
console.log(obj3)



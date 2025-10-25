/* //Anonymous function-- the fun that has no function name 
//normal anonymous
// var place=function (){
//     console.log("nani")
// }
// place()
// //parameterized
// var place=function (a,b){
//     console.log("nani")
//     console.log(a+b)
// }
// place("tharun","nani")
// //return
// var place=function (){
//     return "nani"
// }
// console.log(place())
// //anonymous arrow function
// var nani = (() => {
//   console.log("Tharun");
// });

// nani();


// //parameterized arrow anonymous function
// var nani = ((a,b) => {
//   console.log(a+b);
// });

// nani("tharun","nani");
*/

//callback functions
function print(){
  console.log("nani")
}
function sum(a,b){
  var c=a+b
  console.log(c)
}
function double(f){
  console.log(f);
  //f()

}
double(print(),sum(3,4))

//callback functions more arguments
function print(){
  console.log("nani")
}
function sum(a,b){
  var c=a+b
  console.log(c)
}
function double(f, a, b){
  console.log(f);
  console.log(a+b)
  //f()

}
double(print(),sum(3,4),33,44)

//async fumction---with asynch keyword
async function fetchData() {
  try {
    let response = await fetch("https://api.github.com/users/tharun");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}


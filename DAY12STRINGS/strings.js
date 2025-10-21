//1 charAt() #it shows index of char
var place="warangal"
// console.log(place.charAt(0))
// console.log(place.charAt(1))

//2charCOdeAt() #it shows ascii values
// console.log(place.charCodeAt("0"))
// console.log(place.charCodeAt("w"))

//3 at()
// console.log(place.at(-3))
// console.log(place.at(0))

// //4replace #only one value replaced at nani place to therun
// var str1="i like nani, nani is a good boy"
// var str2=str1.replace("nani","tharun")
// console.log(str2)
var place="warangal"
console.log(place.replace("a","A"))
console.log(place.replaceAll("a","A"))



// //5 replace all---all places name change at nani
// var str1="i like nani, nani is a good boy"
// var str2=str1.replaceAll("nani","tharun")
// console.log(str2)


// //6 lastIndexOf()---last time index provide it only
// var nani="tharunnani"
// console.log(nani.lastIndexOf("n"))


// // //7 concat()
// var st1="Tharun"
// var st2="Nani"
// console.log(st1.concat(st2))
// console.log(st1.concat(" "+st2))


// //8 includes()
// var nam="Tharun"
// console.log(nam.includes("T"))

// //9 indexof()
// var nam="Tharun"
// console.log(nam.indexOf("h"))

// //10 length
// var nam="Tharun"
// console.log(nam.length)

// //11 toUpperCase()
// var nam="Tharun"
// console.log(nam.toUpperCase())
// //12 toLowerCase()
// var nam="Tharun"
// console.log(nam.toLowerCase())

// //13 trim---spaces are removed
// var food="    biryani       "
// // console.log(food)
// // console.log(food.trim())
// //14 trimStart()--leading/start space removed
//  console.log(food.trimStart())
// //15 trimEnd---ending/trailing spaces are removed
//  console.log(food.trimEnd())


// //16 slice()--
// var n="tharunani"
// console.log(n.slice(2,6))

//17 substring()--same as slice
// console.log(n.substring(2,6))

// //18 tostring()
// num=123;
// console.log(typeof(num))
// // console.log(num.toString())
// console.log(typeof(num.toString()))

//19 padStart() --start side added and legth provide
num="1"
console.log(num.padStart(6,"3"))

//20 padEnd()--ending side added
console.log(num.padEnd(6,"3"))





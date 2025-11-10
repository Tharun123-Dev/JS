// //1 count vowels
// function nani(strs){
// let n=(strs.length)
// console.log(n)
// count=0
// // for(i=str){
// //     console.log(i)
// // // }
// for(i=0;i<n+1;i++){
    
//    if ("aeiou".includes(strs[i])){
//      count++
//    }

// }
// console.log(count)
// }
// nani("tharunanai")

// //2

// str1="aabbccde"
// str2={}
// for (let ch of str1){
//     if (ch in str2){
//        str2[ch]++

//     }
//     else{
//         str2[ch]=1
//     }

// }
// console.log(str2)

//3 fibonocci

// a=0
// b=1
// fib=[]
// for(i=0;i<6;i++){
//     fib.push(a)
    

// // temp=a
// // a=b
// // b=temp+b
//  [a, b] = [b, a + b];

// }
// console.log(fib)


//simple method
// let a = 0;
// let b = 1;

// for (let i = 0; i < 6; i++) {
//   console.log(a);
//   [a, b] = [b, a + b];  // Swapping and adding in one line
// }


// //4 is empty object
// function isEmptyobj(obj){
//     for(let key in obj){
//         if(obj.hasOwnProperty(key)){
//            return false
//         }
//     }
//     return true
// }
// console.log(isEmptyobj({}));          
// console.log(isEmptyobj({ a: 1 }));     
// console.log(isEmptyobj({ name: "" }));

// //5 sum of digits for came single digit
// function root(n){
// while(n>=10){
//     let sum=0;

// while (n > 0) {
 
//   let ls = n % 10;
//   sum = sum + ls;
//   n = Math.floor(n / 10);
// }
// n=sum
// }
// return n;
// }
// console.log(root(49)); 

// //6 sum of two smallest positive numbers
// s="Hello world!"
// k=""
// for(let ch of s){
//   k=ch+k
// }
// console.log(k) 
// function reverseWords(str) {
//   let words = str.split(" ");
//   let result = "";

//   for (let i = 0; i < words.length; i++) {
//     let rev = words[i].split("").reverse().join("");
//     result += rev + " ";
//   }

//   return result.trim(); // remove last space
// }

// console.log(reverseWords("Hello world!"));
// // Output: olleH !dlrow

// //7 foherin F=(c * 9/5)+32

// function fohtocel(cel){
//    let forhe=[];
//    for (let i=0;i<cel.length;i++){
//     let f=(cel[i]*9/5)+32;
//     forhe.push(f)
//    }
//    console.log(forhe)
// }
// fohtocel([0,20,30,40])
 

// //8 find the  non repeated character
// let a = "aabbcdda";
// let ca = {};

// for (let ch of a) {
//   if (ch in ca) {
//     ca[ch] += 1;
//   } else {
//     ca[ch] = 1;
//   }
// }

// // print characters that appear only once
// for (let ch in ca) {
//   if (ca[ch] === 1) {
//     console.log(ch);
//   }
// }


// //process2
// let a = "aabbccddah";
// for (let i = 0; i < a.length; i++) {
//   if (a.indexOf(a[i]) === a.lastIndexOf(a[i])) {
//     console.log(a[i]);
//   }
// }


// //9  remove falsy numberrs
// function removefalsy(arr){
// return arr.filter(Boolean)
// }
// console.log(removefalsy([0,"",5,false,"hello",null,42]))

// //process 2
// function removeFalsy(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]) {          // only truthy values pass this test
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// console.log(removeFalsy([0, "", 5, false, "hello", null, 42]));

// //10 Q10. Swap two variables without a temp (using destructuring)
// let a=1;
// let b=2;
// [a,b]=[b,a];
// console.log(a,b);

// //swaping
// a=10
// b=5
// a=a+b
// b=a-b
// a=a-b

// console.log(a,b)



//11 sum of smallest numbers possitive

// arr = [1, 3, 2, -1, -4, -2, 9];
// let small = Infinity;

// for (ch of arr) {
//   if (ch > 0 && ch < small) {
//     small = ch;
//   }
// }

// console.log("Smallest positive:", small);


// 2
let arr = [1, 3, 2, -1, -4, -2, 9];

let first = Infinity,
 second = Infinity;

for (let ch of arr) {
  if (ch < first) {
    second = first;
    first = ch;

  } else if (ch < second && ch !== first) {
    second = ch;
  }
}
console.log("Two smallest numbers:", first, second);






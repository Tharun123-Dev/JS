     // 1. Create an array of 5 colors and print the second and last color.//
// var colors=["red","blue","white","pink","yellow"]
// console.log(colors[1],colors[4])

// 2. Create an array of numbers and replace the first element with 100.
// nums=[1,2,3,4,5]
// nums[0]=100
// console.log(nums)

// //  3. Create an array with mixed data types (string, number, boolean). Print the type of each element using a loop.
// arr=["nani",1,true]
// for (let i of arr){
//     console.log(typeof i)
// }

// // 4. Create a nested array and print the inner array’s second element.
// nest=[[1,"nani",3,4,5]]
// console.log(nest[0][1])

//       5. Create an array using the Array constructor and display its length.
// arr=[1,2,3,4,5]
// console.log(arr.length);

//  6. Create an array of fruits and add one fruit at the end using push().
// fruits=["apple","banana","grapes"]
// fruits.push("orange")
// console.log(fruits)

// // 7. Remove the last element from the array using pop() and display the updated array.
// fruits=["apple","banana","grapes"]
// fruits.pop()
// console.log(fruits)

// // 8. Add two new fruits at the beginning using unshift().
// fruits=["apple","banana","grapes"]
// fruits.unshift("orange","cherry")
// console.log(fruits)
// //  9. Remove the first element using shift() and print the new array.
// fruits=["apple","banana","grapes"]
// fruits.shift()
// console.log(fruits)

// //   10. Use a combination of push() and pop() to keep only 3 elements in your array.
// fruits=["apple","banana","grapes"]
// fruits.push("orange")
// fruits.pop()
// console.log(fruits)

// 11. Create an array [10, 20, 30, 40, 50] and use slice() to extract [20, 30].
// var arr=[10,20,30,40,50]
// var sliced=arr.slice(1,3);
// console.log(sliced)

// // 12. Using the same array, use splice() to replace 30 with 35.
// var arr=[10,20,30,40,5]
// arr.splice(2,1,35);
// console.log(arr);

// // 13. Insert 25 before 30 using splice().
// var arr=[10,20,30,40,50]
// arr.splice(2,0,25)
// console.log(arr)

// //  14. Remove the last two elements using splice().
// var arr=[10,20,30,40,50]
// arr.splice(2,1)
// console.log(arr)

// // Use slice() to copy the first three elements into a new array.
// arr=[1,2,3,4,5]
// arr2=arr.slice(0,3)
// console.log(arr2)

// //  16. Create two arrays [1,2,3] and [4,5,6] and merge them using concat().
// let arr1=[1,2,3]
// let arr2=[4,5,6]
// let merge=arr1.concat(arr2)
// console.log(merge)

// //  17. Convert an array of names into a string separated by commas
// //  using join().
// let name=["nani","tharun","akhil"]
// arr=name.join(",")
// console.log(arr)

// 18. Use toString() on an array and display the output.
// let name=["nani","tharun","akhil"]
// console.log(name.totring())

// //  19. Merge three arrays using concat() and find the length of the new array.
// arr1=[1,2,3]
// arr2=[4,5,6]
// arr3=[7,8,9]

// a=arr1.concat(arr2,arr3)
// console.log(a)
// console.log(a.length)

// // 20
// var arr=["warngal","mulugu","hyd"]
// a=arr.join("-")
// console.log(a)

// //    21. Create an array ['apple', 'banana', 'orange', 'banana', 'grape'] and find the first index of 'banana'.
// arr= ['apple', 'banana', 'orange', 'banana', 'grape']
// console.log(arr.indexOf('banana'))


// //   22. Find the last index of 'banana' using lastIndexOf().
// arr= ['apple', 'banana', 'orange', 'banana', 'grape']
// console.log(arr.lastIndexOf('banana'))

// // Check if 'mango' exists in the array using includes().
//  arr= ['apple', 'banana', 'orange', 'banana', 'grape','mango']
//  console.log(arr.includes("mango"))

// //   24. Write code to check if a specific number exists in an array, if not, push it.
// arr=[1,2,3,4,5,6]
// a=arr.includes(7)
// console.log(a)
// arr.push(7)
// console.log(arr)

// // 25
// arr= ['apple', 'banana', 'orange', 'banana', 'grape','mango']
//  if (arr.includes("kiwi")){
//      console.log("exists")
//  }
//  else{
//      console.log("not exists")
//  }

// // 26. Create an array [5, 12, 8, 130, 44] and find the first number greater than 10.
// arr=[5,12,8,130,44]
// console.log(arr.find(function(x){return x>10}))

// // .   27. Use findIndex() to locate the position of the first element greater than 50.
// arr=[5,12,8,130,44]
// console.log(arr.findIndex(function(x){return x>50}))

// //  28. Find the first even number in an array using find().
// arr=[5,12,8,130,44]
// console.log(arr.find(function(x){return x%2==0}))

// // 29 first odd index
// arr=[1,5,12,8,130,44]
// console.log(arr.findIndex(function(x){return x%2!=0}))

// // .   30. Use find() to search for a string longer than 5 characters in an array of words.
// arr=["nani","tharunani","naveeen","tharun"]
// console.log(arr.find(function(x){return x.length>5}))


// //  31. Sort an array [5,3,8,1,2] in ascending order.
// a=[5,3,8,1,2]
// a.sort()
// console.log(a)
// //  32. Reverse the sorted array and print it.
// a=[5,3,8,1,2]
// a.reverse()
// console.log(a)

// //   33. Use copyWithin() to copy first two elements to the end of an array [10,20,30,40,50].
// arr=[10,20,30,40,50]
// arr.copyWithin(3,0,2)
// console.log(arr)

// //  34. Flatten a nested array ['a','b',['c','d'],['e',['f']]] using flat().

// arr= ['a','b',['c','d'],['e',['f']]]
// a=arr.flat()
// console.log(a)

// //  35. Use flat() with depth 2 to flatten ['x',['y',['z',['w']]]]].
//    arr=['x',['y',['z',['w']]]]
//    new_arr=arr.flat(2)
//    console.log(new_arr)

// //  36. Create an array of 10 numbers and print its length
// arr=[1,2,3,4,3,5,6,7,4,4]

// console.log(arr.length)

//  37. Remove the last element using pop() and print the new length.

// arr=[1,2,3,4,3,5,6,7,4,4]

// console.log(arr.length)
// arr.pop()
// console.log(arr.length)

// // 38. Use array destructuring to extract first three elements into variables.
// arr=[1,2,3,4,3,5,6,7,4,4]
// let[first, second,third,...all]=arr
// console.log(first,second,third)

//  39. Create a constant array and modify one element (to show arrays are mutable).
const arr=[1,2,3]
arr[1]=200
arr.push(7)
console.log(arr)

// //  40. Combine multiple array methods (push, splice, sort, reverse) to manipulate data dynamically.
// let arr=[2,5,6,7,8,4,5]
// arr.push(7)
// console.log(arr)
// arr.splice(1,2)
// console.log(arr)
// arr.sort()
// console.log(arr)
// arr.reverse()
// console.log(arr)























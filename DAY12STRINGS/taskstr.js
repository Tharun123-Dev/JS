//1
var str = 'javascript';

console.log("char at 4:",str.charAt(4));    // Output: s
console.log("ASCII at 2: ",str.charCodeAt(2)); // Output: 118
console.log("last char at :",str.at(-1));        // Output: t

//2

var str1="hello"
var str2="world"
console.log("combined string:",str1.concat(str2))
console.log(str1.includes("lo"))
console.log("first index of l :",str1.indexOf("l"))
console.log("lastr index of :",str1.lastIndexOf("l"))

//3
str=" javaScript Methods "
console.log("original: ",str)
console.log("trimmed:",str.trim())
console.log("uppercase:",str.toUpperCase())
console.log("lowercase: ",str.toLowerCase())
console.log("trimstart: ",str.trimStart())
console.log("trimend:",str.trimEnd())

//4
str="learnig JavaScript is fun!"
console.log("using slice:",str.slice(8,19))
console.log("substring:",str.substring(0,8))

//5
a="50"
console.log("padstart:",a.padStart(5,"0"))
console.log("padend:",a.padEnd(10,"*"))

//6
str="i love javascript, javascript is powerful!"
console.log("replacing :",str.replace("javascript","js"))
console.log("replacing all:",str.replaceAll("javascript","js"))
var st1="apple"
var st2="banana"
console.log(st1.localeCompare(st2))

//7
var str = " JS is awesome! ";

var analysis = {}; // create empty object

analysis.length = str.length;
analysis.firstChar = str.charAt(0);
analysis.lastChar = str.at(-1);
analysis.upperCase = str.toUpperCase();
analysis.lowerCase = str.toLowerCase();
analysis.includesJS = str.includes('JS');
analysis.sliced = str.slice(0, 5);
analysis.trimmed = str.trim();

console.log(analysis);
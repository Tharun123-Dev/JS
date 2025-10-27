function nani (a){
 if (a >= 90 && a <= 100) {
    console.log("grade A");
 } 
 else if (a <90 && a >= 85){
    console.log("grade b")
 }
 else if (a <85 && a >= 60){
    console.log("grade c")
 }
 else if (a <60 && a >= 35){
    console.log("grade d")
 }
 else{
    console.log("fail")
 }
}
nani(Number(prompt("enetr a number: ")))
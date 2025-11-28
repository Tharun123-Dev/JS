// //asynch
// console.log("step1")
// setTimeout(()=>{
//     console.log("step2")
// },2000)
// console.log("step 3")


// //call back is asynch function
// function Homework(sub,callback){
//     setTimeout(()=>console.log("sub"+sub+"homework finished"),2000)
//     // console.log("sub"+sub+"homework finished")
//     callback()
// }
// function finished(){
//     console.log("homework finished")
// }
// Homework("maths",finished)

// //example for the callbackhell

// setTimeout(()=>{
//     console.log("nani1")
//     setTimeout(()=>{
//         console.log("nani2")
//         setTimeout(()=>{
//             console.log("nani3")
//             setTimeout(()=>{
//                 console.log("nani4")
//             },2000)
//         },2000)
//     },2000)
// },2000)

function boilwater(callback){
   setTimeout(()=>{
    console.log("boiling the water")
    callback()
   },5000)
}
function addingmasala(callback){
   setTimeout(()=>{
    console.log("adding masala")
    callback()
   },2000)
}
function addextraingre(callback){
   setTimeout(()=>{
    console.log("add some extra ingredients")
    callback()
   },2000)
}
function serve(){
   setTimeout(()=>{
    console.log("serving")
   },2000)
}
boilwater(()=>{
    addingmasala(()=>{
        addextraingre(()=>{
            serve()
        })
    })
})




function boilMilk(next) {
    setTimeout(() => {
        console.log("Boiling milk...");
        next();
    }, 3000);
}

function addTeaPowder(next) {
    setTimeout(() => {
        console.log("Adding tea powder...");
        next();
    }, 1500);
}

function addSugar(next) {
    setTimeout(() => {
        console.log("Adding sugar...");
        next();
    }, 1000);
}

function serveTea() {
    setTimeout(() => {
        console.log("Tea is ready and served!");
    }, 1000);
}

function prepareTea() {
    boilMilk(() => {
        addTeaPowder(() => {
            addSugar(() => {
                serveTea();
            });
        });
    });
}

prepareTea();

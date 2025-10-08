/* creation of object*/
// var person={}
// console.log(person)
/* enter values */
// var person={name:"tharun",age:21}
// console.log(person)

// another way
var person=new Object()
person.name="nani";
// console.log(person)
person.age=30;
person.weight=60;
person.place="hyd";
// console.log(person);

// getting values also
// console.log(person.place)

// deleting the object
var emp={name:"nani",id:1,age:21,place:"hyd"}
delete emp.id;
// console.log(emp)



// example car create arr and object array literals
var arr=["bmw",2024,350,30]
// console.log(arr)


// creating with new keywod
var car=new Array("bmw",2024,350,30)
// console.log(car)
// adding cars
var cars=[]
cars[0]="toyoto"
cars[1]="bmw"
cars[2]="ford"
// console.log(cars)

// another method adding using of
let cars=Array.of("jeep","ford");
// console.log(cars)


// object creation for car ----object literals
var car={name:"bmw",mpdel:2025,cc:500,mileage:20}
// console.log(car)
// object with new keywods
var cars=new Object()
cars.name="bmw";
cars.model=2025;
cars.mileage=20;
// console.log(cars)
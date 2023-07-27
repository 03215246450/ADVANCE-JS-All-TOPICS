//  // // //====================topics======================
//  // // //====================Advance JS==================
// //  var , let , const =========== 
// //  reinitialize
// //  redeclare
// //  hoisting
// //  scoping
// //  template literal
// //  ternary operators
// //  Circuits
// //  Spread Operators & Rest operators in array and objects
// //  Destructuring of Array & Object
// //  Pass By value and Pass By Reference
// //   Object Methods
// //  a. Keys
// //  b. Values
// //  c. Freeze
// //  d. Entries
// // // //====================Advance JS==================
// // // //====================topics======================






// // =============var============
// var   reinitialize (y)
// var   declare (y)
// var   hoisting (y)
// var   block scope (y)


// // ===============let==============
// let   reinitialize (n)
// let   declare (y)
// let   hoisting (n)
// let   block scope (y)


// // =============const=================
// const   reinitialize (n)
// const   declare (n)
// const   hoisting (n)
// const   block scope (y)



// // ============template literal==========

// let firstName = "Ahsan"
// let LastName = "Ansari"
// let Age = 15
// let total = `My name is ${firstName} ${LastName}, and i am ${Age} years old` 
// console.log(total);

// let num = 4
// let num2 = `the square of this num is ${num * num + num * num - (num * num) }`
// console.log(num2);



// //=============ternary operators===========


// let age = 12
// let studentCard = true



// if (age >= 18) {
//     console.log("Allowed")
// } else if (studentCard) {
//     console.log("Allowed on Student Card");
// } else {
//     console.log("not Allowed");
// }


// age >= 18
// ? console.log("allowed")
// : studentCard 
// ? console.log("Allowed on Student Card")
// : console.log("NOT ALLOWED");


// let marks = 60
// let Grade = marks >= 60 ? "B" : ""
// console.log(Grade);




// //=============Circuts===========

// let a = false

// let b = false || "abs"
// console.log(b);




// // // ==== Spread Operators in objects  ===== 

// let obj = {
//     name : 'Ahsan',
//     id : "ahxnadya",
// }

// let obj2 = {
//     ...obj ,
//     inst : "SAIMS"
// }

// console.log(obj2);




// // // ==== rest Operators in array  ===== 

// let arr = [1,2,,3,4,7]

// let arr2 = [...arr, "A","B","c"]

// console.log(arr2);



// // // ==== Destructuring of Array ===== 

// let arrdes = [1,2,3,["a","b","c",[true , false]]]

// let [num1  , ...restnum] = arrdes

// let [ , , [a, b, c, [trueValue, falseValue]]] = restnum;

// console.log(c);
// console.log(trueValue);
// console.log(restnum);



// // // ==== Destructuring of Objects ===== 


// let obj = {
//     name : "Ahsan" ,
//     id : 123853.2 ,
//     inst : "SAIMS" , 
//     Address : {
//         city : "karachi",
//         province : "sindh",
//         coordinates : {
//             latitude : 13851 ,
//             longitude : 15631
//         }
//     }
// }


// let {name , id , inst , Address } = obj 
// let {Address : {city} } = obj
// let { Address : {coordinates} } = obj

// console.log(name);
// console.log(inst);
// console.log(Address);
// console.log(city);
// console.log(coordinates);


// // // ========= Pass By value ========= 


// let val1 = "hello"
// let val2  = val1
// val2 = "helo world"

// console.log(val1);
// console.log(val2);



// // // ========= Pass By refrence in array =========

// let originalArray = [1, 2, 3];
// let copiedArray = originalArray;

// copiedArray.push(4);

// console.log(originalArray); 
// console.log(copiedArray);   



// // // ========= Pass By refrence in Object =========


// let originalObject = { value: 10 };

// let referenceObject = originalObject;

// referenceObject.value = 20;

// console.log(originalObject);
// console.log(referenceObject); 



// // //========== Object Methods===========
// // //========== a. Keys==================
// // //========== b. Values================
// // //========== c. Freeze================
// // //========== d. Entries===============
  

// let obj = {
//     name : "Ahsan" ,
//     id : 15627 ,
// }

// let objkeys = Object.keys(obj)
// let objvaluse = Object.values(obj)
// let objenteris = Object.entries(obj)
// console.log(objkeys);
// console.log(objvaluse);
// console.log(objenteris);



// const person = {
//     name: "John",
//     age: 30
//   };
  
  
//   Object.freeze(person);

//   person.name = "Jane"; 
//   person.city = "New York"; 
//   delete person.age; 
  
//   console.log(person); 
  












// function createFunctions() {
//     let functions = [];
//     for (var i = 0; i < 3; i++) {
//       functions.push(function() {
//         console.log(i);
//       });
//     }
//     return functions;
//   }
  
//   const funcs = createFunctions();
  
//   funcs[0](); 
//   funcs[1](); 
//   funcs[2](); 

// king();
// function king(){
//   console.log("Radhey Radhey KingSahab🙏")
// }

// console.log(a); //general hoisting (undefined)
// var a = 11111;

// console.log(b) // Dead Temporal Zone (special type of error in case of let and const)
// let b = 111111;

// ---------------------------------------
//Spread syntax

// Ex-1
// function multiply(a, b){
//   return a*b;
// }

// const arr = [2,5,3]
// const mul = multiply(...arr)
// console.log(mul)


//Ex-2
// const arr = [1,2,3];
// const obj = {...arr};

// console.log(obj);


//---------------------------------------------

// ## Rest Parameters

function sumOfAllNumbers(...args){
  let sum = 0;

  for(let num of args){
    sum = sum + num;
  }
  return sum;
}

const resultOfSum = sumOfAllNumbers(1,2,3,4,5);
console.log(resultOfSum);





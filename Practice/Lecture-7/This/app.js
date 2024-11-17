// // ----- ## Note: This value deffers on how its call ##----------

// 1) Direct Calling          ------> window object
// 2) Method/Object Calling   ------> object inside which method is available 
// 3) Constructor Calling     ------> newly created object
// 4) Indirect Calling        ------>
// 5) Arrow Function Calling  ------> depend on the parent this keyword (if parent deffers obj,window then same this value here)

// -----------------------------------------
// // #1) direct calling

// function sandy(){
//     console.log(this); // window object
// }

// sandy();




// -------------------------------------------
// #2) method/object calling

// // Ex-1 =>
//  let obj = {
//     name: "Sandeep Yadav",
//     color: "white",
//     fn: function(){
//         console.log(this); // object
//     }
// }

// obj.fn(); // method calling

// // Ex-2 =>

// let obj = {
//   name: "Sandeep Yadav",
//   color: "white",
//   fn: function () {
//     console.log(this); // object -> this value reffers on boject

//     let sam = function(){
//         console.log(this); // window -> this value reffers on boject
//     }
//     sam();
//   },
// };

// obj.fn();

//// Ex-3

// let obj = {
//   name: "Sandeep Yadav",
//   color: "white",
//   fn: function () {
//     let sam = function () {
//       console.log(this); // window -> this value reffers on boject
//     };
//     sam();
//     console.log(this); // window -> this value reffers on boject becoz of direct calling
//   },
// };

// let ans = obj.fn;
// ans();





//// -------------------------------------------
//// #3 constructor calling 

// function Sam(){
//     this.naam = "Sandeep Yadav";
//     this.age = 21;
// }

// let s1 = new Sam(); // here line this points on s1 object
// let s2 = new Sam(); // here line this points on s2 object




//// <------------------------------------------->
//// #5 arrow function calling  -> depends on the parent

///// #Ex-1
//  let obj ={
//     a:10,
//     fn: () => {
//         console.log(this); // window -> becoz his parent(obj) in global execution context so obj points window then fn arrow function points on window
//     }
//  }

//  obj.fn();

///// Ex-2
 
// let obj = {
//     a: 10,
//     fn: function(){
//         console.log(this); // obj
//         let ans = function(){
//             console.log(this); // window
//             let ans2 = ()=> {
//                 console.log(this); // window
//             }
//             ans2();
//         }
//         ans();
//     }
// }

// let output = obj.fn();

//// Ex-3

// let obj = {
//     a: 10,
//     fn: function(){
//         console.log(this); // window
//         let ans = function(){
//             console.log(this); // window
//             let ans2 = ()=> {
//                 console.log(this); // window
//             }
//             ans2();
//         }
//         ans();
//     }
// }

// let output = obj.fn;
// output();

//// Ex-4 

let obj = {
    a: 10,
    fn: function(){
        console.log(this); // obj
        let ans = ()=> {
            console.log(this)// obj
        }
        ans();
    }
}

obj.fn();
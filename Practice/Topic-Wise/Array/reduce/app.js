// ----------- Reduce Method ------------------------

// ~~~~~~~~~~~ Create Custom Reduce Function~~~~~~~~~~~
const customReduce = (arr, cb, initialValue)=> {
    let accumulator = initialValue !== undefined ? initialValue : arr[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }

  return accumulator;
};

// ==============================================

// Q. sum of all the numbers

// const arr = [1,2,3,4,5]

// // const result = arr.reduce((acc, curr) => {
// //     acc = acc + curr;
// //     return acc
// // }, 0)

// function calSum(arr){
//    let result = arr.reduce((acc, curr) => {
//         acc = acc + curr
//         return acc
//     }, 0)
//     return result
// }

// const result = calSum(arr)
// console.log(result)

// ------------------------------------
// Q.  Implement a function named sumOfSquares that calculates the sum of squares of all elements in an array using reduce method.
// function sumOfSquares(arr) {
//     const result = arr.reduce((acc, curr) =>{
//         acc = acc + curr*curr
//         return acc
//     }, 0)
//     return result
// }

// const arr = [1,2,3,4]
// const output = sumOfSquares(arr)
// console.log(output)

// ------------------------------------
// Q. Print total marks for students with marks greater than 60 after 20 marks have been added to those who less than 60
// const students = [
//     {name: "Ankit", rollNumber: 31, marks: 78},
//     {name: "Sandeep", rollNumber: 11, marks: 97},
//     {name: "Alice", rollNumber: 16, marks: 25},
//     {name: "John", rollNumber: 7, marks: 59},
// ]

// marks < 60 ---- add 20 marks
// const updatedMarks = students.map((student) => {
//     if(student.marks < 60){
//         student.marks += 20
//     }
//     return student
// })
// console.log(updatedMarks)

// // filter marks > 60 // take who greater than 60
// const filteredMarks = updatedMarks.filter( student => student.marks > 60)
// console.log(filteredMarks)

// // total marks
// const totalMarks = filteredMarks.reduce((acc, curr) => {
//     acc = acc + curr.marks
//     return acc
// }, 0)
// console.log(totalMarks)

// # --------Using Chaining of Map, Filter and Reduce (TotalMarks) -------------
// const totalMarks = students.map((student) => {
//     if(student.marks < 60){
//         student.marks += 20
//     }
//     return student
// }).filter( student => student.marks > 60).reduce((acc, curr) => {
//         acc = acc + curr.marks
//         return acc
//     }, 0)
// console.log(totalMarks)
// Q. Given an array numbers, filter out even numbers, square each remaining number, and then calculate the sum of all squared numbers using map, filter, and reduce methods.

// const numbers = [1, 2, 3, 4, 5, 6]
// function sumOfSquaredEvens(numbers) {
//     //Write your code
// return numbers.filter(num => !(num%2))
// .map(num => num*num)
// .reduce((acc, curr) =>{
//     acc += curr
//     return acc
// }, 0)

//     }

//     console.log(sumOfSquaredEvens(numbers));

// -----------------------------------

// Q. Calculate the sum square value who less than 9

// function calSum(arr){
//  return arr.map(num => num*num).filter(num => num<9).reduce((acc, curr)=> {
//     return acc= acc+curr
//   }, 0)
// }

//-----------------------------------------
//Q. find user name who have age >= 18

// function getUser(arr){
//   return arr.filter(obj => obj.age >= 18).map(user => user.name)

// }

// const user =[
//   {name: "Alice", age: 16},
//   {name: "Bob", age: 24},
//   {name: "Aman", age: 19},
//   {name: "Sandy", age: 17},
// ]

// console.log(getUser(user))

// ----------------------------------------
// Q. Calculate the sum of numbers who's number square value less than 9
// function calSqrtSum(arr){
//   return arr.filter(num=> num*num<=9).reduce((acc, curr) => {
//     return acc = acc + curr;
//   }, 0)
// }

// console.log(calSqrtSum([1,2, 3, 4,10,15]))

//-------------------------------------------------------------
//Q. filter common element from array1 and array2
// function findCommonElements(arr1, arr2) {
//   return arr1.filter(element => arr2.includes(element));
// }
// const arr1 = [1,2,3,4,5];
// const arr2 = [3,4,5,6,7,8];

// console.log(findCommonElements(arr1,arr2));
//----------------------------------------------------------------------------
//Q. Find the Frequency of each elements

// ## method 1
// function countOccurrences(array) {
//   return array.reduce((accumulator, currentValue) => {
//       // If the element is already in the accumulator, increment its count
//       if (accumulator[currentValue]) {
//           accumulator[currentValue]++;
//       } else {
//           // Otherwise, initialize it with a count of 1
//           accumulator[currentValue] = 1;
//       }
//       return accumulator; // Return the updated accumulator for the next iteration
//   }, {}); // Start with an empty object as the accumulator
// }

// const data = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
// const occurrences = countOccurrences(data);
// console.log(occurrences); 
// Output: { 1: 1, 2: 2, 3: 3, 4: 4 }

// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// const count = fruits.reduce((accumulator, fruit) => {
//   accumulator[fruit] = (accumulator[fruit] || 0) + 1;
//   return accumulator;
// }, {});

// console.log(count);
//
 //// Output: { apple: 3, banana: 2, orange: 1 }


 

 // =====================================================
 // ~~~~~~ Remove All Adjacent Duplicates In String ~~~~~~~~~~

 var removeDuplicates = function(s) {
  class Stack{
      constructor(length){
     this.size= length-1
     this.top=-1;
     this.stackArr=[]
      }
  
      push(data){
          if(this.top<this.size){
              this.top++
              this.stackArr[this.top]=data
          }
      }
      pop(){
          if(this.top>=0){
              let x = this.stackArr[this.top]
              this.top--
              return x
          }
      }
      isEmpty(){
          return this.top==-1
      }
  
      peek(){
          return this.stackArr[this.top]
      }
  }
  
       let new_s=""
     let ola = new Stack(s.length)
     ola.push(s[0])
  
     for(let i=1;s.length>i;i++){
     if(ola.peek()==s[i]){
      ola.pop()
     }
     else{
      ola.push(s[i])
     }
     }
  
     while(!ola.isEmpty()){
      new_s=ola.pop()+new_s
     }
     return new_s
  };

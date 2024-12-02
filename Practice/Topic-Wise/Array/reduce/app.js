// ----------- Reduce Method ------------------------

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
const students = [
    {name: "Ankit", rollNumber: 31, marks: 78},
    {name: "Sandeep", rollNumber: 11, marks: 97},
    {name: "Alice", rollNumber: 16, marks: 25},
    {name: "John", rollNumber: 7, marks: 59},
]

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

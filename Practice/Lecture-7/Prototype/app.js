// constructor function
// function Samarth(naam, color){
//     this.naam = naam;
//     this.color = color;
//     this.speak = function(){ // #Wrong way: accupied multiple times memory with every object
//         return `Greeting from ${this.naam}`
//     }
// }

// obj1 = new Samarth('Sandy', 'white');
// obj2 = new Samarth('Sandy', 'white');
// obj3 = new Samarth('Sandy', 'white');
// obj4 = new Samarth('Sandy', 'white');

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
// console.log(obj4);

// // ## write way to define a function in prototype for not storing the same function with every object
// function Samarth(naam, color){
//     this.naam = naam;
//     this.color = color;
// }
// Samarth.prototype.speak = function(){ // #Wrong way: accupied multiple times memory with every object
//     return `Greeting from ${this.naam}`
// }
// obj1 = new Samarth('Sandy', 'white');
// obj2 = new Samarth('Sandy', 'white');
// obj3 = new Samarth('Sandy', 'white');
// obj4 = new Samarth('Sandy', 'white');

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
// console.log(obj4);


const con = document.querySelectorAll("img")

con.forEach((elem, idx) => {
    setInterval(() => {
        elem.classList.add("z")
    }, 2000);
})



// How will you rate yourself in CSS, JS?
// What is JavaScript and how is it used in web development?
// Different data-types in JavaScript.
// Is JavaScript single threaded or multithreaded?
// Can you explain what a function is in JavaScript?
// What are variables in JavaScript and how are they declared?
// Argument Vs Parameter

// Explain closures in JavaScript. Can you provide a practical use case?
// What is DOM?
// What is BOM?
// Make a to do list with only add and delete functionality
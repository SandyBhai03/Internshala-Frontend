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
// // constructor function
// function Sam(name, age){
//     this.name = name;
//     this.age = age;
//     this.greet = function(greetmsg){
//         console.log(greetmsg);
//     }
// }

// let obj1 = new Sam("Sandy", 21);
// let obj2 = new Sam("KingSahab", 23);

// obj1.greet("hellooo!    ");
// obj2.greet("Hii");

// class 

class Sam{
    Constructorfns(naam, age, branch){
        this.naam = naam;
        this.age = age;
        this.branch = branch;
    }
    greet(naam){
        console.log("hello "  +naam + " how are you")
    }
}

let obj1 = new Sam("Sandy",21, "CSE");
let obj2 = new Sam("KingSahab", 23, "Computer Science");

console.log(obj1);
console.log(obj2);
obj1.greet("sharad");
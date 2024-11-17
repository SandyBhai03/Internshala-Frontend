class Samarth{
    constructor(name, color){
        this.name =  name;
        this.color = color;
    }
    speak(){
        return `Greeting from ${this.name}`;
    }
}

class Rocket extends Samarth{
    constructor(name, color, age){
       super(name, color);
       // super(color, name)// you con't change the order of arguments
       this.age = age;
    }
}
let obj2 = new Rocket("KingSahab", "White", "21");
let obj1 = new Samarth("sandy", "red");

console.log(obj1)
console.log(obj2)
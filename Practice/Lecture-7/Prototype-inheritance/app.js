
// Prototype inheritance
const parent = {
    name: "Sandeep Yadav",
    age: 21,
    greet: function(){
        console.log("Radhey Radhey 🙏🙏🙏, greeting" );
    }
}

const child = {
    name: "Aman Yadav",
    age: 19,
    meet: function(){
        console.log("Radhey Radhey Aman🙏, meeting")
    }
}

// child.__proto__ = parent;

console.log(parent.greet())
console.log(child.meet())
// console.log(child.greet())

//----------------------------------------
console.log(Object.getPrototypeOf(parent))
console.log(Object.getPrototypeOf(child))

console.log(parent.prototype)
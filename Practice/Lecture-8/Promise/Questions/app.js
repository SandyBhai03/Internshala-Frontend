// Qns 1. Write a function delay(ms) that returns a Promise which resolves after (ms) milliseconds. Use this function to log "Done!" after 3 seconds.

// function delay(ms){
//     return new Promise((resolve) => setTimeout(resolve, ms));
// }

// delay(3000).then(res => console.log("Done!"));
// const p1 = delay(3000)
// p1.then(res => console.log("Done!"))

// Create a Promise that resolves with the value 10, then chain .then to:

// -----------------------------------

// Qns 2. Create a Promise that resolves with the value 10, then chain .then to: Add 5 to the value.Multiply the result by 2.Log the final result.



// console.log("Radhey Radhey 🙏🙏🙏")

 // Q-1. Chaining Promises Create a Promise that resolves with the number 5. Chain another .then() that multiplies the result by 3, and another .then() that adds 10 to it.

// function getData(){
//     return new Promise((resolve,  reject) => {
//         resolve(5);
//     });

// }

// getData().then(result =>result*4).then(result =>result*4).then(res => res*3).then(res => console.log(res));

const ob = {
    names: "Sandeep Yadav",
    num: 5
}

 function getData(){
        return new Promise((resolve,  reject) => {
            resolve(ob);
        });
    }
    
    getData().then()
    

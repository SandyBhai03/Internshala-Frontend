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
    
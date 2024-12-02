console.log("Radhey Radhey 🙏");
// -------------------------------------
// Q. find even numbers
    // function filteredArray(nums) {
    //    return nums.filter(num => num%2==0)
    // }
    // const evenArray = nums => nums.filter(num => !(num % 2)) // only takes who's element num%2==0
    // const oddArray = nums => nums.filter(num => (num %2)) //num%2 means contain which elements who num%2==1 or num%2!=0 
    // let arr = [1,3,4,5,6,8];
    // console.log(evenArray(arr))
    // console.log(oddArray(arr))

// Q. 
// function findPromise(num){
//     return new Promise((res, rej) => {
//         if(num%2==0){
//             res("Even")
//         }
//         else{
//             rej("Odd")
//         }
//     })
// }

// findPromise(4).then((res) =>{
//     console.log(res)
// })
// .catch((rej) => {
//     console.log(rej)
// })


// function isPalindrome(str) {
//     let j = str.length - 1
//     for (let i = 0; i < str.length / 2; i++) {
//         if (str[i] != str[j]) {
//             return false;
//         }
//         j--;
//     }
//     return true;
// }

// function findPromise(str){
//     return new Promise((res, rej) => {
//         if(isPalindrome(str)){
//             res("success")
//         }
//         else{
//             rej("fail")
//         }
//     })
// }

// findPromise("wow").then((res) => {
//     console.log(res)
// }).catch((rej) => {
//     console.log(rej)
// })

// ---------------------------------
// function isLogged(){
//     let logged = true
// return new Promise((resolve,reject)=>{
//            if(logged){
//             resolve()
//            }
//            else{
//             reject()
//            }
// })
// }
// function isAdmin(){
//     let user = true
// return new Promise((resolve,reject)=>{
//            if(user){
//             resolve()
//            }
//            else{
//             reject()
//            }
// })
// }

// foo(str)
// .then((msg)=>console.log(msg))
// .then((msg)=>console.log(msg))
// .catch((err)=>console.log(err))

// -----------------------------------

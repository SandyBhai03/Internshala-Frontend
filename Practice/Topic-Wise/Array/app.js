// const arr = [10,20,30,40,50,60];
// console.log(arr.__proto__.__proto__.__proto__ ===  null)

// Q-1. Sort the given array in Ascending order

// function ascendingAray(arr){
//     return arr.sort((a,b) => a-b)
// }

// let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5]
// console.log(ascendingArray(numbers))


// Q-2. Sort the given array in Descending order

// function descendingArray(arr){
//     return arr.sort((a,b) => b-a)
// }

// let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];

// console.log(descendingArray(numbers));

//  Q-3 Reverse ann Array
// function reverseNumbers(arr){
//     let sortedArray =  arr.sort((a, b) => a-b)
//     return sortedArray.reverse();
// }

// let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
// console.log(reverseNumbers([3, 1, 4, 1, 5, 9, 2, 6, 5]));

// Q-4. Find the MAX value from an array.

// function findMax(arr){
//     let MaxVal = 0;
//     for(let num of arr){
//         if(num> MaxVal){
//             MaxVal = num;
//         }
//     }
//     return MaxVal
// }

// let numbers = [31, 1, 4, 1, 5, 9, 21, 6, 5];
// console.log(findMax(numbers))


// Q-5 

//  function findMin(arr){
//         let MinVal = 100000000000000;
//         for(let num of arr){
//             if(num< MinVal){
//                 MinVal = num;
//             }
//         }
//         return MinVal
//     }
    
//     let numbers = [31, 1, 4, -11, 5, 9, 21, 6, 5];
//     console.log(findMin(numbers))


// function processArray(arr) {
//     // Step 1: Sort the array in ascending order
//     const sortedArray = arr.sort((a, b) => a - b);

//     // Step 2: Reverse the sorted array to descending order
//     const reversedArray = [...sortedArray].reverse();

//     // Step 3: Find the maximum value using Math.max()
//     const maxValue = Math.max(...arr);

//     // Step 4: Find the minimum value using Math.min()
//     const minValue = Math.min(...arr);

//     // Step 5: Create a sorted copy of the array using toSorted()
//     const sortedCopy = arr.toSorted((a, b) => a - b);

//     // Return the results
//     return {
//         sortedArray,
//         reversedArray,
//         maxValue,
//         minValue,
//         sortedCopy,
//     };
// }

// const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
// console.log(processArray(arr));

// practice session at 24-11-2024
// let res = nums.map((e)=>{
//   return  {name:e.toUpperCase(),l:e.length}
//  })

//  let res = nums.map((e)=>{
//     return  e.reduce((acc,curr)=>acc*curr)
//    })
   
   // solved in live class Questions

// function getDouble(arr){
//     return arr.map(num=>num*num)
// }

// console.log(getDouble([1,2,3,4,5]))


// function getEven(arr){
//     let filterArr = arr.filter(num=>num%2===0)
//     console.log("filter",filterArr)
//     return filterArr
// }

// // console.log(getEven([1,2,3,4,5]))
// let op = getEven([1,2,3,4,5])
// console.log("op",op)


// function getSum (arr){
//     return arr.reduce((acc,cur)=>acc*cur,1)
// }

// console.log(getSum([1,2,3,4,5]))


// function getevenSum(arr){
//     let evenArr = arr.filter(num=>num%2===0)
//     console.log(evenArr)
//     return evenArr.reduce((acc,cur)=>acc+cur,0)
// }

// console.log(getevenSum([1,2,3,4,5]))




// function getevenSum(arr){
//     return arr.filter(num=>num%2!==0).reduce((acc,cur)=>acc+cur,0)
// }

// console.log(getevenSum([1,2,3,4,5]))



// let arr=[1,2,3,4,5]

// let result=arr.reduce((acc,curr)=>{
//     if(curr%2==0){
//         acc=  acc+curr;
//     }
//     return acc
    

// },0)

// console.log(result)


// arr.map((e)=> e*e).filter((e)=>e>=9).reduce((acc,curr)=> acc+curr)

// function getSqSum(arr){
//     return arr.map(num=>num*num).filter(num=>num<=9).reduce((acc,cur)=>acc+cur,0)
// }

// console.log(getSqSum([1,2,3,4,5]))

// ~~~~~~~~~~~~~~~~ Find User Name ~~~~~~~~~~~~~~~~~~~~
// function getUserName(arr){
//     return arr.filter(obj=>obj.age>=18).map(obj=>obj.name)
// }


// const arr = [
//     {name:'aman', age:17},
//     {name:'chaman', age:18},
//     {name:'naman', age:20}
// ]
// console.log(getUserName(arr))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function getChunk(arr,key){
//     let res = []
//     for(let i=0;i<arr.length;i+=key){
//         res.push(arr.slice(i,i+key))
//     }
//     return res

// }

// console.log(getChunk([1,2,3,4,5,6,7],3))

// function getCommon(arr1,arr2){
//     return arr1.filter(num=>arr2.includes(num))

// }
// console.log(getCommon([1,2,3,43,5],[1,2,3,5,6,7,8]))
// ~~~~~~~~~~~~~~~ Find the Frequency of all the elements
// function getFreq(arr){
//     let freq = {}
//     for(let num of arr){
//         if(freq[num]){
//             freq[num]++
//         }
//         else{
//             freq[num] = 1
//         }
//     }
//     return freq
// }

// console.log(getFreq(['apple','banana','cherry','apple','banana','cherry','cherry','apple','fjfjfjfj']))



// function getFreq(arr){
//     return arr.reduce((acc,curr)=>{
//         acc[curr] = (acc[curr] || 0) +1;
//         return acc
//     },{})
// }

// console.log(getFreq([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6]))

// ~~~~~~~~~~~~~~~~~   ~~~~~~~~~~~~~~~~~~~~

// let arr = [1,[2],[3,[4],[7,[8,[9]]]],5]

// console.log()
// const arr1 = arr.flat(Infinity)

// // const arr2 = arr1.flat(1)

// console.log(arr1)
// // console.log(arr2)



// function getCommon(arr1,arr2){
//     let op1 = arr1.filter(num=>arr2.includes(num))
// }

// console.log(getCommon([1,2,3,4,5],[3,4,5,8,9]))


// function getNotCommon (arr1,arr2){
//     let op1 = arr1.filter(num=>!arr2.includes(num))
//     let op2 = arr2.filter(num=>!arr1.includes(num))
//     console.log(op1)
//     console.log(op2)
//     return [...op1,...op2]
// }
// console.log(getNotCommon([1,2,3,4,5],[3,4,5,8,9]))



// function customMap(arr,cb){
//     let res  = []
//     for(let i =0; i<arr.length;i++){
//         // let op = cb(arr[i])
//         // res.push(op)
//         res.push(cb(arr[i]))
//     }
//     return res
// }

// console.log(customMap([1,2,3,4,5],num=>num*3))


// function customFilter(arr,cb){
//     let res = []
//     for(let i =0; i<arr.length;i++){
//         if(cb(arr[i])){
//             res.push(arr[i])
//         }
//     }
//     return res
// }

// console.log(customFilter([1,2,3,4,5],num=>num%2===0))


// function customREduce(arr,cb,init){
//     let acc = init
//     for(let i = 0;i<arr.length;i++){
//         acc = cb(acc,arr[i])
//     }
//     return acc
// }

// console.log(customREduce([1,2,3,4,5],(acc,cur)=>acc+cur,0))


// function sMax(arr){
//     let lar = -Infinity
//     let Slar = -Infinity

//     for(let num of arr){
//         if(num>lar){
//             Slar = lar
//             lar = num
//         }
//         else if(num>Slar && num!== lar){
//             Slar = num
//         }
//     }
//     console.log("lar",lar)
//     console.log("Slar",Slar)
// }

// // console.log(sMax([2,4,56,7,5,3,9]))
// sMax([1,2,3,54,3,5,6])


// function transfomrObj (arr){
//     return arr.map(name=>({name}))
// }

// // console.log(transfomrObj(['a','b','c','d']))
// let op = transfomrObj(['a','b','c','d'])


// function tarnsfomrMap1(arr){
//     return arr.map(num=>[num,num*num])
// }

// console.log(tarnsfomrMap1([1,2,3,4,5]))



// function tarnsfomrMap2(arr){
//     return arr.map(str=>({fName:str,len:str.length}))
// }

// console.log(tarnsfomrMap2(['apple','banana','cherry']))

// function tarnsfomrMap3(arr){
//     return arr.map(subArr=>subArr[0]*subArr[1])
// }
// console.log(tarnsfomrMap3([[1,2],[3,4],[5,6]]))




// function tarnsfomrMap4(arr){
//     return arr.map(num=>()=>num*num)
// }
// // console.log(tarnsfomrMap4([1,2,3,4,5]))
// let op = tarnsfomrMap4([1,2,3,4,5])

// // console.log(op[1]())

// let res = op.map(f=>f())
// console.log(res)

// function flatArr(arr){
//     return arr.reduce((acc,cur)=>acc.concat(cur),[])
// }
// console.log(flatArr([[1,2],[3,4],[5,6]]))

// -----------------------------------------
// # use of splice method
//  const arr = [1, 2, 3, 4, 5];

// // Remove elements
// const removed = arr.splice(1, 2); // Removes 2 elements starting from index 1
// console.log(arr); // [1, 4, 5]
// console.log(removed); // [2, 3]

// // Add elements
// arr.splice(1, 0, "a", "b"); // Adds "a" and "b" at index 1
// console.log(arr); // [1, "a", "b", 4, 5]

// // Replace elements
// arr.splice(2, 1, "c"); // Replaces 1 element at index 2 with "c"
// console.log(arr); // [1, "a", "c", 4, 5]



// -----------------------------------------------------
// Q. create array collection of object according to same Location city
// function groupBy(arr,prop){
//   return arr.reduce((acc,obj)=>{
//       const key = obj[prop]
//       // console.log(key)
//       if(!acc[key]){
//           acc[key] = []
//       }
//       acc[key].push(obj)
//       return acc

//   },{})
// }

// const arr1 = [
//   {name:'alice',age:25, location:'delhi'},
//   {name:'bob',age:15, location:'mumbai'},
//   {name:'bob',age:25, location:'delhi'},
//   {name:'bob',age:45, location:'pune'},
//   {name:'alice',age:35, location:'rajasthan'},
//   {name:'aman',age:35, location:'noida'},
// ]
// console.log(groupBy(arr1,'location'))

// -------$-------#-------$-------#-------$-------#-------$-------
// Q. Sort Array elements according to their types in new Array 

//          ~~~~~~~~~~ callbacks function ~~~~~~~~~~~~
// function getString(item){
//    return typeof item === "string"
// }
// function getBoolean(item){
//    return typeof item === "boolean"
// }
// function getNumber(item){
//    return typeof item === "number"
// }

// function checkTypeOf(arr, fn){
//    const result = []
//    for(let item of arr){
//       if(fn(item)){
//          result.push(item)
//       }
//    }
//    return result;
// }

// const arr = ["KingSahab", true, 1, "Yadav", false, 2];

// console.log(checkTypeOf(arr, getString))
// console.log(checkTypeOf(arr, getBoolean))
// console.log(checkTypeOf(arr, getNumber))

//          ~~~~~~~~~~~~ Another way to write it ~~~~~~~~~~~~

// function checkTypeOf(arr, condition){
//    return arr.filter(elem => typeof(elem)===condition)
// }

// const arr = ["KingSahab", true, 1, "Yadav", false, 2];
// console.log(checkTypeOf(arr, 'string'));
// console.log(checkTypeOf(arr, 'number'));
// console.log(checkTypeOf(arr, 'boolean'))

// ~~~~~~~~~ Find 1st & 2nd Max ~~~~~~~~~~~

// const find1stAnd2ndMaxAndMin  = function(nums){
//    let max = -Infinity;
//    let sMax = -Infinity;
//    let min = Infinity;
//    let sMin = Infinity;
//    for(let num of nums){
//       if(num > max){
//          max = num
//       } else if(num > sMax && num < max){
//          sMax = num
//       } 
//        if(num < min){
//          min = num;
//       } else if( num > min && num < sMin ){
//          sMin = num;
//       }
//    }
//    return `MAX is= ${max}, Second MAX is= ${sMax}, MIN is = ${min}, & Second MIN = ${sMin}`
// }

// const arr = [1, 5, 9, 44, 43.9, 11];

// console.log(find1stAnd2ndMaxAndMin(arr));



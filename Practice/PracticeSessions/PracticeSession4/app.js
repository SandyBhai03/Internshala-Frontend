// function invokeMap(arr,funcs){

//     return funcs.map(fn=>arr.map(fn))

// }

// console.log(invokeMap([1,2,3,4],[x=>x+1,x=>x+2,x=>x+3]))


//--------------------------------------------
// Q. ## Remove Duplicates from Array ##

// arr.filter((e,index)=>arr.indexOf(e)==index)


// --------------------------------------------
//Q. isAdult or Not add true or false

function foo(arr,fn){

    let res = arr.reduce((acc,curr)=>{
             if(fn(curr)){
               acc = {...curr,isAdult:true}
             }
             else{
               acc  ={...curr}
             }
   
             return acc
    },[])
   }
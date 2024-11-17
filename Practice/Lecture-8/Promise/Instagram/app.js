function step1(){
    return new Promise(function(res, rej){
        console.log("plz wait selecting the image...");
        setTimeout(() => {
            res("image selected");
            // rej("image not found!");
        }, 4000);
    })
}

// filter image
function step2(image){
    return new Promise(function(res,rej){
        console.log(`plz wait applying filter on ${image}...`);
        setTimeout(()=> {
            res("filtered image")
        },2000);
    })
}

// upload image
function step3(filter){
    return new Promise(function(res, rej){
        console.log(`plz wait adding caption to ${filter}...`);
        setTimeout(() => {
            res("captioned image")
        }, 5000);
    })
}

function step4(caption){
    return new Promise(function(res, rej){
        console.log(`plz wait uploading the ${caption}...`);
        setTimeout(() => {
            res("uploaded image")
        }, 3000);
    })
}


step1()
.then(function(image){
    console.log(image)
    return step2(image)
})
.then(function(filter, reject){
    console.log(filter);
    return step3(filter);
})
.then(function(caption, reject){
    console.log(caption);
    return step4(caption);
})
.then(function(upload){
    console.log(upload)
})

// .catch(function(reject){
//     console.log(reject)
// })
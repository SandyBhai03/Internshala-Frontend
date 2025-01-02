function toCount(n){
    if(n==0){
        return;
    }
    toCount(n-1)
    setTimeout(()=>{
        
        
        console.log(n);
        
    },1000)


}
toCount(3)
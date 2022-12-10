var fs=require('fs');
fs.readFile('abhi.txt',function(err,data){
    if(err)
    {
        console.log(err);
    }
    setTimeout(()=>{
        console.log("Pes University. Display after 5 seconds")
    },5000);
});
console.log('start Here');
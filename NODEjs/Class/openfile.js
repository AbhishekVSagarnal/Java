console.log("Going to open a file");
var fs=require('fs');
fs.open('abhi.txt',function(err,data){
    if(err)
    {
        console.log(err);
    }
    setTimeout(()=>{
        console.log("Pes University. Display after 2 seconds")
        console.log(data);
    },2000);
});
console.log('start Here');

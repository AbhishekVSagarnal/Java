var fs=require("fs");
fs.readFile("abhi.txt",function(err,data)
{
    if(err){
        return console.error(err);
    }
    console.log("Asynchronous read:"+data.toString());//data is loading as a number

});

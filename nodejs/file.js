const fs=require("fs") //built in

// sync call
fs.writeFileSync('./test.txt', "Hey There");

//async
fs.writeFile("./test.txt", "Hey There Async",(err)=>{})
const fs=require("fs") //built in

const os=require("os");
console.log(os.cpus().length)
// sync call
//fs.writeFileSync('./test.txt', "Hey There");

//async
//fs.writeFile("./test.txt", "Hey There Async",(err)=>{})

//const result=fs.readFileSync('./contacts.txt', "utf-8");
//console.log(result);  //cant read 2 text

//async dont return anything  inspect callback
// fs.readFile("./contacts.txt","utf-8", (err, result)=>{
//     if(err) console.log("Error",err);
//     else
//     console.log(result);
// })

//fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());

// fs.appendFileSync("./test.txt",`${Date.now()} Hey There\n`);

// fs.cpSync('./test.txt', './copy.txt'); //copying file
// fs.unlinkSync("copy.txt");  //delete file
// console.log(fs.statSync("./test.txt"));

console.log("1");
//Blocking
// const result=fs.readFileSync('contacts.txt','utf-8');
//     console.log(result);

//Non Blocking
fs.readFile('contacts.txt','utf-8',(err,result)=>{
    console.log(result);
});

    console.log("2");

    //defalut thread pool size =4
    // max? 8 crore cpu -8

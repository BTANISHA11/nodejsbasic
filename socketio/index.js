const http=require("http");
const express=require("express")
const app=express();
const path=require('path')
const {Server} =require("socket.io")

//cant use app.use directly so use http module
server=http.createServer(app);
const io=new Server(server)  //handle sockets


//Socket.io
io.on('connection',(socket)=>{
    socket.on('user-message',(message)=>{
        io.emit("message",message);      
    })
    console.log('A new user has connected',socket.id)
})

app.use(express.static(path.resolve("./public")))

//route creation
app.get('/',(req,res)=>{
   return res.sendFile("./public/index.html")
})

server.listen(9000, ()=> console.log(`Server started at PORT:9000`))
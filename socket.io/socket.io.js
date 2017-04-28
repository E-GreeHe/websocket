//引入http模块
var http = require("http");
//引入socket.io模块
var ioFunc = require("socket.io");
//创建普通服务器
var server = http.createServer(function(req,res){
	res.end("start socket.io server");
})
//实例化第一个socket服务端
var io = ioFunc(server);
//创建连接
io.on("connection",function(socket){
	socket.on("message",function(data){
		console.log(data);
		//发送 自发自收
//		socket.emit("say",data);
		//发送 自发全收
		io.sockets.emit("say",data);
	})
})
server.listen(9999);
console.log("开启socket.io服务器")

const express = require('express');

const app = express();
const http = require('http');
const server = http.createServer(app);

const io = require('socket.io')(server, {
    cors: {
      origin: '*',
    }
  });

io.on('connection', function(socket) {
  console.log(`${socket.id} a user connected`);
  socket.on('mousedown',function(data){
    //   console.log('yo');
        socket.broadcast.emit('md',data)
  })
  socket.on('mousemove',function(data){
    //   console.log('yo');
        socket.broadcast.emit('mv',data)
  })
});

app.get("/",function(req,res){
    res.send('hi everyone')
})

let port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log('listening on *:3000');
});


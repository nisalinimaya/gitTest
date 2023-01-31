var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => res.send('hello nisu!!!'));

io.on('connection',(socket)=>{
    console.log('some user has connected');
})




  http.listen(4000, () => {
  console.log('listening on *:4000');
});
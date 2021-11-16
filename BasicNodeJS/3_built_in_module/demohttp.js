const http = require('http');

const server = http.createServer(function(req, res){
    var obj = { 
        name: "Samit", 
        email: "samit@email.com",
        tel: "089-77389202"
    };
    if (req.url === '/') {
        res.write('You are at home page');
        res.end();
    }
    if (req.url === '/contact') {
        res.write(JSON.stringify(obj));
        res.end();
    }
});

server.on('connection', function(socket){
    console.log('Client connected');
});

server.listen(3000);
console.log('Listening form port 3000');

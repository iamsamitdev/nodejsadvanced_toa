// Node.js Built-in Modules
//-----------------------------
// 1. File System  (fs)
// 2. Path (path)
// 3. Operating System (os)
// 4. Events (events)
// 5. HTTP (http)
//-----------------------------

// Path Module
const path = require('path')

console.log(path.basename(__filename))
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
console.log(path.join(__dirname, 'utils.js'));

// File System
const fs = require('fs')
// Write file
// fs.writeFileSync(path.join(__dirname,'data.txt'), 'Hello World Node JS') // Synchronous
// fs.writeFile(path.join(__dirname, 'data.txt'), 'Hello World Node JS', () => {
   // console.log('Finished writing file...')
//}) // Asycronous

// Read file
console.log(fs.readFileSync(path.join(__dirname, 'data.txt'),'utf8'))

// Operating System (os)
const os = require('os')
// show cpu
console.log(os.cpus())
console.log(os.homedir());
console.log(os.uptime());
console.log(os.platform());
console.log(os.release());
console.log(os.arch());
console.log(os.type());
console.log(os.loadavg());
console.log(os.networkInterfaces());


// Events (events)
const events = require('events')
const EventEmitter = events.EventEmitter;
const connect = new EventEmitter();

connect.on('online', () => {
    console.log('A new user has connected');
})

connect.emit('online')
connect.emit('online')
connect.emit('online')
connect.emit('online')
connect.emit('online')


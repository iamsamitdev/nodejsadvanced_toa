// Import Express
const express = require('express')

// Import Router
const restaurantsRouter = require('./routes/restaurants')

// Create express object
const app = express()

// Routes
app.use('/api/restaurants', restaurantsRouter)

// Create Method GET
app.get('/', (req, res)=>{
    res.send('<h1>Hello Express</h1>')
})

// Listen port 3000
app.listen(3000, ()=>{
    console.log('Listening to port 3000');
})
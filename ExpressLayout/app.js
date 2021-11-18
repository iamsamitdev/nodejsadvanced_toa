const express = require('express')  // ใช้งาน module express
const expressLayouts = require('express-ejs-layouts') // ใช้งาน express ejs layout
const frontendRouter = require('./routes/frontend') // ใช้งาน router frontend
const backendRouter = require('./routes/backend') // ใช้งาน router backend

const app = express() // สร้างตัวแปร app เป็น instance ของ express
const port = 5000 // กำหนด port สำหรับ run server

// กำหนด folder สำหรับเก็บ Static Files
app.use(express.static('assets'))
// app.use('/css', express.static(__dirname + 'public/css'))

// กำหนด Templating Engine
app.use(expressLayouts)
app.set('layout', './layouts/frontend')
app.set('view engine', 'ejs')

// กำหนด Routes
app.use('/', frontendRouter) // frontend
app.use('/backend', backendRouter) // backend

// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`))

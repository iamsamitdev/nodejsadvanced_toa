const express = require('express')
const router = express.Router()

// Restful API
// Method GET
router.get('/',(req, res) => {
    res.send('GET API')
})

// Method GET by ID
router.get('/:id',(req, res) => {
    res.send('GET ONE API')
})

// Method POST
router.post('/',(req, res) => {
    res.send('POST API')
})

// Method PUT
router.put('/:id',(req, res) => {
    res.send('PUT API')
})

// Method DELETE
router.delete('/:id',(req, res) => {
    res.send('DELETE API')
})

module.exports = router

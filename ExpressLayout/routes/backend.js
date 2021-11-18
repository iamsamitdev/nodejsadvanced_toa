const express = require('express')
const router = express.Router()

router.get('', (req, res) => {
    res.render(
        'pages/backend/dashboard', 
        { 
            title: 'Dashboard', 
            heading:'Dashboard', 
            layout:'./layouts/backend'
        }
    )
})

router.get('/dashboard', (req, res) => {
    res.render(
        'pages/backend/dashboard', 
        { 
            title: 'Dashboard', 
            heading:'Dashboard', 
            layout:'./layouts/backend'
        }
    )
})

module.exports = router
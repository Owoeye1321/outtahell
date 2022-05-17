const router = require('express').Router()
router.post('/', ( req, res ) =>{
    res.send('welcome forget password')
})

module.exports = router
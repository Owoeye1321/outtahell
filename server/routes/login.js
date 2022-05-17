const router = require('express').Router()
router.post('/',( req, res )=>{
    res.send('welcome  sign in')
})

module.exports = router
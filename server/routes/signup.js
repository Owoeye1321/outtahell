const router = require('express').Router()
router.post('/',( req, res )=>{
    res.send('welcome sign up')
})
module.exports = router
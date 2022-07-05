const router = require('express').Router()
router.post('/',(req, res)=>{
    const sess = req.sesssion
    if(sess.usernaem){
        console.log('Do some stuffs')

    }
})
module.exports = router
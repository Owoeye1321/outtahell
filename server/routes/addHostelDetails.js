const router = require('express').json()
router.post('/',(req, res)=>{
    const sess = req.sesssion
    if(sess.usernaem){
        console.log('Do some stuffs')
    }
})
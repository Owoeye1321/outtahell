const router = require ('express').Router()
router.get('/',(req, res)=>{
    const sess = req.session
    if(sess.username){
        res.send('success')
        console.log(req.session)
    }else{
        res.send('failed')
    }
})
module.exports = router
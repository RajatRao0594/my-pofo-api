const router = require('express').Router();

router.get('/',(req,res)=>{
    res.end('API started')
});

module.exports = router
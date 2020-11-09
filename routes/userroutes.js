const express = require('express');
const router = express.Router();

router.get('/trial',(req,res,next)=>{
    return res.status(200).json({'message':'hi'})
})

module.exports = router;
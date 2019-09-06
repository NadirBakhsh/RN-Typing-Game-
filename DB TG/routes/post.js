
const express = require('express');

const router = express.Router();


router.post('/post',(req,res)=>{
    res.send({message : "Seceuss"})
})


router.delete('/delete',(req,res)=>{
    res.send({message : "Seceuss delete"})
})





module.exports = router
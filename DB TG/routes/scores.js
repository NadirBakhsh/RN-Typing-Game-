const express = require('express');

const router = express.Router();



const Scores = require('../models/Scores');

router.post('/addscore',(req,res)=>{
    const scores = req.body;
    const newScores = new Scores(scores);
    newScores.save()
    .then(() => {
        res.send({message : "score Added Successfully"})
    }).catch(e =>{
        console.log(e ," eeeeeeeeeeeee")
        res.send({message : e.message})
    })
})


// router.put("/update", (req, res) => {
//     Scores.updateOne({_userId: req.body._userId}, {name: req.body.name})
//     .then(result => res.send(result))
//     .catch(e => res.send({message: e.message}))
// })


module.exports = router




const express = require('express');

const router = express.Router();


const Users = require('../models/Users');
router.post('/addUser',(req,res)=>{
    const user = req.body;
    const newUser = new Users(user);
    newUser.save()
    .then(() => {
        res.send({message : "user Added Successfully"})
    }).catch(e =>{
        console.log(e ," eeeeeeeeeeeee")
        res.send({message : e.message})
    })
})


router.post("/getUserByEmail",(req,res)=>{
    const email = req.body.email;
  //  const user = Users.find({name});
    const user = Users.find({ $text: { $search: `"\"${email}\""`} });
    
    user.then((data)=>{
    res.send({result:data})
    })
    .catch((e)=>{
        res.send({message:e.message});
    })
    })



// heroku install

//

// fetch("/user/addUser"{
//     method:"POST",
//     headers:{
//     'Content-Type':'application/json'
//     },
//     body:JSON.stringify({
//     name : 'sana khan',
//     email : "ali@gmail.com"
//     })}
// ).then(res=>res.json())
// .then(data=>console.log(data))


module.exports = router

// ager hum ko request se body chahiya to server may body- parser karna hoga


    





















// const users = [
//     {id:1 , name: "Khan" , class:'5th'},
//     {id:2 , name: "umair" , class:'4th'},
//     {id:3 , name: "sana" , class:'5th'},
//     {id:4 , name: "Ahmed" , class:'6th'},
// ]

// /// this query geting all users
// router.get('/getAll',(req,res)=>{
//     res.send(users)
// })


// // Getting signal user
// router.get('/getAll/:id',(req,res)=>{
//     const user = users.find(u => u.id === parseInt(req.params.id))
//     if(!user) res.status(404).send('Data not Found');
//     res.send(user);
// })


// router.post('/post' , ( req , res)=>{
//     users.push(req.body)
//     res.send(JSON.stringify(users))
// })



// router.delete('/delete/:id',(req, res) => {
//     var deleteUser = users[req.params.id];
//     delete users[req.params.id];
//     console.log(JSON.stringify(users, null, req.params.id));
//     res.end( "Deleted User: \n" + JSON.stringify(deleteUser, null, req.params.id));
//   });




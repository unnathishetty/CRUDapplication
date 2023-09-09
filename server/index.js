const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const user = require('./models/Users');
const app= express();
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

const port=3001;

// app.get('/', (req,res) =>{
//     res.send("hey")
// })


 app.get('/', (req, res)=>{
    user.find({})
    .then(user => res.json(user))
    .catch(err => res.json(err))
 })

app.get('/getuser/:id', (req,res) => {
    const id = req.params.id;
    user.findById({_id:id})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.put('/updatecourse/:id',(req, res) => {
    const id = req.params.id;
    user.findByIdAndUpdate({_id: id}, {name: req.body.name, description: req.body.description, price: req.body.price})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.delete('/deletecourse/:id', (req,res) => {
    const id = req.params.id;
    user.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.post('/createcourse', (req, res) =>  {
    user.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.listen(port, () => {
    console.log(`server listening on ${port}`)
})
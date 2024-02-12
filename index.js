require('dotenv').config()

const express = require('express');

const app=express()

const port=4000;

const myData=[
    {
        name : 'Mudasir Bhat',
        email : 'bhatmuddu472@gmail.com',
        password : 'Mudasir@123'
    },
    {
        name : 'Munnu Bhat',
        email : 'bhatmuddu471@gmail.com',
        password : 'Mudasir@786'
    }
]

app.get('/',(req,res) => {
    res.send('Hello this is your Home Page')
})

app.get('/login',(req,res) => {
    res.send('<h2>Hello this is your Login Page</>')
})

app.get('/about',(req,res) => {
    res.send('<h2>Hello this is your About Page</>')
})

app.get('/getData',(req,res) => {
    res.json(myData);
})

app.listen(process.env.PORT,()=>{
    console.log(`I am Listening on ${port}`)
})
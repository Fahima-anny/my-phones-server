const express = require('express') ;
const app = express() ;
const phones = require('./phones.json') ;
var cors = require('cors') ;
const port = 5000 ;

app.use(cors())

app.get('/', (req, res) => {
    res.send('My Phones Server created') ;
})

app.get('/phones', (req, res) => {
    res.send(phones) ;
})

app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id) ;
    console.log(`give me data of id: ${id}`)
    const phone = phones.find(p => p.id === id ) || {}
res.send(phone)
})

app.listen(port, () => {
    console.log("Server running at port : ", port) ;
})
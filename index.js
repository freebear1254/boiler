
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://node:sks1254@testcluster.chx6t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser : true, useUnifiedTopology: true
}).then(()=>console.log("Mongo Connected")).catch(err => console.log(err));
const express = require('express')
const app = express()
const port = 3000

const config = require('./config/key');

const bodyParser = require('body-parser');
const {User} = require('./models/User');



//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI,{
    useNewUrlParser : true, useUnifiedTopology: true
}).then(()=>console.log("Mongo Connected")).catch(err => console.log(err));



app.get('/', (req, res) => {
    res.send('Hello World! Study Node.js')
})

app.post('/register',(req,res)=>{
    //회원가입 정보를 받아 DB에 저장

    const user = new User(req.body);
    user.save((err,userInfo)=>{
        if(err) return res.json({success:false,err})
        return res.status(200).json({
            success:true
        })
    })


})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

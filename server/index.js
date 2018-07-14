const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller.js');
const app = express();


require('dotenv').config({
    path: __dirname + '/../.env',
})

massive( process.env.CONNECTION_STRING, {scripts:__dirname+'/../db'})
    .then(db => {
        console.log('connected to db')
        app.set('db', db)

    })

app.use(cors());

app.use(bodyParser.json());




app.get('/api/houses', function(req, res){
    res.send(res)
})

app.post('/api/houses', function(req, res){
    res.send(res)
})

app.delete('/api/houses/:id')




const port = process.env.SERVICE_PORT || 3005;

app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
});
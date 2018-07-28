const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./server/controller.js');
const app = express();


require('dotenv').config()

massive( process.env.CONNECTION_STRING)
    .then(db => {
        console.log('connected to db')
        app.set('db', db)

    })

app.use(cors());

app.use(bodyParser.json());


app.get('/api/houses', controller.get_houseList)

app.post('/api/houses', controller.create_house)

// app.put('api/houses/:id', controller.edit_house)

app.delete('/api/houses/:id', controller.delete_house)


const port = process.env.PORT || 8081;

app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
});
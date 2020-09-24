require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();


const BASE_URL = `https://comicvine.gamespot.com/api/characters/?api_key=${process.env.API_KEY}`;

app.use(bodyParser.json())
    .use(cors());

app.get('/get-characters', function (req, res) {

    const limit = req.query.limit;
    const offset = req.query.offset;

    axios({
        method: 'get',
        url: `${BASE_URL}&limit=${limit}&offset=${offset}&field_list=name,real_name,gender,aliases,birth,image&format=json`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then(response => {
        res.status(200).send(response);
    }).catch(error => {
        res.status(500).send(error);
    });
});

app.get('/get-character-by-name', function (req, res) {
    const characterName = req.query.name;
    const limit = req.query.limit;
    const offset = req.query.offset;

    axios({
        method: 'get',
        url: `${BASE_URL}&filter=name:${characterName}&field_list=name,real_name,gender,aliases,birth,image,description&limit=${limit}&offset=${offset}&format=json`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then(response => {
        const { data } = response;

        if (!data.results.length) {
            res.status(404).send({
                result: data.results,
                message: 'Result not found'
            });
        } else {
            console.log('response ----------- ', response)
            res.status(200).send(response.data);
        }

    }).catch((error) => {
        console.log('error ----------- ', error)
        res.status(500).send({
            errorMessage: error.error,
            statusCode: error.status_code
        });
    });
});


app.listen(4000, () => {
    console.log('Connected');
});
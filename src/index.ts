'use strict';

import * as request from 'request';
const prompt = require('prompt');

const MAPS_KEY = '';

let uri = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=Rua+Amandio+Caetano+Pinto+,+Teresopolis+RJ|&destinations=Rua+Heitor+Moura+Estevao+229+Teresopolis+RJ|&mode=driving&language=pt-BR&key=${MAPS_KEY}`;

request.get(uri, (error: any, response: any, body: any) => {
    console.log(body);
});

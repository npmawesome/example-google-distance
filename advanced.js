/*
 * example-google-distance
 *
 * Copyright(c) 2014 npmawesome.com
 * MIT Licensed
 *
 * @author André König <andre.koenig@posteo.de>
 * 
 */

/**
 * Usage:
 *
 *     node advanced.js
 * 
 */

'use strict';

var distance = require('google-distance');

var options = {
    origin: '40.759011,-73.984472',
    destination: '37.810848,-122.267448',
    mode: 'bicycling',
    units: 'imperial'
};

function onDistance (err, result) {
    if (err) {
        return console.error(err);
    }

    console.log(result);
}

distance.get(options, onDistance);
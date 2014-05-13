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
 *     node basic.js
 * 
 */

'use strict';

var distance = require('google-distance');

var options = {
    origin: 'New York City, USA',
    destination: 'San Diego, USA'
};

function onDistance (err, result) {
    if (err) {
        return console.error(err);
    }

    console.log(result);
}

distance.get(options, onDistance);
'use strict';

var distance = require('google-distance');

var options = {
    origin: 'Oakland, USA',
    destination: 'San Diego, USA',
    mode: 'bicycling',
    units: 'imperial'
};

distance.get(options, onDistance (err, result) {
    // ...
});
'use strict';

const express = require('express');
const app = express();

// Configure server
app.set('port', 3000);
app.use(express.static('./public'));

// Serve
var server = app.listen(app.get('port'), function() {
  console.log('Up!');
});


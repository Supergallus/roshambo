'use strict';
var test = require('ava');
var roshambo = require('./');

test(function (t) {
	t.assert(roshambo.play('rock'));
	t.end();
});


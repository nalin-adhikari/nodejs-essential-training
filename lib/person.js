var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name) {
    this.name = name;
};

//Person Object inherits all the functionality from EventEmitter
util.inherits(Person, EventEmitter);

module.exports = Person;
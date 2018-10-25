var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name) {
    this.name = name;
};

//Person Object inherits all the functionality from EventEmitter
util.inherits(Person, EventEmitter);

var nalin = new Person("Nalin Adhikari");
nalin.on('speak', function(said) {
    console.log(`${this.name}: ${said}`);
});

nalin.emit('speak', "Hello World");
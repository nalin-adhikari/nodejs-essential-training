var Person = require("./lib/person");

var nalin = new Person("Nalin Adhikari");
var john = new Person("John Cena");

nalin.on('speak', function(said) {
    console.log(`${this.name}-> ${said}`);
});

john.on('speak', function(said) {
    console.log(`${this.name}: ${said}`);
});

nalin.emit('speak', "Hello World");
john.emit('speak', "You can't see me!");
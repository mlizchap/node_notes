// node allows you to use the inherit function pass the prototype chain to other objects

var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    this.greeting = 'Hello World!'
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ':' + data);
    this.emit('greet', data)
}

var greeter1 = new Greetr();

greeter1.on('greet', function() {
    console.log('someone greeted')
})

greeter1.greet('Tony');
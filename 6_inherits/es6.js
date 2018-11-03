'use strict';

var EventEmitter = require('events');

class Greetr extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello World'
    }

    greet(data) {
        console.log(`${this.greeting}: ${data}`)
        this.emit('greet', data);
    }
}

var greeter1 = new greeter1()
greeter1.greet("Jane");
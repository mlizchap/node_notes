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

var greeter1 = new Greetr()
greeter1.greet("Jane");
var Emitter = require('events');

var emitr = new Emitter();

emitr.on('greet', function() {
    console.log('node event emitter')
});

emitr.emit('greet');
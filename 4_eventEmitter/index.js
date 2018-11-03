// import the event:
var Emitter = require('./emitter');
var emtr = new Emitter();

var NodeEmitter = require('events');
var nodeEmtr = new NodeEmitter();

var eventConfig = require('./config').events;

/** CUSTOM **/
// create the on method with a event type (property name) and listener 
emtr.on(eventConfig.GREET, function() {
    console.log("greet event has occurred")
})
emtr.on(eventConfig.GREET, function() {
    console.log("a greeting has occurred")
})
// emit the event
emtr.emit('greet');


/** NODE **/
// create the on method with a event type (property name) and listener 
nodeEmtr.on('node-greet', function() {
    console.log("NODE: greet event has occurred")
})
nodeEmtr.on('node-greet', function() {
    console.log("NODE: a greeting has occurred")
})
// emit the event
nodeEmtr.emit('node-greet');
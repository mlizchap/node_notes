# Node 

## Overview 
- a C++ program with V8 Engine embedded that adds features to make it suitable to be a server technology
- contains a **V8 engine**  
    - written in C++
    - able to communicate with the computer's microprocessor (lower level machine code) 
    - gives you the ability to add extra features to JS 
- with c++ you can deal with files/folders on the hard drive

### A Server Technology
- Better ways to organize code into reusable pieces
- Ways to deal with files
- Communicate over the internet
- ability to accept requests and send them over the internet
- a way to deal with work that takes time (async coding)

### Parts of Node
- Node Core (C++) - built outside of Node but used in Node (dependencies)
    - EX: V8, http_parser, zlib (for zip files)
- Javascript Core 
    - Lib UV: JS files, mostly wrappers of C++ features

## Setup
- install Node
- write code in a `.js` file
- to run: `$ node <filename>.js`

## Modules 
- a reusable block of code who's existance does not impact other code 
- types:
    - common JS modules: an agreed standard for how modules should be structured in Node
    - ES6 modules 
- `require(location)`: a function used to import modules in Node
    - takes the argument of a string of the path of where the code is located 
    - `module.exports`: the return value of the `require` function.  Originally an empty object. 
    - when `requre` is run it wraps the code in the file in a function expression and gives access to variables `exports`, `require`, `module`, `__filename`, `__dirname`.  Due to scope this allows the code within the expression to only be accessed locally and not outside of the expression. 
```javascript
    (function (exports, require, module, __filename, __dirname) {
        // some code here
        module.exports = // something 
    })
```
*see modular patterns folder for examples of patterns*

## Events
- something that has happened in our app that we can respond to 
- 2 kinds of events in Node:
1.  system events: c++ side, ex: reading files, receiving data
2.  custom events: javascript core, the event emitter 
- event emitter: built into node, a way of dealing with events
    ```javascript
    var Emitter = require('events');
    var emtr = new Emitter();
    emtr.on('greet', () => {  } )
    emtr.emit('greet');
    ```
*event emitter example*
- inheriting events from the event emitter
    - you can create objects in JS that inherit event functionality
    ```javascript
    util.inherits(Greetr, EventEmitter)
    ```
*inherit examples* 


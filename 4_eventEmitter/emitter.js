// Node has its own event emitter, this is just to demonstrate

function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function(type, listener) {
    // if this.events[type] doesnt exists, creates a new property of the type name that is an empty array
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

Emitter.prototype.emit = function(type) {
    if (this.events[type]) {
        this.events[type].forEach(function(listener) {
            listener();
        })
    }
}

module.exports = Emitter;
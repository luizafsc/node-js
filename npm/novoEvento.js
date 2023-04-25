var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function () {
    console.log('você está fedendo!');
}

var meuControladorDeEvento = function () {
    console.log('você está cheiroso!');
}

eventEmitter.on('scream', myEventHandler);
eventEmitter.on('meu evento', meuControladorDeEvento);


eventEmitter.emit('scream');
eventEmitter.emit('meu evento');
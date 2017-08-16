var events=require('events');

var eE =new events.EventEmitter();

var write= function write()
{
console.log("vijay is trying events in nodejs");
}

eE.on('gedit', write);

eE.emit('gedit');


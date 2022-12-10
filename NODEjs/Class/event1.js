var events = require('events');
var em = new events.EventEmitter();
em.addListener('FirstEvent',function (data){
    console.log('First Subscriber:'+data);
});
em.on('Second Event',function(data){
    console.log('Second subscriber:'+data);
});
em.emit('FisrtEvent','This is my first Node.js event emitter example');
em.emit('SecondEvent','This is my second Node.js event emitter example');
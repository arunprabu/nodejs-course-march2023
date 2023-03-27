// events and event emitter
const events = require('events'); // importing events

// creating an obj for EventEmitter class
const eventEmitter = new events.EventEmitter();

// defining custom event
eventEmitter.on('reportGenerated', (data) => {
  // upon the above event is emitted, the callback will be called
  console.log("Inside reportGenerated");
  console.log(data);
});

console.log('Before the custom event triggered');

// triggering / emitting the custom event thru js program
eventEmitter.emit('reportGenerated', 'Steve');

console.log("Program Ended");
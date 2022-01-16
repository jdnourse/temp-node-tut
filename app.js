const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data received from ${name}, id: ${id}`);
});
customEmitter.on("response", (name, id) => {
  console.log(`some other data received`);
});
customEmitter.emit("response", "john", 34);

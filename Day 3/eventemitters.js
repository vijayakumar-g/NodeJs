var events =require("events");

var eE=new events.EventEmitter();


var vj=function vj()
{
console.log("vj is writing");
}
var krish= function krish()
{
console.log("krish is writing");
}
//adding the event and assigning the eventfunction to it using add and on
eE.addListener("write",vj);
eE.on("write",krish);

//listener count

var count=events.EventEmitter.listenerCount(eE, "write");

console.log(count+"persons are writing");

eE.emit("write");

console.log("\nafter sometimes\n")
//krish is not writing removing listener

eE.removeListener("write",krish);
console.log("krish wont write now");

var count=events.EventEmitter.listenerCount(eE, "write");
console.log(count+"persons are writing");

console.log("finished");
 



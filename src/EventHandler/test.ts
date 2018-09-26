import EventHandler from "./index";

const a = EventHandler.getInstance("testEvent");
const b = EventHandler.getInstance("testEventq");

a.addListener("hello", (e)=>{console.log(e)});

a.emit("hello", {hi: "22222"});
b.emit("hello", {hi: "22222"});
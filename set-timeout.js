// setTimeout
const sayHello = function() {
  //alert("Hello");
  console.log("Hello");
}
setTimeout(sayHello, 1000);

// setInterval
const sayGoodbye = function() {
  // alert("Hello");
  console.log("Goodbye");
}
const timer = setInterval(sayGoodbye, 3000);

// clearInterval
clearInterval(timer);
// let x = 123;

// document.getElementById("demo").innerHTML = x.toString() + "<br>" + (123).toString() 
// + "<br>" + (100+23).toString();

let x = 9.656;

document.getElementById("demo").innerHTML = x.toExponential() + "<br>" +
x.toExponential(2) + "<br>" + x.toExponential(3) + "<br>" + x.toExponential
(4) + "<br>" + x.toExponential(5);
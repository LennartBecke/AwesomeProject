const myBaragraph = document.querySelector('p');
myBaragraph.textContent = "Hello world!";
console.log("Text gesetzt");

if (true) {
    var x = 5;
}
console.log(x);

/* let y = 7; */

if (true) {
    let y = 6;
    console.log(y);
}

let coffees = ['French roast', 'Colombian', 'Kona'];
console.log(coffees.length);


let sales = 'Toyota';

function carTypes(name) {
    if (name === 'Honda'){
        return name;
    } else {
        return "Sorry, we don't sell " + name + ".";
    }
}

var car = { myCar: 'Saturn', getCar: carTypes('Honda'), special: sales };

console.log(car.myCar);
console.log(car.getCar);
console.log(car.special);

let myButton = document.querySelector('button');
let myParagraph = document.querySelector('p');
let myH1 = document.querySelector('h1');

myButton.onclick = function() {
    myParagraph.textContent = "Hallo!"
    myH1.textContent = "HalloHalloHalloHallo"
}

/* function learn(title, callback) {
    alert("Ich programmiere gerade " + title);
    callback();
} */

/* learn("JavaScript", function (){
    alert("Programmiermeister!");
}); */

/* learn("JavaScript", () => {
    console.log("Im Callback");
}); */ /* Arrow functions wie diese sind im Scope besser und besser abgekapselt*/

/* Man kann auch objekten functions übergeben und die Objekte als function aufrufen */ 



const WörterArray=["Water", "waterrr", "Hello"];

let myid = document.getElementById("id1");

for (variable of WörterArray) {
    let node = document.createElement("li");
    let textnode = document.createTextNode(variable);
    node.appendChild(textnode);
    myid.appendChild(node);
}

/* let texts = ["java", "Hallo"];
let list = document.getElementById("list");

texts.forEach(text => {
    let item = document.createElement("li");
    let textnode = document.createTextNode(text);
    node.appendChild(textnode);
    list.appendChild(node);
}); */

//Call
var employee1 = {firstName: 'Jon', lastName: 'Kuperman'};
var employee2 = {firstName: 'Kelly', lastName: 'King'};

function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}
console.log("Calls using call()");
say.call(employee1, 'Hello'); // Hello Jon Kuperman
say.call(employee2, 'Hello'); // Hello Kelly King

//Apply
console.log("Calls using apply()");
say.apply(employee1, ['Hi']); // Hello Jon Kuperman
say.apply(employee2, ['Hi']); // Hello Kelly King

//Bind
console.log("Calls using bind()");
var sayHelloJon = say.bind(employee1);
var sayHelloKelly = say.bind(employee2);

sayHelloJon("Hello"); // Hello Jon Kuperman
sayHelloKelly("Hello"); // Hello Kelly King


console.log("");
console.log("--------------------------------------");
console.log("");

console.log("Use of var to indicate it can be redeclared and redefined");
var greeting = "hey hi";
var greeting = "say Hello instead";
console.log(greeting);

console.log("Use of let to indicate it can be redefined but not redeclared");
let greeter = "say Hi";
    greeter = "say Hello instead"; // This will work
    console.log(greeter);

let greeters = "say Hi";
//let greeters = "say Hello instead"; // error: Identifier 'greeter' has already been declared
console.log(greeters);

console.log("Use of const to indicate it can neither be redefined but not redeclared");
const greetings = "say Hi";
//greetings = "say Hello instead";// error: Assignment to constant variable.
    console.log(greetings);

console.log("");
console.log("--------------------------------------");
console.log("");


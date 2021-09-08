//Call
var employee1 = {firstName: 'Jon', lastName: 'Kuperman'};
var employee2 = {firstName: 'Kelly', lastName: 'King'};

function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

say.call(employee1, 'Hello'); // Hello Jon Kuperman
say.call(employee2, 'Hello'); // Hello Kelly King
//Apply

say.apply(employee1, ['Hello']); // Hello Jon Kuperman
say.apply(employee2, ['Hello']); // Hello Kelly King
//Bind

var sayHelloJon = say.bind(employee1);
var sayHelloKelly = say.bind(employee2);

sayHelloJon(); // Hello Jon Kuperman
sayHelloKelly(); // Hello Kelly King
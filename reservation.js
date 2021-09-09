"use strict";

// Use of CLASSES with INHERITANCE and METHOD OVERRIDING
class Fees {
    static description = 'Calculates fees for the symptoms provided';
    static getCost = (...syms) =>{    // USE OF REST OPERATOR and CLASS STATIC METHOD
        return syms.length*150;
    }
}
class RecurringFees extends Fees {
    static description = 'Calculates fees for recurring patients';
    static getCost(n=1) {     // Use of DEFAULT ARGUMENTS and METHOD OVERRIDING
        return n*120;
    }
}

// const age= require('./age.js');

const myFunction= async () => {

    var fname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var birth = document.getElementById("birthdate").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var recurr = document.getElementById("recurring").value;

    var sym1 = document.getElementById("sym1").value;
    var sym2 = document.getElementById("sym2").value;
    var sym3 = document.getElementById("sym3").value;
    var sym4 = document.getElementById("sym4").value;

    var firstname,lastname;

    if(fname.includes(" ")){    // Use of INCLUDES OPERATOR
        let arr=fname.split(" ");    //Use of SPLIT OPERATION
        firstname= arr[0];
        lastname=arr[1];
    }
    else{
         firstname= fname;
         lastname= " ";
    }


    if(typeof(fname)!== "string") {    //Use of TYPEOF OPERATOR
        alert(" not valid name");
    }

   var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;   // Use of REGULAR EXPRESSION
   if(emailPattern.test(email)==false){
       alert("Not a valid email id")
   } ;

    if(sym1==""){ sym1=null}
    if(sym2==""){ sym2=null}
    if(sym3==""){ sym3=null}
    if(sym4==""){ sym4=null}

    let arr1=[],arr2=[];
    if(sym1!==null)
    {
        arr1.push(sym1);
    }
    if(sym2!==null)
    {
        arr1.push(sym2);
    }
    if(sym3!==null)
    {
        arr2.push(sym3);
    }
    if(sym4!==null)
    {
        arr2.push(sym4);
    }
    

    var syms=[...arr1,...arr2];   //Use of SPREAD OPERATOR
    
    function age(birth) {
        var today = new Date();
        birth = new Date(birth);
        const b = async () => {
            return (today.getFullYear() - birth.getFullYear());
            console.log(today)
            console.log(birth)
        }
        return b           // Use of CLOSURES
    }
    
    let agee;
    await age(birth)().then((a) => {agee =a});
   
    birth = new Date(birth);
    let obj = {name: fname, email: email, birthdate: birth};
    let {name: fullname, email:mailid}= obj;   //Use of OBJECT DESTRUCTURING
    document.getElementById("result").innerHTML = "Appointment is booked by "+fullname+" with email "+mailid+" with age "+agee;

    let [imp1,imp2,,]=syms;    //Use of ARRAY DESTRUCTURING
    console.log("\nThe two major symptoms the patient facing are:"+imp1+"  and "+imp2);

    console.log("\nThe two less major symptoms the patient facing are:"+ syms.slice(2,4));  //Use of SLICE OPERATOR

    let fee
    if(recurr=='first'){
        fee = Fees.getCost(...syms);
        console.log("\nVisiting fees for first-time patients: "+fee);
    }
    else{
        fee= RecurringFees.getCost();
        console.log("\nVisiting fees for recurring visits: "+fee);
    }

    let src = {date: date, time:time};
    Object.assign(obj,src); // Use of OBJECT.ASSIGN


     let data = [];
     if(JSON.parse(sessionStorage.getItem('data')))   // Use of JSON.PARSE
     {
         data = JSON.parse(sessionStorage.getItem('data'))
     }   

     data.push(obj)
     sessionStorage.setItem('data', JSON.stringify(data)); // Use of JSON.STRINGFY
     

// Use of external API call to find users of the app.  
console.log("\n Users of the app are:")  

const URL = "https://jsonplaceholder.typicode.com/users";

fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        for (let i=0;i<data.length;i++)
        {
            let users=data[i];
            console.log(users.name)
        }  
    }).catch((error) => {
         console.log(error)
    });
//===========================================

}
const bookinginfo = () => {

      document.getElementById("result").innerHTML = "Your appointments for today " + sessionStorage.getItem("data");

}

// const getLocation=()=> {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//       alert("Geolocation is not supported by this browser.");
//     }
//   }
//   function showPosition(position) {
//     var lat = position.coords.latitude;
//     var lng = position.coords.longitude;
//     document.getElementById("result").innerHTML = "Latitude: " + position.coords.latitude +
//     "<br>Longitude: " + position.coords.longitude;
// }
function getLocation() {
    navigator.geolocation.getCurrentPosition(successful, console.log);  
}
const successful = async (position) => {
    const {latitude, longitude} = position.coords;
    let response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=bdcde0d9ad2b471188fe440c59b542f3`)
    let data = await response.json();
    console.log(data);
    document.getElementById("location").innerHTML = data.results[0].formatted;
};
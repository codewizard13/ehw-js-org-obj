/*
Program Name:   EHW JavaScript ES6 Demo: JSON Website Organization Object
File Name:      demo.js
Date Created:   01/13/22
Date Modified:  --
Version:        1.00
Programmer:     Eric L. Hepperle

TAGS:           Eric Hepperle, JavaScript, ES6, DOM Manipulation, Demo, Eric L. Hepperle

Purpose: 
    This JavaScript file is a demo for testing Eric's online website info
    as a JSON/JavaScript OBJECT. In this demo we will retrieve and use
    data from the object.
    
Usage:
    Use with controller.php

Sample results: 

--

Requires:
	* controller.php
    * Browser
    
Demonstrates:
    * Vanilla JavaScript
    * JavaScript ES6/ECMAScript2015

*/


/*
This is a demo by Eric L. Hepperle which demonstrates 
storing and retrieving data from JSON/JavaScript objects.
The main object stores info about Eric's websites and digital/online
properties and brands.
*/

var data = {
  "data": {
    "x": "1",
    "y": "1",
    "url": "http://url.com"
  },
  "event": "start",
  "show": 1,
  "id": 50
}


const autos = {
    "cars": [
        {
            "make": "Ford",
            "model": "Mustang",
            "year": 1979,
        },
        {
            "make": "Ford",
            "model": "Fiesta",
            "year": 1987,
        },
        {
            "make": "Chevy",
            "model": "Malibu",
            "year": 1979,
        },
    
    ],
    "trucks": [
        {
            "make": "Ford",
            "model": "Mustang",
            "year": 1979,
        },
        {
            "make": "Ford",
            "model": "Fiesta",
            "year": 1987,
        },
        {
            "make": "Chevy",
            "model": "Malibu",
            "year": 1979,
        },    
    ],
}

data = autos;


// create new element
eh_div = document.createElement('div');

// give class to element
eh_div.id = "ehw-content";

// define content to display
var content =`${JSON.stringify(data)}`;

// create a text node
var text_node = document.createTextNode("hello");

// add text node to div
eh_div.appendChild(text_node);

// eh_div.innerHtml = "Hello!";

// add div to body
document.body.prepend(eh_div);

// ----- Change Div Contents ---

// define our content element handle
const cont_el = document.querySelector('#ehw-content');

// change content text
cont_el.innerHTML = "<h4>Stringified JSON data</h4>";
cont_el.innerHTML += content;

// loop through and print out json data
/*
function appendData(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
    mainContainer.appendChild(div);
  }
}
*/

// not working with foreach yet ...
function formatJSONAutos_01(obj) {
    
    let keys = Object.keys(obj);
    console.log(`keys: ${keys}`);
    
    for (let i=0; i < keys.length; i++) {
        let p = document.createElement('p');
        console.log(obj[i]);
    }
}


formatJSONAutos_01(data);



"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Testing typescript with index.js
// to connect typescript to js, simply type ts.cmd index.ts -w
// in terminal, will create a js file of the same name as the ts file
var name = "Sannya";
console.log(name);
var number = 4;
console.log(number);
// Assigning type to a variable
var circumference = function (diameter) {
    return diameter * Math.PI;
};
console.log(circumference(7.5));
// arrays
// an array cannot have mixed types
var fruits = ["apple", "strawberry", "berries", "melon"];
fruits.push("banana");
// This will give error
fruits.push(3);
// Neither we can overwrite with another type
fruits[0] = 3;
// Mixed arrays
// to create a mixed array, need to declare it when creating
var mixed_array = [3, "ken", 4, "chunli", 8, 9];
// These wont give error
mixed_array.push("ryu");
mixed.push(10);
mixed[0] = "black";
// Objects
// once defined the type of the key in the object, cant change it
var ninja = {
    name: "Mario",
    belt: "black",
    age: 30,
};
ninja.name = "Ryu";
ninja.age = 40;
// This will give error
ninja.age = "30";
// This too will give error
ninja.skills = ["fighting", "sneaking"];
// but we can overwrite the same object to overwrite each pair of data
// But it has to have the same structure
// the values can be diff, type will be same
ninja = {
    name: "Yoshi",
    belt: "orange",
    age: 50,
};
// Tutorial 5
// Explicit Types
// if we wanna declare a variable string but not yet know what to assign it
var character;
var age;
var isLoggedIn;
age = 30;
isLoggedIn = true;
// Arrays
var ninjas; //array of strings
// however this is not declared therefore if we wanna push something in this array
// we cant do that because it doesnt exist
// to do that we will say
var ninjas = [];
ninjas.push("yoshi");
// Union Types --> of different types
// on Arrays
var mixed = [];
mixed.push("hello");
mixed.push(20);
mixed.push(false); //will give an error bc didnt specify
// on normal variables
var uid;
uid = "123";
uid = 123;
// Objects
var ninjaOne;
ninjaOne = { name: "yoshi", age: 30 };
// specifying types explicitly
var ninjatwo;
ninjaTwo = {
    name: "mario",
    age: 20,
    beltColor: "black",
    skills: [], //this will give error
};
// Any type in typescript
var age = 25;
age = true; //possible since variable is of any type
age = "hello";
age = {
    name: "sannya",
};
var mixed = [];
mixed.push(5);
mixed.push("mario");
mixed.push(false);
var ninja;
// Functions in TS
// here it will automatically assume that this is a function type
var greet = function () {
    console.log("hello world");
};
// This will give error
greet = "hello";
// we can explicitly define function type
var greet;
greet = function () {
    console.log("hello world");
};
var add = function (a, b) {
    console.log(a + b);
};
// This will give an error
add(5);
// if we add a third argument, will give error
add(5, 10, 5);
// so we will do this
var add = function (a, b, c) {
    console.log(a + b);
};
add(5, 10); //here if no third argument, will take as undefined
// if we dont want undefined we can pass a value to the third parameter but without the question mark
var add = function (a, b, c) {
    console.log(a + b);
};
// This will now consider 10 if a third argument is not given
// Here it will overwrite the default value
add(5, 10, 20);
// Same with this
add(5, 2, "20");
// in this return , TS has inferred that whatever will be reutred will be a number
var minus = function (a, b) {
    return a - b;
};
// Therefore here result is a number
var result = minus(10, 7);
// This will give an error
result = "string";
// we can explicitly define that the return will be of some type
var minus = function (a, b) {
    return a - b;
};
var logDetails = function (uid, item) {
    console.log("".concat(item, " has a uid of ").concat(uid));
};
var greet = function (user) {
    console.log("".concat(user.name, " says hello"));
};
// Function signatures-->general strucutre of a function
var greet;
// example 1
var greet;
greet = function (name, greeting) {
    console.log("".concat(name, " says greeting"));
};
// example 2
// this is the signature of the function
var calc;
calc = function (numOne, numTwo, action) {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
var logDetails;
logDetails = function (ninja) {
    console.log("".concat(ninja.name, " is ").concat(ninja.age, " years old"));
};
// The DOM type casting in index.js
var anchor = document.querySelector("a");
// if we do this it will return null bc the anschor is not being assigned the html element in our index.html file
console.log(anchor.href);
// so we can do this
// if (anchor{console.log(anchor.href);})
// However in typescript we just place an exclamation mark at the end of the query selector as done above
// We could use this bc it fetches an html element i.e form but we can t use this in case there are more than one form
// const form =document.getquerySelector('form')!;
// here we used htmlFormElement bc using class, ts just know its an html element but doesnt know that it is a form element
var form = document.querySelector(".new-item-form");
// console.log(form.children);
// inputs
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
// Implementing class
// creating instances
var invoice1 = new Invoice("Mario", "work on the mario website", 250);
var invoice2 = new Invoice("Yoshi", "work on the yoshi website", 300);
// this way only objects created using Invoice class wil be added in this array
var invoices = [];
// this wont work
// invoices.push("hello")
invoices.push(invoice1);
invoices.push(invoice2);
// not included details since it is private
invoices.forEach(function (invoice) {
    console.log(invoice.client, invoice.amount, invoice.format());
});
var me = {
    name: "Sannya",
    age: 30,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log("I spent ", amount);
    },
};
var greet = function (person) {
    console.log("hello ", person.name);
};
greet(me);
// this variable must implement this interface
var docOne;
var docTwo;
docOne = new Invoice("yoshi", "web work", 250);
docTwo = new Invoice("mario", "plumbing work", 200);
var docs = [];
docs.push(docOne);
docs.push(docTwo);
// Generics --> Generice allow us to create reusable blocks of code
// wich can be used with different types
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var docOne = addUID({ name: "Yoshi", age: 40 });
// this will give error bc ts knows that obj is going to be an object but wont
// know what arguments it will do bc those arent specified in the function body
console.log(docOne.name);
// Therefore we will add an anchor tag and then specify it
// as the type of the obj so this anchor tag will capture whatever type of obj we specify later as the argument
// The revised version will be
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
// but if we do this, then it will accept any type and if we assign it a string,
// it will be totally nonsense for a string to have an uid
// so to come around this, we do this
var uid = function (obj) {
    // repeat
};
// to be more specific
// it will now allow those objects with these properties
var uid = function (obj) {
    // repeat
};
var docThree = {
    uid: 1,
    resName: "person",
    data: "data",
};
// over the time these could become difficult since there are so many resource types and you'll
// find yourself looking for their indexes
// avoid this by using enum
var docFive = {
    uid: 2,
    resType: 3,
    data: { title: "name of the wind" },
};
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
var docSix = {
    uid: 10,
    resType: ResourceType.BOOK,
    data: { name: "yoshi" },
};
console.log(docSix); // it will output resType : 0 since index of book is 0
//
// Arrays are flexible in positions
var arr = ["ryu", 25, true];
arr[0] = false;
arr[1] = yoshi;
// These will work
arr = [30, false, "yoshi"];
// defining tuple
var tup = ["ryu", 25, true];
// this will give error
tup[0] = false;
var studnet;
student = ["sannya", 828218];

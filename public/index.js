var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
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
// list template instance
var ul = document.querySelector("ul");
var list = new ListTemplate(ul);
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    var doc;
    if (type.value === "invoice") {
        // replaced by tuples
        // doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
        doc = new (Invoice.bind.apply(Invoice, __spreadArray([void 0], values, false)))();
    }
    else {
        // replaced by tuples
        // doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
        doc = new (Payment.bind.apply(Payment, __spreadArray([void 0], values, false)))();
    }
    list.render(doc, type.value, "end");
});

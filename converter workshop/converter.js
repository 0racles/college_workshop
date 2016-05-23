//converter.js

var APP = (function () {
   var 
   input = document.querySelectorAll(".converter-input")[0],
   currency = document.querySelectorAll(".converter-currency"),
   span = document.querySelectorAll(".result-amount")[0],
   button = document.querySelectorAll(".converter-action")[0],
   blank = "",
   rates = {
	EUR : 285,
	USD : 201,
	YEN : 166
	},
     getCurrency = function () {
     for (var i = 0; i < currency.length; i++) {
	var money = currency[i];
	var result;
       if (money.getAttribute("value") === "EUR") { 
		return parseInt(input.value, 10) * rates.EUR;
	} 
       else if (money.getAttribute("value") === "USD") {
		return parseInt(input.value, 10) * rates.USD;
		}
	else if (money.getAttribute("value") === "YEN") {
		return parseInt(input.value, 10) * rates.YEN;
	}
	
    }

	input.value = "";
		
},
	callFunction = function () {
	    var take = getCurrency();	
	    	//console.log(take);
	//span.insertAdjacentHTML("afterbegin", result);		
},
   	clearField = function () {
	span.textContent = blank;
	},
   	init = function () {
	button.addEventListener("click", callFunction);
	input.addEventListener("focus", clearField);
   };
   return {
	init : init
   };
}());
APP.init()
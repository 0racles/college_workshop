var CONVERTER = (function () {

  var currency,
    convertedCurrency,
    button = document.querySelectorAll(".converter-action")[0],
    currencyChoice = document.querySelectorAll(".converter-currency")[0],
    converterInput = document.querySelectorAll(".converter-input")[0],
    originalAmount = document.querySelectorAll(".original-amount")[0],
    resultAmount = document.querySelectorAll(".result-amount")[0],
    
    convert = function () {
      originalAmountValue = converterInput.value;
      currency = currencyChoice.value;

      if(currency === "EUR") {
        convertedCurrency = originalAmountValue * 1.26;
      }
      else if (currency === "USD") {
        convertedCurrency = originalAmountValue * 1.62;
      }
      else if (currency === "YEN") {
        convertedCurrency = originalAmountValue * 172.88;
      }

      originalAmount.textContent = originalAmountValue;
      resultAmount.textContent = convertedCurrency + " " + currency;

    }

    init = function () {
      button.addEventListener(
        "click",
        convert,
        false
      )  
    };

  // returns a public object
  return {
    init: init
  };

}());

CONVERTER.init();

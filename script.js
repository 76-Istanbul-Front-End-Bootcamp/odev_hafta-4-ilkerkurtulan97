/*
const data = {
  USD: {EUR: 0.82, GBP: 0.74},
  EUR: {USD: 1.23, GBP: 0.91},
  GBP: {USD: 1.35, EUR: 1.10},
};

const currencyKeys = Object.keys(data);

function createCurrencyElements(elements, root, inputName){
  for(let i =0; i< elements.length; i++){
    const currencyKeyDiv   = document.createElement("div");
    const currencyKeyInput = document.createElement("input");
    currencyKeyInput.setAttribute("type", "radio");
    currencyKeyInput.setAttribute("name", inputName);
    currencyKeyInput.setAttribute("id", inputName + elements[i]);
    currencyKeyInput.setAttribute("value", elements[i]);

    const currencyKeyLabel = document.createElement("label");
    currencyKeyLabel.setAttribute("for", inputName + elements[i]);
    currencyKeyLabel.textContent = elements[i];

    currencyKeyDiv.appendChild(currencyKeyInput);
    currencyKeyDiv.appendChild(currencyKeyLabel);
    root.appendChild(currencyKeyDiv);
  }
}

//from
const parentEl = document.querySelector("#currency-box-from");
const fromInputName = "currency_from";
createCurrencyElements(currencyKeys, parentEl, fromInputName);

// to
const parentToEl = document.querySelector("#currency-box-to");
const toInputName = "currency_to";
createCurrencyElements(currencyKeys, parentToEl, toInputName);


const calculateButton = document.querySelector("#calculate-button");
calculateButton.addEventListener("click", function(){
   // kimden ceviriyourz
   const fromTarget = document.querySelector("input[name='currency_from']:checked").value;
   // kime ceviriyoruz
   const toTarget   = document.querySelector("input[name='currency_to']:checked").value;
   // amountu alalim
   const amount     = document.querySelector("input[name='amount']").value;

   const currentCurrencyObject = data[fromTarget];
   const resultForOne = currentCurrencyObject[toTarget];
   const result = amount * resultForOne;

   const currencyResult = document.querySelector("#currency-result");
   currencyResult.innerHTML = amount + " " + fromTarget + " = " + result + " " + toTarget;
});

*/

////// MY SOLUTION

const data = {
  USD: { EUR: 0.82, GBP: 0.74, RUB: 73.43 },
  EUR: { USD: 1.23, GBP: 0.91, RUB: 90.0 },
  GBP: { USD: 1.35, EUR: 1.1, RUB: 99.29 },
  RUB: { USD: 0.014, EUR: 0.011, GBP: 0.01 },
};

const currencyKeys = Object.keys(data);

function createCurrencyElements(elements, root, inputName) {
  for (let i = 0; i < elements.length; i++) {
    const currencyKeyDiv = document.createElement("div");
    const currencyKeyInput = document.createElement("input");
    currencyKeyInput.setAttribute("type", "radio");
    currencyKeyInput.setAttribute("name", inputName);
    currencyKeyInput.setAttribute("id", inputName + elements[i]);
    currencyKeyInput.setAttribute("value", elements[i]);

    const currencyKeyLabel = document.createElement("label");
    currencyKeyLabel.setAttribute("for", inputName + elements[i]);
    currencyKeyLabel.textContent = elements[i];

    currencyKeyDiv.appendChild(currencyKeyInput);
    currencyKeyDiv.appendChild(currencyKeyLabel);
    root.appendChild(currencyKeyDiv);
  }
}



//from
const parentEl = document.querySelector("#currency-box-from");
const fromInputName = "currency_from";
createCurrencyElements(currencyKeys, parentEl, fromInputName);

//to
const parentToEl = document.querySelector("#currency-box-to");
const toInputName = "currency_to";
createCurrencyElements(currencyKeys, parentToEl, toInputName);

const calculateButton = document.querySelector("#calculate-button");


//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

const amountInput = document.getElementById("amountInput");

calculateButton.addEventListener("click", function () {
  let checkedFrom = document.querySelector("input[name='currency_from']:checked");
  let checkedTo = document.querySelector("input[name='currency_to']:checked");
  let currencyFrom = document.querySelector("input[name='currency_from']");
  let currencyTo = document.querySelector("input[name='currency_to']");
  const currencyResult = document.querySelector("#currency-result");
  let selectedValueFrom;
  let selectedValueTo;

  if (!checkedFrom && !checkedTo) {
    currencyResult.innerHTML = " Please select from both sides";
  } else if (!checkedFrom) {
    currencyResult.innerHTML = " Please select a base currency";
  } else if (!checkedTo) {
    currencyResult.innerHTML = " Please select a opposite currency";
  }
  

  for (let i = 0; i < checkedFrom.length; i++) {
    if (checkedFrom[i].checked) {
      selectedValueFrom = checkedFrom[i].value;
      return selectedValueFrom;
        
    } 
  }
  

  for (let i = 0; i < checkedTo.length; i++) {
    if (checkedTo[i].checked) {
      selectedValueTo = checkedTo[i].value;
      return selectedValueTo;
    } 
  }
  

  if (selectedValueFrom == selectedValueTo) {
    alert("You have selected the same currencies");
    currencyResult.innerHTML = " You have selected same currency on both sides";
  }
    

  if (amountInput.value.length == 0 || amountInput.value == "") {
    alert("Please enter an input");
  } else {
    let numbers = /^[0-9]+$/;
    if (numbers.test(amountInput.value) == true) {
      const fromTarget = document.querySelector(
        "input[name='currency_from']:checked"
      ).value;
      const toTarget = document.querySelector(
        "input[name='currency_to']:checked"
      ).value;
      // amountu alalim
      const amount = document.querySelector("input[name='amount']").value;
      const currentCurrencyObject = data[fromTarget];
      const resultForOne = currentCurrencyObject[toTarget];
      const result = amount * resultForOne;
      const currencyResult = document.querySelector("#currency-result");
      currencyResult.innerHTML =
        amount + " " + fromTarget + " = " + result + " " + toTarget;
    } else {
      alert("Please enter a number ");
    }
  }
});


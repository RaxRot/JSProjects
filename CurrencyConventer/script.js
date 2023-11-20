const myApiKey = apiKey;
const api = `https://v6.exchangerate-api.com/v6/${myApiKey}/latest/USD`;
const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");
const convertButton = document.querySelector("#convert-button");
const result = document.querySelector("#result");
let amount, fromCurrency, toCurrency;

//Get values
const currencies = Object.keys(country_list);

//Create dropdowns
function createDropdownOptions(dropdown, currencies) {
  currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    dropdown.add(option);
  });
}

//create dropdown from
createDropdownOptions(fromDropDown, currencies);

//create dropdown to
createDropdownOptions(toDropDown, currencies);

//set values init
fromDropDown.value = "USD";
toDropDown.value = "EUR";

let convertCurrency = function () {
  //Take values
  amount = document.querySelector("#amount").value;
  fromCurrency = fromDropDown.value;
  toCurrency = toDropDown.value;

  if (amount.length !== 0) {
    //Make PI
    makeAPICall();
  } else {
    //Error
    alert("Please enter");
  }
};

async function makeAPICall() {
  const response = await fetch(api);
  const data = await response.json();

  let fromExchangeRate = data.conversion_rates[fromCurrency];
  let toExchangeRate = data.conversion_rates[toCurrency];

  const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
  result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(
    2
  )} ${toCurrency}`;
}

convertButton.addEventListener("click", convertCurrency);

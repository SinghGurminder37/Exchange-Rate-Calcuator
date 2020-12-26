// Variables
const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');
const swap = document.getElementById('swap');
const rateEl = document.getElementById('rate');

// To fetch exchange rate and update DOM
function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
    console.log(currency_one, currency_two);

    // To fetch from API
    fetch(`https://v6.exchangerate-api.com/v6//latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.conversion_rates[currency_two];
            console.log(rate);

            // Amount Two calculation and update in DOM
            amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
        
            // Rate Calculations and update in DOM
            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
            });
}


// Event Listeners
currencyEl_one.addEventListener('change',calculate);
amountEl_one.addEventListener('input',calculate);
currencyEl_two.addEventListener('change',calculate);
amountEl_one.addEventListener('input',calculate);
swap.addEventListener('click',() => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
});

calculate();

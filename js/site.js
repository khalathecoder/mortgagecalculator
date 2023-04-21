//inputs
const loanAmount = document.getElementById('loanAmount');
const term = document.getElementById('term');
const interestRate = document.getElementById('interestRate');
const form = document.getElementById('mortgage');


//calculate monthly payment
function calculateMonthlyPayment(loanAmount, term, interestRate) {
let mortgage = loanAmount.value * (interestRate/1200) / (1 - Math.pow(1 + (interestRate/1200), -term));

console.log(mortgage)
return parseFloat(mortgage.toFixed(2));
}

//link submit button to calculatemonthlypayment function
form.onsubmit = (e) => {
    e.preventDefault();

    let monthlyPayment = calculateMonthlyPayment(loanAmount, term.value, interestRate.value);

    document.getElementById('monthlyPayment').innerHTML = `$ ${monthlyPayment}`;
}




function remainingBalance() {

}
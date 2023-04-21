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
    validate();

    let monthlyPayment = calculateMonthlyPayment(loanAmount, term.value, interestRate.value);

    document.getElementById('monthlyPayment').innerHTML = `$ ${monthlyPayment}`;
}

function validate(){
    if(
        loanAmount.value ==="" || term.value ==="" || interestRate.value ===""
    ){
         
 let alert = Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'All fields must be completed.',
  });
    }

}


function remainingBalance() {

}
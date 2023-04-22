
//validate if numbers are positive and if are actual numeric values
function validate() {

    let loanAmount = document.getElementById('loanAmount').value;
    let term = document.getElementById('term').value;
    let interestRate = document.getElementById('interestRate').value;

    // checks to see if number is less than 0 or not a number at all; runs through all entered values.
    if (loanAmount <= 0 || isNaN(Number(loanAmount))) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a valid loan amount.',
          });
        document.loan-form.loanAmount.value;
    } else if (term <= 0 || isNaN(Number(loanAmount))) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a valid term.',
          });
        document.loan-form.term.value;
    } else if (interestRate <= 0 || isNaN(Number(interestRate))) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a valid interest rate.',
          });
        document.loan-form.interestRate.value;
    } else {
        calculate(parseFloat(loanAmount), parseInt(term), parseFloat(interestRate));
    }
    } 
//formula to calculate monthly payment
function calculate(loanAmount, term, interestRate) {
    i = interestRate/100;
let mortgage = (loanAmount) * (i/12) / (1 - Math.pow(1 + (i/12), -term));

mortgage.toFixed(2); 

// formulas
let loanAmountDec = loanAmount.toFixed(2).toLocaleString();
let totalCost = (mortgage * term).toFixed(2);
let totalInterest = (totalCost - loanAmount).toFixed(2);

//principle, total interest and total cost displayed on calculate submit
let result="";

result += `<table>`;
result += `<tr><th>Total Principle:</th>`;
result += `<td>&emsp;&emsp;${loanAmountDec}</td></tr>`;
 
result += `<tr><th>Total Interest:</th>`;
result += `<td>&emsp;&emsp;${totalInterest}</td></tr>`;

result += `<tr><th>Total Cost:</th>`;
result += `<td>&emsp;&emsp;${totalCost}</td></tr>`;

result += `</table>`;

document.getElementById('loan-info').innerHTML = result;


// single payment below Your monthly payments header
let singlePayment = "";
singlePayment += `<h4>$${mortgage.toFixed(2)}</h4>`;
document.getElementById('monthlyPayment').innerHTML = singlePayment;



//table rows
let table="";

table += `<table class="table table-striped table-light rounded-4 shadow">`;
table += `<tr>`;
    table += `<td></td>`;
    table += `<td></td>`;
    table += `<td></td>`;
    table += `<td></td>`;
    table += `<td></td>`;
    table += `<td></td>`;
table += `</tr>`;

let currentBalance = loanAmount;
let paymentCounter = 1;
let interestPaid = 0;

while(currentBalance > 1) {
    //formulas
    towardsInterest = (i/12) * currentBalance;
    towardsBalance = mortgage - towardsInterest;
    interestPaid = interestPaid + towardsInterest;
    currentBalance = currentBalance - towardsBalance;


    //build table for data
    table += `<tr>`;
        table += `<td>${paymentCounter}</td>`;
        table += `<td>${mortgage.toFixed(2)}</td>`;
        table += `<td>${towardsBalance.toFixed(2)}</td>`;
        table += `<td>${towardsInterest.toFixed(2)}</td>`;
        table += `<td>${interestPaid.toFixed(2)}</td>`;
        table += `<td>${currentBalance.toFixed(2)}</td>`;
    table += `</tr>`;

    paymentCounter++;
}
table += `</table>`;

//display results
document.getElementById('table').innerHTML = table;

document.getElementById('mortgage').innerHTML = monthlyPayment;

} 

//validate if numbers are positive and if are actual numbers
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
        // alert("Validation complete");
        calculate(parseFloat(loanAmount), parseInt(term), parseFloat(interestRate));
    }
    } 
//calculate monthly payment
function calculate(loanAmount, term, interestRate) {
    i = interestRate/100;
let mortgage = (loanAmount) * (i/12) / (1 - Math.pow(1 + (i/12), -term));

mortgage.toFixed(2); //replace with alert to test******

// formulas
let loanAmountDec = loanAmount.toFixed(2)
let totalCost = (mortgage * term).toFixed(2);
let totalInterest = (totalCost - loanAmount).toFixed(2);

//principle, total interest and total cost displayed on calculate
let result="";

result += `<table class="table-info">`;
result += `<tr><td>Total Principle:</td>`;
result += `<td class="results">${loanAmountDec}</td></tr>`;

result += `<tr><td>Total Interest:</td>`;
result += `<td class="results">${totalInterest}</td></tr>`;

result += `<tr><td>Total Cost:</td>`;
result += `<td class="results">${totalCost}</td></tr>`;

result += `</table>`;

document.getElementById('loan-info').innerHTML = result;


//table rows
let table="";

table += `<table class="table table-striped">`;
table += `<tr>`;
    table += `<td>1</td>`;
    table += `<td>${mortgage.toFixed(2)}</td>`;
    table += `<td>&nbsp;</td>`;
    table += `<td>&nbsp;</td>`;
    table += `<td>&nbsp;</td>`;
    table += `<td>${(loanAmount).toFixed(2)}</td>`;
table += `</tr>`;

let currentBalance = loanAmount;
let paymentCounter = 1;
let interestPaid = 0;

while(currentBalance > 0) {
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

} 
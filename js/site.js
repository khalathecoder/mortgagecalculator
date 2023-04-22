
// function reset() {
//     // let loanInfo = document.getElementById('loan-info');
//     // loanInfo.innerHTML = '';
//     // let table = document.getElementById('table');
//     // table.innerHTML = '';
// }

function validate() {

    let loanAmount = document.getElementById('loanAmount').value;
    let term = document.getElementById('term').value;
    let interestRate = document.getElementById('interestRate').value;

    // checks to see if number is less than 0 or not a number at all; runs through all entered values.
    if (loanAmount <= 0 || isNaN(Number(loanAmount))) {
        alert("Please enter valid loan amount");
        document.loan-form.loanAmount.value;
    } else if (term <= 0 || isNaN(Number(loanAmount))) {
        alert("Please enter valid term value");
        document.loan-form.term.value;
    } else if (interestRate <= 0 || isNaN(Number(interestRate))) {
        alert("Please enter valid interestRate");
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
let totalInterest = (totalCost - mortgage).toFixed(2);

//principle, total interest and total cost display
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
    table += `<td>0</td>`;
    table += `<td>${mortgage}</td>`;
    table += `<td>&nbsp;</td>`;
    table += `<td>&nbsp;</td>`;
    table += `<td>&nbsp;</td>`;
    table += `<td>${(loanAmount).toFixed(2)}</td>`;
table += `</tr>`;

let currentBalance = loanAmount;
let paymentCounter = 1;
let interestPaid = 0;

while(currentBalance > 0) {
    //create rows
    towardsInterest = (i/12) * currentBalance;
    towardsBalance = mortgage - towardsInterest;
    interestPaid = interestPaid + towardsInterest;
    currentBalance = currentBalance - towardsBalance;


    //display row
    table += `<tr>`;
        table += `<td>${paymentCounter}</td>`;
        table += `<td>${mortgage}</td>`;
        table += `<td>${towardsBalance}</td>`;
        table += `<td>${towardsInterest}</td>`;
        table += `<td>${interestPaid}</td>`;
        table += `<td>${currentBalance}</td>`;
    table += `</tr>`;

    paymentCounter++;
}

table += `</table>`;
document.getElementById('table').innerHTML = table;

} 








// alert = Swal.fire({
//     icon: 'error',
//     title: 'Oops...',
//     text: 'All fields must be completed.',
//   });



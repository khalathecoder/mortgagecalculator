
//validate if numbers are positive and if are actual numeric values
function validate() {

    // get the values from the page
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
        document.loan - form.loanAmount.value;
    } else if (term <= 0 || isNaN(Number(term))) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a valid term.',
        });
        document.loan - form.term.value;
    } else if (interestRate <= 0 || isNaN(Number(interestRate))) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a valid interest rate.',
        });
        document.loan - form.interestRate.value;
    } else {
        calculate(parseFloat(loanAmount), parseInt(term), parseFloat(interestRate));
    }
}


//formula to calculate monthly payment
function calculate(loanAmount, term, interestRate) {
    let i = interestRate / 100;
    let mortgage = loanAmount * (i / 12) / (1 - Math.pow(1 + (i / 12), -term));

    // formulas
    let loanAmountDec = loanAmount;
    let totalCost = mortgage * term;
    let totalInterest = totalCost - loanAmount;


    //principle, total interest and total cost displayed on calculate submit
    let result = "";

    result += `<div class="row row-cols-2">`;
    result += `<div class="col-6">Total Principle:</div>`;
    result += `<div class="col-6 text-end">${loanAmountDec}</div> `;

    result += `<div class="col-6">Total Interest:</div>`;
    result += `<div class="col-6 text-end">${totalInterest}</div>`;

    result += `<div class="col-6">Total Cost:</div>`;
    result += `<div class="col-6 text-end">${totalCost}</div>`;
    result += `</div>`;

    document.getElementById('loan-info').innerHTML = result;

    // single payment below Your monthly payments header

    let singlePayment = "";
    singlePayment += `$${mortgage.toFixed(2)}`;
    document.getElementById('monthlyPayment').innerHTML = singlePayment;

    //table rows
    let table = "";

    table += `<table class="table table-striped w-auto">`;
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

    while (currentBalance >= 0) {
        //formulas
        towardsInterest = (i / 12) * currentBalance;
        towardsBalance = mortgage - towardsInterest;
        interestPaid = interestPaid + towardsInterest; // totalInterest += towardsInterest
        currentBalance = currentBalance - towardsBalance;

        let formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        //build table for data
        table += `<tr>`;
        table += `<td>${paymentCounter}</td>`;
        table += `<td>${formatter.format(mortgage)}</td>`;
        table += `<td>${formatter.format(towardsBalance)}</td>`;
        table += `<td>${formatter.format(towardsInterest)}</td>`;
        table += `<td>${formatter.format(interestPaid)}</td>`;
        table += `<td>${formatter.format(currentBalance)}</td>`;
        table += `</tr>`;

        paymentCounter++;
    }
    table += `</table>`;

    //display results
    document.getElementById('table').innerHTML = table;
} 



// make value absolute
// Math.abs(balance)
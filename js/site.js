
function reset() {
    // let loanInfo = document.getElementById('loan-info');
    // loanInfo.innerHTML = '';
    // let table = document.getElementById('table');
    // table.innerHTML = '';
}

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

// return mortgage.toFixed(2);
alert(mortgage.toFixed(2));

document.getElementById

}


// display monthly payment
// let monthlyPayment = calculate(loanAmount, term.value, interestRate.value);
// document.getElementById('monthlyPayment').innerHTML = `$${monthlyPayment}`;
    



function displayLoanInfo() {
    

let result="";

result += `<table>`;
result += `<tr><td>Total Principle:</td>`;
result += `<td class="text-end"> ${loanAmount} </td></tr>`;

result += `<tr><td>Total Interest:</td>`;
result += `<td class="text-end"> ${interestRate} </td></tr>`;

result += `<tr><td>Term in Months:</td>`;
result += `<td class="text-end"> ${term} </td></tr>`;

result += `</table>`;

document.getElementById('loan_info').innerHTML = result;
}

    

function displayTable(){

}



// function validate(){
//     if(
//         loanAmount.value ==="" || term.value ==="" || interestRate.value ===""
//     ){
         
//  let alert = Swal.fire({
//     icon: 'error',
//     title: 'Oops...',
//     text: 'All fields must be completed.',
//   });
//     }

// }


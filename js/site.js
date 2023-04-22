function getValues(){
//inputs
const loanAmount = document.getElementById('loanAmount').value;
const term = document.getElementById('term').value;
const interestRate = document.getElementById('interestRate').value;
const form = document.getElementById('mortgage').value;

}


//calculate monthly payment
function calculate(loanAmount, term, interestRate) {
let mortgage = loanAmount.value * (interestRate/1200) / (1 - Math.pow(1 + (interestRate/1200), -term));

return parseFloat(mortgage.toFixed(2));

var result="";

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


    



    // display monthly payment
    let monthlyPayment = calculate(loanAmount, term.value, interestRate.value);
    document.getElementById('monthlyPayment').innerHTML = `$ ${monthlyPayment}`;






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


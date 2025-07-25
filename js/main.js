import { account, months } from "./data.js";

account.sort((a, b) => a.month - b.month);

const contentDOM = document.querySelector('.table-content');
const minIncomeDOM = document.getElementById('minIncome');
const maxIncomeDOM = document.getElementById('maxIncome');
const minExpenseDOM = document.getElementById('minExpense');
const maxExpenseDOM = document.getElementById('maxExpense');

let HTML = '';
let totalBalance = 0;

for (let i = 0; i < 12; i++) {
    // let data = null;

    /*for (const monthData of account) {
        if (monthData.month === i + 1) {
            data = monthData;
            break;
        }
    } */

    const data = account[i];

    const currectIncome = data.income ? data.income : 0;
    const currentExpence = data.expense ? data.expense : 0;

    const monthNumber = data.month;
    const monthName = months[data.month - 1];
    const income = data.income ? data.income + ' Eur' : '-';
    const expense = data.expense ? data.expense + ' Eur' : '-';

    totalBalance += currectIncome - currentExpence;
    const balance = totalBalance + ' Eur';

    HTML += `<div class="table-row">
            <div class="cell">${monthNumber}</div>
            <div class="cell">${monthName}</div>
            <div class="cell">${income}</div>
            <div class="cell">${expense}</div>
            <div class="cell">${balance}</div>
        </div>`;
}
contentDOM.innerHTML = HTML;

minIncomeDOM.innerText = 'Sausis';
maxIncomeDOM.innerText = 'Sausis';
minExpenseDOM.innerText = 'Sausis';
maxExpenseDOM.innerText = 'Sausis';

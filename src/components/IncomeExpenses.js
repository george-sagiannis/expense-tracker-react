import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState';



const IncomeExpenses = () => {

  const { transactions } = useContext(GlobalContext);

  //This line creates a new array named amounts by mapping over the transactions array and extracting the amount property from each transaction
  const amounts = transactions.map(transaction => transaction.amount);


  const income = amounts
    .filter(item => item > 0) // Filters out only positive amounts (income)
    .reduce((acc, item) => (acc += item), 0) // Sums up the filtered positive amounts
    .toFixed(2); // Formats the total income to two decimal places

    //other way
    //We initialize the income variable to 0.
    //We then iterate over each element in the amounts array using a for...of loop.
    //For each amount, if it is greater than 0 (positive), we add it to the income.
    //Finally, we format the income to two decimal places using toFixed(2)
    
    // let income = 0;
    // for (const amount of amounts) {
    //     if (amount > 0) {
    //         income = income + amount;
    //     }
    // }
    // income = income.toFixed(2);


    const expense = (
        amounts.filter(item => item < 0) // Filters out only negative amounts (expenses)
        .reduce((acc, item) => (acc += item), 0) // Sums up the filtered negative amounts
        * -1 // Makes the total positive by multiplying with -1 (to represent expenses)
    ).toFixed(2); // Formats the total expenses to two decimal places


    //We initialize the expense variable to 0.
    //We then iterate over each element in the amounts array using a for...of loop.
    //For each amount, if it is less than 0 (negative), we add it to the expense.
    //After iterating, we multiply the expense by -1 to make it positive (to represent expenses).
    //Finally, we format the expense to two decimal places using toFixed(2).
    //let expense = 0;
    //for (const amount of amounts) {
    //  if (amount < 0) {
    //    expense += amount;
    //  }
    //}
    //expense *= -1; // Make the total positive (to represent expenses) - grafetai kai etsi expense = Math.abs(expense).toFixed(2);
    //expense = expense.toFixed(2); // Format the total expenses to two decimal places


  return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">€{income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">€{expense}</p>
            </div>
        </div>
  )
}

export default IncomeExpenses;
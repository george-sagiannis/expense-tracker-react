import React, { useContext } from 'react'


//his line imports the GlobalContext from the '../context/GlobalState' file. The GlobalContext is used to access the global state and its data throughout the application
import { GlobalContext } from '../context/GlobalState';


//define a functional component
const Balance = () => {

  //useContext hook to access the GlobalContext and destructure the transactions array from the global state
  const { transactions } = useContext(GlobalContext);

  //This line creates a new array named amounts by mapping over the transactions array and extracting the amount property from each transaction
  const amounts = transactions.map(transaction => transaction.amount);

  //This code iterates over each transaction in the transactions array, and for each transaction, it pushes the amount property into the amounts array. This results in an array containing only the amount values from each transaction
  //other way instead of map
  // const amounts = [];
  // for (const transaction of transactions) {
  //   amounts.push(transaction.amount);
  // }

  //This line calculates the total balance by using the reduce method on the amounts array. It initializes the accumulator (acc) to 0 and adds each item in the array to it. The toFixed(2) method is then used to ensure that the total is formatted with two decimal places
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  //This code iterates over each element in the amounts array, adding it to the total variable. Finally, it formats the total to two decimal places using toFixed(2)
  //other way insted of reduce method
  // let total = 0;
  // for (const amount of amounts) {
  //   total = total + amount;
  // }
  // total = total.toFixed(2);


  return (
    <>
        <h4>Your Balance</h4>
        <h1>€{total}</h1>
    </>
  )
}

export default Balance
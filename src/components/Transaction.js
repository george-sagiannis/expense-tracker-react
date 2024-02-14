import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState';


//now {transaction.text} is undefined
//so now or i will pass it as props.transaction.text or better with destrucuring {transaction} inside const Transaction

const Transaction = ({ transaction }) => {

  const { deleteTransaction } = useContext(GlobalContext);
 

  //to have negative or plus according the amount
  const sign = transaction.amount < 0 ? '-' : '+';  

  //Math.abs() so instead of -€ 20 to see that as -€20
  return (
    <li key={transaction.id} className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text} <span>{sign}€{Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
     </li>
  )
}

export default Transaction;
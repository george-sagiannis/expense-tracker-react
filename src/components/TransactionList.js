import React, { useContext } from 'react';

//pull our Global State importing our global context
import { GlobalContext } from '../context/GlobalState';


const TransactionList = () => {
  
  //here we can pull everything from the global state using context hook
  const { transactions } = useContext(GlobalContext); // transactions is an array so we need to loop through it or map it throught it rather and the output each transaction

  console.log(useContext(GlobalContext));

  //say for each transaction with map we want to output for now just this list item all the li will put in parenthesis 

  return (
     <> 
        <h3>History</h3>
          <ul className="list">
              {transactions.map(transaction => (
              
                <li key={transaction.id} className="minus">
                  {transaction.text} <span>-€400</span><button className="delete-btn">x</button>
                </li>

              ))}
          </ul>
      </>
  )
}

export default TransactionList
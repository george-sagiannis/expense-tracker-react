import React, { useContext } from 'react';

import Transaction from './Transaction';


//pull our Global State importing our global context
import { GlobalContext } from '../context/GlobalState';


const TransactionList = () => {
  
  //here we can pull everything from the global state using context hook
  const { transactions } = useContext(GlobalContext); // transactions is an array so we need to loop through it or map it throught it rather and the output each transaction

  console.log(useContext(GlobalContext));

  //say for each transaction with map we want to output for now just this list item all the li will put in parenthesis 
  //then instead of li we add the Transaction new component that nees to know which specific transaction to render
  //so we nned to pass it as a prop

  //now i take this error export 'Transaction' (imported as 'Transaction') was not found in '../context/GlobalState' (possible exports: GlobalContext, GlobalProvider)
  //[eslint] src\components\Transaction.js Line 5:14:  'transaction' is not defined
  return (
     <> 
        <h3>History</h3>
          <ul className="list">
              {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
          </ul>
      </>
  )
}

export default TransactionList;
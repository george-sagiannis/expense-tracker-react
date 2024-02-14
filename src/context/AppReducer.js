export default (state, action) => {
  switch(action.type) {

    case 'DELETE_TRANSACTION':

        return {
            ...state,
            transactions:  state.transactions.filter(transaction => transaction.id !== action.payload)
        }

    case 'ADD_TRANSACTION':
        return {
            ...state,
            transactions: [action.payload, ...state.transactions]
        }

    default:
      return state;
  }
}

//reducer is just a way to change your state and send it down to our component to our application

//we cannot just change it so we have to basically create a new state and send it down so we are going to use the spread operator and then just sent the current state 
//and then what we want to change in our transactions so we want to set this basically send down all the transactions except the one that was deleted
//so we have that id sent in the payload so what we will do is we will take state.transactions
//in the filter we are going to say for each transaction - it takes an arrow function we want to say where a transaction.id is not eaual to the action.payload


//in ADD_TRANSACTION we want to return our initial state and then transactions
//so we need to return the transactions that are already the are there in addition to the new one which is in the payload
//the way we can do this is set this to an array and we can get the initial transactions by using the spread operator
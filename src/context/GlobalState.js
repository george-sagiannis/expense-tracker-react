//this code sets up a global state management system using the Context API and the useReducer hook in React. 
//It provides the GlobalProvider component to wrap around other components in the application to give them access to the global state through the GlobalContext

import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


//initial state
//is just going to be a single object so any global state would go on this object however all i need is transcations

const intialState = {
    transactions: [

        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]

}

//Create context
//created a new context object called GlobalContext using the createContext function and initializes it with the initialState
export const GlobalContext = createContext(intialState);

//Provider component - It takes children as a prop, which represents the child components wrapped by this provider
export const GlobalProvider = ({ children }) => {
    
    //here we need access to state and dispatch whenever we want to call a reducer action we need to use this dispatch so this comes from reducer
    //The state is initialized with the initialState object and the AppReducer function is used to update the state
    const [state, dispatch] = useReducer(AppReducer, intialState);


    //here we will have our actions that are going to make calls to our reducer

    //we pass id so we can know which one to delete
    //we can dispatch to our reducer an object and we are gonna have a type which will be string
    //then needs a a payload so basically any data we want to send to the object it is going to be the ID
    function deleteTransaction(id) {
        dispatch ({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    //returns the GlobalContext.Provider component, which wraps its child components. It provides the transactions array from the state as the value of the context
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,

        deleteTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}
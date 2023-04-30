import * as Redux from "https://cdn.skypack.dev/redux@4.2.1";
// let Redux = require('redux');

console.clear();

// console.log(Redux)
// People dropping off a form (Action Creators)

const createPolicy = (name, amount) => {
    return { // this object is called an action
        type: 'CREATE_POLICY', // ususally written like this
        payload: { // object that will contain the informations. Following informations are according to the project
            name: name,
            amount: amount //repressents ₹
        }
    }
}

const deletePolicy = (name) => {
    return {
        type: 'DELETE_POLICY',
        payload: {
            name: name
        }
    }
}

const createClaim = (name, claimAmount) => {
    return {
        type: 'CREATE_CLAIM',
        payload: {
            name: name,
            claimAmount: claimAmount
        }
    }
}


// Reducer functions. Departments in our project

const claimsHistory = (oldListOfClaims = [], action) => {
    if (action.type === 'CREATE_CLAIM') {
        // add claim on the claims list
        return [...oldListOfClaims, action.payload]; // This adds action.payload to a new array following the oldListofClaims.
    } else {
        //we dont care about this action
        return oldListOfClaims; // This will return back oldListofClaims.
    };
}

// Reducer functions for other departments

const accounting = (stockOfMoney = 100000, action) => {
    if (action.type === 'CREATE_CLAIM') {
        return stockOfMoney - action.payload.claimAmount;
    } else if (action.type === 'CREATE_POLICY') {
        return stockOfMoney + action.payload.amount;
    } else {
        return stockOfMoney
    }
}


const policies = (listOfPolicies = [], action) => {
    if (action.type === 'CREATE_POLICY') {
        return [...listOfPolicies, action.payload];
    } else if (action.type === 'DELETE_POLICY') {
        return listOfPolicies.filter(e => { e !== action.payload });
    } else {
        return listOfPolicies;
    }
}


const { createStore, combineReducers } = Redux; // importing Redux functions (coded in codepen)

// this following code declares the states, and their updater reducer function sources.
const ourDepartments = combineReducers({
    accounting: accounting,
    claimsHistory: claimsHistory,
    policies: policies

})


const store = createStore(ourDepartments);
// creates a state dabase type of thing, called as store in redux world

// const action01 = createPolicy('Yunus Parvez Khan', 2000);
// Previously created action functions being called through an simple variable named as action01

// store.dispatch(action01)
// Dispatch method simply sends the action functions/objects to all the reducer functions associated to the variable mentioned before this method.

// console.log(store.getState())
// getState method is a simple method that throughs an object with all the states on the component


// We could dispatch the actions like the following as well
store.dispatch(createPolicy('Yunus Parvez Khan', 5000));
store.dispatch(createPolicy('Arpita Das', 5000));
store.dispatch(createPolicy('Sucharita Das', 5000));
store.dispatch(createPolicy('Swaraswati Parvez Khan', 5000));
store.dispatch(createPolicy('Supriyo Mal', 5000));
store.dispatch(createPolicy('Krishna Parvez Khan', 5000));
store.dispatch(createPolicy('Abinus Parvez Khan', 5000));
store.dispatch(createPolicy('Ram Chakrabarty', 5000));
store.dispatch(createPolicy('Joseph Ramakrisnan', 5000));
store.dispatch(createPolicy('Angelika Morje', 5000));


// Claiming Policy

store.dispatch(createClaim('Angelika Morje', 20000));
store.dispatch(createClaim('Ram Chakrabarty', 18000));

console.log(store.getState())


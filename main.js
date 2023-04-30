import Redux from 'redux';
// let Redux = require('redux');

console.clear();

console.log(Redux)
// People dropping off a form (Action Creators)

const createPolicy = (name, amount) => {
    return { // this object is called an action
        type: 'CREAT_POLICY', // ususally written like this
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
            amountClaimed: claimAmount
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
        return stockOfMoney - action.payload.acmountClaimed;
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


const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
    accounting: accounting,
    claimsHistory: claimsHistory,
    policies: policies

})

const store = createStore(ourDepartments);

store;





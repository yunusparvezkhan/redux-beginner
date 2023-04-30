console.clear();

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
    if (action.type === 'CLAIM_POLICY') {
        // add claim on the claims list
        return [...oldListOfClaims, action.payload]; // This adds action.payload to a new array following the oldListofClaims.
    } else {
        //we dont care about this action
        return oldListOfClaims; // This will return back oldListofClaims.
    };
}




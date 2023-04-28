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
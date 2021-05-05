

const initialState = [
    {
        name: "Charles Bagwell",
        age: "38",
        gender: "male"
    },
    {
        name: "Zane Fuller",
        age: "22",
        gender: "male"
    },
    {
        name: "Cristina Williams",
        age: "30",
        gender: "female"
    }
];

const add = (data) => {
    return {
        type: 'ADD',
        data: data
    }
}

const remove = (index) => {
    return {
        type: 'REMOVE',
        data: index
    }
}

const myReducer = (state = initialState, action) => {
    const newState = [...state];
    if (action.type === 'ADD') {
        return [
            ...state, action.data
        ]
    }
    if (action.type === 'REMOVE') {
        let newState = state
        console.log(action.data)
        newState.splice(action.data, 1)
        console.log(newState)
        return [
            ...newState
        ]
    }
    return newState;
}

const store = Redux.createStore(myReducer);
store.subscribe(() => {
    console.log('Contact added', (store.getState()));
})

const newObj = {
    name: "Taylor Bagwell",
    age: "19",
    gender: "male"
}

store.dispatch(add(newObj));
store.dispatch(remove(1));
store.dispatch(add(newObj));

function addContact(data) {
    return  {
        type: "ADD",
        data: data,
    };
}

function removeContact(contact) {
    return {
        type: "REMOVE",
        data: index,
    };
}


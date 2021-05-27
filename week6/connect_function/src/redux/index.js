import { createStore } from 'redux'
const redux = require("redux")


export function addContact(name) {
    return {
        type: "ADD_CONTACT",
        payload: name
    }
}

export function deleteContact(id) {
    return {
        type: "DELETE_CONTACT",
        payload: id
    }
}

export function setInputs(name, value) {
    return {
        type: "SET_INPUTS",
        payload: {name, value}
    }
}

const initialState = {
    contacts: [],
    name: "",
    phone: "",
    email: ""
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_CONTACT":
            return {
                ...state,
                contacts: [...state.contacts, {name: state.name, phone: state.phone, email: state.email}],
                name: "",
                phone: "",
                email: ""
            }
        case "DELETE_CONTACT":
            let newContact = [...state.contacts]
            newContact.splice(action.payload, 1)
            return {
                ...state,
                contacts: newContact
            }
        case "SET_INPUTS":
            console.log(action.payload)
            return {
                ...state,
                [action.payload.name] : action.payload.value
            }
        default:
            return state
    }
}

const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))

export default store
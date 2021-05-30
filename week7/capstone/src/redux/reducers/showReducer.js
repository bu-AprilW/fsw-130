const initialState = [
    {
        name: "Game of Thrones",
        image: ""
    },
    {
        name: "Bob's Burger",
        image: ""
    },
    {
        name: "Rick and Morty",
        image: ""
    }
]

function showReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_SHOW":
            return [...state, action.payload]
        case "REMOVE_SHOW":
            const updatedArr = state.filter((show, index) => {
                console.log(index, action.payload)
                return index != action.payload
            })

            return updatedArr

        default:
            return state
    }
}

export default showReducer
const initialState = [
    {
        name: "The Notebook",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWebhxVbyOKYY3C5EOBu3V4O5FVFMHat35KQ&usqp=CAU"
    },
    {
        name: "Friday",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6HQhotxS7-awE2FncxcQZSANDeR3zBeuMgA&usqp=CAU"
    },
    {
        name: "Baby Driver",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSziSXorrZLsQAU5nu0qZ6EM-W5VfNUjdJGbg&usqp=CAU"
    }
]

function movieReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_MOVIE":
            return [...state, action.payload]
        case "REMOVE_MOVIE":
            const updatedArr = state.filter((movie, index) => {
                console.log(index, action.payload)
                return index !== action.payload
            })

            return updatedArr

        default: return state
    }
}

export default movieReducer
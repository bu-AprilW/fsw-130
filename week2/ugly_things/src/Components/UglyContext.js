import React, { Component } from "react"

const { Provider, Consumer } = React.createContext()

class UglyProvider extends Component {
    state = {
        UglyThings: [
            {
                title: "Ugly House",
                description: "Ugly Azz House!",
                imgUrl: "https://images.unsplash.com/photo-1528314369071-bc452ff14bc8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dWdseSUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                comments: []
            }],
        UglyTitle: "",
        UglyDescription: "",
        UglyImgUrl: "",
        UglyComment: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        this.setState(prevState => {
            const newUgly = {
                title: prevState.UglyTitle,
                description: prevState.UglyDescription,
                imgUrl: prevState.UglyImgUrl,
                comments: []
            }
            return {
                UglyThings: [newUgly, ...this.state.UglyThings]
            }
        })
    }

    handleComment = (id) => {
        for (let i = 0; i < this.state.UglyThings.length; i++) {
            if (this.state.UglyThings[i].title === id) {
                this.setState(prevState => {
                    const newComment = prevState.UglyComment
                    prevState.UglyThings[i].comments.push(newComment)
                })
            }
        }
        console.log(this.state.UglyComment)
    }

    handleDelete = (index, id) => {
        for (let i = 0; i < this.state.UglyThings.length; i++) {
            if (this.state.UglyThings[i].title === id) {
                this.setState(prevState => {
                    return (
                        prevState.UglyThings[i].comments.splice(index, 1)
                    )
                })
            }
        }
    }

    deleteUgly = (index, id) => {
        for (let i = 0; i < this.state.UglyThings.length; i++) {
            if (this.state.UglyThings[i].title === id) {
                this.setState(prevState => {
                    return (
                        prevState.UglyThings.splice(index, 1)
                    )
                })
            }
        }
    }

    render() {
        console.log(this.state.UglyThings)
        return (
            <Provider value={{UglyThings: this.state.UglyThings, UglyTitle: this.state.UglyTitle,
            UglyImgUrl: this.state.UglyImgUrl,
        UglyDescription: this.state.UglyDescription, UglyComment: this.state.UglyComment, handleSubmit: this.handleSubmit, handleChange: this.handleChange, handleComment: this.handleComment, handleDelete: this.handleDelete, deleteUgly: this.deleteUgly}}>
            {this.props.children}
        </Provider>
        )
    }
}

export {UglyProvider, Consumer as UglyConsumer}
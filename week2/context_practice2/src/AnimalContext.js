import React, {Component} from "react"

const {Provider, Consumer} = React.createContext()

class AnimalContextProvider extends Component {
    constructor() {
        super()

        this.state = {
            animals: [
                {animal: 'Tiger'},
                {animal: 'Lion'},
                {animal: 'Bear'}
            ]
        }
    }

    addAnimal = (animal) => {
        let animalEntry = {
            animal: animal
        }

        this.setState ({
            animals: [...this.state.animals, animalEntry]
        })
    }

    render() {
        return (
            <Provider value={{
                animals: this.state.animals,
                addAnimal: this.addAnimal
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {AnimalContextProvider, Consumer as AnimalContextConsumer}
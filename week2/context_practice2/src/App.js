import React, {Component} from 'react'
import './App.css'
import {AnimalContextConsumer} from './AnimalContext.js'
import Animals from './Animal'

class App extends Component {
  constructor() {
    super()

    this.state = {
      newAnimal: ''
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  clearForm() {
    this.setState ({
      newAnimal: ''
    })
  }

  render() {
    return (
      <AnimalContextConsumer>
        {context => (
          <div className="content">
            <h2>Animals</h2>
            <div className="form">
                <input
                type='text'
                name='newAnimal'
                placeholder='Type of Animal'
                value={this.state.newAnimal}
                onChange={this.handleChange}/>
              <button onClick={() => {
                context.addAnimal(this.state.newAnimal);
                this.clearForm()
              }}>Add</button>
            </div>
            <div>
              <Animals />
            </div>
          </div>
        )}
      </AnimalContextConsumer>
    )
  }
}

export default App
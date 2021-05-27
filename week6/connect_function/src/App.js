import React from "react"
import { connect } from "react-redux"
import { addContact, deleteContact, setInputs } from "./redux"


function App(props) {
  const handleChange = (event) => {
    event.preventDefault()
    const {name, value} = event.target
    console.log(props)
    props.setInputs(name, value)
  }

  const updateOnClick = (event) => {
    event.preventDefault()
    props.addContact()
  }

  const deleteOnClick = (event, index) => {
    event.preventDefault()
    props.deleteContact(index)
  }

  return  (
    <div>
      <form  id="myForm">
        <h2>Contact List</h2>

        <input
          id="input"
          type="text"
          name="name"
          value={props.name}
          placeholder="Name"
          onChange={handleChange}/>
        <br />
        <p>{props.name}</p>
        <br />

        <input
          id="input"
          type="text"
          name="phone"
          value={props.phone}
          placeholder="Phone"
          onChange={handleChange}/>
        <br />
        <p>{props.phone}</p>
        <br />

        <input
          id="input"
          type="text"
          name="email"
          value={props.email}
          placeholder="Email"
          onChange={handleChange}/>
        <br />
        <p>{props.email}</p>
        <br />
        <button id="submitBtn" onClick={updateOnClick}>Submit</button>
      </form>
  
      {props.contacts.map((contact, index) =>
      <div id="contacts">
        <p>{contact.name}</p>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>

        <button id="deleteBtn" onClick={(event) => deleteOnClick(event, index)}>Delete</button>
    </div>
      )}
      <footer>&copy; 2021 April W.</footer>
    </div>
  )
}

export default connect(state => ({contacts: state.contacts, name: state.name, phone: state.phone, email: state.email}), {addContact, deleteContact, setInputs})(App)

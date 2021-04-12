import React from 'react'
import ReactDOM from 'react-dom'
import {AnimalContextProvider} from "./AnimalContext.js"
import App from "./App"

ReactDOM.render(
  <AnimalContextProvider>
    <App />
  </AnimalContextProvider>,
  document.getElementById("root")
)
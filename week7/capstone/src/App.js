import React from 'react';
import { Switch, Route } from 'react-router-dom'
import MovieForm from './components/MovieForm'
import ShowForm from './components/ShowForm'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/Home'


function App() {
  return (
    <div className="App">
      <div>

      </div>
      <Switch>
        <Route exact path="/">
          <Home />
          <Nav />
        </Route>
        <Route exact path="/movies">
          <MovieForm />
        </Route>
        <Route exact path="/shows">
          <ShowForm />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
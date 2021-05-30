import React from 'react';
import Movies from './components/movies';
import Home from './components/home';
import TV from './components/shows';
import Footer from './components/footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path = "/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/tv" component={TV} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
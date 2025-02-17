import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Catalog from './Catalog';
import Events from './Events';
import About from './About';
import BookPage from './BookPage';
import Footer from './Footer';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/catalog">
            <Catalog />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/book/:id">
            <BookPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

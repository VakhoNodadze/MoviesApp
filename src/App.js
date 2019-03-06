import React, { Component } from "react";
import "./App.css";
import Movies from "./components/Movies";
// import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import MovieForm from './components/MovieForm';
import { Route, Redirect, Switch, HashRouter } from "react-router-dom";
import Favourites from './components/Favourites';
// import Customers from './components/Customers';
// import Rentals from './components/Rentals';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <HashRouter>
            <Switch>
              <Route path="/movies/:title" component={MovieForm} />
              <Route path="/movies" component={Movies} />
              {/* <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} /> */}
              <Route path="/favourites" component={Favourites} />
              {/* <Route path="/not-found" component={NotFound} /> */}
              <Redirect from="/" exact to="/movies" />
              <Redirect to="/not-found" />
            </Switch>
          </HashRouter>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

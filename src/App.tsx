import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SpeciesList from "./components/Species";
import PokemonDetails from "./components/PokemonDetails";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h3>Pokeman App</h3>
      <Router>
        <Switch>
          <Route exact path="/">
            <SpeciesList />
          </Route>
          <Route path="/species/:id">
            <PokemonDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

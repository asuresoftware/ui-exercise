import React from "react";
import { Route, Switch } from "react-router-dom";

import "./styles/generic.scss";
import { Search } from "./components/search";
import { SearchResults } from "./components/SearchResults";
import { RestaurantDetails } from "./components/RestaurantDetails";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Search />
        </Route>
        <Route exact path="/results/:searchCity">
          <SearchResults />
        </Route>
        <Route exact path="/:id">
          <RestaurantDetails />
        </Route>
      </Switch>
    </>
  );
}

export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";

import "./styles/generic.scss";
import { Search } from "./components/search";
import { SearchResults } from "./components/SearchResults";

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
      </Switch>
    </>
  );
}

export default App;

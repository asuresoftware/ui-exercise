import React from "react";
import { Route, Switch } from "react-router-dom";

import "./styles/generic.scss";
import { Search } from "./components/search";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Search />
        </Route>
      </Switch>
    </>
  );
}

export default App;

import "./App.css";
import { useContext, useReducer, useEffect } from "react";
import Context from "./contexts/context";
import Reducer from "./reducers/reducer";
import { SearchField } from "./components/index";
import { Results } from "./components/index";

const SITE_TITLE = "Taco Finder";

function App() {
  // Initialize context
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(Reducer, initialState);
  // Set App title
  useEffect(() => {
    document.title = SITE_TITLE;
    return () => {};
  }, [state]);

  console.log(state.search_results);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="App container my-4">
        <header className="App-header">
          <h1>Taco Finder</h1>
          <SearchField />
          <Results />
        </header>
      </div>
    </Context.Provider>
  );
}

export default App;

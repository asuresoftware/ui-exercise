import React, { useContext, useState, useEffect } from "react";
import Context from "../../contexts/context";
import { ResultsItem } from "../index";

function Results() {
  // Pull state from context
  const { state } = useContext(Context);
  const [results, setResults] = useState(state.search_results);
  const [sort_by, setSortBy] = useState("desc");

  useEffect(() => {
    setResults(state.search_results);
  }, [state]);

  const handleSort = (event) => {
    // Results come sorted by highest rating by default...
    // therefore, only need to reverse results on change of state
    if (event.target.value !== sort_by) {
      const reversedArr = results
        .slice(0)
        .reverse()
        .map((result) => {
          return result;
        });
      setResults(reversedArr);
      setSortBy(event.target.value);
    }
  };

  return (
    <div>
      <div className="mb-2">Sort by Rating: </div>
      <select
        className="form-select btn btn-primary btn-sm mb-3"
        aria-label="Default select example"
        onChange={handleSort}
      >
        <option defaultValue value="desc">
          Descending
        </option>
        <option value="asc">Ascending</option>
      </select>

      {results.map((result) => {
        return <ResultsItem key={result.id} result={result} />;
      })}
    </div>
  );
}

export default Results;

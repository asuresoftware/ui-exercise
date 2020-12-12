import React, { useState, useContext } from "react";
import Context from "../../contexts/context";
import axios from "axios";

function SearchField() {
  // Pull state from context
  const { dispatch, state } = useContext(Context);

  // Local state
  const [query, setQuery] = useState({
    location: "Tampa,FL",
  });

  const endpoint = `https://colorful-halibut.glitch.me/api/v1/businesses/search?location=
  ${query.location}&term=tacos&sort_by=rating`;

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;

    setQuery({
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.get(endpoint).then((res) => {
      dispatch({
        type: "UPDATE_CONTEXT",
        payload: {
          ...state,
          search_results: res.data.businesses,
        },
      });
    });
  };

  return (
    <form onSubmit={handleSubmit} id="search-form">
      <div className="search-field">
        <input
          type="text"
          label="Search"
          id="search-input"
          name="location"
          onChange={handleChange}
          defaultValue={query.location}
          placeholder="city, state e.g. Tampa, FL"
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchField;

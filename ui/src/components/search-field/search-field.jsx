import React, { useState, useContext } from "react";
import Context from "../../contexts/context";
import axios from "axios";

function SearchField() {
  // Pull state from context
  const { dispatch, state } = useContext(Context);

  // Local state
  const [query, setQuery] = useState({
    location: "",
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
      <div className="input-group mb-3">
        <input
          type="text"
          name="location"
          className="form-control"
          placeholder="Enter a location: city, state e.g. Tampa, FL"
          aria-label="Location"
          aria-describedby="button-addon2"
          onChange={handleChange}
          defaultValue={query.location}
          required
        />
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
        >
          Find Tacos!
        </button>
      </div>
    </form>
  );
}

export default SearchField;

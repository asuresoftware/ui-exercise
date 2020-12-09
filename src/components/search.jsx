import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export function Search() {
  const history = useHistory();
  const [searchCity, setSearchCity] = useState("");

  async function loadSearch(event) {
    event.preventDefault();
    if (searchCity.length === 0) {
      alert("Please type a valid city name!");
    } else {
      history.push(`/results/${searchCity.toLowerCase()}`);
    }
  }
  console.log();
  return (
    <>
      <main className="search">
        <h1>My Taco</h1>
        <form onSubmit={loadSearch}>
          <div className="search-box">
            <input
              className="search-text"
              type="text"
              value={searchCity}
              onChange={(event) => setSearchCity(event.target.value)}
              placeholder="Type location"
            ></input>
            <button type="submit" className="search-btn">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
      </main>
    </>
  );
}

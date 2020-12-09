import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function SearchResults() {
  const params = useParams();
  const [searchedRestaurants, setSearchedRestaurants] = useState([]);
  const [sortStatus, setSortStatus] = useState("");
  const searchCity = params.searchCity;

  useEffect(() => {
    async function loadSearch() {
      const url = `https://colorful-halibut.glitch.me/api/v1/businesses/search?location=${searchCity}&term=tacos`;

      const response = await fetch(url);
      const json = await response.json();

      if (json.businesses) {
        setSearchedRestaurants(json.businesses);
      }
    }

    loadSearch();
  }, [searchCity]);

  let sortedRestaurants = searchedRestaurants;
  if (sortStatus === "ascending") {
    sortedRestaurants = searchedRestaurants.sort((a, b) => a.rating - b.rating);
  }
  if (sortStatus === "descending") {
    sortedRestaurants = searchedRestaurants.sort((a, b) => b.rating - a.rating);
  }
  return (
    <>
      <ul className="breadcrumb">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>{searchCity}</li>
      </ul>

      <main className="results">
        <h1>TACOS IN {searchCity.toUpperCase()}</h1>
        <div className="dropdown">
          <select onChange={(event) => setSortStatus(event.target.value)}>
            <option value="unsorted">Unsorted</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
        <div className="cards-container">
          {sortedRestaurants.map((restaurant) => (
            <div className="card" key={restaurant.id}>
              <Link to={`/${restaurant.id}`}>
                <h3>{restaurant.name}</h3>
              </Link>
              <div className="image-container">
                <img src={restaurant.image_url} alt={restaurant.name}></img>
              </div>

              <div className="features">
                <ul>
                  <li>
                    <i className="fas fa-star"></i>: {Number(restaurant.rating)}
                  </li>
                  <li>
                    {restaurant.isClosed ? (
                      <i className="fas fa-door-closed"></i>
                    ) : (
                      <i className="fas fa-door-open"></i>
                    )}
                  </li>
                  <li>
                    {restaurant.transactions.includes("delivery") && (
                      <i className="fas fa-truck"></i>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

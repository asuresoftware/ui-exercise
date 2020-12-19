// global imports
import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // sets list to an array
  const [restaurantList, setRestaurantList] = useState([]);
  // lets location variable change
  const [locationSearch, setLocationSearch] = useState("");
  const url = `https://colorful-halibut.glitch.me/api/v1/businesses/search?location=${locationSearch}&term=tacos`
  useEffect(() => {
    const getRestaurants = () => {
      // fetches info from api
      fetch(url)
        .then((response) => response.json())
        .then((restaurants) => {
          console.log(restaurants)
          // sets fetched data to restaurant list array
          setRestaurantList(restaurants.businesses);
        });
    };
    getRestaurants();
  
  },[locationSearch]);

// handles submit 
  const handleSubmit = (event) => {
    const { citySearch } = event.target.elements;
    setLocationSearch(citySearch.value);
    event.preventDefault()
  };

  return (
    <div id="tacoContainer" >
      <h1 id='tacoHeader' >Tacos!!!!</h1>
      <div>
        {/* form to let users search by location */}
        <form onSubmit={handleSubmit}>
          <input id="locationInput" type="text" placeholder="Enter Location" name="citySearch" /><br></br>
          <input id='locationSubmit' type="submit" placeholder="Search" />
        </form>
        <h2 id='tacoSubheader' >Restaurants: </h2>
        <div>
          {/* turnery that either prints restaurant list or loading message */}
          <div id="listContainer">
            {restaurantList ? (
              restaurantList.map((restaurants, id) => {
                return (
                  <div id="restaurantListContainer" key={id}>
                    <h1 id='restaurantName' >{restaurants.name}</h1>
                    <h2 id='restaurantAddress' >{restaurants.location.address1}</h2>
                  </div>
                );
              })
            ) : (
              <p>Loading Restaurants</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

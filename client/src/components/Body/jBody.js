import "./styleBody.css";
import React, { useState, useEffect } from "react";

function TacoSearch() {
  // this is the variable that will hold out restaurant information in the form of an array
  const [restInfo, setRestInfo] = useState([]);

  //this will be the search city set by the user
  const [searchCity, setsearchCity] = useState("");

  //showtacos will be called when there is a search term to be put into the fetch

  const showTacos = () => {
    //this is the fetch where a variable will be inserted depending upon the city searched
    fetch(
      `https://colorful-halibut.glitch.me/api/v1/businesses/search?location=${searchCity}&term=tacos`
    )
      .then((response) => response.json())

      //this is where we push up the information into our restInfo variable depending upon the results of our fetch (always going to be a 20 length array)
      .then((restaurant) => {
        setRestInfo(restaurant);
      });
  };

  //let's call that function ONLY if a city has been searched AKA our variable above is no longer null
  useEffect(() => {
   if (searchCity) {
    showTacos(); }
//need to figure out how to make this depenecy only refresh when searchcity is updated ??
  }, [searchCity]);

//function for our onSumit event in our user input form... what will happen when the user hits submit
  const handleSearch = (event) => {
      // grab the value of that input form
      const {citySearched} = event.target.elements 
      //set the value so we can reference it for our fetch
      setsearchCity(citySearched.value)
      //dont refresh page
      event.preventDefault();
      //want to create something to clear field after user hits submit
      citySearched.value = ""
  }

  console.log(searchCity)
  console.log(restInfo)

  return (
    <div id="body_div">
      <form onSubmit={handleSearch}>
            <input type="text" placeholder="Enter your city!" name="citySearched"/>
            <input type="submit" placeholder="SEARCH"/>
      </form>
      {/* logic for whether or not there is any information currently in that restInfo variable. If there is none (looking at length of array) we will show a message to search tacos. Otherwise if there is a length greater than 0 we will return this result*/}
      {restInfo.length !== 0 ? (
        restInfo.businesses.map((restaurant, index) => {
          return (
                
            <div key={index}>
              <div>
                <h3 className="contactName">{restaurant.name}, </h3>
                <h4>{restaurant.location.display_address}</h4>
                <h4>Phone: {restaurant.display_phone}</h4>
                <h6>Rating: {restaurant.rating} stars</h6>
                <br></br>
              </div>
            </div>
          );
        })
      ) : (
        <p>Search for your next favorite taco spot!</p>
      )}
    </div>
  );
}

export default TacoSearch;

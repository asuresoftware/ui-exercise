import "./styleBody.css";
import React, { useState, useEffect } from "react";

function TacoSearch() {
  // this is the variable that will hold out restaurant information in the form of an array
  const [restInfo, setRestInfo] = useState([]);
  const [searchCity, setsearchCity] = useState("");

  //use effect will be called when there is a search term to be put into the fetch

  const showTacos = () => {
    //this is the fetch where a variable will be inserted depending upon the city searched
    fetch(
      `https://colorful-halibut.glitch.me/api/v1/businesses/search?location=${searchCity}&term=tacos`
    )
      .then((response) => response.json())

      //this is where we push up the information into our restInfo variable depending upon the results of our fetch
      .then((restaurant) => {
        setRestInfo(restaurant);
      });
  };

  //let's call that function ONLY if a city has been searched AKA our variable above is no longer null
  useEffect(() => {
   if (searchCity) {
    showTacos(); }
  }, []);

  return (
    <div id="body_div">
      {/* logic for whether or not there is any information currently in that restInfo variable. If there is none (looking at length of array) we will show a message to search tacos. Otherwise if there is a length greater than 0 we will return this result*/}
      {restInfo.length !== 0 ? (
        restInfo.businesses.map((restaurant, index) => {
          return (
            <div key={index}>
              <div>
                <h3 className="contactName">{restaurant.name}</h3>
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

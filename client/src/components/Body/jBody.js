import "./styleBody.css";
import React, { useState, useEffect } from "react";

function TacoSearch() {
  // this is the variable that will hold our restaurant information in the form of an array
  const [restInfo, setRestInfo] = useState([]);
  //this will be the search city set by the user
  const [searchCity, setsearchCity] = useState("");

  //let's call that function ONLY if a city has been searched AKA our variable above is no longer null
  useEffect(() => {
    if (searchCity) {
      //showtacos will be called when there is a search term to be put into the fetch
      const showTacos = () => {
        //this is the fetch where a variable will be inserted depending upon the city searched
        fetch(
          `https://colorful-halibut.glitch.me/api/v1/businesses/search?location=${searchCity}&term=tacos`
        )
          .then((response) => response.json())

          //this is where we push up the information into our restInfo variable depending upon the results of our fetch ( going to be a 20 item array)
          .then((restaurant) => {
            //comes back as an object named businesses so lets go inside of that to just get the array
            setRestInfo(restaurant.businesses);
          });
      };
      showTacos();
    }
  }, [searchCity]);

  //function for our onSumit event in our user input form... what will happen when the user hits submit
  const handleSearch = (event) => {
    // grab the value of that input form
    const { citySearched } = event.target.elements;
    //set the value so we can reference it for our fetch
    setsearchCity(citySearched.value);
    //dont refresh page
    event.preventDefault();
    //want to create something to clear field after user hits submit
    citySearched.value = "";
  };

  //THIS (automatically) SORTS THEM BY RATING I JUST NEED TO INCORPORATE IT INTO AN ONCLICK EVENT ! :)
  //we would switch the return from a.rating - b.rating to allow the user to sort by descending
  restInfo.sort(function ascendingRating(a, b) {
    return b.rating - a.rating;
  });

  return (
    <div id="body_div">
      {/* our input field and submit button */}
      <form onSubmit={handleSearch}>
        <input
          id="search"
          type="text"
          placeholder="Enter city here!"
          name="citySearched"
        />
        <input
          id="submit"
          type="submit"
          value="FIND TACOS"
          placeholder="SEARCH"
        />
      </form>
      {/* logic for whether or not there is any information currently in that restInfo variable. If there is none (looking at length of array) we will show a message to search tacos. Otherwise if there is a length greater than 0 we will return this result*/}
      {restInfo.length !== 0 ? (
        restInfo.map((restaurant, id) => {
          return (
            <div key={id}>
              <div id="body_flex">
                <div></div>
                <div id="body_paragraph">
                  <b>
                    <h2 className="contactName">
                      <u>&#127790; {restaurant.name} &#127790; </u>
                    </h2>
                  </b>
                  <h4>{restaurant.location.address1}</h4>
                  {restaurant.location.address2 ? (
                    <h4>{restaurant.location.address2}</h4>
                  ) : null}
                  {restaurant.location.address3 ? (
                    <h4>{restaurant.location.address3}</h4>
                  ) : null}
                  <h4>
                    {restaurant.location.city}, {restaurant.location.state}{" "}
                    {restaurant.location.zip_code}
                  </h4>
                  {restaurant.display_phone ? (
                    <h4>Phone: {restaurant.display_phone}</h4>
                  ) : (
                    <h4>No phone listed</h4>
                  )}
                  {/* <h4>{!restaurant.is_closed ? <h3>OPEN</h3> : <h3>CLOSED</h3>}</h4> */}
                  <h4>Rating: {restaurant.rating} stars</h4>
                  <div></div>
                  <br></br>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h2 id="homepage_text">
          {/* This is the text that will present when nothing has been searched on our webpage yet! */}
          <b>
            Let us help you find your new favorite &#127790; taco &#127790;
            spot!<br></br> Search a city above to get started
          </b>
        </h2>
      )}
    </div>
  );
}

export default TacoSearch;

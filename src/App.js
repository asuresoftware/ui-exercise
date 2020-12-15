//importing React, CSS page, and Axios
import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

//function for rendering page
function App() {
  //setting data to populate hits on taco spots
  const [data, setData] = useState({ hits: [] });
  //setting query to the string of tacos, so user doesn't have to type tacos in
  const [query, setQuery] = useState("Tacos");
  //setting url to the glitch.me Yelp API workaround, should return taco spots in a given city
  const [url, setUrl] = useState(
    "https://colorful-halibut.glitch.me/api/v1/businesses/search?query=tacos"
  );

  //useEffect hook for fetching the data from the url
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setData(result.data);
    };
    fetchData();
  }, [url]);

  return (
    <Fragment>
      {/* wrapped entire homepage in div to style easier */}
      <div className="App">
        <h1>Let's Find Some Tacos!</h1>
        {/* wrapped from in a div to style easier */}
        <div className="home">
          <form
            id="search"
            onSubmit={(event) => {
              // on submit event to search for assigned query when a city is entered
              setUrl(
                `https://colorful-halibut.glitch.me/api/v1/businesses/search?query=${query}`
              );
              // keep prevent default? don't want page reloading if results populate on same page
              //event.preventDefault();
            }}
          >
            <input type="text" placeholder="Enter a City & State or Zipcode" />
            <input
              type="text"
              // keeps tacos in the form field, so user doesn't have to retype every time
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <input type="submit" value="Search"></input>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

// Hit ~ 4 hour time limit. Went by very fast

// Didn't end up getting results to populate, possible error using the Yelp API workaround with glitch.me?

// Homepage looks solid, would like results to populate below input form in a modal ideally, with functions for sorting by yelp review

// Given more time, would like to finish trying to get results populating, add animations on homepage with a popup modal...
// ... add leaflet maps with pins for every taco restaurant in a given city, would like to

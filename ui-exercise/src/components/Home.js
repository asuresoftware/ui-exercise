import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

//The Home component contains the search feature
function Home(props) {
    //Using hook as a variable to have access to history object
    const history = useHistory();

    //Variable that will keep city/location info in state
    const [cityInfo, setCityInfo] = useState("");

    //function that will push user input into history variable and update path with city info
    async function collectUserInput(event) {
        //prevents reload
        event.preventDefault();
        //updates url path with location information
        history.push(`/taco-places/${cityInfo.toLowerCase()}`);
        const { userSearch } = event.target.elements
        setCityInfo(userSearch.value)
    }

    return (
        // div that contains form for search box
        <div id='search-container'>
            {/* on submit, we call the collectUserInput */}
            <form className="taco-form" onSubmit={collectUserInput}>
                {/* form contains two elements: search and submit features */}
                <div className="search-form">
                    <input
                        className="search-input"
                        type="text"
                        value={cityInfo}
                        onChange={(event) => setCityInfo(event.target.value)}
                        placeholder={"Enter Location"}
                        name="userSearch"
                    >
                    </input>
                    {/* submit button */}
                    <button type="submit" className="search-button">
                        Submit
            </button>
                </div>
            </form>
        </div>
    )
}

export default Home
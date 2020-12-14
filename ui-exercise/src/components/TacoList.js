import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

//This component will display list of taco places per location
function TacoList(props) {

    //Variable that will keep taco place info in state
    const [tacoInfo, setTacoInfo] = useState("");
    //Declares variable using the hook useParams, which returns an object of key/value
    const params = useParams();
    //Variable that will hold details of location. We are naming it cityInfo to stay consistent with the "Home" component
    const cityInfo = params.cityInfo;

    // This function will fetch info from api url
    const displayTacoPlace = () => {
        fetch(
            `https://colorful-halibut.glitch.me/api/v1/businesses/search?location=${cityInfo}&term=tacos`
        )
            .then((response) => response.json())

            //When fetch is successful, information gets pushed into tacoPlace and sets state
            .then((tacoPlace) => {
                setTacoInfo(tacoPlace);
            });
    }

    //if cityInfo exits, we will use the hook useEffect on the side, to display a list of taco places per location by calling displayTacoPlace
    useEffect(() => {
        if (cityInfo) {
            displayTacoPlace();
        }
    }, [cityInfo]);


    return (
        <div id='main-container'>
            {/* if tacoInfo is not zero, this function will map over tacoPlace and display details that match an unique key, otherwise will provide the link to do a new search */}
            {tacoInfo.length !== 0 ? (
                tacoInfo.businesses.map((tacoPlace, index) => {
                    return (
                        //adding index as an unique key
                        <div key={index}>
                            {/* div that displays taco place details */}
                            <div>
                                <h2 className="display-headline">{tacoPlace.name}</h2>
                                <p className="infoDisplay">Address: {tacoPlace.location.display_address}</p>
                                <p className="infoDisplay">Phone: {tacoPlace.display_phone}</p>
                                <p className="infoDisplay">Rating: {tacoPlace.rating} stars</p>
                            </div>
                        </div>
                    );
                })
            ) : (
                    <div id='header-links'>
                        <Link to='/'>Search for Tacos!</Link>
                    </div>
                )}
            <div id='header-links'>
                <Link to='/'>Home</Link>
            </div>
        </div>
    )
}

export default TacoList
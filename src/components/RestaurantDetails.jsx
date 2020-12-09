import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function RestaurantDetails() {
  const params = useParams();
  const id = params.id;

  const [restaurantData, setRestaurantData] = useState({
    id: "",
    alias: "",
    name: "",
    image_url: "",
    is_claimed: true,
    is_closed: false,
    url: "",
    phone: "",
    display_phone: "",
    review_count: 0,
    categories: [
      {
        alias: "",
        title: "",
      },
    ],
    rating: 4.5,
    location: {
      address1: "",
      address2: "",
      address3: "",
      city: "",
      zip_code: "",
      country: "",
      state: "",
      display_address: [""],
      cross_streets: "",
    },
    coordinates: {
      latitude: 30.291596,
      longitude: -97.734906,
    },
    photos: ["", "", ""],
    price: "",
    hours: [
      {
        open: [
          {
            is_overnight: false,
            start: "",
            end: "",
            day: 0,
          },
          {
            is_overnight: false,
            start: "",
            end: "",
            day: 0,
          },
          {
            is_overnight: false,
            start: "",
            end: "",
            day: 0,
          },
          {
            is_overnight: false,
            start: "",
            end: "",
            day: 0,
          },
          {
            is_overnight: false,
            start: "",
            end: "",
            day: 0,
          },
          {
            is_overnight: false,
            start: "",
            end: "",
            day: 0,
          },
        ],
        hours_type: "",
        is_open_now: false,
      },
    ],
    transactions: [""],
  });

  useEffect(() => {
    async function fetchRestaurant() {
      const response = await fetch(
        `https://colorful-halibut.glitch.me/api/v1/businesses/${id}`
      );
      const apiData = await response.json();

      setRestaurantData(apiData);
    }
    fetchRestaurant();
  }, [id]);
  console.log(restaurantData.hours);
  return (
    <>
      <ul className="breadcrumb">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={`/results/${restaurantData.location.city}`}>
            {restaurantData.location.city}
          </Link>
        </li>
        <li>{restaurantData.name}</li>
      </ul>

      <div className="details-card">
        {restaurantData.image_url.length === 0 ? (
          <h1>Loading....</h1>
        ) : (
          <section>
            <div className="img-container">
              <img src={restaurantData.image_url} alt=""></img>
            </div>

            <div className="details">
              <h2>{restaurantData.name}</h2>
              <div>
                <p>Address: {restaurantData.location.display_address}</p>
                <a
                  href={
                    "https://www.google.com/maps/place/" +
                    restaurantData.location.display_address
                  }
                >
                  Directions
                </a>
                <p>Telephone: {restaurantData.display_phone}</p>

                <div className="side-details">
                  {restaurantData.hours[0].is_open_now !== undefined &&
                  restaurantData.hours[0].is_open_now ? (
                    <p>Open Now</p>
                  ) : (
                    <p>Closed Now</p>
                  )}
                  {restaurantData.price &&
                    restaurantData.price.length !== 0 && (
                      <p>price: {restaurantData.price}</p>
                    )}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}

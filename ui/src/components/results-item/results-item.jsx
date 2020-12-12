import React from "react";
import classNames from "classnames";
import styles from "./results-item.module.scss";

function ResultsItem({ result }) {
  const {
    name,
    image_url,
    url,
    is_closed,
    review_count,
    rating,
    transactions,
    price,
    display_phone,
    location,
  } = result;

  // Reused classnames
  const liClassName =
    "card-text list-group-item d-flex justify-content-between align-items-center";

  const { display_address } = location;

  return (
    <div className="card mb-3">
      <img
        src={image_url}
        className={`card-img-top ${styles.resultImage}`}
        alt="Food"
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <span
          className={classNames({
            "text-success": !is_closed,
            "text-danger": is_closed,
          })}
        >
          {!is_closed ? "Open" : "Closed"}
        </span>

        <div>
          <ul className="list-group list-group-flush">
            {/* is closed */}
            {typeof is_closed !== "undefined" ? (
              <li className={liClassName}></li>
            ) : null}
            {/* rating */}
            {typeof rating !== "undefined" ? (
              <li className={liClassName}>
                <span>Rating: {rating}</span>
                <span className="badge bg-primary rounded-pill">
                  {review_count}
                </span>
              </li>
            ) : null}
            {/* price */}
            {typeof price !== "undefined" ? (
              <li className={liClassName}>
                <span>Price: {price}</span>
              </li>
            ) : null}
            {typeof transactions !== "undefined" && transactions.length > 0 ? (
              <li className={liClassName}>
                <span>
                  Service Type:{" "}
                  {transactions.map((type, index) => (
                    <span key={index}>{type} </span>
                  ))}
                </span>
              </li>
            ) : null}
          </ul>
        </div>

        <div>
          <ul className="list-group list-group-flush">
            {typeof display_phone !== "undefined" ? (
              <li className={liClassName}>
                <span>Phone: {display_phone}</span>
              </li>
            ) : null}
            {typeof display_address !== "undefined" &&
            display_address.length > 0 ? (
              <li className={liClassName}>
                <span>
                  Address: <br />
                  {display_address[0]} <br />
                  {display_address[1]}
                </span>
              </li>
            ) : null}
          </ul>
        </div>

        <a
          rel="noopener noreferrer"
          target="_blank"
          href={url}
          className="btn btn-primary"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default ResultsItem;

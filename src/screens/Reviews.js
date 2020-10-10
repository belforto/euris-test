import React, { useState } from "react";

export default function Reviews(props) {
  const [visible, setvisible] = useState(false);
  const {reviews} = props;
console.log(reviews);
  const reviewsFunc = (reviews) => {
    return reviews.map((item) => (
      <div>
        <footer className="">
          <p className="card-footer-item"> {item.title}</p>
          <p className="card-footer-item"> {item.user}</p>
          <p className="card-footer-item"> {item.description}</p>
        </footer>
      </div>
    ));
  };

  return (
    <div>
      {visible ? (
        reviewsFunc(reviews)
      ) : (
        <button
          className="button is-success is-small"
          onClick={x => {
            setvisible(true);
          }}
        > Show Reviews</button>
      )}
    </div>
  );
}

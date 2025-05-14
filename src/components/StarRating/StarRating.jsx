import React from "react";
import { Star } from "react-feather";
import "./starRating.css";

export default function StarRating({ numOfStars = 5 }) {
  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(0);

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave(getCurrentIndex) {
    setHover(rating);
  }
  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  return (
    <div className="star-wrapper">
      {[...Array(numOfStars)].map((_, i) => {
        i++;
        return (
          <Star
            key={i}
            className={hover || rating ? "active" : "inactive"}
            size={30}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={() => handleMouseLeave(i)}
            onClick={() => handleClick(i)}
          />
        );
      })}
    </div>
  );
}

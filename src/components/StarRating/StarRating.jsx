import React from "react";
import { Star } from "react-feather";
import "./starRating.css";

export default function StarRating({ numOfStars = 5 }) {
  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(0);

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
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
            size={30}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={() => handleMouseLeave(i)}
            onClick={() => handleClick(i)}
            color="black"
            fill={i <= (hover || rating) ? "yellow" : "white"}
          />
        );
      })}
    </div>
  );
}

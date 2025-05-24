import React from "react";
import { Star } from "react-feather";
import "./starRating.css";

export default function StarRating({ numOfStars = 5 }) {
  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(0);
  const starRef = React.useRef(null);

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  React.useEffect(() => {
    function handleOutsideClick(e) {
      if (starRef.current && !starRef.current.contains(e.target)) {
        setRating(0);
        setHover(0);
      }
    }
    document.addEventListener("click", handleOutsideClick);

    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className="star-wrapper">
      <h1>Star Rating! 🌟</h1>
      <div className="star-container" ref={starRef}>
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
              // React-Feather's property to determine star color
              fill={i <= (hover || rating) ? "yellow" : "white"}
            />
          );
        })}
      </div>
    </div>
  );
}

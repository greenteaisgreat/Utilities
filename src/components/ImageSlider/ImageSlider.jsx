import React from "react";
import { ArrowRightCircle, ArrowLeftCircle } from "react-feather";
import "./imageSlider.css";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = React.useState([]);
  const [slideIndex, setSlideIndex] = React.useState(0);

  // idle | loading | success | error
  const [status, setStatus] = React.useState("idle");

  async function fetchImages(getUrl) {
    try {
      setStatus("loading");
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const json = await response.json();

      if (json) {
        setStatus("success");
        setImages([...json]);
      }
    } catch (error) {
      setStatus("error");
      console.error(`An error has occurred: ${error}`);
    }
  }

  function handlePreviousSlide() {
    setSlideIndex(slideIndex === 0 ? images.length - 1 : slideIndex - 1);
  }

  function handleNextSlide() {
    setSlideIndex(slideIndex === images.length - 1 ? 0 : slideIndex + 1);
  }

  React.useEffect(() => {
    if (url === "") {
      console.error("URL must not be blank");
    }
    fetchImages(url);
  }, []);

  if (status === "loading") {
    return (
      <div className="pending">
        <p>Loading...</p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="pending">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="carousel">
      {status === "loading"}
      <ArrowLeftCircle
        size={75}
        className="arrow arrow-left"
        onClick={handlePreviousSlide}
      />
      {images && images.length
        ? images.map((image, i) => (
            <img
              className={
                slideIndex === i ? "carousel-item" : "carousel-item hide-img"
              }
              key={image.id}
              src={image.download_url}
              alt={image.download_url}
            />
          ))
        : null}
      <ArrowRightCircle
        size={75}
        className="arrow arrow-right"
        onClick={handleNextSlide}
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, i) => (
              <button
                key={i}
                className={
                  slideIndex === i
                    ? "current-indicator"
                    : "current-indicator hide-indicator"
                }
                onClick={() => setSlideIndex(i)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}

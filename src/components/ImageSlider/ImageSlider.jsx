import React from "react";
import "./imageSlider.css";

export default function ImageSlider({ url, limit }) {
  const [images, setImages] = React.useState([]);
  const [sliderIndex, setSliderIndex] = React.useState(0);

  async function fetchImages(getUrl) {
    try {
      const response = await fetch(getUrl);
      const data = await response.json();
      console.log(data);

      if (data.ok()) {
        setImages(data.json);
      }
    } catch (error) {
      console.error(`An error has occurred: ${error}`);
    }
  }

  React.useEffect(() => {
    if (url === "") {
      console.error("URL must not be blank");
    }
    fetchImages(url);
  }, []);

  return <div className="image-slider-wrapper">Test</div>;
}

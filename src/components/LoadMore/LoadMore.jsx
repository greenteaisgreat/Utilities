import React from "react";

export default function LoadMore(url, limit = 5) {
  const [items, setItems] = React.useState([]);
  // idle | loading | success | error
  const [status, setStatus] = React.useState("idle");
  const [buttonClicks, setButtonClicks] = React.useState(0);

  async function getProducts(url) {
    try {
      setStatus("loading");
      const response = await fetch(url);
      const json = await response.json();

      if (json) {
        setStatus("success");
        setItems([...json]);
      }
    } catch (error) {
      setStatus("error");
      console.error(`There was an error: ${error}`);
    }
  }

  return (
    <div className="loader-wrapper">
      <h1>Test!</h1>
    </div>
  );
}

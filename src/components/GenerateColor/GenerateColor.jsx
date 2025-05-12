import React from "react";
import "./generateColor.css";

export default function GenerateColor() {
  // hex || rgb
  const [colorType, setColorType] = React.useState("hex");
  const [colorCode, setColorCode] = React.useState("#000");

  return (
    <div className="container">
      <div className="button-wrapper">
        <button>Generate HEX Color</button>
        <button>Generate RGB Color</button>
        <button>Generate Random Color</button>
      </div>
    </div>
  );
}

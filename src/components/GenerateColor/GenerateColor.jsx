import React from "react";
import "./generateColor.css";

export default function GenerateColor() {
  // hex || rgb
  const [colorType, setColorType] = React.useState("hex");
  const [colorCode, setColorCode] = React.useState("#000");

  function randomNumberUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleGenerateRandomColor() {
    if (colorType === "hex") {
      let hexColor = "#";
      const hexArr = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
      ];
      for (let i = 0; i < 6; i++) {
        hexColor += hexArr[randomNumberUtility(hexArr.length)];
      }
      setColorCode(hexColor);
    } else if (colorType === "rgb") {
      const r = randomNumberUtility(256);
      const g = randomNumberUtility(256);
      const b = randomNumberUtility(256);

      setColorCode(`rgb(${r}, ${g}, ${b})`);
    }
  }

  return (
    <div className="container" style={{ "--colorCode": colorCode }}>
      <div className="button-wrapper">
        <button onClick={() => setColorType("hex")}>Generate HEX Color</button>
        <button onClick={() => setColorType("rgb")}>Generate RGB Color</button>
        <button onClick={handleGenerateRandomColor}>
          Generate Random Color
        </button>
      </div>
    </div>
  );
}

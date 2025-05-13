import React from "react";
import "./generateColor.css";

export default function GenerateColor() {
  // hex || rgb; more to be added later
  const [colorType, setColorType] = React.useState("hex");
  const [colorCode, setColorCode] = React.useState("#000");

  // generate a random number
  function randomNumberUtility(length) {
    return Math.floor(Math.random() * length);
  }

  // used to ensure that the correct colorType text is displayed
  // after the user clicks on one of them
  React.useEffect(() => {
    handleGenerateRandomColor();
  }, [colorType]);

  function handleGenerateRandomColor() {
    // hex color generator logic
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
    }
    // rgb color generator logic
    else if (colorType === "rgb") {
      const r = randomNumberUtility(256);
      const g = randomNumberUtility(256);
      const b = randomNumberUtility(256);

      setColorCode(`rgb(${r}, ${g}, ${b})`);
    }
  }

  return (
    // CSS var to dynamically reflect the color type selected
    <div className="container" style={{ "--colorCode": colorCode }}>
      <div className="button-wrapper">
        <button onClick={() => setColorType("hex")}>Generate HEX Color</button>
        <button onClick={() => setColorType("rgb")}>Generate RGB Color</button>
        <button onClick={handleGenerateRandomColor}>
          Generate Random Color
        </button>
        <div className="color-display">
          <h1>
            {colorType === "hex" ? (
              <div className="color-text">
                HEX <div>{colorCode}</div>
              </div>
            ) : (
              <div className="color-text">
                RGB <div>{colorCode}</div>
              </div>
            )}
          </h1>
        </div>
      </div>
    </div>
  );
}

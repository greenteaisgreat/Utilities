import React from "react";
import data from "./data";
import "./accordion.css";

export default function Accordion() {
  const [selectedId, setSelectedId] = React.useState(null);
  const [isMultiSelected, setIsMultiSelected] = React.useState(false);
  const [multiple, setMultiple] = React.useState({});

  function handleSelection(currentId) {
    setSelectedId(currentId === selectedId ? null : currentId);
  }

  function handleMultiSelection(multiId) {
    const newMultiple = { ...multiple };

    if (newMultiple[multiId]) newMultiple[multiId] = false;
    else newMultiple[multiId] = true;

    setMultiple(newMultiple);
  }

  return (
    <div className="wrapper">
      <button onClick={() => setIsMultiSelected(!isMultiSelected)}>
        {isMultiSelected ? "Disable" : "Enable"} multi-selection
      </button>
      <div className="accordion">
        {data.length > 0 ? (
          data.map((item, i) => (
            <div className="item" key={i}>
              <div
                className="question"
                onClick={() =>
                  isMultiSelected
                    ? handleMultiSelection(item.id)
                    : handleSelection(item.id)
                }
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {isMultiSelected
                ? multiple[item.id] && (
                    <div className="answer">{item.answer}</div>
                  )
                : selectedId === item.id && (
                    <div className="answer">{item.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No items present</div>
        )}
      </div>
    </div>
  );
}

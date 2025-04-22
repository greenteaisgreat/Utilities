import React from "react";
import data from "./data";
import "./accordion.css";

export default function Accordion() {
  const [selectedId, setSelectedId] = React.useState(null);

  function handleSelection(currentId) {
    setSelectedId(currentId === selectedId ? null : currentId);
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        {data.length > 0 ? (
          data.map((item, i) => (
            <div className="item" key={i}>
              <div
                className="question"
                onClick={() => handleSelection(item.id)}
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {selectedId === item.id && (
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

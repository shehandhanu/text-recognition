import React from "react";
import "../App.css";

const TextItem = ({ setText, text, leftTopInPixelsX, leftTopInPixelsY }) => {
  return (
    <div className="textitem-container" onClick={() => setText(text)}>
      <div
        style={{ top: leftTopInPixelsY + "px", left: leftTopInPixelsX + "px" }}
        className="textitem"
      >
        {text}
      </div>
    </div>
  );
};

export default TextItem;

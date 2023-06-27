import React from "react";
import "./ToggleSwitch.scss";

// https://stackoverflow.com/questions/27529374/css-add-color-with-a-data-attribute-attrdata-color-color
const ToggleSwitch = (props) => {
  const { className,toggleName, trueText, falseText, checked, onClickToggle, color } = props;

  return (
    <div className="ToggleSwitch">
      <input type="checkbox" id={toggleName} className="toggle-checkbox" checked={checked || false} onChange={() => {}} />
      <label
        className={`toggle-label ${className}`}
        onClick={(e) => {
          e.stopPropagation();
          onClickToggle();
        }}
      >
        <span
          className="toggle-inner"
          style={{
            "--back-color": color,
          }}
          data-true={trueText || "20/20"}
          data-false={falseText || "비활성"}
        />
        <span className="toggle-circle" />
      </label>
    </div>
  );
};

export default ToggleSwitch;

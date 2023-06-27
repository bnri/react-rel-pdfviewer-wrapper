"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./ToggleSwitch.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// https://stackoverflow.com/questions/27529374/css-add-color-with-a-data-attribute-attrdata-color-color
var ToggleSwitch = function ToggleSwitch(props) {
  var className = props.className,
    toggleName = props.toggleName,
    trueText = props.trueText,
    falseText = props.falseText,
    checked = props.checked,
    onClickToggle = props.onClickToggle,
    color = props.color;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "ToggleSwitch"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    id: toggleName,
    className: "toggle-checkbox",
    checked: checked || false,
    onChange: function onChange() {}
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "toggle-label ".concat(className),
    onClick: function onClick(e) {
      e.stopPropagation();
      onClickToggle();
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "toggle-inner",
    style: {
      "--back-color": color
    },
    "data-true": trueText || "20/20",
    "data-false": falseText || "비활성"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "toggle-circle"
  })));
};
var _default = ToggleSwitch;
exports.default = _default;
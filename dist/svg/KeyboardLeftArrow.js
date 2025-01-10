"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _objectDestructuringEmpty(t) { if (null == t) throw new TypeError("Cannot destructure " + t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const KeyboardLeftArrow = _ref => {
  let props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  const {
    onClick
  } = props;
  let defaultStyle = {
    width: "37px",
    height: "37px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px"
  };
  let defaultClassName = "oneKey";
  let customStyle = props.style;
  let customClassName = props.className;
  if (customClassName) {
    defaultClassName = defaultClassName + " " + customClassName;
  }
  for (let key in customStyle) {
    // console.log(key);
    defaultStyle[key] = customStyle[key];
  }

  // console.log(defaultStyle);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: defaultClassName,
    style: defaultStyle,
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 493.578 493.578",
    style: {
      enableBackground: "new 0 0 493.578 493.578",
      width: "70%",
      height: "70%"
    },
    fill: "currentColor",
    xmlSpace: "preserve"
  }, /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    d: "M487.267,225.981c0-17.365-13.999-31.518-31.518-31.518H194.501L305.35,83.615c12.24-12.24,12.24-32.207,0-44.676\r L275.592,9.18c-12.24-12.24-32.207-12.24-44.676,0L15.568,224.527c-6.12,6.12-9.256,14.153-9.256,22.262\r c0,8.032,3.136,16.142,9.256,22.262l215.348,215.348c12.24,12.239,32.207,12.239,44.676,0l29.758-29.759\r c12.24-12.24,12.24-32.207,0-44.676L194.501,299.498h261.094c17.366,0,31.519-14.153,31.519-31.519L487.267,225.981z"
  }))));
};
var _default = exports.default = KeyboardLeftArrow;
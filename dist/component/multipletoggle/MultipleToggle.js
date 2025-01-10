"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./MultipleToggle.scss");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _objectDestructuringEmpty(t) { if (null == t) throw new TypeError("Cannot destructure " + t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MultipleToggle = _ref => {
  let props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  const {
    btnArr,
    selBtnIndex
  } = props;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "MultipleToggle",
    style: {
      display: 'flex'
    }
  }, btnArr.map((btn, index) => {
    return /*#__PURE__*/_react.default.createElement("button", {
      className: "mtbtn ".concat(index * 1 === selBtnIndex * 1 ? 'selected' : ''),
      onClick: e => {
        if (btn.onClick) {
          btn.onClick(e);
        }
      },
      key: "mtbtn_".concat(index)
    }, btn.Label);
  }));
};
var _default = exports.default = MultipleToggle;
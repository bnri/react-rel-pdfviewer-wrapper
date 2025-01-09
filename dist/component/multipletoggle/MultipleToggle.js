"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./MultipleToggle.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
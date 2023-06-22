"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDraggable = _interopRequireDefault(require("react-draggable"));

var _svg = require("../svg");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var RemoconController = function RemoconController(_ref) {
  var props = _extends({}, _ref);

  var hideController = props.hideController,
      handleTryPrint = props.handleTryPrint,
      fd_inform = props.fd_inform,
      offsetX = props.offsetX,
      offsetY = props.offsetY,
      set_offsetX = props.set_offsetX,
      set_offsetY = props.set_offsetY;

  var _useState = (0, _react.useState)('visible'),
      _useState2 = _slicedToArray(_useState, 2),
      visibility = _useState2[0],
      set_visibility = _useState2[1];

  (0, _react.useEffect)(function () {
    var a;

    if (hideController) {
      a = setTimeout(function () {
        set_visibility('hidden');
      }, 200);
    } else {
      set_visibility('visible');
    }

    return function () {
      clearTimeout(a);
    };
  }, [hideController]);
  return /*#__PURE__*/_react.default.createElement(_reactDraggable.default, {
    bounds: ".topVacancy",
    handle: ".Remocon-drag-handle" // defaultPosition={{ x: 50, y: 50 }}
    ,
    grid: [1, 1]
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "controllerWrapper",
    style: {
      // display: hideController ? 'block' : 'block',
      opacity: hideController ? 0 : 1,
      visibility: visibility,
      transition: 'opacity .2s ease'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "header Remocon-drag-handle"
  }, "Drag"), /*#__PURE__*/_react.default.createElement("div", {
    className: "cbody"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "GC-etcWrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, "\uD3C9\uADE0\uC751\uC2DC\uC2DC\uAC04"), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data"
  }, fd_inform.avgDuration.toFixed(0), "ms")), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, "\uC751\uC2DC\uBE44\uC728"), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data"
  }, fd_inform.fixationRatio.toFixed(0), "%")), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig downloadpdf",
    onClick: handleTryPrint,
    "data-tip": "\uC2DC\uC120\uC774\uB3D9\uC774 \uD45C\uD604\uB41C PDF\uB97C \uB2E4\uC6B4\uB85C\uB4DC \uD569\uB2C8\uB2E4."
  }, /*#__PURE__*/_react.default.createElement(_svg.PDFSVG, null), "\xA0\xA0PDF\uB2E4\uC6B4\uB85C\uB4DC")), /*#__PURE__*/_react.default.createElement("div", {
    className: "GC-fixoffsetWrapper no-drag"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "title"
  }, "\uC2DC\uC120 \uC704\uCE58 \uC870\uC815"), /*#__PURE__*/_react.default.createElement("div", {
    className: "keyboardWrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "kw"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "kw-row"
  }, /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", {
    "data-tip": "(\uB2E8\uCD95\uD0A4-\uD0A4\uBCF4\uB4DC \uBC29\uD5A5\uD0A4)"
  }, /*#__PURE__*/_react.default.createElement(_svg.KeyboardLeftArrow, {
    style: {
      transform: "rotate(90deg)"
    },
    onClick: function onClick() {
      return set_offsetY((offsetY * 1 - 0.01).toFixed(2));
    }
  })), /*#__PURE__*/_react.default.createElement("div", null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "kw-row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    "data-tip": "(\uB2E8\uCD95\uD0A4-\uD0A4\uBCF4\uB4DC \uBC29\uD5A5\uD0A4)"
  }, /*#__PURE__*/_react.default.createElement(_svg.KeyboardLeftArrow, {
    onClick: function onClick() {
      return set_offsetX((offsetX * 1 - 0.01).toFixed(2));
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    "data-tip": "(\uB2E8\uCD95\uD0A4-\uD0A4\uBCF4\uB4DC \uBC29\uD5A5\uD0A4)"
  }, /*#__PURE__*/_react.default.createElement(_svg.KeyboardLeftArrow, {
    style: {
      transform: "rotate(270deg)"
    },
    onClick: function onClick() {
      return set_offsetY((offsetY * 1 + 0.01).toFixed(2));
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    "data-tip": "(\uB2E8\uCD95\uD0A4-\uD0A4\uBCF4\uB4DC \uBC29\uD5A5\uD0A4)"
  }, /*#__PURE__*/_react.default.createElement(_svg.KeyboardLeftArrow, {
    onClick: function onClick() {
      return set_offsetX((offsetX * 1 + 0.01).toFixed(2));
    },
    style: {
      transform: "rotate(180deg)"
    }
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "offsetWrapper"
  }, "X : " + offsetX + " Y : " + offsetY)))));
};

var _default = RemoconController;
exports.default = _default;
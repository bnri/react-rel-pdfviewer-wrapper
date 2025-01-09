"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDraggable = _interopRequireDefault(require("react-draggable"));
var _svg = require("../svg");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const RemoconController = _ref => {
  let props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  const {
    hideController,
    handleTryPrint,
    fd_inform,
    offsetX,
    offsetY,
    set_offsetX,
    set_offsetY,
    originViewPercent,
    isPossiblePDFDownload
  } = props;
  const [visibility, set_visibility] = (0, _react.useState)('visible');
  (0, _react.useEffect)(() => {
    let a;
    if (hideController) {
      a = setTimeout(function () {
        set_visibility('hidden');
      }, 200);
    } else {
      set_visibility('visible');
    }
    return () => {
      clearTimeout(a);
    };
  }, [hideController]);
  return /*#__PURE__*/_react.default.createElement(_reactDraggable.default, {
    bounds: ".topVacancy",
    handle: ".Remocon-drag-handle"
    // defaultPosition={{ x: 50, y: 50 }}
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
    className: "oneConfig"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, "\uCE21\uC815\uC2DC\uBB38\uC11C\uBC30\uC728"), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data"
  }, originViewPercent, "%")), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig downloadpdf",
    style: {
      background: isPossiblePDFDownload ? 'transparent' : 'gray',
      cursor: isPossiblePDFDownload ? 'pointer' : 'not-allowed'
    },
    onClick: () => {
      if (isPossiblePDFDownload) {
        handleTryPrint();
      }
    },
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
  }, /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_svg.KeyboardLeftArrow, {
    style: {
      transform: "rotate(90deg)"
    },
    onClick: () => set_offsetY((offsetY * 1 - 0.01).toFixed(2))
  })), /*#__PURE__*/_react.default.createElement("div", null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "kw-row"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_svg.KeyboardLeftArrow, {
    onClick: () => set_offsetX((offsetX * 1 - 0.01).toFixed(2))
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_svg.KeyboardLeftArrow, {
    style: {
      transform: "rotate(270deg)"
    },
    onClick: () => set_offsetY((offsetY * 1 + 0.01).toFixed(2))
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_svg.KeyboardLeftArrow, {
    onClick: () => set_offsetX((offsetX * 1 + 0.01).toFixed(2)),
    style: {
      transform: "rotate(180deg)"
    }
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "offsetWrapper"
  }, "X : " + offsetX + " Y : " + offsetY)))));
};
var _default = exports.default = RemoconController;
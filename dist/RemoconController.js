"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDraggable = _interopRequireDefault(require("react-draggable"));

var _PDF_file_icon = _interopRequireDefault(require("./PDF_file_icon.svg"));

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

var KeyboardLeftArrow = function KeyboardLeftArrow(_ref) {
  var props = _extends({}, _ref);

  var onClick = props.onClick;
  var defaultStyle = {
    width: "37px",
    height: "37px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px"
  };
  var defaultClassName = "oneKey";
  var customStyle = props.style;
  var customClassName = props.className;

  if (customClassName) {
    defaultClassName = defaultClassName + " " + customClassName;
  }

  for (var key in customStyle) {
    // console.log(key);
    defaultStyle[key] = customStyle[key];
  } // console.log(defaultStyle);


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

var RemoconController = function RemoconController(_ref2) {
  var props = _extends({}, _ref2);

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
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _PDF_file_icon.default,
    alt: ""
  }), "\xA0\xA0PDF\uB2E4\uC6B4\uB85C\uB4DC")), /*#__PURE__*/_react.default.createElement("div", {
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
  }, /*#__PURE__*/_react.default.createElement(KeyboardLeftArrow, {
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
  }, /*#__PURE__*/_react.default.createElement(KeyboardLeftArrow, {
    onClick: function onClick() {
      return set_offsetX((offsetX * 1 - 0.01).toFixed(2));
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    "data-tip": "(\uB2E8\uCD95\uD0A4-\uD0A4\uBCF4\uB4DC \uBC29\uD5A5\uD0A4)"
  }, /*#__PURE__*/_react.default.createElement(KeyboardLeftArrow, {
    style: {
      transform: "rotate(270deg)"
    },
    onClick: function onClick() {
      return set_offsetY((offsetY * 1 + 0.01).toFixed(2));
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    "data-tip": "(\uB2E8\uCD95\uD0A4-\uD0A4\uBCF4\uB4DC \uBC29\uD5A5\uD0A4)"
  }, /*#__PURE__*/_react.default.createElement(KeyboardLeftArrow, {
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
/*
const RemoconController = ({ ...props }) => {
    const { hideController, handleTryPrint, fd_inform } = props;


    const [isFocus, set_isFocus] = useState();
    const [visibility, set_visibility] = useState('visible');
    useEffect(() => {
        let a;
        if (hideController) {
            a = setTimeout(function () {
                set_visibility('hidden');
            }, 200)
        }
        else {
            set_visibility('visible');
        }
        return () => {
            clearTimeout(a);
        }
    }, [hideController])

    return <Draggable
        bounds=".topVacancy"
        handle=".Remocon-drag-handle"
        // defaultPosition={{ x: 50, y: 50 }}
       
        grid={[1, 1]} >

        <div tabIndex='0' className="RemoconController"
            style={{
                backgroundColor: 'white',
                opacity: hideController ? 0 : 1,
                visibility: visibility,
                transition: 'opacity .2s ease',
                zIndex: isFocus ? 10 : 9
            }}
            onBlur={() => {
                //console.log("OVM BLUR");
                set_isFocus(false);
            }}
            onFocus={() => {
                //console.log("OVM FOCUS");
                set_isFocus(true);
            }}
        >
            <div className="header Remocon-drag-handle" style={{ backgroundColor: isFocus ? 'rgb(40,40,40)' : 'rgb(20,20,20)' }}>
                Drag
            </div>

            <div className="middle">
                <div className="moveBar">
                    <div className="SideBar">
                        <div className="oneConfig">
                            <div className="c_label">
                                평균응시시간
                            </div>
                            <div className="c_data">
                                {fd_inform.avgDuration.toFixed(0)}ms
                            </div>
                        </div>
                        <div className="oneConfig">

                            <div className="c_label">
                                응시비율
                            </div>
                            <div className="c_data">
                                {fd_inform.fixationRatio.toFixed(0)}%
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div className="oneConfig" onClick={handleTryPrint} data-tip="시선이동이 표현된 PDF를 다운로드 합니다.">
                                <img src={pdfsvg} alt="" style={{ height: '70%' }} />&nbsp;다운
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </Draggable>
}
*/


var _default = RemoconController;
exports.default = _default;
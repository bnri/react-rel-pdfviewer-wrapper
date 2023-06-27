"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _svg = require("../svg");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var ConfigController = function ConfigController(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  var resaveConfig = props.resaveConfig,
    showConfig = props.showConfig,
    ChartOption = props.ChartOption,
    followEvent = props.followEvent,
    set_followEvent = props.set_followEvent;
  var _useState = (0, _react.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    forceUpdate = _useState2[1];
  (0, _react.useEffect)(function () {
    forceUpdate({});
  }, [ChartOption]);
  var _useState3 = (0, _react.useState)("250px"),
    _useState4 = _slicedToArray(_useState3, 2),
    mainConfigWidth = _useState4[0],
    set_mainConfigWidth = _useState4[1];
  var _useState5 = (0, _react.useState)("950px"),
    _useState6 = _slicedToArray(_useState5, 2),
    mainConfigHegiht = _useState6[0],
    set_mainConfigHeight = _useState6[1];
  var _useState7 = (0, _react.useState)("0"),
    _useState8 = _slicedToArray(_useState7, 2),
    subConfig1Width = _useState8[0],
    set_subConfig1Width = _useState8[1];
  var _useState9 = (0, _react.useState)("0"),
    _useState10 = _slicedToArray(_useState9, 2),
    subConfig1Hegiht = _useState10[0],
    set_subConfig1Height = _useState10[1];
  var _useState11 = (0, _react.useState)("0"),
    _useState12 = _slicedToArray(_useState11, 2),
    subConfig3Width = _useState12[0],
    set_subConfig3Width = _useState12[1];
  var _useState13 = (0, _react.useState)("0"),
    _useState14 = _slicedToArray(_useState13, 2),
    subConfig3Hegiht = _useState14[0],
    set_subConfig3Height = _useState14[1];
  var _useState15 = (0, _react.useState)("0"),
    _useState16 = _slicedToArray(_useState15, 2),
    subConfig4Width = _useState16[0],
    set_subConfig4Width = _useState16[1];
  var _useState17 = (0, _react.useState)("0"),
    _useState18 = _slicedToArray(_useState17, 2),
    subConfig4Hegiht = _useState18[0],
    set_subConfig4Height = _useState18[1];
  var _useState19 = (0, _react.useState)("0"),
    _useState20 = _slicedToArray(_useState19, 2),
    subConfig6Width = _useState20[0],
    set_subConfig6Width = _useState20[1];
  var _useState21 = (0, _react.useState)("0"),
    _useState22 = _slicedToArray(_useState21, 2),
    subConfig6Hegiht = _useState22[0],
    set_subConfig6Height = _useState22[1];
  (0, _react.useEffect)(function () {
    var a;
    if (!showConfig) {
      a = setTimeout(function () {
        set_mainConfigWidth('250px');
        set_mainConfigHeight('800px');
        set_subConfig1Width("0");
        set_subConfig1Height("0");
        set_subConfig3Width("0");
        set_subConfig3Height("0");
        set_subConfig4Width("0");
        set_subConfig4Height("0");
        set_subConfig6Width("0");
        set_subConfig6Height("0");
      }, 300);
    }
    return function () {
      clearTimeout(a);
    };
  }, [showConfig]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "ConfigWrapper configArea",
    style: {
      opacity: showConfig ? "1" : "0",
      visibility: showConfig ? "visible" : "hidden"
    },
    onClick: function onClick(e) {
      e.stopPropagation();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mainConfig",
    style: {
      width: mainConfigWidth,
      height: mainConfigHegiht
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      ChartOption.heatMap = !ChartOption.heatMap;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, "\uD788\uD2B8\uB9F5 \uBCF4\uAE30(H)"), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ckbx-style-8"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: "ckbx-style-8",
    checked: ChartOption.heatMap,
    onChange: function onChange() {}
  }), /*#__PURE__*/_react.default.createElement("label", null)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig borderBottom",
    onClick: function onClick() {
      //여기 팝
      set_mainConfigWidth(0);
      set_mainConfigHeight(0);
      set_subConfig6Width("250px");
      set_subConfig6Height("200px");
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, "\uD788\uD2B8\uB9F5 \uC138\uBD80\uC124\uC815"), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "75%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      paddingRight: "15px"
    }
  }, "\uAE30\uBCF8"), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "25%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingRight: "10px"
    }
  }, /*#__PURE__*/_react.default.createElement(_svg.ChevronRightSVG, null)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig borderBottom",
    onClick: function onClick() {
      ChartOption.penPermit = !ChartOption.penPermit;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, "\uD39C \uBCF4\uAE30"), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ckbx-style-8"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: "ckbx-style-8",
    checked: ChartOption.penPermit,
    onChange: function onChange() {}
  }), /*#__PURE__*/_react.default.createElement("label", null)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, "\uC2DC\uC120 \uD06C\uAE30"), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "range",
    style: {
      width: "70%"
    },
    value: ChartOption.RPOG_size,
    min: 1,
    step: 0.1,
    max: 80,
    onChange: function onChange(e) {
      ChartOption.RPOG_size = e.target.value * 1;
      resaveConfig();
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      ChartOption.RPOG = !ChartOption.RPOG;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, "\uC2DC\uC120 \uBCF4\uAE30(G)"), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ckbx-style-8"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: "ckbx-style-8",
    checked: ChartOption.RPOG,
    onChange: function onChange() {}
  }), /*#__PURE__*/_react.default.createElement("label", null)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig borderBottom",
    onClick: function onClick() {
      ChartOption.RPOG_line = !ChartOption.RPOG_line;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, "\uC2DC\uC120 \uC774\uB3D9 \uBCF4\uAE30(K)"), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ckbx-style-8"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: "ckbx-style-8",
    checked: ChartOption.RPOG_line,
    onChange: function onChange() {}
  }), /*#__PURE__*/_react.default.createElement("label", null)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, "\uC751\uC2DC \uD06C\uAE30"), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "range",
    style: {
      width: "70%"
    },
    value: ChartOption.FPOG_size,
    min: 0,
    step: 0.1,
    max: 100,
    onChange: function onChange(e) {
      ChartOption.FPOG_size = e.target.value * 1;
      resaveConfig();
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      ChartOption.rainBow = !ChartOption.rainBow;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, "\uC751\uC2DC \uBB34\uC9C0\uAC1C"), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ckbx-style-8"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: "ckbx-style-8",
    checked: ChartOption.rainBow,
    onChange: function onChange() {}
  }), /*#__PURE__*/_react.default.createElement("label", null)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      if (ChartOption.FPOG && ChartOption.FPOG_number) {
        ChartOption.FPOG_number = !ChartOption.FPOG_number;
      }
      ChartOption.FPOG = !ChartOption.FPOG;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, "\uC751\uC2DC \uBCF4\uAE30(F)"), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ckbx-style-8"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: "ckbx-style-8",
    checked: ChartOption.FPOG,
    onChange: function onChange() {}
  }), /*#__PURE__*/_react.default.createElement("label", null)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      ChartOption.FPOG_line = !ChartOption.FPOG_line;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, "\uC751\uC2DC \uC774\uB3D9 \uBCF4\uAE30(L)"), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ckbx-style-8"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: "ckbx-style-8",
    checked: ChartOption.FPOG_line,
    onChange: function onChange() {}
  }), /*#__PURE__*/_react.default.createElement("label", null)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      if (!ChartOption.FPOG_number && !ChartOption.FPOG) {
        ChartOption.FPOG = !ChartOption.FPOG;
      }
      ChartOption.FPOG_number = !ChartOption.FPOG_number;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, "\uC751\uC2DC \uC21C\uBC88 \uBCF4\uAE30(N)"), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ckbx-style-8"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: "ckbx-style-8",
    checked: ChartOption.FPOG_number,
    onChange: function onChange() {}
  }), /*#__PURE__*/_react.default.createElement("label", null)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig borderBottom"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, "\uC751\uC2DC \uC21C\uC11C \uD06C\uAE30"), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "range",
    style: {
      width: "70%"
    },
    value: ChartOption.FPOG_number_size,
    min: 0,
    step: 0.1,
    max: 5,
    onChange: function onChange(e) {
      ChartOption.FPOG_number_size = e.target.value * 1;
      resaveConfig();
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      //subConfig1로
      set_mainConfigWidth(0);
      set_mainConfigHeight(0);
      set_subConfig1Width("250px");
      set_subConfig1Height("350px");
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, "\uC2DC\uC120\uCC3D \uACFC\uAC70\uBC94\uC704"), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "75%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      paddingRight: "15px"
    }
  }, ChartOption.GazePastRange !== null && ChartOption.GazePastRange === 0 ? "전체" : ChartOption.GazePastRange + "초"), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "25%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingRight: "10px"
    }
  }, /*#__PURE__*/_react.default.createElement(_svg.ChevronRightSVG, null)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      //subConfig1로
      set_mainConfigWidth(0);
      set_mainConfigHeight(0);
      set_subConfig3Width("250px");
      set_subConfig3Height("350px");
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, "\uC7AC\uC0DD \uBC30\uC18D"), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "75%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      paddingRight: "15px"
    }
  }, ChartOption.playSpeed !== null && "x".concat(ChartOption.playSpeed)), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "25%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingRight: "10px"
    }
  }, /*#__PURE__*/_react.default.createElement(_svg.ChevronRightSVG, null)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      //subConfig1로
      set_mainConfigWidth(0);
      set_mainConfigHeight(0);
      set_subConfig4Width("250px");
      set_subConfig4Height("250px");
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, "\uC7AC\uC0DD \uBAA9\uD45C FPS"), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "75%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      paddingRight: "15px"
    }
  }, ChartOption.drawFPS !== null && "".concat(ChartOption.drawFPS, "FPS")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "25%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingRight: "10px"
    }
  }, /*#__PURE__*/_react.default.createElement(_svg.ChevronRightSVG, null)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      set_followEvent(function (f) {
        return !f;
      });
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, "\uCE21\uC815\uD658\uACBD \uBAA8\uBC29"), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ckbx-style-8"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: "ckbx-style-8",
    checked: followEvent,
    onChange: function onChange() {}
  }), /*#__PURE__*/_react.default.createElement("label", null))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "subConfig1",
    style: {
      width: subConfig1Width,
      height: subConfig1Hegiht
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    style: {
      borderBottom: "1px solid #fff"
    },
    onClick: function onClick() {
      //다시 mainConfig으로
      set_mainConfigWidth("250px");
      set_mainConfigHeight("950px");
      set_subConfig1Width("0");
      set_subConfig1Height("0");
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_svg.ChevronLeftSVG, null), "\xA0 \uC2DC\uC120\uCC3D \uACFC\uAC70\uBC94\uC704"), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data",
    style: {
      width: 0
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      ChartOption.GazePastRange = 0;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_checkzone"
  }, ChartOption.GazePastRange === 0 ? /*#__PURE__*/_react.default.createElement(_svg.CheckSVG, null) : ""), /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_labelzone"
  }, "\uC804\uCCB4")), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      ChartOption.GazePastRange = 0.5;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_checkzone"
  }, ChartOption.GazePastRange === 0.5 ? /*#__PURE__*/_react.default.createElement(_svg.CheckSVG, null) : ""), /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_labelzone"
  }, "0.5\uCD08")), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      ChartOption.GazePastRange = 1;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_checkzone"
  }, ChartOption.GazePastRange === 1 ? /*#__PURE__*/_react.default.createElement(_svg.CheckSVG, null) : ""), /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_labelzone"
  }, "1\uCD08")), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      ChartOption.GazePastRange = 2;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_checkzone"
  }, ChartOption.GazePastRange === 2 ? /*#__PURE__*/_react.default.createElement(_svg.CheckSVG, null) : ""), /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_labelzone"
  }, "2\uCD08")), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      ChartOption.GazePastRange = 5;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_checkzone"
  }, ChartOption.GazePastRange === 5 ? /*#__PURE__*/_react.default.createElement(_svg.CheckSVG, null) : ""), /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_labelzone"
  }, "5\uCD08")), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      ChartOption.GazePastRange = 10;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_checkzone"
  }, ChartOption.GazePastRange === 10 ? /*#__PURE__*/_react.default.createElement(_svg.CheckSVG, null) : ""), /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_labelzone"
  }, "10\uCD08"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "subConfig3",
    style: {
      width: subConfig3Width,
      height: subConfig3Hegiht
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    style: {
      borderBottom: "1px solid #fff"
    },
    onClick: function onClick() {
      //다시 mainConfig으로
      set_mainConfigWidth("250px");
      set_mainConfigHeight("950px");
      set_subConfig3Width("0");
      set_subConfig3Height("0");
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, /*#__PURE__*/_react.default.createElement(_svg.ChevronLeftSVG, null), "\xA0 \uC7AC\uC0DD\uBC30\uC18D"), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      ChartOption.playSpeed = 0.1;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_checkzone"
  }, ChartOption.playSpeed === 0.1 ? /*#__PURE__*/_react.default.createElement(_svg.CheckSVG, null) : ""), /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_labelzone"
  }, "x0.1")), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      ChartOption.playSpeed = 0.5;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_checkzone"
  }, ChartOption.playSpeed === 0.5 ? /*#__PURE__*/_react.default.createElement(_svg.CheckSVG, null) : ""), /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_labelzone"
  }, "x0.5")), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      ChartOption.playSpeed = 1;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_checkzone"
  }, ChartOption.playSpeed === 1 ? /*#__PURE__*/_react.default.createElement(_svg.CheckSVG, null) : ""), /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_labelzone"
  }, "x1")), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      ChartOption.playSpeed = 2;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_checkzone"
  }, ChartOption.playSpeed === 2 ? /*#__PURE__*/_react.default.createElement(_svg.CheckSVG, null) : ""), /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_labelzone"
  }, "x2")), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      ChartOption.playSpeed = 3;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_checkzone"
  }, ChartOption.playSpeed === 3 ? /*#__PURE__*/_react.default.createElement(_svg.CheckSVG, null) : ""), /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_labelzone"
  }, "x3")), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      ChartOption.playSpeed = 5;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_checkzone"
  }, ChartOption.playSpeed === 5 ? /*#__PURE__*/_react.default.createElement(_svg.CheckSVG, null) : ""), /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_labelzone"
  }, "x5"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "subConfig4",
    style: {
      width: subConfig4Width,
      height: subConfig4Hegiht
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    style: {
      borderBottom: "1px solid #fff"
    },
    onClick: function onClick() {
      //다시 mainConfig으로
      set_mainConfigWidth("250px");
      set_mainConfigHeight("950px");
      set_subConfig4Width("0");
      set_subConfig4Height("0");
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, /*#__PURE__*/_react.default.createElement(_svg.ChevronLeftSVG, null), "\xA0 \uC7AC\uC0DD \uBAA9\uD45C FPS"), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      ChartOption.drawFPS = 10;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_checkzone"
  }, ChartOption.drawFPS === 10 ? /*#__PURE__*/_react.default.createElement(_svg.CheckSVG, null) : ""), /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_labelzone"
  }, "10FPS")), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      ChartOption.drawFPS = 20;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_checkzone"
  }, ChartOption.drawFPS === 20 ? /*#__PURE__*/_react.default.createElement(_svg.CheckSVG, null) : ""), /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_labelzone"
  }, "20FPS")), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      ChartOption.drawFPS = 30;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_checkzone"
  }, ChartOption.drawFPS === 30 ? /*#__PURE__*/_react.default.createElement(_svg.CheckSVG, null) : ""), /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_labelzone"
  }, "30FPS")), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      ChartOption.drawFPS = 60;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_checkzone"
  }, ChartOption.drawFPS === 60 ? /*#__PURE__*/_react.default.createElement(_svg.CheckSVG, null) : ""), /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_labelzone"
  }, "60FPS"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "subConfig6",
    style: {
      width: subConfig6Width,
      height: subConfig6Hegiht
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    style: {
      borderBottom: "1px solid #fff"
    },
    onClick: function onClick() {
      //다시 mainConfig으로
      set_mainConfigWidth("250px");
      set_mainConfigHeight("950px");
      set_subConfig6Width("0");
      set_subConfig6Height("0");
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_svg.ChevronLeftSVG, null), "\xA0 \uD788\uD2B8\uB9F5 \uC138\uBD80\uC124\uC815"), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data",
    style: {
      width: 0
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, "HM_max", ChartOption.heatMapMax), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "range",
    style: {
      width: "70%"
    },
    value: ChartOption.heatMapMax,
    min: 1,
    step: 1,
    max: 420,
    onChange: function onChange(e) {
      ChartOption.heatMapMax = e.target.value * 1;
      resaveConfig();
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, "HM_radius", ChartOption.heatMapRadius), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "range",
    style: {
      width: "70%"
    },
    value: ChartOption.heatMapRadius,
    min: 1,
    step: 1,
    max: 180,
    onChange: function onChange(e) {
      ChartOption.heatMapRadius = e.target.value * 1;
      resaveConfig();
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, "HM_MaxOpacity", ChartOption.heatMapMaxOpacity), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "range",
    style: {
      width: "70%"
    },
    value: ChartOption.heatMapMaxOpacity,
    min: 0,
    step: 0.01,
    max: 1,
    onChange: function onChange(e) {
      ChartOption.heatMapMaxOpacity = e.target.value * 1;
      resaveConfig();
    }
  })))));
};
var _default = ConfigController;
exports.default = _default;
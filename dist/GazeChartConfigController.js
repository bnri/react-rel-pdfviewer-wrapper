"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var GazeChartConfigController = function GazeChartConfigController(_ref) {
  var props = _extends({}, _ref);

  var resaveGazeChartOption = props.resaveGazeChartOption,
      showConfig = props.showConfig,
      GazeChartOption = props.GazeChartOption,
      AutoReplay = props.AutoReplay,
      set_AutoReplay = props.set_AutoReplay;

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      forceUpdate = _useState2[1];

  (0, _react.useEffect)(function () {
    forceUpdate({});
  }, [GazeChartOption]);

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
      subConfig2Width = _useState12[0],
      set_subConfig2Width = _useState12[1];

  var _useState13 = (0, _react.useState)("0"),
      _useState14 = _slicedToArray(_useState13, 2),
      subConfig2Hegiht = _useState14[0],
      set_subConfig2Height = _useState14[1];

  var _useState15 = (0, _react.useState)("0"),
      _useState16 = _slicedToArray(_useState15, 2),
      subConfig3Width = _useState16[0],
      set_subConfig3Width = _useState16[1];

  var _useState17 = (0, _react.useState)("0"),
      _useState18 = _slicedToArray(_useState17, 2),
      subConfig3Hegiht = _useState18[0],
      set_subConfig3Height = _useState18[1];

  var _useState19 = (0, _react.useState)("0"),
      _useState20 = _slicedToArray(_useState19, 2),
      subConfig4Width = _useState20[0],
      set_subConfig4Width = _useState20[1];

  var _useState21 = (0, _react.useState)("0"),
      _useState22 = _slicedToArray(_useState21, 2),
      subConfig4Hegiht = _useState22[0],
      set_subConfig4Height = _useState22[1];

  var _useState23 = (0, _react.useState)("0"),
      _useState24 = _slicedToArray(_useState23, 2),
      subConfig5Width = _useState24[0],
      set_subConfig5Width = _useState24[1];

  var _useState25 = (0, _react.useState)("0"),
      _useState26 = _slicedToArray(_useState25, 2),
      subConfig5Hegiht = _useState26[0],
      set_subConfig5Height = _useState26[1];

  var _useState27 = (0, _react.useState)("0"),
      _useState28 = _slicedToArray(_useState27, 2),
      subConfig6Width = _useState28[0],
      set_subConfig6Width = _useState28[1];

  var _useState29 = (0, _react.useState)("0"),
      _useState30 = _slicedToArray(_useState29, 2),
      subConfig6Hegiht = _useState30[0],
      set_subConfig6Height = _useState30[1];

  (0, _react.useEffect)(function () {
    var a;

    if (!showConfig) {
      a = setTimeout(function () {
        set_mainConfigWidth('250px');
        set_mainConfigHeight('800px');
        set_subConfig1Width("0");
        set_subConfig1Height("0");
        set_subConfig2Width("0");
        set_subConfig2Height("0");
        set_subConfig3Width("0");
        set_subConfig3Height("0");
        set_subConfig4Width("0");
        set_subConfig4Height("0");
        set_subConfig5Width("0");
        set_subConfig5Height("0");
        set_subConfig6Width("0");
        set_subConfig6Height("0");
      }, 300);
    }

    return function () {
      clearTimeout(a);
    };
  }, [showConfig]);
  return /*#__PURE__*/React.createElement("div", {
    className: "ConfigWrapper configArea",
    style: {
      opacity: showConfig ? "1" : "0",
      visibility: showConfig ? "visible" : "hidden"
    },
    onClick: function onClick(e) {
      e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mainConfig",
    style: {
      width: mainConfigWidth,
      height: mainConfigHegiht
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      GazeChartOption.heatMap = !GazeChartOption.heatMap;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "c_label"
  }, "\uD788\uD2B8\uB9F5 \uBCF4\uAE30(H)"), /*#__PURE__*/React.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ckbx-style-8"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    name: "ckbx-style-8",
    checked: GazeChartOption.heatMap,
    onChange: function onChange() {}
  }), /*#__PURE__*/React.createElement("label", null)))), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig borderBottom",
    onClick: function onClick() {
      //여기 팝
      set_mainConfigWidth(0);
      set_mainConfigHeight(0);
      set_subConfig6Width("250px");
      set_subConfig6Height("200px");
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "c_label"
  }, "\uD788\uD2B8\uB9F5 \uC138\uBD80\uC124\uC815"), /*#__PURE__*/React.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "75%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      paddingRight: "15px"
    }
  }, "\uAE30\uBCF8"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "25%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingRight: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-chevron-right",
    "aria-hidden": "true",
    style: {
      marginTop: "3px"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig"
  }, /*#__PURE__*/React.createElement("div", {
    className: "c_label"
  }, "\uC2DC\uC120 \uD06C\uAE30"), /*#__PURE__*/React.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    style: {
      width: "70%"
    },
    value: GazeChartOption.RPOG_size,
    min: 0,
    step: 0.1,
    max: 20,
    onChange: function onChange(e) {
      GazeChartOption.RPOG_size = e.target.value * 1;
      resaveGazeChartOption();
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      GazeChartOption.RPOG = !GazeChartOption.RPOG;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "c_label"
  }, "\uC2DC\uC120 \uBCF4\uAE30(G)"), /*#__PURE__*/React.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ckbx-style-8"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    name: "ckbx-style-8",
    checked: GazeChartOption.RPOG,
    onChange: function onChange() {}
  }), /*#__PURE__*/React.createElement("label", null)))), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig borderBottom",
    onClick: function onClick() {
      GazeChartOption.RPOG_line = !GazeChartOption.RPOG_line;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "c_label"
  }, "\uC2DC\uC120 \uC774\uB3D9 \uBCF4\uAE30(K)"), /*#__PURE__*/React.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ckbx-style-8"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    name: "ckbx-style-8",
    checked: GazeChartOption.RPOG_line,
    onChange: function onChange() {}
  }), /*#__PURE__*/React.createElement("label", null)))), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig"
  }, /*#__PURE__*/React.createElement("div", {
    className: "c_label"
  }, "\uC751\uC2DC \uD06C\uAE30"), /*#__PURE__*/React.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    style: {
      width: "70%"
    },
    value: GazeChartOption.FPOG_size,
    min: 0,
    step: 0.1,
    max: 100,
    onChange: function onChange(e) {
      GazeChartOption.FPOG_size = e.target.value * 1;
      resaveGazeChartOption();
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      if (GazeChartOption.FPOG && GazeChartOption.FPOG_number) {
        GazeChartOption.FPOG_number = !GazeChartOption.FPOG_number;
      }

      GazeChartOption.FPOG = !GazeChartOption.FPOG;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "c_label"
  }, "\uC751\uC2DC \uBCF4\uAE30(F)"), /*#__PURE__*/React.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ckbx-style-8"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    name: "ckbx-style-8",
    checked: GazeChartOption.FPOG,
    onChange: function onChange() {}
  }), /*#__PURE__*/React.createElement("label", null)))), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      GazeChartOption.FPOG_line = !GazeChartOption.FPOG_line;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "c_label"
  }, "\uC751\uC2DC \uC774\uB3D9 \uBCF4\uAE30(L)"), /*#__PURE__*/React.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ckbx-style-8"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    name: "ckbx-style-8",
    checked: GazeChartOption.FPOG_line,
    onChange: function onChange() {}
  }), /*#__PURE__*/React.createElement("label", null)))), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      GazeChartOption.ShowSaccade = !GazeChartOption.ShowSaccade;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "c_label"
  }, "\uC751\uC2DC \uC774\uB3D9 \uAD6C\uBD84(S)"), /*#__PURE__*/React.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ckbx-style-8"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    name: "ckbx-style-8",
    checked: GazeChartOption.ShowSaccade,
    onChange: function onChange() {}
  }), /*#__PURE__*/React.createElement("label", null)))), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      if (!GazeChartOption.FPOG_number && !GazeChartOption.FPOG) {
        GazeChartOption.FPOG = !GazeChartOption.FPOG;
      }

      GazeChartOption.FPOG_number = !GazeChartOption.FPOG_number;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "c_label"
  }, "\uC751\uC2DC \uC21C\uBC88 \uBCF4\uAE30(N)"), /*#__PURE__*/React.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ckbx-style-8"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    name: "ckbx-style-8",
    checked: GazeChartOption.FPOG_number,
    onChange: function onChange() {}
  }), /*#__PURE__*/React.createElement("label", null)))), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig borderBottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "c_label"
  }, "\uC751\uC2DC \uC21C\uC11C \uD06C\uAE30"), /*#__PURE__*/React.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    style: {
      width: "70%"
    },
    value: GazeChartOption.FPOG_number_size,
    min: 0,
    step: 0.1,
    max: 5,
    onChange: function onChange(e) {
      GazeChartOption.FPOG_number_size = e.target.value * 1;
      resaveGazeChartOption();
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      GazeChartOption.AOI = !GazeChartOption.AOI;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "c_label"
  }, "\uD575\uC2EC \uC601\uC5ED \uBCF4\uAE30(A)"), /*#__PURE__*/React.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ckbx-style-8"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    name: "ckbx-style-8",
    checked: GazeChartOption.AOI,
    onChange: function onChange() {}
  }), /*#__PURE__*/React.createElement("label", null)))), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      //subConfig1로
      set_mainConfigWidth(0);
      set_mainConfigHeight(0);
      set_subConfig1Width("250px");
      set_subConfig1Height("350px");
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "c_label"
  }, "\uC2DC\uC120\uCC3D \uACFC\uAC70\uBC94\uC704"), /*#__PURE__*/React.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "75%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      paddingRight: "15px"
    }
  }, GazeChartOption.GazePastRange !== null && GazeChartOption.GazePastRange === 0 ? "전체" : GazeChartOption.GazePastRange + "초"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "25%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingRight: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-chevron-right",
    "aria-hidden": "true",
    style: {
      marginTop: "3px"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      //subConfig1로
      set_mainConfigWidth(0);
      set_mainConfigHeight(0);
      set_subConfig2Width("250px");
      set_subConfig2Height("350px");
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "c_label"
  }, "\uCC28\uD2B8\uC758 \uACFC\uAC70\uBC94\uC704"), /*#__PURE__*/React.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "75%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      paddingRight: "15px"
    }
  }, GazeChartOption.ChartPastRange !== null && GazeChartOption.ChartPastRange === 0 ? "전체" : GazeChartOption.ChartPastRange + "초"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "25%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingRight: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-chevron-right",
    "aria-hidden": "true",
    style: {
      marginTop: "3px"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      //subConfig1로
      set_mainConfigWidth(0);
      set_mainConfigHeight(0);
      set_subConfig3Width("250px");
      set_subConfig3Height("350px");
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "c_label"
  }, "\uC7AC\uC0DD \uBC30\uC18D"), /*#__PURE__*/React.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "75%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      paddingRight: "15px"
    }
  }, GazeChartOption.playSpeed !== null && "x".concat(GazeChartOption.playSpeed)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "25%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingRight: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-chevron-right",
    "aria-hidden": "true",
    style: {
      marginTop: "3px"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      //subConfig1로
      set_mainConfigWidth(0);
      set_mainConfigHeight(0);
      set_subConfig4Width("250px");
      set_subConfig4Height("250px");
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "c_label"
  }, "\uC7AC\uC0DD \uBAA9\uD45C FPS"), /*#__PURE__*/React.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "75%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      paddingRight: "15px"
    }
  }, GazeChartOption.drawFPS !== null && "".concat(GazeChartOption.drawFPS, "FPS")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "25%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingRight: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-chevron-right",
    "aria-hidden": "true",
    style: {
      marginTop: "3px"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      //subConfig1로
      set_mainConfigWidth(0);
      set_mainConfigHeight(0);
      set_subConfig5Width("250px");
      set_subConfig5Height("300px");
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "c_label"
  }, "\uCD08\uB2F9 \uCC28\uD2B8 \uC0D8\uD50C\uC218"), /*#__PURE__*/React.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "75%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      paddingRight: "15px"
    }
  }, GazeChartOption.chartSampleNumber !== null && "".concat(GazeChartOption.chartSampleNumber, "\uAC1C")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "25%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingRight: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-chevron-right",
    "aria-hidden": "true",
    style: {
      marginTop: "3px"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      GazeChartOption.hideStats = !GazeChartOption.hideStats;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "c_label"
  }, "\uC7AC\uC0DD FPS \uBCF4\uAE30"), /*#__PURE__*/React.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ckbx-style-8"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    name: "ckbx-style-8",
    checked: !GazeChartOption.hideStats,
    onChange: function onChange() {}
  }), /*#__PURE__*/React.createElement("label", null)))), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      set_AutoReplay(!AutoReplay);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "c_label"
  }, "\uBC18\uBCF5 \uC7AC\uC0DD(R)"), /*#__PURE__*/React.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ckbx-style-8"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    name: "ckbx-style-8",
    checked: AutoReplay,
    onChange: function onChange() {}
  }), /*#__PURE__*/React.createElement("label", null))))), /*#__PURE__*/React.createElement("div", {
    className: "subConfig1",
    style: {
      width: subConfig1Width,
      height: subConfig1Hegiht
    }
  }, /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("div", {
    className: "c_label"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-chevron-left",
    "aria-hidden": "true",
    style: {
      marginTop: "3px"
    }
  }), "\xA0 \uC2DC\uC120\uCC3D \uACFC\uAC70\uBC94\uC704"), /*#__PURE__*/React.createElement("div", {
    className: "c_data"
  })), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      GazeChartOption.GazePastRange = 0;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sub_checkzone"
  }, GazeChartOption.GazePastRange === 0 ? /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check",
    "area-hidden": "true"
  }) : ""), /*#__PURE__*/React.createElement("div", {
    className: "sub_labelzone"
  }, "\uC804\uCCB4")), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      GazeChartOption.GazePastRange = 0.5;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sub_checkzone"
  }, GazeChartOption.GazePastRange === 0.5 ? /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check",
    "area-hidden": "true"
  }) : ""), /*#__PURE__*/React.createElement("div", {
    className: "sub_labelzone"
  }, "0.5\uCD08")), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      GazeChartOption.GazePastRange = 1;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sub_checkzone"
  }, GazeChartOption.GazePastRange === 1 ? /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check",
    "area-hidden": "true"
  }) : ""), /*#__PURE__*/React.createElement("div", {
    className: "sub_labelzone"
  }, "1\uCD08")), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      GazeChartOption.GazePastRange = 2;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sub_checkzone"
  }, GazeChartOption.GazePastRange === 2 ? /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check",
    "area-hidden": "true"
  }) : ""), /*#__PURE__*/React.createElement("div", {
    className: "sub_labelzone"
  }, "2\uCD08")), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      GazeChartOption.GazePastRange = 5;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sub_checkzone"
  }, GazeChartOption.GazePastRange === 5 ? /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check",
    "area-hidden": "true"
  }) : ""), /*#__PURE__*/React.createElement("div", {
    className: "sub_labelzone"
  }, "5\uCD08")), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      GazeChartOption.GazePastRange = 10;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sub_checkzone"
  }, GazeChartOption.GazePastRange === 10 ? /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check",
    "area-hidden": "true"
  }) : ""), /*#__PURE__*/React.createElement("div", {
    className: "sub_labelzone"
  }, "10\uCD08"))), /*#__PURE__*/React.createElement("div", {
    className: "subConfig2",
    style: {
      width: subConfig2Width,
      height: subConfig2Hegiht
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    style: {
      borderBottom: "1px solid #fff"
    },
    onClick: function onClick() {
      //다시 mainConfig으로
      set_mainConfigWidth("250px");
      set_mainConfigHeight("950px");
      set_subConfig2Width("0");
      set_subConfig2Height("0");
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "c_label"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-chevron-left",
    "aria-hidden": "true",
    style: {
      marginTop: "3px"
    }
  }), "\xA0 \uCC28\uD2B8\uC758 \uACFC\uAC70\uBC94\uC704"), /*#__PURE__*/React.createElement("div", {
    className: "c_data"
  })), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      GazeChartOption.ChartPastRange = 0;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sub_checkzone"
  }, GazeChartOption.ChartPastRange === 0 ? /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check",
    "area-hidden": "true"
  }) : ""), /*#__PURE__*/React.createElement("div", {
    className: "sub_labelzone"
  }, "\uC804\uCCB4")), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      GazeChartOption.ChartPastRange = 5;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sub_checkzone"
  }, GazeChartOption.ChartPastRange === 5 ? /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check",
    "area-hidden": "true"
  }) : ""), /*#__PURE__*/React.createElement("div", {
    className: "sub_labelzone"
  }, "5\uCD08")), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      GazeChartOption.ChartPastRange = 10;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sub_checkzone"
  }, GazeChartOption.ChartPastRange === 10 ? /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check",
    "area-hidden": "true"
  }) : ""), /*#__PURE__*/React.createElement("div", {
    className: "sub_labelzone"
  }, "10\uCD08")), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      GazeChartOption.ChartPastRange = 15;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sub_checkzone"
  }, GazeChartOption.ChartPastRange === 15 ? /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check",
    "area-hidden": "true"
  }) : ""), /*#__PURE__*/React.createElement("div", {
    className: "sub_labelzone"
  }, "15\uCD08")), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      GazeChartOption.ChartPastRange = 20;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sub_checkzone"
  }, GazeChartOption.ChartPastRange === 20 ? /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check",
    "area-hidden": "true"
  }) : ""), /*#__PURE__*/React.createElement("div", {
    className: "sub_labelzone"
  }, "20\uCD08")), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      GazeChartOption.ChartPastRange = 25;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sub_checkzone"
  }, GazeChartOption.ChartPastRange === 25 ? /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check",
    "area-hidden": "true"
  }) : ""), /*#__PURE__*/React.createElement("div", {
    className: "sub_labelzone"
  }, "25\uCD08"))), /*#__PURE__*/React.createElement("div", {
    className: "subConfig3",
    style: {
      width: subConfig3Width,
      height: subConfig3Hegiht
    }
  }, /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("div", {
    className: "c_label"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-chevron-left",
    "aria-hidden": "true",
    style: {
      marginTop: "3px"
    }
  }), "\xA0 \uC7AC\uC0DD\uBC30\uC18D"), /*#__PURE__*/React.createElement("div", {
    className: "c_data"
  })), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      GazeChartOption.playSpeed = 0.1;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sub_checkzone"
  }, GazeChartOption.playSpeed === 0.1 ? /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check",
    "area-hidden": "true"
  }) : ""), /*#__PURE__*/React.createElement("div", {
    className: "sub_labelzone"
  }, "x0.1")), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      GazeChartOption.playSpeed = 0.5;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sub_checkzone"
  }, GazeChartOption.playSpeed === 0.5 ? /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check",
    "area-hidden": "true"
  }) : ""), /*#__PURE__*/React.createElement("div", {
    className: "sub_labelzone"
  }, "x0.5")), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      GazeChartOption.playSpeed = 1;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sub_checkzone"
  }, GazeChartOption.playSpeed === 1 ? /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check",
    "area-hidden": "true"
  }) : ""), /*#__PURE__*/React.createElement("div", {
    className: "sub_labelzone"
  }, "x1")), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      GazeChartOption.playSpeed = 2;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sub_checkzone"
  }, GazeChartOption.playSpeed === 2 ? /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check",
    "area-hidden": "true"
  }) : ""), /*#__PURE__*/React.createElement("div", {
    className: "sub_labelzone"
  }, "x2")), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      GazeChartOption.playSpeed = 3;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sub_checkzone"
  }, GazeChartOption.playSpeed === 3 ? /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check",
    "area-hidden": "true"
  }) : ""), /*#__PURE__*/React.createElement("div", {
    className: "sub_labelzone"
  }, "x3")), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      GazeChartOption.playSpeed = 5;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sub_checkzone"
  }, GazeChartOption.playSpeed === 5 ? /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check",
    "area-hidden": "true"
  }) : ""), /*#__PURE__*/React.createElement("div", {
    className: "sub_labelzone"
  }, "x5"))), /*#__PURE__*/React.createElement("div", {
    className: "subConfig4",
    style: {
      width: subConfig4Width,
      height: subConfig4Hegiht
    }
  }, /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("div", {
    className: "c_label"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-chevron-left",
    "aria-hidden": "true",
    style: {
      marginTop: "3px"
    }
  }), "\xA0 \uC7AC\uC0DD \uBAA9\uD45C FPS"), /*#__PURE__*/React.createElement("div", {
    className: "c_data"
  })), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      GazeChartOption.drawFPS = 10;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sub_checkzone"
  }, GazeChartOption.drawFPS === 10 ? /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check",
    "area-hidden": "true"
  }) : ""), /*#__PURE__*/React.createElement("div", {
    className: "sub_labelzone"
  }, "10FPS")), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      GazeChartOption.drawFPS = 20;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sub_checkzone"
  }, GazeChartOption.drawFPS === 20 ? /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check",
    "area-hidden": "true"
  }) : ""), /*#__PURE__*/React.createElement("div", {
    className: "sub_labelzone"
  }, "20FPS")), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      GazeChartOption.drawFPS = 30;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sub_checkzone"
  }, GazeChartOption.drawFPS === 30 ? /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check",
    "area-hidden": "true"
  }) : ""), /*#__PURE__*/React.createElement("div", {
    className: "sub_labelzone"
  }, "30FPS")), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      GazeChartOption.drawFPS = 60;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sub_checkzone"
  }, GazeChartOption.drawFPS === 60 ? /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check",
    "area-hidden": "true"
  }) : ""), /*#__PURE__*/React.createElement("div", {
    className: "sub_labelzone"
  }, "60FPS"))), /*#__PURE__*/React.createElement("div", {
    className: "subConfig5",
    style: {
      width: subConfig5Width,
      height: subConfig5Hegiht
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    style: {
      borderBottom: "1px solid #fff"
    },
    onClick: function onClick() {
      //다시 mainConfig으로
      set_mainConfigWidth("250px");
      set_mainConfigHeight("950px");
      set_subConfig5Width("0");
      set_subConfig5Height("0");
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "c_label"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-chevron-left",
    "aria-hidden": "true",
    style: {
      marginTop: "3px"
    }
  }), "\xA0 Sample/s"), /*#__PURE__*/React.createElement("div", {
    className: "c_data"
  })), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      GazeChartOption.chartSampleNumber = 10;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sub_checkzone"
  }, GazeChartOption.chartSampleNumber === 10 ? /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check",
    "area-hidden": "true"
  }) : ""), /*#__PURE__*/React.createElement("div", {
    className: "sub_labelzone"
  }, "10\uAC1C")), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      GazeChartOption.chartSampleNumber = 20;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sub_checkzone"
  }, GazeChartOption.chartSampleNumber === 20 ? /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check",
    "area-hidden": "true"
  }) : ""), /*#__PURE__*/React.createElement("div", {
    className: "sub_labelzone"
  }, "20\uAC1C")), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      GazeChartOption.chartSampleNumber = 30;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sub_checkzone"
  }, GazeChartOption.chartSampleNumber === 30 ? /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check",
    "area-hidden": "true"
  }) : ""), /*#__PURE__*/React.createElement("div", {
    className: "sub_labelzone"
  }, "30\uAC1C")), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      GazeChartOption.chartSampleNumber = 60;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sub_checkzone"
  }, GazeChartOption.chartSampleNumber === 60 ? /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check",
    "area-hidden": "true"
  }) : ""), /*#__PURE__*/React.createElement("div", {
    className: "sub_labelzone"
  }, "60\uAC1C")), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig",
    onClick: function onClick() {
      GazeChartOption.chartSampleNumber = 120;
      resaveGazeChartOption();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sub_checkzone"
  }, GazeChartOption.chartSampleNumber === 120 ? /*#__PURE__*/React.createElement("i", {
    className: "fa fa-check",
    "area-hidden": "true"
  }) : ""), /*#__PURE__*/React.createElement("div", {
    className: "sub_labelzone"
  }, "120\uAC1C"))), /*#__PURE__*/React.createElement("div", {
    className: "subConfig6",
    style: {
      width: subConfig6Width,
      height: subConfig6Hegiht
    }
  }, /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("div", {
    className: "c_label"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-chevron-left",
    "aria-hidden": "true",
    style: {
      marginTop: "3px"
    }
  }), "\xA0 \uD788\uD2B8\uB9F5 \uC138\uBD80\uC124\uC815"), /*#__PURE__*/React.createElement("div", {
    className: "c_data"
  })), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig"
  }, /*#__PURE__*/React.createElement("div", {
    className: "c_label"
  }, "HM_max", GazeChartOption.heatMapMax), /*#__PURE__*/React.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    style: {
      width: "70%"
    },
    value: GazeChartOption.heatMapMax,
    min: 1,
    step: 1,
    max: 420,
    onChange: function onChange(e) {
      GazeChartOption.heatMapMax = e.target.value * 1;
      resaveGazeChartOption();
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig"
  }, /*#__PURE__*/React.createElement("div", {
    className: "c_label"
  }, "HM_radius", GazeChartOption.heatMapRadius), /*#__PURE__*/React.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    style: {
      width: "70%"
    },
    value: GazeChartOption.heatMapRadius,
    min: 1,
    step: 1,
    max: 180,
    onChange: function onChange(e) {
      GazeChartOption.heatMapRadius = e.target.value * 1;
      resaveGazeChartOption();
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "oneConfig"
  }, /*#__PURE__*/React.createElement("div", {
    className: "c_label"
  }, "HM_MaxOpacity", GazeChartOption.heatMapMaxOpacity), /*#__PURE__*/React.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    style: {
      width: "70%"
    },
    value: GazeChartOption.heatMapMaxOpacity,
    min: 0,
    step: 0.01,
    max: 1,
    onChange: function onChange(e) {
      GazeChartOption.heatMapMaxOpacity = e.target.value * 1;
      resaveGazeChartOption();
    }
  })))));
};

var _default = GazeChartConfigController;
exports.default = _default;
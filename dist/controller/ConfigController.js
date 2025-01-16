"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _svg = require("../svg");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ConfigController = _ref => {
  let props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  const {
    resaveConfig,
    showConfig,
    ChartOption,
    followEvent,
    set_followEvent,
    autoReplay,
    set_autoReplay
  } = props;
  const [, forceUpdate] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    forceUpdate({});
  }, [ChartOption]);
  const [mainConfigWidth, set_mainConfigWidth] = (0, _react.useState)("250px");
  const [mainConfigHegiht, set_mainConfigHeight] = (0, _react.useState)("950px");
  const [subConfig1Width, set_subConfig1Width] = (0, _react.useState)("0");
  const [subConfig1Hegiht, set_subConfig1Height] = (0, _react.useState)("0");
  const [subConfig3Width, set_subConfig3Width] = (0, _react.useState)("0");
  const [subConfig3Hegiht, set_subConfig3Height] = (0, _react.useState)("0");
  const [subConfig4Width, set_subConfig4Width] = (0, _react.useState)("0");
  const [subConfig4Hegiht, set_subConfig4Height] = (0, _react.useState)("0");
  const [subConfig6Width, set_subConfig6Width] = (0, _react.useState)("0");
  const [subConfig6Hegiht, set_subConfig6Height] = (0, _react.useState)("0");
  (0, _react.useEffect)(() => {
    let a;
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
    return () => {
      clearTimeout(a);
    };
  }, [showConfig]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "ConfigWrapper configArea",
    style: {
      opacity: showConfig ? "1" : "0",
      visibility: showConfig ? "visible" : "hidden"
    },
    onClick: e => {
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
    onClick: () => {
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
    onChange: () => {}
  }), /*#__PURE__*/_react.default.createElement("label", null)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig borderBottom",
    onClick: () => {
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
    onClick: () => {
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
    onChange: () => {}
  }), /*#__PURE__*/_react.default.createElement("label", null)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, "\uC2DC\uC120 \uD06C\uAE30\xA0", /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontSize: '7px'
    }
  }, ChartOption.RPOG_size)), /*#__PURE__*/_react.default.createElement("div", {
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
    onChange: e => {
      ChartOption.RPOG_size = e.target.value * 1;
      resaveConfig();
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: () => {
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
    onChange: () => {}
  }), /*#__PURE__*/_react.default.createElement("label", null)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig borderBottom",
    onClick: () => {
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
    onChange: () => {}
  }), /*#__PURE__*/_react.default.createElement("label", null)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, "\uC751\uC2DC \uD06C\uAE30\xA0", /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontSize: '7px'
    }
  }, ChartOption.FPOG_size)), /*#__PURE__*/_react.default.createElement("div", {
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
    onChange: e => {
      ChartOption.FPOG_size = e.target.value * 1;
      resaveConfig();
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: () => {
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
    onChange: () => {}
  }), /*#__PURE__*/_react.default.createElement("label", null)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: () => {
      ChartOption.rainBow = !ChartOption.rainBow;
      resaveConfig();
    },
    "data-tip": "\uD398\uC774\uC9C0\uBCC4 \uC751\uC2DC\uC758 \uC21C\uC11C\uC5D0 \uB530\uB77C \uC751\uC2DC\uC758 \uC0C9\uC744 \uBB34\uC9C0\uAC1C\uC21C\uC11C\uB85C \uD45C\uD604"
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
    onChange: () => {}
  }), /*#__PURE__*/_react.default.createElement("label", null)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, "\uC751\uC2DC \uD22C\uBA85\uB3C4\xA0", /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontSize: '7px'
    }
  }, ChartOption.FPOG_opacity)), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "range",
    style: {
      width: "70%"
    },
    value: ChartOption.FPOG_opacity,
    min: 0.01,
    step: 0.01,
    max: 1,
    onChange: e => {
      ChartOption.FPOG_opacity = e.target.value * 1;
      resaveConfig();
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: () => {
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
    onChange: () => {}
  }), /*#__PURE__*/_react.default.createElement("label", null)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: () => {
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
    onChange: () => {}
  }), /*#__PURE__*/_react.default.createElement("label", null)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig borderBottom"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, "\uC751\uC2DC \uC21C\uC11C \uD06C\uAE30\xA0", /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontSize: '7px'
    }
  }, ChartOption.FPOG_number_size)), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "range",
    style: {
      width: "70%"
    },
    value: ChartOption.FPOG_number_size,
    min: 1,
    step: 0.1,
    max: 5,
    onChange: e => {
      ChartOption.FPOG_number_size = e.target.value * 1;
      resaveConfig();
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: () => {
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
    onClick: () => {
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
    onClick: () => {
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
    onClick: () => {
      set_followEvent(f => !f);
    },
    "data-tip": "\uC7AC\uC0DD \uC2DC, \uCE21\uC815\uB2F9\uC2DC\uC758 [PDF view Page , \uBB38\uC11C\uBC30\uC728 , \uC2A4\uD06C\uB864 \uC704\uCE58]\uB97C \uCE21\uC815\uC2DC \uD658\uACBD\uACFC \uB3D9\uC77C\uD558\uAC8C \uC7AC\uC0DD"
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
    onChange: () => {}
  }), /*#__PURE__*/_react.default.createElement("label", null)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: () => {
      set_autoReplay(f => !f);
    },
    "data-tip": "\uBC18\uBCF5\uC7AC\uC0DD"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, "\uBC18\uBCF5\uC7AC\uC0DD"), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ckbx-style-8"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: "ckbx-style-8",
    checked: autoReplay,
    onChange: () => {}
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
    onClick: () => {
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
    onClick: () => {
      ChartOption.GazePastRange = 0;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_checkzone"
  }, ChartOption.GazePastRange === 0 ? /*#__PURE__*/_react.default.createElement(_svg.CheckSVG, null) : ""), /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_labelzone"
  }, "\uC804\uCCB4")), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: () => {
      ChartOption.GazePastRange = 0.5;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_checkzone"
  }, ChartOption.GazePastRange === 0.5 ? /*#__PURE__*/_react.default.createElement(_svg.CheckSVG, null) : ""), /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_labelzone"
  }, "0.5\uCD08")), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: () => {
      ChartOption.GazePastRange = 1;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_checkzone"
  }, ChartOption.GazePastRange === 1 ? /*#__PURE__*/_react.default.createElement(_svg.CheckSVG, null) : ""), /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_labelzone"
  }, "1\uCD08")), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: () => {
      ChartOption.GazePastRange = 2;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_checkzone"
  }, ChartOption.GazePastRange === 2 ? /*#__PURE__*/_react.default.createElement(_svg.CheckSVG, null) : ""), /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_labelzone"
  }, "2\uCD08")), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: () => {
      ChartOption.GazePastRange = 5;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_checkzone"
  }, ChartOption.GazePastRange === 5 ? /*#__PURE__*/_react.default.createElement(_svg.CheckSVG, null) : ""), /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_labelzone"
  }, "5\uCD08")), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: () => {
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
    onClick: () => {
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
    onClick: () => {
      ChartOption.playSpeed = 0.1;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_checkzone"
  }, ChartOption.playSpeed === 0.1 ? /*#__PURE__*/_react.default.createElement(_svg.CheckSVG, null) : ""), /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_labelzone"
  }, "x0.1")), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: () => {
      ChartOption.playSpeed = 0.5;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_checkzone"
  }, ChartOption.playSpeed === 0.5 ? /*#__PURE__*/_react.default.createElement(_svg.CheckSVG, null) : ""), /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_labelzone"
  }, "x0.5")), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: () => {
      ChartOption.playSpeed = 1;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_checkzone"
  }, ChartOption.playSpeed === 1 ? /*#__PURE__*/_react.default.createElement(_svg.CheckSVG, null) : ""), /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_labelzone"
  }, "x1")), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: () => {
      ChartOption.playSpeed = 2;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_checkzone"
  }, ChartOption.playSpeed === 2 ? /*#__PURE__*/_react.default.createElement(_svg.CheckSVG, null) : ""), /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_labelzone"
  }, "x2")), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: () => {
      ChartOption.playSpeed = 3;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_checkzone"
  }, ChartOption.playSpeed === 3 ? /*#__PURE__*/_react.default.createElement(_svg.CheckSVG, null) : ""), /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_labelzone"
  }, "x3")), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: () => {
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
    onClick: () => {
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
    onClick: () => {
      ChartOption.drawFPS = 10;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_checkzone"
  }, ChartOption.drawFPS === 10 ? /*#__PURE__*/_react.default.createElement(_svg.CheckSVG, null) : ""), /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_labelzone"
  }, "10FPS")), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: () => {
      ChartOption.drawFPS = 20;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_checkzone"
  }, ChartOption.drawFPS === 20 ? /*#__PURE__*/_react.default.createElement(_svg.CheckSVG, null) : ""), /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_labelzone"
  }, "20FPS")), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: () => {
      ChartOption.drawFPS = 30;
      resaveConfig();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_checkzone"
  }, ChartOption.drawFPS === 30 ? /*#__PURE__*/_react.default.createElement(_svg.CheckSVG, null) : ""), /*#__PURE__*/_react.default.createElement("div", {
    className: "sub_labelzone"
  }, "30FPS")), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: () => {
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
    onClick: () => {
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
    onChange: e => {
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
    onChange: e => {
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
    onChange: e => {
      ChartOption.heatMapMaxOpacity = e.target.value * 1;
      resaveConfig();
    }
  })))));
};
var _default = exports.default = ConfigController;
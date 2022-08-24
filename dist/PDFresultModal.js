"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./PDFresultModal.scss");

var _reactRelPdfviewer = _interopRequireDefault(require("react-rel-pdfviewer"));

var _reactDraggable = _interopRequireDefault(require("react-draggable"));

var _excluded = ["onClose"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var PDFresultModal = function PDFresultModal(_ref) {
  var onClose = _ref.onClose,
      props = _objectWithoutProperties(_ref, _excluded);

  var path = props.path,
      viewpercent = props.viewpercent,
      data = props.data,
      specialWidth = props.specialWidth,
      specialHeight = props.specialHeight;

  var pdfviewref = _react.default.useRef();

  var _React$useState = _react.default.useState(1),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      nowPage = _React$useState2[0],
      set_nowPage = _React$useState2[1];

  var _React$useState3 = _react.default.useState(0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      nowTime = _React$useState4[0],
      set_nowTime = _React$useState4[1];

  var endTime = _react.default.useMemo(function () {
    // console.log(data.gazeInform.maxTime);
    var lastTime = data.gazeData[data.gazeData.length - 1].relTime; // console.log("et",et);

    set_nowTime(lastTime);
    return lastTime;
  }, [data]);

  var _React$useState5 = _react.default.useState(1),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      fminx = _React$useState6[0],
      set_fminx = _React$useState6[1];

  var _React$useState7 = _react.default.useState(1),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      fminy = _React$useState8[0],
      set_fminy = _React$useState8[1];

  var topRef = _react.default.useRef();

  var _React$useState9 = _react.default.useState(0.5),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      innerFrameScale = _React$useState10[0],
      set_innerFrameScale = _React$useState10[1];

  var _React$useState11 = _react.default.useState(0),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      innerFrameTop = _React$useState12[0],
      set_innerFrameTop = _React$useState12[1];

  var _React$useState13 = _react.default.useState(0),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      innerFrameLeft = _React$useState14[0],
      set_innerFrameLeft = _React$useState14[1];

  var _React$useState15 = _react.default.useState(false),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      isPlaying = _React$useState16[0],
      set_isPlaying = _React$useState16[1];

  var _React$useState17 = _react.default.useState(1),
      _React$useState18 = _slicedToArray(_React$useState17, 2),
      playSpeed = _React$useState18[0],
      set_playSpeed = _React$useState18[1];

  var _React$useState19 = _react.default.useState(true),
      _React$useState20 = _slicedToArray(_React$useState19, 1),
      followEvent = _React$useState20[0];

  var _React$useState21 = _react.default.useState(50),
      _React$useState22 = _slicedToArray(_React$useState21, 2),
      rawSize = _React$useState22[0],
      set_rawSize = _React$useState22[1];

  var _React$useState23 = _react.default.useState(50),
      _React$useState24 = _slicedToArray(_React$useState23, 2),
      fixationSize = _React$useState24[0],
      set_fixationSize = _React$useState24[1];

  var _React$useState25 = _react.default.useState(0),
      _React$useState26 = _slicedToArray(_React$useState25, 2),
      pastTimeRange = _React$useState26[0],
      set_pastTimeRange = _React$useState26[1];

  var _React$useState27 = _react.default.useState(null),
      _React$useState28 = _slicedToArray(_React$useState27, 2),
      nowPDFviewInform = _React$useState28[0],
      set_nowPDFviewInform = _React$useState28[1];

  var _React$useState29 = _react.default.useState(3),
      _React$useState30 = _slicedToArray(_React$useState29, 2),
      minFixationCount = _React$useState30[0],
      set_minFixationCount = _React$useState30[1];

  var fixationData = _react.default.useMemo(function () {
    var fa = [];
    var sumPDF_x = 0;
    var sumPDF_y = 0; // console.log("data", data);

    var rawGaze = data.gazeData;
    var heightmul = data.pdfSize.height / data.screenSize.height;
    if (heightmul <= 1) heightmul = 1;
    var fixationNumber = 0;
    var fixationStart = false;
    var fixationObj = {};
    var prevx = null;
    var prevy = null;
    var xdiff_f = fminx / 100;
    var ydiff_f = fminy / 100 * heightmul; //거리기준 

    for (var i = 0; i < rawGaze.length; i++) {
      //거리가 가까운 PDF 를 찾아야하는데..
      var d = rawGaze[i];

      if (fixationStart === false) {
        if (!d.pdfx || !d.pdfy) {
          continue;
        } // console.log("맨처음만!");


        fixationNumber++;
        fixationStart = true;
        sumPDF_x = d.pdfx;
        sumPDF_y = d.pdfy;
        prevx = d.pdfx;
        prevy = d.pdfy;
        fixationObj = {
          count: 1,
          fixationNumber: fixationNumber,
          f_startIndex: 0,
          f_startData: d,
          relTime_s: d.relTime,
          pageNum_s: d.pageNum
        };
      } else {
        var xdiff = Math.abs(d.pdfx - prevx);
        var ydiff = Math.abs(d.pdfy - prevy);

        if (!d.pdfx || !d.pdfy) {
          //예외처리 없는
          continue;
        } else if (xdiff * 1 <= xdiff_f * 1 && ydiff * 1 <= ydiff_f * 1) {
          // console.log("ydiff_f",ydiff_f,ydiff);
          // console.log("xdiff_f",xdiff_f,xdiff);
          //만약 거리가 가까우면  //기존fixation 유지
          fixationObj.count++;
          sumPDF_x += d.pdfx;
          sumPDF_y += d.pdfy;
        } else {
          //기존의 친구를 계산해서 넣어주자 좌표를..
          fixationObj.f_endData = rawGaze[i - 1];
          fixationObj.relTime_e = rawGaze[i - 1].relTime;
          fixationObj.f_endIndex = i - 1;
          fixationObj.x = sumPDF_x / fixationObj.count;
          fixationObj.y = sumPDF_y / fixationObj.count;
          fixationObj.fd = fixationObj.count / 120;
          fa.push(JSON.parse(JSON.stringify(fixationObj))); //새로운 fixation;

          fixationNumber++;
          sumPDF_x = d.pdfx;
          sumPDF_y = d.pdfy;
          fixationObj = {
            count: 1,
            fixationNumber: fixationNumber,
            f_startIndex: i,
            f_startData: d,
            relTime_s: d.relTime,
            pageNum_s: d.pageNum
          }; // console.log("새로운fixation생성?",rawGaze.length,i);
        }

        if (i + 1 === rawGaze.length) {
          //맨마지막이라면 또 넣어주자
          // console.log("맨마지막???????")
          fixationObj.f_endData = rawGaze[i - 1];
          fixationObj.relTime_e = rawGaze[i - 1].relTime;
          fixationObj.f_endIndex = i - 1;
          fixationObj.x = sumPDF_x / fixationObj.count;
          fixationObj.y = sumPDF_y / fixationObj.count;
          fixationObj.fd = fixationObj.count / 120;
          fa.push(JSON.parse(JSON.stringify(fixationObj)));
        }

        prevx = d.pdfx;
        prevy = d.pdfy;
      }
    } //마지막 fixation 찾아볼까?


    console.log("fa", fa);
    return fa;
  }, [data, fminx, fminy]);

  var fd_inform = _react.default.useMemo(function () {
    if (!fixationData) return;
    var sumfd = 0;
    var fc = 0;

    for (var i = 0; i < fixationData.length; i++) {
      if (minFixationCount <= fixationData[i].count) {
        fc++;
        sumfd += fixationData[i].fd;
      }
    }

    var ad = fc ? sumfd / fc * 1000 : 0; // console.log("ad",ad);

    var obj = {
      avgDuration: ad,
      fixationRatio: sumfd / endTime * 100
    };
    return obj;
  }, [fixationData, minFixationCount, endTime]); //viewWrap ratio를 어떻게 구할까    


  var resizeInnerFrame = _react.default.useCallback(function () {
    var pastScreenW = data.screenSize.width;
    var pastScreenH = data.screenSize.height;
    var pastRatio = pastScreenH / pastScreenW;
    var width = topRef.current.clientWidth;
    var height = topRef.current.clientHeight;
    var nowRatio = height / width;

    if (nowRatio >= pastRatio) {
      // console.log("지금세로가 더크다 - 가로기준 셋팅");
      set_innerFrameScale(width / pastScreenW);
      var newheight = pastScreenH * (width / pastScreenW);
      set_innerFrameTop((height - newheight) / 2);
      set_innerFrameLeft(0);
    } else {
      // console.log("지금 가로가 더 크다 (지금비율이 더 작다)-높이기준셋팅");
      set_innerFrameScale(height / pastScreenH);
      var newwidth = pastScreenW * (height / pastScreenH);
      set_innerFrameTop(0);
      set_innerFrameLeft((width - newwidth) / 2);
    }
  }, [data]);

  _react.default.useEffect(function () {
    resizeInnerFrame();
    window.addEventListener('resize', resizeInnerFrame);
    return function () {
      //console.log("소멸자");
      window.removeEventListener('resize', resizeInnerFrame);
    };
  }, [resizeInnerFrame]);

  var handleTogglePlay = function handleTogglePlay() {
    set_isPlaying(function (p) {
      return !p;
    });
  };

  _react.default.useEffect(function () {
    var myrequest;
    var startTime = Date.now();

    function timeUpdate() {
      myrequest = window.requestAnimationFrame(timeUpdate);
      var now = Date.now();
      var elapsed = now - startTime; // console.log("fps", 1000 / elapsed);

      startTime = now;
      set_nowTime(function (nt) {
        if (nt * 1 > endTime) {
          set_isPlaying(false);
          nt = endTime;
          return nt;
        } else if (nt * 1 === endTime) {
          return 0;
        } else {
          nt = nt * 1 + elapsed / 1000 * playSpeed;
          return nt;
        }
      });
    }

    if (isPlaying === true) {
      timeUpdate();
    } else {
      window.cancelAnimationFrame(myrequest);
    }

    return function () {
      window.cancelAnimationFrame(myrequest);
    };
  }, [isPlaying, endTime, playSpeed]);

  var handleDraw = _react.default.useCallback(function () {
    // console.log("handleDraw!! nowP",nowPage);
    var canvasref = pdfviewref.current.get_canvasRef();

    if (!canvasref || !canvasref.current) {
      // console.log("오잉?");
      // console.log("canvasref",canvasref);
      // handleDraw();
      return;
    }

    if (!nowPDFviewInform) {
      return;
    }

    var canvas = canvasref.current;
    var rctx = canvas.getContext('2d');
    var cw = nowPDFviewInform.width;
    var ch = nowPDFviewInform.height;
    var size = rawSize * 2 / 100;
    var r = cw * 0.01 * size; // console.log("지워");

    rctx.clearRect(0, 0, cw, ch);
    var gazeData = data.gazeData;
    var pT = pastTimeRange;
    var prevx = null;
    var prevy = null; // let prevp = null;

    for (var i = 0; i < gazeData.length; i++) {
      var d = gazeData[i];

      if (pT) {
        if (d.relTime < nowTime - pT) {
          continue;
        }
      } // console.log("t",t);


      if (d.relTime * 1 <= nowTime * 1) {
        if (d.pdfx && d.pdfy) {
          // console.log("그려")
          if (nowPage === d.pageNum && r) {
            if (prevx && prevy) {
              rctx.beginPath();
              rctx.lineWidth = 0.5;
              rctx.strokeStyle = 'red';
              rctx.fillStyle = 'red';
              rctx.moveTo(prevx * cw, prevy * ch);
              rctx.lineTo(d.pdfx * cw, d.pdfy * ch);
              rctx.stroke();
            } //선먼저 그린후 그리기


            rctx.beginPath();
            rctx.lineWidth = 0.5;
            rctx.strokeStyle = 'rgb(255,0,0,0.3)';
            rctx.fillStyle = 'rgb(255,0,0,0.3)';
            rctx.arc(d.pdfx * cw, d.pdfy * ch, r, 0, Math.PI * 2);
            rctx.fill();
          } // prevp = d.pageNum


          prevx = d.pdfx;
          prevy = d.pdfy;
        }
      }
    } //draw Fixation


    var fr = cw * 0.01 * fixationSize * 1.5 / 100;
    prevx = null;
    prevy = null;

    for (var _i2 = 0; _i2 < fixationData.length; _i2++) {
      var f = fixationData[_i2];

      if (pT) {
        if (f.relTime_e < nowTime - pT) {
          continue;
        }
      }

      if (f.relTime_s * 1 <= nowTime * 1) {
        if (nowPage === f.pageNum_s && fr) {
          if (f.count >= minFixationCount) {
            //선그리기...
            if (prevx && prevy) {
              rctx.beginPath();
              rctx.lineWidth = 0.5;
              rctx.strokeStyle = 'green';
              rctx.fillStyle = 'green';
              rctx.moveTo(prevx * cw, prevy * ch);
              rctx.lineTo(f.x * cw, f.y * ch);
              rctx.stroke();
            } //원그리기 fixation


            var fsize = fr * Math.sqrt(f.count);

            if (f.relTime_e <= nowTime) {
              //전체 다그려
              rctx.beginPath();
              rctx.lineWidth = 0.5;
              rctx.strokeStyle = 'rgb(0,255,0,0.3)';
              rctx.fillStyle = 'rgb(0,255,0,0.3)';
              rctx.arc(f.x * cw, f.y * ch, fsize, 0, Math.PI * 2);
              rctx.fill();
            } else {
              // 작게 그려
              var ratio = (nowTime - f.relTime_s) / (f.relTime_e - f.relTime_s);
              rctx.beginPath();
              rctx.lineWidth = 0.5;
              rctx.strokeStyle = 'rgb(0,0,255,0.3)';
              rctx.fillStyle = 'rgb(0,0,255,0.3)';
              rctx.arc(f.x * cw, f.y * ch, fsize * ratio, 0, Math.PI * 2);
              rctx.fill();
            }

            prevx = f.x;
            prevy = f.y;
          }
        }
      }
    } // console.log("fixationSize", fixationSize);

  }, [data, nowTime, nowPage, rawSize, nowPDFviewInform, fixationSize, fixationData, minFixationCount, pastTimeRange]);

  var handleEvent = _react.default.useCallback(function () {
    // console.log("handleDraw!!");
    var gazeData = data.gazeData; // let firstTime = gazeData[0].t;

    for (var i = 0; i < gazeData.length; i++) {
      // let d = gazeData[i];
      // let dt = d.t;
      // let t = (dt - firstTime) / 1000000;
      // console.log("t",t);
      if (gazeData[i].relTime * 1 <= nowTime * 1) {} else {
        if (i > 0) {
          var lastd = gazeData[i - 1]; // console.log("lastd",lastd);
          // if (nowPage !== lastd.pageNum) {

          pdfviewref.current.set_pageNumber(lastd.pageNum);
          pdfviewref.current.set_scrollTop(lastd.scrollTop); // }
        }

        break;
      }
    }
  }, [data, nowTime]);

  _react.default.useEffect(function () {
    if (followEvent) {
      handleEvent();
    }
  }, [handleEvent, followEvent]);

  _react.default.useEffect(function () {
    handleDraw();
  }, [handleDraw]);

  var _React$useState31 = _react.default.useState(false),
      _React$useState32 = _slicedToArray(_React$useState31, 2),
      isFocus = _React$useState32[0],
      set_isFocus = _React$useState32[1];

  var _React$useState33 = _react.default.useState(200),
      _React$useState34 = _slicedToArray(_React$useState33, 1),
      mw = _React$useState34[0];

  var _React$useState35 = _react.default.useState(503),
      _React$useState36 = _slicedToArray(_React$useState35, 1),
      mh = _React$useState36[0];

  var _React$useState37 = _react.default.useState(false),
      _React$useState38 = _slicedToArray(_React$useState37, 2),
      isMinimizedController = _React$useState38[0],
      set_isMinimizedController = _React$useState38[1];

  var handleCloseController = function handleCloseController() {
    set_isMinimizedController(true);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "PDFresultModal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ResultWrap",
    style: {
      width: specialWidth,
      height: specialHeight
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "marginWrap"
  }, isMinimizedController === false ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactDraggable.default, {
    handle: ".OVM-drag-handle",
    defaultPosition: {
      x: 0,
      y: 0
    },
    bounds: ".marginWrap",
    grid: [1, 1]
  }, /*#__PURE__*/_react.default.createElement("div", {
    tabIndex: "0",
    className: "moveableBarwrapper",
    style: {
      width: mw + 'px',
      height: mh + 'px',
      backgroundColor: 'white',
      zIndex: isFocus ? 10 : 9
    },
    onBlur: function onBlur() {
      //console.log("OVM BLUR");
      set_isFocus(false);
    },
    onFocus: function onFocus() {
      //console.log("OVM FOCUS");
      set_isFocus(true);
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "header OVM-drag-handle",
    style: {
      backgroundColor: isFocus ? 'rgb(40,40,40)' : 'rgb(20,20,20)'
    }
  }, "Controller", /*#__PURE__*/_react.default.createElement("button", {
    className: "icon-btn",
    style: {
      position: 'absolute',
      right: 0
    },
    onClick: handleCloseController
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-times",
    "aria-hidden": "true"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "middle"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "moveBar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "SideBar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, "\uC7AC\uC0DD \uBC30\uC18D"), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/_react.default.createElement("select", {
    value: playSpeed,
    onChange: function onChange(e) {
      return set_playSpeed(e.target.value);
    }
  }, /*#__PURE__*/_react.default.createElement("option", null, "0.1"), /*#__PURE__*/_react.default.createElement("option", null, "0.5"), /*#__PURE__*/_react.default.createElement("option", null, "1"), /*#__PURE__*/_react.default.createElement("option", null, "2")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, "\uC2DC\uC120 \uD06C\uAE30"), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "range",
    style: {
      width: '70%'
    },
    value: rawSize,
    min: 0,
    max: 400,
    onChange: function onChange(e) {
      set_rawSize(e.target.value);
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, "\uC751\uC2DC\uD06C\uAE30"), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "range",
    style: {
      width: '70%'
    },
    value: fixationSize,
    min: 0,
    max: 400,
    onChange: function onChange(e) {
      set_fixationSize(e.target.value);
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, "\uC2DC\uC120\uCC3D \uACFC\uAC70"), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/_react.default.createElement("select", {
    value: pastTimeRange,
    onChange: function onChange(e) {
      return set_pastTimeRange(e.target.value * 1);
    }
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: 0
  }, "\uC804\uCCB4"), /*#__PURE__*/_react.default.createElement("option", {
    value: 0.5
  }, "0.5\uCD08"), /*#__PURE__*/_react.default.createElement("option", {
    value: 1
  }, "1\uCD08"), /*#__PURE__*/_react.default.createElement("option", {
    value: 2
  }, "2\uCD08"), /*#__PURE__*/_react.default.createElement("option", {
    value: 5
  }, "5\uCD08"), /*#__PURE__*/_react.default.createElement("option", {
    value: 10
  }, "10\uCD08")))), /*#__PURE__*/_react.default.createElement("div", {
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
  }, fd_inform.fixationRatio.toFixed(0), "%"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "GC-playzone"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "GC-playWrapper"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: isPlaying ? "GC-playbtn playing" : "GC-playbtn",
    onClick: handleTogglePlay
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "GC-TimeWrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "nowTimeWrapper"
  }, nowTime.toFixed(2)), /*#__PURE__*/_react.default.createElement("div", {
    className: "endTimeWrapper"
  }, "\xA0/\xA0", endTime.toFixed(2))))))))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "minimizedController"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    className: "makeHuge-btn",
    onClick: function onClick() {
      return set_isMinimizedController(false);
    }
  }, "Controller")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    className: isPlaying ? "mbbtn playing" : "mbbtn",
    onClick: handleTogglePlay
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "timeWrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "nt"
  }, nowTime.toFixed(2)), /*#__PURE__*/_react.default.createElement("div", {
    className: "et"
  }, "\xA0/\xA0", endTime.toFixed(2))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "rightZone"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "topVacancy",
    ref: topRef
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "viewWrap",
    style: {
      width: data.screenSize.width,
      height: data.screenSize.height,
      transform: "scale(".concat(innerFrameScale, ")"),
      top: "".concat(innerFrameTop, "px"),
      left: "".concat(innerFrameLeft, "px")
    }
  }, /*#__PURE__*/_react.default.createElement(_reactRelPdfviewer.default, _extends({}, props, {
    ref: pdfviewref,
    onClose: onClose,
    showViewMode: true,
    set_viewpercent: function set_viewpercent() {},
    path: path,
    viewpercent: viewpercent,
    workerSRC: process.env.WORKERSRC,
    pageCallback: function pageCallback(p) {
      // console.log("page콜백", p);
      set_nowPage(p);
    },
    pdfSizeCallback: function pdfSizeCallback(d) {
      // console.log("임시확인", d);
      set_nowPDFviewInform(d.PDF);
      handleDraw();
    }
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "playBarWrap"
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "rangePlay",
    type: "range",
    step: "0.01",
    value: nowTime,
    max: endTime,
    min: "0",
    onChange: function onChange(e) {
      return set_nowTime(e.target.value * 1);
    }
  }))))));
};

var _default = PDFresultModal;
exports.default = _default;
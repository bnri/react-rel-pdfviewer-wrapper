"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./PDFresultModal.scss");
var _reactRelPdfviewer = _interopRequireDefault(require("react-rel-pdfviewer"));
var _pdfLib = require("pdf-lib");
var _fontkit = _interopRequireDefault(require("@pdf-lib/fontkit"));
var _reactTooltip = _interopRequireDefault(require("react-tooltip"));
var _baselogo = _interopRequireDefault(require("./img/baselogo2.png"));
var _reactSpinnersCss = require("react-spinners-css");
var _JejuMyeongjo = _interopRequireDefault(require("./font/JejuMyeongjo.ttf"));
var _util = require("./util");
var _controller = require("./controller");
var _svg = require("./svg");
var h337 = _interopRequireWildcard(require("heatmap.js"));
var _MultipleToggle = _interopRequireDefault(require("./component/multipletoggle/MultipleToggle"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectDestructuringEmpty(t) { if (null == t) throw new TypeError("Cannot destructure " + t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); } // import readerseyelogo from "./img/readereyelogo.png";
// import { ReactComponent as RemoconSVG } from "./img/remotecontroller.svg";
const PDFresultModal = _ref => {
  let props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  const {
    onClose,
    onConfirm,
    showConfirmBtn,
    path,
    viewpercent,
    data,
    specialWidth,
    specialHeight,
    printPDFData,
    downloadFileName,
    PDFonloadCallback,
    penweight,
    pencolor,
    penpermit,
    hideRemocon,
    agencyLogoArrayBuffer,
    agencyName
  } = props;
  const [loading, set_loading] = (0, _react.useState)(false);
  const topRef = (0, _react.useRef)();
  const pdfviewref = (0, _react.useRef)();
  // const [nowPage, set_nowPage] = useState(1);
  const [nowTime, set_nowTime] = (0, _react.useState)(data.gazeData[data.gazeData.length - 1].relTime);
  const endTime = (0, _react.useMemo)(() => {
    let lastTime = data.gazeData[data.gazeData.length - 1].relTime;
    // set_nowTime(lastTime);
    return lastTime;
  }, [data]);
  const originViewPercent = (0, _react.useMemo)(() => {
    return viewpercent;
  }, [viewpercent]);
  const [tempViewPercent, set_tempViewPercent] = (0, _react.useState)(viewpercent);
  const POG_swapcanvasRef = (0, _react.useRef)();
  const FPOG_swapCanvasRef = (0, _react.useRef)();
  const FPOGcanvasRef_last = (0, _react.useRef)();
  const PENcanvasRef = (0, _react.useRef)();
  const tempIndexRef = (0, _react.useRef)();
  const [autoReplay, set_autoReplay] = (0, _react.useState)(false);

  //리모콘
  const [hideController, set_hideController] = (0, _react.useState)(hideRemocon !== null ? hideRemocon : false);

  //차트 옵션. 톱니바퀴
  const [showConfig, set_showConfig] = (0, _react.useState)(false);
  const [chartOption, set_chartOption] = (0, _react.useState)(null);
  const resaveConfig = (0, _react.useCallback)(() => {
    set_chartOption(JSON.parse(JSON.stringify(chartOption)));
  }, [chartOption]);

  //문서내의 temp offset
  const [offsetX, set_offsetX] = (0, _react.useState)("0.00");
  const [offsetY, set_offsetY] = (0, _react.useState)("0.00");
  (0, _react.useEffect)(() => {
    tempIndexRef.current = {
      lastPageIndex: 0,
      lastDrawRawGazeIndex: 0,
      lastDrawRawGazePoint: {
        x: null,
        y: null
      },
      lastDrawFPOGIndex: 0,
      lastDrawFPOGPoint: {
        x: null,
        y: null
      },
      lastDrawPenIndex: 0,
      //마지막에 그린 펜 인덱스
      lastDrawPenPoint: {
        x: null,
        y: null
      },
      needClear: true
    };
  }, []);

  //PDF 사이즈 필요함
  const [nowPDFviewInform, set_nowPDFviewInform] = (0, _react.useState)(null);

  //fixation 값들. fixationArr 만들때 쓰임개발때 쓰임.
  const [fminx] = (0, _react.useState)(1);
  const [fminy] = (0, _react.useState)(1);
  const [minFixationCount] = (0, _react.useState)(3);
  //fixationData는 darw시에도 사용됨.
  const fixationData = (0, _react.useMemo)(() => {
    let fa = [];
    let sumPDF_x = 0;
    let sumPDF_y = 0;
    // console.log("data", data);
    const rawGaze = data.gazeData;
    let heightmul = data.pdfSize.height / data.screenSize.height;
    if (heightmul <= 1) heightmul = 1;
    let fixationNumber = 0;
    let fixationStart = false;
    let fixationObj = {};
    let prevx = null;
    let prevy = null;
    const xdiff_f = fminx / 100;
    const ydiff_f = fminy / 100 * heightmul;
    //거리기준 
    for (let i = 0; i < rawGaze.length; i++) {
      //거리가 가까운 PDF 를 찾아야하는데..
      let d = rawGaze[i];
      d.rawGazeindex = i;
      if (fixationStart === false) {
        if (!d.pdfx || !d.pdfy) {
          continue;
        }
        // console.log("맨처음만!");
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
        let xdiff = Math.abs(d.pdfx - prevx);
        let ydiff = Math.abs(d.pdfy - prevy);
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
          fa.push(JSON.parse(JSON.stringify(fixationObj)));

          //새로운 fixation;
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
          };
          // console.log("새로운fixation생성?",rawGaze.length,i);
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
    }

    //fixationColor 설정
    // console.log("fa", fa);
    let colorObj = {
      0: {
        r: 255,
        g: 0,
        b: 0
      },
      //빨
      11: {
        r: 255,
        g: 127,
        b: 0
      },
      //주
      22: {
        r: 255,
        g: 255,
        b: 0
      },
      //노
      33: {
        r: 127,
        g: 255,
        b: 0
      },
      44: {
        r: 0,
        g: 255,
        b: 0
      },
      55: {
        r: 0,
        g: 255,
        b: 127
      },
      66: {
        r: 0,
        g: 255,
        b: 255
      },
      77: {
        r: 0,
        g: 127,
        b: 255
      },
      88: {
        r: 0,
        g: 0,
        b: 255
      },
      100: {
        r: 127,
        g: 0,
        b: 255
      }
    };
    const colorObjKeyArr = Object.keys(colorObj);
    let pagePerFixationCount = {};
    for (let i = 0; i < fa.length; i++) {
      if (!pagePerFixationCount[fa[i].pageNum_s]) {
        pagePerFixationCount[fa[i].pageNum_s] = {
          count: 1
        };
        fa[i].pageFixationCount = pagePerFixationCount[fa[i].pageNum_s].count;
      } else {
        pagePerFixationCount[fa[i].pageNum_s].count++;
        fa[i].pageFixationCount = pagePerFixationCount[fa[i].pageNum_s].count;
      }
    }
    for (let i = 0; i < fa.length; i++) {
      let targetPageTotalFixationCount = pagePerFixationCount[fa[i].pageNum_s].count;
      let ratio = fa[i].pageFixationCount / targetPageTotalFixationCount;
      fa[i].ratio = ratio;
      //ratio가 0~0.1 사이  0.1~0.2 사이  0.2~0.3 사이..0.9~1 사이
      //일경우 fa[i].color = 
      let percent = ratio * 100; //0~100 사이에
      let minKey, maxKey;
      for (let j = 0; j < colorObjKeyArr.length - 1; j++) {
        if (percent >= colorObjKeyArr[j] && percent <= colorObjKeyArr[j + 1]) {
          minKey = colorObjKeyArr[j];
          maxKey = colorObjKeyArr[j + 1];
          break;
        }
      }
      // console.log("minmaxKey",minKey,maxKey);

      let lowerColor = colorObj[minKey];
      let upperColor = colorObj[maxKey];
      let t = (percent - minKey) / (maxKey - minKey);
      // console.log("구간ratio",t);

      let r = Math.round(lowerColor.r + (upperColor.r - lowerColor.r) * t);
      let g = Math.round(lowerColor.g + (upperColor.g - lowerColor.g) * t);
      let b = Math.round(lowerColor.b + (upperColor.b - lowerColor.b) * t);
      //percent 에 따라서
      //colorObjKeyArr 사이값을 interpolation
      //예를 들어서 10percent 의 경우에는
      //colorObj[0] 과 colorObj[11] rgb 값의  10/11 값을 할당하고 싶음.
      fa[i].color = {
        r: r,
        g: g,
        b: b
      };
    }
    //////////////

    //Fixation Re Numbering
    let renumber = 1;
    for (let i = 0; i < fa.length; i++) {
      if (fa[i].count >= minFixationCount) {
        fa[i].fixationNumber = renumber;
        renumber++;
      } else {
        fa[i].fixationNumber = null;
      }
    }
    // console.log("fa",fa)
    return fa;
  }, [data, fminx, fminy, minFixationCount]);

  //딱한번만..default차트옵션을 할당...
  const justOneTimeSetChartOption = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    if (justOneTimeSetChartOption.current) {
      return;
    }
    if (!fixationData || !nowPDFviewInform) {
      return;
    }
    justOneTimeSetChartOption.current = true;
    const {
      width: cw,
      // height: ch,
      height_devided_width_ratio
    } = nowPDFviewInform;
    const saccadeArr = [];
    for (let i = 1; i < fixationData.length; i++) {
      let s = fixationData[i - 1];
      let e = fixationData[i];
      var dx = (s.x - e.x) * 1728;
      var dy = (s.y - e.y) * 1728 * height_devided_width_ratio;
      var distance = Math.sqrt(dx * dx + dy * dy);
      // var distance2 = Math.sqrt( Math.pow((s.x*cw-e.x*cw), 2) + Math.pow((s.y*ch-s.y*ch), 2) );
      saccadeArr.push(distance);
      // saccadeArr2.push(distance2);
    }
    // console.log("saccadeArr",saccadeArr);
    let a = (0, _util.getMedian)(saccadeArr);
    let newval = (a / cw).toFixed(6) * 1;
    // console.log("------------------------SAF차트옵션셋팅딱한번")

    set_chartOption({
      heatMap: false,
      heatMapMax: 20,
      heatMapRadius: 40,
      heatMapMaxOpacity: 0.7,
      RPOG: false,
      RPOG_size: 10,
      RPOG_line: true,
      FPOG: true,
      FPOG_size: (20 * newval * 33.3333).toFixed(0),
      FPOG_line: true,
      FPOG_opacity: 0.3,
      FPOG_number: false,
      FPOG_number_size: 1.7,
      rainBow: true,
      GazePastRange: 0,
      //0인경우 전체
      ChartPastRange: 20,
      //0인경우 전체

      playSpeed: 1,
      drawFPS: 30,
      penPermit: penpermit ? penpermit * 1 : 1,
      penColor: pencolor ? pencolor : '#FF0000',
      penWeight: penweight ? penweight : 1 //유저가 PDF에 펜으로 글씨 쓴것.
    });
  }, [fixationData, nowPDFviewInform, penpermit, pencolor, penweight]);
  const fd_inform = (0, _react.useMemo)(() => {
    if (!fixationData) return;
    let sumfd = 0;
    let fc = 0;
    for (let i = 0; i < fixationData.length; i++) {
      if (minFixationCount <= fixationData[i].count) {
        fc++;
        sumfd += fixationData[i].fd;
      }
    }
    let ad = fc ? sumfd / fc * 1000 : 0;
    // console.log("ad",ad);

    let obj = {
      avgDuration: ad,
      fixationRatio: sumfd / endTime * 100
    };
    return obj;
  }, [fixationData, minFixationCount, endTime]);

  //리사이즈시 스케일변수들
  const [innerFrameScale, set_innerFrameScale] = (0, _react.useState)(0.5);
  const [innerFrameTop, set_innerFrameTop] = (0, _react.useState)(0);
  const [innerFrameLeft, set_innerFrameLeft] = (0, _react.useState)(0);

  //재생과 멈춤.
  const [isPlaying, set_isPlaying] = (0, _react.useState)(false);

  //재생시 스크롤 따라갈것인가 옵션
  const [followEvent, set_followEvent] = (0, _react.useState)(true);

  //전체화면
  const [isfullscreen, set_isfullscreen] = (0, _react.useState)(false);

  //히트맵 인스턴스

  const [HI, set_HI] = (0, _react.useState)();

  //캔버스 래프들 초기화
  (0, _react.useEffect)(() => {
    // if (!data) return;
    if (FPOG_swapCanvasRef && FPOG_swapCanvasRef.current) return;
    if (POG_swapcanvasRef && POG_swapcanvasRef.current) return;
    if (FPOGcanvasRef_last && FPOGcanvasRef_last.current) return;
    if (PENcanvasRef && PENcanvasRef.current) return;
    // const { width: w, height: h } = data.screenSize;
    //
    if (!nowPDFviewInform) {
      return;
    }
    // console.log("캔버스 사이즈는 고정으로 가져간다.");

    const {
      width: w,
      height: h
    } = nowPDFviewInform;
    const canvasWidth = 1728;
    const canvasHeight = 1728 * h / w;
    var canvas = document.createElement('canvas');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    POG_swapcanvasRef.current = canvas;
    // console.log("딱한번 등록");
    var canvas2 = document.createElement('canvas');
    canvas2.width = canvasWidth;
    canvas2.height = canvasHeight;
    FPOG_swapCanvasRef.current = canvas2;
    var canvas3 = document.createElement('canvas');
    canvas3.width = canvasWidth;
    canvas3.height = canvasHeight;
    FPOGcanvasRef_last.current = canvas3;
    var canvas4 = document.createElement('canvas');
    canvas4.width = canvasWidth;
    canvas4.height = canvasHeight;
    PENcanvasRef.current = canvas4;
  }, [nowPDFviewInform]);

  //히트맵 인스턴스 생성부분.
  (0, _react.useEffect)(() => {
    if (!chartOption) {
      return;
    }
    if (HI) {
      return;
    }
    if (!nowPDFviewInform) {
      return;
    }
    let a;
    const {
      width: cw,
      // height: ch,
      height_devided_width_ratio
    } = nowPDFviewInform;
    let heatmapref = pdfviewref.current.get_heatmapRef();
    if (heatmapref.current) {
      clearInterval(a);
      var heatmapInstance = h337.create({
        // only container is required, the rest will be defaults
        container: heatmapref.current,
        //이게 디폴트값들임
        radius: chartOption.heatMapRadius * cw / 1728,
        maxOpacity: chartOption.heatMapMaxOpacity,
        minOpacity: 0,
        blur: 0.85,
        gradient: {
          '0.25': "rgb(0,0,255)",
          "0.55": "rgb(0,255,0)",
          "0.85": "yellow",
          "1": "rgb(192,0,0)"
        },
        width: 1728,
        height: 1728 * height_devided_width_ratio
      });
      heatmapInstance.setData({
        max: chartOption.heatMapMax,
        data: []
      });
      // console.log("새로 히트맵인스터스 할당")
      set_HI(heatmapInstance);
    }
  }, [nowPDFviewInform, chartOption, HI]);

  //리사이즈이벤트
  const resizeInnerFrame = _react.default.useCallback(() => {
    if (!topRef.current) return;
    setTimeout(function () {
      let max = (window.screen.height / window.devicePixelRatio).toFixed(0) * 1;

      // console.log("max:" + max);
      // console.log("window.innerHeight:" + window.innerHeight);

      if (isfullscreen) {
        if (max !== window.innerHeight) {
          set_isfullscreen(false);
        }
      }
    }, 150);
    const pastScreenW = data.screenSize.width;
    const pastScreenH = data.screenSize.height;
    let pastRatio = pastScreenH / pastScreenW;
    const width = topRef.current.clientWidth;
    const height = topRef.current.clientHeight;
    let nowRatio = height / width;
    if (nowRatio >= pastRatio) {
      // console.log("지금세로가 더크다 - 가로기준 셋팅");
      set_innerFrameScale(width / pastScreenW);
      let newheight = pastScreenH * (width / pastScreenW);
      set_innerFrameTop((height - newheight) / 2);
      set_innerFrameLeft(0);
    } else {
      // console.log("지금 가로가 더 크다 (지금비율이 더 작다)-높이기준셋팅");
      set_innerFrameScale(height / pastScreenH);
      let newwidth = pastScreenW * (height / pastScreenH);
      set_innerFrameTop(0);
      set_innerFrameLeft((width - newwidth) / 2);
    }
  }, [data, isfullscreen]);
  (0, _react.useEffect)(() => {
    resizeInnerFrame();
    window.addEventListener('resize', resizeInnerFrame);
    return () => {
      //console.log("소멸자");
      window.removeEventListener('resize', resizeInnerFrame);
    };
  }, [resizeInnerFrame]);

  //재생
  (0, _react.useEffect)(() => {
    if (!chartOption) {
      return;
    }
    const {
      playSpeed,
      drawFPS
    } = chartOption;
    const fpsInterval = 1000 / drawFPS;
    let myrequest;
    let startTime = Date.now();
    let then = startTime;
    function timeUpdate() {
      myrequest = window.requestAnimationFrame(timeUpdate);
      let now = Date.now();
      let elapsed = now - then;
      // console.log("fps", 1000 / elapsed);

      if (elapsed > fpsInterval) {
        then = now - elapsed % fpsInterval;
        set_nowTime(nt => {
          if (nt * 1 > endTime) {
            if (autoReplay === true) {
              return 0;
            } else {
              set_isPlaying(false);
              nt = endTime;
              return nt;
            }
          } else if (nt * 1 === endTime) {
            return 0;
          } else {
            nt = nt * 1 + elapsed / 1000 * playSpeed;
            return nt;
          }
        });
      }
    }
    if (isPlaying === true) {
      timeUpdate();
    } else {
      window.cancelAnimationFrame(myrequest);
    }
    return () => {
      window.cancelAnimationFrame(myrequest);
    };
  }, [isPlaying, endTime, chartOption, autoReplay]);

  //툴팁
  (0, _react.useEffect)(() => {
    _reactTooltip.default.rebuild();
  });
  (0, _react.useEffect)(() => {
    tempIndexRef.current.needClear = true;
    // console.log("@@@@@@@@@@@@@@클리어요청", nowPage, HI, tempViewPercent)
  }, [data, chartOption, nowPDFviewInform, offsetX, offsetY, HI, tempViewPercent]);

  //그리기
  const handleDraw = _react.default.useCallback(() => {
    if (!chartOption) {
      return;
    }
    if (!HI) {
      return;
    }
    if (!nowPDFviewInform) {
      // console.log("PDFviewInform이 없음")
      return;
    }
    const canvasref = pdfviewref.current.get_canvasRef(); //heatmap 제외 캔버스
    // let heatmapref = pdfviewref.current.get_heatmapRef();
    if (!canvasref || !canvasref.current) {
      // console.log("오잉?",canvasref);
      return;
    }
    //width height은 pdf의 사이즈임. 캔버스의 사이즈가 아님.
    const {
      // width:cwreal,height:chreal,
      nowPage,
      height_devided_width_ratio
    } = nowPDFviewInform;
    const cw = 1728;
    const ch = 1728 * height_devided_width_ratio;

    // console.log("nowPDFviewInform",nowPDFviewInform)

    // console.log("=====================================================================")
    // console.log("@랜더확인")
    // console.log("nowPage",nowPage)
    // console.log("nowPage", nowPage);
    // console.log("HI", HI);
    // console.log("chartOption.heatMap", chartOption)
    // console.log("nowPDFviewInform", nowPDFviewInform);
    // console.log("cw",cw,ch)
    // console.log("============================================")
    // console.log("tempIndexRef.current.needClear", JSON.stringify(tempIndexRef.current.needClear));

    const canvas = canvasref.current; // 히트맵제외 랜더캔버스임.
    const rctx = canvas.getContext('2d', {
      willReadFrequently: true
    });
    const RPOG_size = cw * 0.01 * (chartOption.RPOG_size * 2 / 100);
    const gazeData = data.gazeData;
    const pT = chartOption.GazePastRange * 1;
    const heatMapRadius = chartOption.heatMapRadius;
    let osx = offsetX * 1;
    let osy = offsetY * 1;
    let needClear = tempIndexRef.current.needClear;

    // const canvas_HI=HI._renderer.canvas;
    // canvas_HI.width=cw;
    // canvas_HI.height=ch;
    const canvas_pog = POG_swapcanvasRef.current;
    const ctx_pog = canvas_pog.getContext("2d", {
      willReadFrequently: true
    });
    // if(canvas_pog.width!==cw){
    //     canvas_pog.width = cw;
    //     canvas_pog.height = ch;
    // }
    const canvas_f = FPOG_swapCanvasRef.current;
    const ctx_f = canvas_f.getContext("2d", {
      willReadFrequently: true
    });
    // if(canvas_f.width!==cw){
    //     canvas_f.width = cw;
    //     canvas_f.height = ch;
    // }
    const canvas_fl = FPOGcanvasRef_last.current;
    const ctx_fl = canvas_fl.getContext("2d", {
      willReadFrequently: true
    });
    // if(canvas_fl.width!==cw){
    //     canvas_fl.width = cw;
    //     canvas_fl.height = ch;
    // }
    const canvas_p = PENcanvasRef.current;
    const ctx_p = canvas_p.getContext("2d", {
      willReadFrequently: true
    });
    // if(canvas_p.width!==cw){
    //     canvas_p.width = cw;
    //     canvas_p.height = ch;
    // }

    function clearAllCanvas() {
      ctx_p.clearRect(0, 0, cw, ch);
      ctx_pog.clearRect(0, 0, cw, ch);
      ctx_f.clearRect(0, 0, cw, ch);
      //ctx_fl 은 항상클리어
      tempIndexRef.current = _objectSpread(_objectSpread({}, tempIndexRef.current), {}, {
        lastPageIndex: 0,
        lastDrawRawGazeIndex: 0,
        lastDrawRawGazePoint: {
          x: null,
          y: null
        },
        lastDrawFPOGIndex: 0,
        lastDrawFPOGPoint: {
          x: null,
          y: null
        },
        lastDrawPenIndex: 0,
        //마지막에 그린 펜 인덱스
        lastDrawPenPoint: {
          x: null,
          y: null
        },
        needClear: false
      });
    }
    function drawHeatmap() {
      if (HI) {
        HI.configure({
          maxOpacity: chartOption.heatMapMaxOpacity
          // width: cw,
          // height: ch,
        });
      } else {
        return;
      }

      // console.log("드로힛맵")

      // console.log("드로")
      let points = [];
      if (chartOption.heatMap) {
        // console.log("1")
        for (let i = 0; i < gazeData.length; i++) {
          const d = gazeData[i];
          if (pT) {
            if (d.relTime < nowTime - pT) {
              continue;
            }
          }
          if (d.relTime <= nowTime) {
            if (d.pdfx && d.pdfy) {
              if (nowPage === d.pageNum) {
                let baseobj = {
                  x: 0,
                  y: 0,
                  value: 0,
                  radius: heatMapRadius
                };
                let x = Math.floor((d.pdfx + osx) * cw);
                let y = Math.floor((d.pdfy + osy) * ch);
                baseobj.x = x;
                baseobj.y = y;
                baseobj.value = 1;
                points.push(baseobj);
              }
            }
          } else {
            break;
          }
        }
      }
      // console.log("셋데이타",points.length)
      HI.setData({
        max: chartOption.heatMapMax,
        min: 0,
        data: points
      });
    }
    function drawRPOG() {
      //draw rawdata
      let startIndex = tempIndexRef.current.lastDrawRawGazeIndex + 1;
      let prevx = tempIndexRef.current.lastDrawRawGazePoint.x;
      let prevy = tempIndexRef.current.lastDrawRawGazePoint.y;
      for (let i = startIndex; chartOption.RPOG && i < gazeData.length; i++) {
        let d = gazeData[i];
        if (pT) {
          if (d.relTime < nowTime - pT) {
            continue;
          }
        }
        if (d.relTime * 1 <= nowTime * 1) {
          if (d.pdfx && d.pdfy) {
            if (RPOG_size && nowPage === d.pageNum) {
              if (chartOption.RPOG_line && prevx && prevy) {
                ctx_pog.beginPath();
                ctx_pog.lineWidth = 0.5;
                ctx_pog.strokeStyle = 'red';
                ctx_pog.fillStyle = 'red';
                ctx_pog.moveTo((prevx + osx) * cw, (prevy + osy) * ch);
                ctx_pog.lineTo((d.pdfx + osx) * cw, (d.pdfy + osy) * ch);
                ctx_pog.stroke();
                tempIndexRef.current.lastDrawRawGazeIndex = i;
              } //선먼저 그린후 그리기

              ctx_pog.beginPath();
              ctx_pog.lineWidth = 0.5;
              ctx_pog.strokeStyle = 'rgb(255,0,0,0.3)';
              ctx_pog.fillStyle = 'rgb(255,0,0,0.3)';
              ctx_pog.arc((d.pdfx + osx) * cw, (d.pdfy + osy) * ch, RPOG_size, 0, Math.PI * 2);
              ctx_pog.fill();
              tempIndexRef.current.lastDrawRawGazeIndex = i;
              prevx = d.pdfx;
              prevy = d.pdfy;
            } else {
              prevx = null;
              prevy = null;
            }
          }
        }
      }
      tempIndexRef.current.lastDrawRawGazePoint = {
        x: prevx,
        y: prevy
      };
    }
    function drawFixation() {
      // console.log("fixationData",fixationData)
      let startFixationIndex = tempIndexRef.current.lastDrawFPOGIndex;
      let prevx = tempIndexRef.current.lastDrawFPOGPoint.x || null;
      let prevy = tempIndexRef.current.lastDrawFPOGPoint.y || null;
      // console.log("prevx",prevx,prevy);
      //draw Fixation
      let fr = cw * chartOption.FPOG_size * 1.5 / 10000;
      //medianSaccadeDistance_dividedByWidth
      ctx_fl.clearRect(0, 0, cw, ch);
      function findAVGxy(si, ei, f) {
        let s = si;
        let e = ei < si ? si : ei;
        // console.log("==================")
        // console.log("sef",s,e,f)
        let obj = {
          sumx: 0,
          sumy: 0,
          count: 0,
          x: null,
          y: null
        };
        for (let i = s; i <= e && i < gazeData.length; i++) {
          if (gazeData[i].pdfx && gazeData[i].pdfy) {
            obj.sumx += gazeData[i].pdfx;
            obj.sumy += gazeData[i].pdfy;
            obj.count++;
          }
        }
        obj.x = obj.sumx / obj.count;
        obj.y = obj.sumy / obj.count;
        // console.log("@obj",obj);
        // console.log("==================")
        return obj;
      }
      const FPOG_opacity = chartOption.FPOG_opacity;
      //    console.log("fixationData",fixationData)
      for (let i = startFixationIndex + 1; chartOption.FPOG && i < fixationData.length; i++) {
        const f = fixationData[i];
        if (pT) {
          //과거시간까지만 재생. pT가0이면 전체시간
          if (f.relTime_e < nowTime - pT) {
            console.log("끝");
            continue;
          }
        }

        //현재시간 전까지만 재생
        if (f.relTime_s * 1 <= nowTime * 1) {
          if (nowPage === f.pageNum_s && fr) {
            //페이지 넘버가 같아야함.
            if (f.count >= minFixationCount) {
              //fixation의 숫자가 통과
              //f.relTime_e <= nowTime

              //원그리기 fixation
              let fsize = fr * Math.sqrt(f.count);
              if (f.relTime_e <= nowTime) {
                //전체 다그려
                ctx_f.beginPath();
                ctx_f.lineWidth = 1;
                if (chartOption.rainBow) {
                  ctx_f.strokeStyle = "rgb(".concat(fixationData[i].color.r, ",").concat(fixationData[i].color.g, ",").concat(fixationData[i].color.b, ",").concat(FPOG_opacity, ")");
                  ctx_f.fillStyle = "rgb(".concat(fixationData[i].color.r, ",").concat(fixationData[i].color.g, ",").concat(fixationData[i].color.b, ",").concat(FPOG_opacity, ")");
                } else {
                  ctx_f.strokeStyle = "rgb(0,255,0,".concat(FPOG_opacity, ")");
                  ctx_f.fillStyle = "rgb(0,255,0,".concat(FPOG_opacity, ")");
                }
                ctx_f.arc((f.x + osx) * cw, (f.y + osy) * ch, fsize, 0, Math.PI * 2);
                // ctx_fl.stroke();
                ctx_f.fill();
                ctx_f.closePath();
                tempIndexRef.current.lastDrawFPOGIndex = i;
              } else {
                // 작게 그려 fixation의 중간녀석임.
                let ratio = (nowTime - f.relTime_s) / (f.relTime_e - f.relTime_s);
                let obj = findAVGxy(f.f_startData.rawGazeindex, (f.f_startData.rawGazeindex + (f.f_endData.rawGazeindex - f.f_startData.rawGazeindex) * ratio).toFixed(0) * 1, f);
                ctx_fl.beginPath();
                ctx_fl.lineWidth = 1;
                if (chartOption.rainBow) {
                  ctx_fl.strokeStyle = "black";
                  // ctx_fl.strokeStyle = `rgb(${fixationData[i].color.r},${fixationData[i].color.g},${fixationData[i].color.b},0.3)`;
                  ctx_fl.fillStyle = "rgb(".concat(fixationData[i].color.r, ",").concat(fixationData[i].color.g, ",").concat(fixationData[i].color.b, ",").concat(FPOG_opacity, ")");
                } else {
                  ctx_fl.strokeStyle = "rgb(0,0,255,".concat(FPOG_opacity, ")");
                  ctx_fl.fillStyle = "rgb(0,0,255,".concat(FPOG_opacity, ")");
                }
                ctx_fl.arc((obj.x + osx) * cw, (obj.y + osy) * ch, fsize * ratio, 0, Math.PI * 2);
                ctx_fl.stroke();
                ctx_fl.fill();
                ctx_fl.closePath();
              }

              //선그리기...
              if (chartOption.FPOG_line) {
                if (f.relTime_e <= nowTime) {
                  // console.log("여기 왜")
                  if (prevx !== null && prevy !== null) {
                    ctx_f.beginPath();
                    ctx_f.lineWidth = 1;
                    if (chartOption.rainBow) {
                      ctx_f.strokeStyle = "rgb(".concat(fixationData[i].color.r, ",").concat(fixationData[i].color.g, ",").concat(fixationData[i].color.b, ",0.3)");
                      ctx_f.fillStyle = "rgb(".concat(fixationData[i].color.r, ",").concat(fixationData[i].color.g, ",").concat(fixationData[i].color.b, ",0.3)");
                    } else {
                      ctx_f.strokeStyle = "rgb(0,255,0,".concat(FPOG_opacity, ")");
                      ctx_f.fillStyle = "rgb(0,255,0,".concat(FPOG_opacity, ")");
                    }
                    ctx_f.moveTo((prevx + osx) * cw, (prevy + osy) * ch);
                    ctx_f.lineTo((f.x + osx) * cw, (f.y + osy) * ch);
                    ctx_f.stroke();
                    ctx_f.closePath();
                  }
                  prevx = f.x;
                  prevy = f.y;
                } else {
                  //마지막 고정되지 않은 사카드 방향. 위치가 계속 바뀌어야함.
                  if (prevx !== null && prevy !== null) {
                    let ratio = (nowTime - f.relTime_s) / (f.relTime_e - f.relTime_s);
                    let obj = findAVGxy(f.f_startData.rawGazeindex, (f.f_startData.rawGazeindex + (f.f_endData.rawGazeindex - f.f_startData.rawGazeindex) * ratio).toFixed(0) * 1, f);
                    ctx_fl.beginPath();
                    ctx_fl.lineWidth = 1;
                    if (chartOption.rainBow) {
                      ctx_fl.strokeStyle = "black";
                      ctx_fl.fillStyle = "rgb(".concat(fixationData[i].color.r, ",").concat(fixationData[i].color.g, ",").concat(fixationData[i].color.b, ",").concat(FPOG_opacity, "))");
                    } else {
                      ctx_fl.strokeStyle = 'blue';
                      ctx_fl.fillStyle = 'blue';
                    }
                    ctx_fl.moveTo((prevx + osx) * cw, (prevy + osy) * ch);
                    ctx_fl.lineTo((obj.x + osx) * cw, (obj.y + osy) * ch);
                    ctx_fl.stroke();
                    ctx_fl.closePath();
                  }
                }
              }

              //숫자 그리기
              if (chartOption.FPOG_number === true) {
                if (f.relTime_e <= nowTime) {
                  ctx_f.beginPath();
                  ctx_f.strokeStyle = "black";
                  ctx_f.fillStyle = "black";
                  ctx_f.lineWidth = 1;
                  ctx_f.font = cw / 100 * chartOption.FPOG_number_size + "px Arial";
                  ctx_f.textAlign = "center";
                  ctx_f.textBaseline = "middle";
                  ctx_f.fillText(f.fixationNumber, (f.x + osx) * cw, (f.y + osy) * ch);
                  ctx_f.stroke();
                  ctx_f.closePath();
                } else {
                  //마지막 fixation의 넘ㄴ버
                  ctx_fl.beginPath();
                  ctx_fl.strokeStyle = "black";
                  ctx_fl.fillStyle = "black";
                  ctx_fl.lineWidth = 1;
                  ctx_fl.font = cw / 100 * chartOption.FPOG_number_size + "px Arial";
                  ctx_fl.textAlign = "center";
                  ctx_fl.textBaseline = "middle";
                  ctx_fl.fillText(f.fixationNumber, (f.x + osx) * cw, (f.y + osy) * ch);
                  ctx_fl.stroke();
                  ctx_fl.closePath();
                }
              }
            }
          } else {
            prevx = null;
            prevy = null;
          }
        }
      }
      tempIndexRef.current.lastDrawFPOGPoint = {
        x: prevx,
        y: prevy
      };
    }
    function drawPencil() {
      //draw pencil
      let startdrawX = tempIndexRef.current.lastDrawPenPoint.x,
        startdrawY = tempIndexRef.current.lastDrawPenPoint.y;
      // console.log("chartOption.penPermit",chartOption.penPermit)
      for (let i = tempIndexRef.current.lastDrawPenIndex + 1; chartOption.penPermit * 1 && i < gazeData.length; i++) {
        let d = gazeData[i];
        const {
          pageNum
        } = d;
        const draw = gazeData[i].draw;
        if (!draw) {
          continue;
        }
        if (d.relTime * 1 <= nowTime * 1) {
          if (nowPage === pageNum) {
            ctx_p.lineWidth = (chartOption.penWeight * 1).toFixed(0) * 1;
            ctx_p.strokeStyle = chartOption.penColor;
            ctx_p.fillStyle = chartOption.penColor;
            if (draw.type === 'startDrawing') {
              // console.log("draw", draw);
              // console.log("그리기시작");
              startdrawX = draw.x * cw;
              startdrawY = draw.y * ch;
              ctx_p.beginPath();
              ctx_p.moveTo(draw.x * cw, draw.y * ch);
              // testdata.push(draw);
            } else if (draw.type === 'draw') {
              // console.log("그려",i);
              if (startdrawX && startdrawY) {
                ctx_p.lineTo(draw.x * cw, draw.y * ch);
                ctx_p.stroke();
                // testdata.push(draw);
              } else {
                startdrawX = draw.x * cw;
                startdrawY = draw.y * ch;
                ctx_p.beginPath();
                ctx_p.moveTo(draw.x * cw, draw.y * ch);
              }
            } else if (draw.type === 'stopDrawing') {
              ctx_p.closePath();
              // console.log("그리끝");
              startdrawX = null;
              startdrawY = null;
            } else {
              ctx_p.closePath();
              startdrawX = null;
              startdrawY = null;
            }
            tempIndexRef.current.lastDrawPenIndex = i;
          } else {
            ctx_p.closePath();
            startdrawX = null;
            startdrawY = null;
          }
        }
      }
      tempIndexRef.current.lastDrawPenPoint = {
        x: startdrawX,
        y: startdrawY
      };
    }
    function drawAll() {
      rctx.clearRect(0, 0, cw, ch);
      rctx.drawImage(POG_swapcanvasRef.current, 0, 0);
      rctx.drawImage(FPOG_swapCanvasRef.current, 0, 0);
      rctx.drawImage(FPOGcanvasRef_last.current, 0, 0);
      rctx.drawImage(PENcanvasRef.current, 0, 0);
      tempIndexRef.current.prevNowtime = nowTime;
      tempIndexRef.current.lastPageIndex = nowPage;
    }
    if (needClear) {
      //속성값을 바꾼경우
      clearAllCanvas();
    } else {
      if (tempIndexRef.current.prevNowtime > nowTime) {
        //시간이 뒤로간경우
        clearAllCanvas();
      } else {
        if (chartOption.GazePastRange * 1 !== 0) {
          clearAllCanvas();
        }
      }
    }
    drawHeatmap();
    drawRPOG();
    drawFixation();
    drawPencil();
    drawAll();
  }, [data, nowTime, chartOption, nowPDFviewInform, fixationData, minFixationCount, offsetX, offsetY, HI]);

  //PDF 스크롤과 page 이동기록을 따라가는 함수
  const handlePDFmoveEvent = _react.default.useCallback(() => {
    //배율이 똑같을경우에만..그래야함..

    let gazeData = data.gazeData;
    for (let i = 0; i < gazeData.length; i++) {
      if (gazeData[i].relTime * 1 <= nowTime * 1) {} else {
        if (i > 0) {
          let lastd = gazeData[i - 1];
          pdfviewref.current.set_pageNumber(lastd.pageNum);
          pdfviewref.current.set_scrollTop(lastd.scrollTop);
        }
        break;
      }
    }
  }, [data, nowTime]);
  (0, _react.useEffect)(() => {
    if (followEvent) {
      handlePDFmoveEvent();
    }
  }, [handlePDFmoveEvent, followEvent]);
  (0, _react.useEffect)(() => {
    if (originViewPercent * 1 === tempViewPercent * 1) {
      tempIndexRef.current.isReadyToEventPlay = true;
    } else {
      tempIndexRef.current.isReadyToEventPlay = false;
    }
  }, [originViewPercent, tempViewPercent]);
  const handleTogglePlay = () => {
    if (chartOption.heatMap) {
      set_toggleIndex(1);
      chartOption.RPOG = false;
      chartOption.heatMap = false;
      chartOption.FPOG = true;
      chartOption.rainBow = true;
      resaveConfig();
    }
    if (!isPlaying && followEvent && tempViewPercent * 1 !== originViewPercent * 1) {
      // console.log("tempViewPercent",tempViewPercent);
      // console.log("originViewPercent",originViewPercent)
      pdfviewref.current.reset_viewPerecent(originViewPercent);
      // set_isPlaying((p) =>!p);
      let a = setInterval(() => {
        if (tempIndexRef.current.isReadyToEventPlay) {
          clearInterval(a);
          setTimeout(function () {
            set_isPlaying(p => !p);
          }, 100);
        }
      }, 100);
    } else {
      set_isPlaying(p => !p);
    }
  };
  (0, _react.useEffect)(() => {
    handleDraw();
  }, [handleDraw]);

  //PDF writing 할때 쓰는것들임. 분리 필요
  const [jejuFontArrayBuffer, set_jejuFontArrayBuffer] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    (0, _util.getFileAsArrayBuffer)(_JejuMyeongjo.default).then(res_arrbuffer => {
      set_jejuFontArrayBuffer(res_arrbuffer);
    });
  }, []);

  //인쇄할 PDF데이터 path값에 따라서 PDFarraybuffer 보관
  const [pdfArrayBuffer, set_pdfArrayBuffer] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    if (!path) return;
    fetch(path).then(async res => {
      return res.arrayBuffer();
    }).then(async buffer => {
      set_pdfArrayBuffer(buffer);
    });
  }, [path]);

  //인쇄할 리더스아이로고 데이터
  const [readersEyeLogoArrayBuffer, set_readersEyeLogoArrayBuffer] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    fetch(_baselogo.default).then(r => r.arrayBuffer()).then(buf => {
      set_readersEyeLogoArrayBuffer(buf);
    });
  }, []);
  const handleFullScreen = () => {
    if (isfullscreen) {
      (0, _util.closeFullscreen)();
    } else {
      let max = (window.screen.height / window.devicePixelRatio).toFixed(0) * 1;
      if (max !== window.innerHeight) {
        (0, _util.openFullScreen)();
        set_isfullscreen(true);
      }
    }
  };

  // console.log("fixationData",fixationData)
  //pdf 인쇄
  const handleTryPrint = async () => {
    if (!data) {
      return;
    }
    if (!jejuFontArrayBuffer || !pdfArrayBuffer || !readersEyeLogoArrayBuffer) {
      alert("준비중입니다 잠시만 기다려주세요");
      return;
    }
    set_loading(true);
    await (0, _util.mydelay)(100);

    //폰트파일 할당
    const fontBytes = jejuFontArrayBuffer;

    // let pdfDoc;
    const existingPdfBytes = pdfArrayBuffer; //PDF 버퍼

    const pdfDoc = await _pdfLib.PDFDocument.load(existingPdfBytes, {
      ignoreEncryption: true
    });

    // console.log("registerFontkit");
    pdfDoc.registerFontkit(_fontkit.default);
    // console.log("registerFontkitend");

    // Embed the Helvetica font
    // const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
    // Get the first page of the document
    // console.log("pdfDoc", pdfDoc);

    // const pageIndices = pdfDoc.getPageIndices();
    // console.log("pageIndices",pageIndices);
    if (pdfDoc.isEncrypted) {
      set_loading(false);
      alert("수정금지된 PDF 파일이라 다운로드할 수 없습니다. 수정금지 해제 후 재등록해 주시기 바랍니다. 수정금지 해지하기 (https://smallpdf.com/unlock-pdf).");
      return;
    }
    try {
      /////PDF 오리지날 페이지의 사이즈 구하기
      const pages = pdfDoc.getPages();
      const firstPage = pages[0];
      // Get the width and height of the first page
      const {
        width,
        height
      } = firstPage.getSize();
      const cw = width;
      const ch = height;

      //base64를 Bytes 로 변환
      ////////////////////////////////////////////////////////페이지마다 리더스아이로고 박기.
      const pngLogoImageBytes = agencyLogoArrayBuffer ? agencyLogoArrayBuffer : readersEyeLogoArrayBuffer;
      const pngLogoImage = await pdfDoc.embedPng(pngLogoImageBytes);

      // console.dir(pngLogoImage.width);
      // console.dir(pngLogoImage.height);
      console.dir(pngLogoImage);
      const aimHeight = 40;
      const aimScale = (aimHeight / pngLogoImage.height).toFixed(2) * 1;
      const pngDims = pngLogoImage.scale(aimScale);
      console.dir(pngDims);
      // for (let i = 0; i < pages.length; i++) {
      //     pages[i].drawImage(pngLogoImage, {
      //         x: 5,
      //         y: -5 + height - pngDims.height,
      //         width: pngDims.width,
      //         height: pngDims.height,
      //     })
      // }
      ////////////////////////////////////////////////////////

      if (chartOption.heatMap) {
        //set_pageNumber

        let href = pdfviewref.current.get_heatmapRef();
        // console.log("href", href);
        if (href.current) {
          let heatmapcanvas = (0, _util.findCanvasInChildren)(href.current);
          // console.log("canvas",canvas)
          if (heatmapcanvas) {
            function drawHeatmapTemp(nowPage) {
              if (HI) {
                HI.configure({
                  maxOpacity: chartOption.heatMapMaxOpacity
                  // width: cw,
                  // height: ch,
                });
              } else {
                return;
              }
              const pT = 0;
              const heatMapRadius = chartOption.heatMapRadius;
              // console.log("드로힛맵")
              const gazeData = data.gazeData;
              let osx = offsetX * 1;
              let osy = offsetY * 1;
              // console.log("드로")
              let points = [];
              const {
                height_devided_width_ratio
              } = nowPDFviewInform;
              const heatmap_w = 1728;
              const heatpmap_h = 1728 * height_devided_width_ratio;
              if (chartOption.heatMap) {
                // console.log("1")
                for (let i = 0; i < gazeData.length; i++) {
                  const d = gazeData[i];
                  if (pT) {
                    if (d.relTime < endTime - pT) {
                      continue;
                    }
                  }
                  if (d.relTime <= endTime) {
                    if (d.pdfx && d.pdfy) {
                      if (nowPage === d.pageNum) {
                        let baseobj = {
                          x: 0,
                          y: 0,
                          value: 0,
                          radius: heatMapRadius
                        };
                        let x = Math.floor((d.pdfx + osx) * heatmap_w);
                        let y = Math.floor((d.pdfy + osy) * heatpmap_h);
                        baseobj.x = x;
                        baseobj.y = y;
                        baseobj.value = 1;
                        points.push(baseobj);
                      }
                    }
                  } else {
                    break;
                  }
                }
              }
              // console.log("셋데이타",points.length)
              HI.setData({
                max: chartOption.heatMapMax,
                min: 0,
                data: points
              });
            }
            //반복문으로 빼내야함.
            for (let i = 0; i < pages.length; i++) {
              let temppage = i + 1;
              drawHeatmapTemp(temppage);
              const imageArrayBufferHeat = (0, _util.getCanvasImagePngBuffer)(heatmapcanvas);
              const heatmapBuffer = imageArrayBufferHeat;
              const pngImageHeat = await pdfDoc.embedPng(heatmapBuffer); //오리지날 이미지
              // console.log("pngImageHeat",pngImageHeat)
              const {
                width: pw
                // , height: ph 
              } = pngImageHeat;
              // console.log("@사진",pw,ph);
              // console.log("@PDF",cw,ch);

              const pngDimsHeat = pngImageHeat.scale(cw / pw); //스케일된 이미지
              pages[i].drawImage(pngImageHeat, {
                // x: newpage.getWidth() / 2 - pngDims.width / 2,
                // y: newpage.getHeight() / 2 - pngDims.height / 2,
                // x: newpage.getWidth()- pngDims.width ,
                x: 0,
                y: height - pngDimsHeat.height,
                width: pngDimsHeat.width,
                height: pngDimsHeat.height
              });
            }
            tempIndexRef.current.needClear = true;
            resaveConfig();
            // console.log("했어");
          } else {
            // console.log("없어")
          }
        }
      }

      //페이지마다 시선데이터 기록.
      let prevx = null;
      let prevy = null;
      let osx = offsetX * 1;
      let osy = offsetY * 1;
      const gazeData = data.gazeData;
      let size = chartOption.RPOG_size * 2 / 100;
      let r = cw * 0.01 * size;
      //draw rawData
      for (let i = 0; chartOption.RPOG && i < gazeData.length; i++) {
        let d = gazeData[i];
        if (d.pdfx && d.pdfy) {
          if (r) {
            if (prevx && prevy) {
              pages[d.pageNum - 1].drawLine({
                start: {
                  x: (prevx + osx) * cw,
                  y: height - (prevy + osy) * ch
                },
                end: {
                  x: (d.pdfx + osx) * cw,
                  y: height - (d.pdfy + osy) * ch
                },
                color: (0, _pdfLib.rgb)(1, 0, 0),
                opacity: 0.3,
                borderOpacity: 0.3,
                thickness: 1
              });
            } //선먼저 그린후 그리기

            pages[d.pageNum - 1].drawCircle({
              x: (d.pdfx + osx) * cw,
              y: height - (d.pdfy + osy) * ch,
              size: r,
              borderWidth: 1,
              // borderDashArray: [1],
              // borderDashPhase: 25,
              borderColor: (0, _pdfLib.rgb)(1, 0, 0),
              borderOpacity: 0.3,
              // fill:rgb(1,0,0)
              color: (0, _pdfLib.rgb)(1, 0, 0),
              opacity: 0.3
              // borderColor: cmyk(0, 0, 0, 1), //blue red yeloow
              // borderLineCap: LineCapStyle.Round,
            });
          }
          prevx = d.pdfx;
          prevy = d.pdfy;
        }
      }

      //draw Fixation
      let fr = cw * chartOption.FPOG_size * 1.5 / 10000;
      prevx = null;
      prevy = null;
      for (let i = 0; chartOption.FPOG && i < fixationData.length; i++) {
        const f = fixationData[i];
        const fixationColor = chartOption.rainBow ? (0, _pdfLib.rgb)(fixationData[i].color.r / 255, fixationData[i].color.g / 255, fixationData[i].color.b / 255) : (0, _pdfLib.rgb)(0, 1, 0);
        if (fr) {
          if (f.count >= minFixationCount) {
            //선그리기...
            if (prevx && prevy) {
              pages[f.pageNum_s - 1].drawLine({
                start: {
                  x: (prevx + osx) * cw,
                  y: height - (prevy + osy) * ch
                },
                end: {
                  x: (f.x + osx) * cw,
                  y: height - (f.y + osy) * ch
                },
                color: fixationColor,
                opacity: chartOption.FPOG_opacity * 1,
                borderOpacity: chartOption.FPOG_opacity * 1,
                thickness: 1
              });
            }

            //원그리기 fixation
            let fsize = fr * Math.sqrt(f.count);
            pages[f.pageNum_s - 1].drawCircle({
              x: (f.x + osx) * cw,
              y: height - (f.y + osy) * ch,
              size: fsize,
              borderWidth: 1,
              // borderDashArray: [1],
              // borderDashPhase: 25,
              borderColor: fixationColor,
              borderOpacity: chartOption.FPOG_opacity * 1,
              // fill:rgb(1,0,0)
              // color: rgb(0, 1, 0),
              color: fixationColor,
              opacity: chartOption.FPOG_opacity * 1
              // borderColor: cmyk(0, 0, 0, 1), //blue red yeloow
              // borderLineCap: LineCapStyle.Round,
            });
            prevx = f.x;
            prevy = f.y;
          }
        }

        // }
      }
      //draw pencil
      let startdrawX, startdrawY;
      for (let i = 0; chartOption.penPermit && i < gazeData.length; i++) {
        let d = gazeData[i];
        const {
          pageNum
        } = d;
        const draw = gazeData[i].draw;
        if (!draw) {
          continue;
        }
        // console.log("t",t);

        if (d.relTime * 1 <= nowTime * 1) {
          // console.log("그려")

          // rctx.lineWidth = 0.5;
          // rctx.strokeStyle = 'red';
          // rctx.fillStyle = 'red';
          if (draw.type === 'startDrawing') {
            startdrawX = draw.x;
            startdrawY = draw.y;
            // rctx.beginPath();
            // rctx.moveTo(draw.x * cw, draw.y * ch);
          } else if (draw.type === 'draw') {
            //hexToRgb(chartOption.penColor)
            let rgbobj = (0, _util.hexToRgb)(chartOption.penColor);
            // console.log("rgbobj",rgbobj)
            if (startdrawX && startdrawY) {
              // rctx.lineTo(draw.x * cw, draw.y * ch);
              // rctx.stroke();
              // testdata.push(draw);
              pages[pageNum - 1].drawLine({
                start: {
                  x: startdrawX * cw,
                  y: height - startdrawY * ch
                },
                end: {
                  x: draw.x * cw,
                  y: height - draw.y * ch
                },
                color: rgbobj ? (0, _pdfLib.rgb)(rgbobj.r / 255, rgbobj.g / 255, rgbobj.b / 255) : '#0000FF',
                // 여기 rgb 로
                opacity: 1,
                borderOpacity: 0.3,
                thickness: (chartOption.penWeight / 2).toFixed(0) * 1 || 1
              });
              startdrawX = draw.x;
              startdrawY = draw.y;
            } else {
              // startdrawX = draw.x * cw;
              // startdrawY = draw.y * ch;
              // rctx.beginPath();
              // rctx.moveTo(draw.x * cw, draw.y * ch);

              startdrawX = draw.x;
              startdrawY = draw.y;
            }
          } else if (draw.type === 'stopDrawing') {
            // rctx.closePath();
            startdrawX = null;
            startdrawY = null;
          }
        }
      }

      //PDF 맨앞 표지 만들기
      //////새로운패이지 생성
      const newPage = pdfDoc.insertPage(0, [width, height]);
      const fontSize = 15;
      const title = "자유글 읽기 진단 결과";
      const titleFontSize = 25;
      const customFont = await pdfDoc.embedFont(fontBytes);
      const textWidth = customFont.widthOfTextAtSize(title, titleFontSize);
      newPage.drawText(title, {
        x: width / 2 - textWidth / 2,
        y: height * 3 / 5 - 1 * titleFontSize,
        size: titleFontSize,
        font: customFont,
        color: (0, _pdfLib.rgb)(0, 0, 0)
      });
      const topMargin = 15;
      const textMarginTop = 5;
      const textMarginLeft = 15;
      let keycount = 1;
      // const textWidth = customFont.widthOfTextAtSize(text, textSize)
      // const textHeight = customFont.heightAtSize(textSize)
      for (let key in printPDFData) {
        newPage.drawText("".concat(key, " : ") + printPDFData[key], {
          x: textMarginLeft,
          y: -topMargin - textMarginTop * keycount + height - keycount * fontSize,
          size: fontSize,
          font: customFont,
          color: (0, _pdfLib.rgb)(0, 0, 0)
        });
        keycount++;
      }
      const agencyNametextWidth = customFont.widthOfTextAtSize(agencyName, 25);

      // console.log("printPDFData['agencyName']",printPDFData['agencyName'])
      newPage.drawText(agencyName, {
        x: width / 2 - agencyNametextWidth / 2,
        y: -textMarginTop * (keycount + 3) + height * 3 / 8 - (keycount + 3) * fontSize,
        size: 25,
        font: customFont,
        color: (0, _pdfLib.rgb)(0, 0, 0)
      });
      newPage.drawImage(pngLogoImage, {
        x: width / 2 - pngDims.width / 2,
        y: -textMarginTop * (keycount + 3) + height * 3 / 8 - keycount * fontSize,
        width: pngDims.width,
        height: pngDims.height
      });
      /////////////PDF 맨앞페이지 생성끝////////

      /////////////저장 다운로드/////////////
      const pdfBytes = await pdfDoc.save({
        updateFieldAppearances: false
      });
      const blob = new Blob([pdfBytes], {
        type: 'application/pdf'
      });
      const blobURL = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobURL;
      link.download = downloadFileName;
      document.body.append(link);
      link.click();
      set_loading(false);
      link.remove();
      setTimeout(() => URL.revokeObjectURL(link.href), 7000);
    } catch (err) {
      // console.log("에러",err)
      alert(err);
    }
  };
  const handlePDFonloadCallback = pageNum => {
    // console.log("@PDFonloadCallback", pageNum)
    if (PDFonloadCallback) {
      PDFonloadCallback(pageNum);
    }
    set_pdfrenderDone(true);
  };
  const handlePageCallback = p => {
    // console.log("@pageCallback", p);
    // if(nowPage!==p){
    //     set_nowPage(p);
    // }
    //@@@@@@ handlePDFsizeCallback보다 빨리옴.
    //랜더가 끝나지 않음
  };

  //PDF 사이즈 바뀔때마다 콜백옴
  const handlePDFsizeCallback = d => {
    // console.log("d",d)
    //랜더가 끝났기때문에 pdf 사이즈를 알수 있음
    set_nowPDFviewInform(_objectSpread(_objectSpread({}, d.PDF), {}, {
      nowPage: d.pageNumber,
      height_devided_width_ratio: d.height_devided_width_ratio
    }));
  };

  //뷰 퍼센트가 바뀔때마다 콜백이옴
  const handleViewPercentCallback = newViewPercent => {
    if (!tempIndexRef.current) return;
    if (!tempIndexRef.current.prevViewPercent) {
      tempIndexRef.current.prevViewPercent = newViewPercent;
    } else {
      if (tempIndexRef.current.prevViewPercent !== newViewPercent) {
        tempIndexRef.current.prevViewPercent = newViewPercent;
        set_tempViewPercent(newViewPercent);
      }
    }
  };
  const [toggleIndex, set_toggleIndex] = (0, _react.useState)(1);
  const [pdfRenderDone, set_pdfrenderDone] = (0, _react.useState)(false);
  const isPossiblePDFDownload = (0, _react.useMemo)(() => {
    if (isPlaying || !jejuFontArrayBuffer || !pdfArrayBuffer || !readersEyeLogoArrayBuffer || !pdfRenderDone || !chartOption) {
      // console.log("확인@@@");
      // console.log(jejuFontArrayBuffer);
      // console.log(pdfArrayBuffer);
      // console.log(readersEyeLogoArrayBuffer);

      return false;
    } else {
      return true;
    }
  }, [jejuFontArrayBuffer, pdfArrayBuffer, readersEyeLogoArrayBuffer, pdfRenderDone, chartOption, isPlaying]);
  (0, _react.useEffect)(() => {
    if (isPlaying) {
      if (chartOption.heatMap) {
        set_isPlaying(false);
        set_toggleIndex(2);
        chartOption.RPOG = false;
        chartOption.heatMap = true;
        chartOption.FPOG = false;
        chartOption.rainBow = false;
        resaveConfig();
      }
    }
  }, [isPlaying, chartOption, resaveConfig]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "PDFresultModal",
    onClick: () => {
      set_showConfig(false);
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ResultWrap",
    style: {
      width: isfullscreen ? '100%' : specialWidth,
      height: isfullscreen ? '100%' : specialHeight,
      minWidth: isfullscreen ? '100%' : specialWidth
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "marginWrap"
  }, /*#__PURE__*/_react.default.createElement(_controller.RemoconController, {
    fd_inform: fd_inform,
    handleTryPrint: handleTryPrint,
    isPossiblePDFDownload: isPossiblePDFDownload,
    offsetX: offsetX,
    offsetY: offsetY,
    hideController: hideController,
    set_offsetX: set_offsetX,
    set_offsetY: set_offsetY,
    originViewPercent: originViewPercent
  }), /*#__PURE__*/_react.default.createElement("div", {
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
    ref: pdfviewref
    // WORKERSRC={WORKERSRC || "http://localhost:3000"}
    ,
    PDFonloadCallback: handlePDFonloadCallback,
    showConfirmBtn: showConfirmBtn,
    onConfirm: onConfirm,
    onClose: onClose,
    showViewMode: isPlaying && followEvent ? false : true,
    path: path,
    viewpercent: tempViewPercent,
    pageCallback: handlePageCallback,
    pdfSizeCallback: handlePDFsizeCallback,
    viewPercentChangeCallback: handleViewPercentCallback
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "playbarWrapper no-drag"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "rangePlayWrapper"
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "rangePlay",
    type: "range",
    step: "0.01",
    value: nowTime,
    max: endTime,
    min: "0",
    onChange: e => {
      e.stopPropagation();
      set_nowTime(e.target.value * 1);
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "rangeBtnWrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "leftBtnWrap"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    className: isPlaying ? "playBtn playing" : "playBtn",
    onClick: handleTogglePlay
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "GC-TimeWrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "nowTimeWrapper"
  }, nowTime.toFixed(2)), /*#__PURE__*/_react.default.createElement("div", {
    className: "endTimeWrapper"
  }, "\xA0/\xA0", endTime.toFixed(2)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "rightBtnWrap"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "toggleBtn",
    style: {
      height: 48
    }
    // data-tip="뷰 스타일을 바꿀수 있습니다"
  }, /*#__PURE__*/_react.default.createElement(_MultipleToggle.default, {
    selBtnIndex: toggleIndex,
    btnArr: [{
      Label: '응시',
      onClick: () => {
        set_toggleIndex(0);
        chartOption.RPOG = false;
        chartOption.heatMap = false;
        chartOption.FPOG = true;
        chartOption.rainBow = false;
        resaveConfig();
      }
    }, {
      Label: '순서',
      onClick: () => {
        set_toggleIndex(1);
        chartOption.RPOG = false;
        chartOption.heatMap = false;
        chartOption.FPOG = true;
        chartOption.rainBow = true;
        resaveConfig();
      }
    }, {
      Label: '히트맵',
      onClick: () => {
        set_toggleIndex(2);
        chartOption.RPOG = false;
        chartOption.heatMap = true;
        chartOption.FPOG = false;
        resaveConfig();
      }
    }]
  })), /*#__PURE__*/_react.default.createElement("button", {
    className: "showControllerBtn ".concat(!hideController && 'selected'),
    "data-tip": "\uC81C\uC5B4\uD310 \uBCF4\uAE30",
    onClick: () => {
      set_hideController(h => !h);
    }
  }, /*#__PURE__*/_react.default.createElement(_svg.RemoconSVG, null)), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "configBtn ".concat(showConfig && 'selected'),
    "data-tip": "\uC124\uC815",
    onClick: e => {
      e.stopPropagation();
      set_showConfig(c => !c);
    }
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: showConfig ? "configArea config selected" : "configArea config",
    style: {
      enableBackground: "new 0 0 24 24"
    },
    fill: "currentColor",
    version: "1.1",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, /*#__PURE__*/_react.default.createElement("g", null), /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    d: "M22.2,14.4L21,13.7c-1.3-0.8-1.3-2.7,0-3.5l1.2-0.7c1-0.6,1.3-1.8,0.7-2.7l-1-1.7c-0.6-1-1.8-1.3-2.7-0.7   L18,5.1c-1.3,0.8-3-0.2-3-1.7V2c0-1.1-0.9-2-2-2h-2C9.9,0,9,0.9,9,2v1.3c0,1.5-1.7,2.5-3,1.7L4.8,4.4c-1-0.6-2.2-0.2-2.7,0.7   l-1,1.7C0.6,7.8,0.9,9,1.8,9.6L3,10.3C4.3,11,4.3,13,3,13.7l-1.2,0.7c-1,0.6-1.3,1.8-0.7,2.7l1,1.7c0.6,1,1.8,1.3,2.7,0.7L6,18.9   c1.3-0.8,3,0.2,3,1.7V22c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2v-1.3c0-1.5,1.7-2.5,3-1.7l1.2,0.7c1,0.6,2.2,0.2,2.7-0.7l1-1.7   C23.4,16.2,23.1,15,22.2,14.4z M12,16c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4s4,1.8,4,4C16,14.2,14.2,16,12,16z"
  })))), chartOption && /*#__PURE__*/_react.default.createElement(_controller.ConfigController, {
    resaveConfig: resaveConfig,
    showConfig: showConfig,
    ChartOption: chartOption,
    set_followEvent: set_followEvent,
    followEvent: followEvent,
    autoReplay: autoReplay,
    set_autoReplay: set_autoReplay
  })), /*#__PURE__*/_react.default.createElement("button", {
    className: "fullScreenBtn ".concat(isfullscreen ? 'fullscreenstate' : ''),
    "data-tip": "\uC804\uCCB4\uD654\uBA74",
    onClick: handleFullScreen
  }, isfullscreen ? /*#__PURE__*/_react.default.createElement("svg", {
    version: "1.1",
    viewBox: "0 0 36 36",
    fill: "currentColor"
  }, /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    d: "m 14,14 -4,0 0,2 6,0 0,-6 -2,0 0,4 0,0 z"
  })), /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    d: "m 22,14 0,-4 -2,0 0,6 6,0 0,-2 -4,0 0,0 z"
  })), /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    d: "m 20,26 2,0 0,-4 4,0 0,-2 -6,0 0,6 0,0 z"
  })), /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    d: "m 10,22 4,0 0,4 2,0 0,-6 -6,0 0,2 0,0 z"
  }))) : /*#__PURE__*/_react.default.createElement("svg", {
    version: "1.1",
    viewBox: "0 0 36 36",
    fill: "currentColor"
  }, /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    d: "m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z"
  })), /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    d: "m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z"
  })), /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    d: "m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z"
  })), /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    d: "M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z"
  })))))))))), loading === true && /*#__PURE__*/_react.default.createElement("div", {
    id: "loadingWrapper",
    style: {
      position: "fixed",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.7)",
      top: 0,
      left: 0,
      zIndex: "20000"
    }
  }, /*#__PURE__*/_react.default.createElement(_reactSpinnersCss.Ring, {
    color: "#145894"
  })), /*#__PURE__*/_react.default.createElement(_reactTooltip.default, {
    className: "highz",
    borderClass: "custom-tooltip-design",
    effect: "solid"
    // delayShow="100"
    ,
    backgroundColor: "rgb(210,210,210)",
    textColor: "black",
    border: true
  }));
};
var _default = exports.default = PDFresultModal;
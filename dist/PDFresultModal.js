"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

var _readereyelogo = _interopRequireDefault(require("./img/readereyelogo.png"));

var _JejuMyeongjo = _interopRequireDefault(require("./font/JejuMyeongjo.ttf"));

var _util = require("./util");

var _controller = require("./controller");

var _svg = require("./svg");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PDFresultModal = function PDFresultModal(_ref) {
  var props = _extends({}, _ref);

  var WORKERSRC = props.WORKERSRC,
      onClose = props.onClose,
      path = props.path,
      viewpercent = props.viewpercent,
      data = props.data,
      specialWidth = props.specialWidth,
      specialHeight = props.specialHeight,
      onConfirm = props.onConfirm,
      showConfirmBtn = props.showConfirmBtn,
      printPDFData = props.printPDFData,
      downloadFileName = props.downloadFileName,
      PDFonloadCallback = props.PDFonloadCallback,
      penweight = props.penweight,
      pencolor = props.pencolor,
      penpermit = props.penpermit;
  var topRef = (0, _react.useRef)();
  var pdfviewref = (0, _react.useRef)();

  var _useState = (0, _react.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      nowPage = _useState2[0],
      set_nowPage = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      nowTime = _useState4[0],
      set_nowTime = _useState4[1];

  var endTime = (0, _react.useMemo)(function () {
    // console.log(data.gazeInform.maxTime);
    var lastTime = data.gazeData[data.gazeData.length - 1].relTime; // console.log("et",et);

    set_nowTime(lastTime);
    return lastTime;
  }, [data]);
  var originViewPercent = (0, _react.useMemo)(function () {
    return viewpercent;
  }, [viewpercent]); //리모콘

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      hideController = _useState6[0],
      set_hideController = _useState6[1]; //차트 옵션. 톱니바퀴


  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      showConfig = _useState8[0],
      set_showConfig = _useState8[1];

  var resaveConfig = function resaveConfig() {
    set_chartOption(JSON.parse(JSON.stringify(chartOption)));
  };

  var _useState9 = (0, _react.useState)({
    heatMap: true,
    heatMapMax: 40,
    heatMapRadius: 40,
    heatMapMaxOpacity: 0.7,
    RPOG: false,
    RPOG_size: 10,
    RPOG_line: false,
    FPOG: true,
    FPOG_size: 20,
    FPOG_line: true,
    FPOG_number: false,
    FPOG_number_size: 1.7,
    GazePastRange: 0,
    //0인경우 전체
    ChartPastRange: 20,
    //0인경우 전체
    playSpeed: 1,
    drawFPS: 30,
    penPermit: penpermit ? penpermit * 1 : 1,
    penColor: pencolor ? pencolor : '#FF0000',
    penWeight: penweight ? penweight : 1 //유저가 PDF에 펜으로 글씨 쓴것.

  }),
      _useState10 = _slicedToArray(_useState9, 2),
      chartOption = _useState10[0],
      set_chartOption = _useState10[1]; //문서내의 temp offset


  var _useState11 = (0, _react.useState)("0.00"),
      _useState12 = _slicedToArray(_useState11, 2),
      offsetX = _useState12[0],
      set_offsetX = _useState12[1];

  var _useState13 = (0, _react.useState)("0.00"),
      _useState14 = _slicedToArray(_useState13, 2),
      offsetY = _useState14[0],
      set_offsetY = _useState14[1]; //fixation 값들. fixationArr 만들때 쓰임개발때 쓰임.


  var _useState15 = (0, _react.useState)(1),
      _useState16 = _slicedToArray(_useState15, 1),
      fminx = _useState16[0];

  var _useState17 = (0, _react.useState)(1),
      _useState18 = _slicedToArray(_useState17, 1),
      fminy = _useState18[0];

  var fixationData = (0, _react.useMemo)(function () {
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
    } // console.log("fa", fa);


    return fa;
  }, [data, fminx, fminy]); //리사이즈시 스케일변수들

  var _useState19 = (0, _react.useState)(0.5),
      _useState20 = _slicedToArray(_useState19, 2),
      innerFrameScale = _useState20[0],
      set_innerFrameScale = _useState20[1];

  var _useState21 = (0, _react.useState)(0),
      _useState22 = _slicedToArray(_useState21, 2),
      innerFrameTop = _useState22[0],
      set_innerFrameTop = _useState22[1];

  var _useState23 = (0, _react.useState)(0),
      _useState24 = _slicedToArray(_useState23, 2),
      innerFrameLeft = _useState24[0],
      set_innerFrameLeft = _useState24[1]; //재생과 멈춤.


  var _useState25 = (0, _react.useState)(false),
      _useState26 = _slicedToArray(_useState25, 2),
      isPlaying = _useState26[0],
      set_isPlaying = _useState26[1]; //재생시 스크롤 따라갈것인가 옵션


  var _useState27 = (0, _react.useState)(true),
      _useState28 = _slicedToArray(_useState27, 1),
      followEvent = _useState28[0];

  var _useState29 = (0, _react.useState)(null),
      _useState30 = _slicedToArray(_useState29, 2),
      nowPDFviewInform = _useState30[0],
      set_nowPDFviewInform = _useState30[1];

  var _useState31 = (0, _react.useState)(3),
      _useState32 = _slicedToArray(_useState31, 1),
      minFixationCount = _useState32[0]; //전체화면


  var _useState33 = (0, _react.useState)(false),
      _useState34 = _slicedToArray(_useState33, 2),
      isfullscreen = _useState34[0],
      set_isfullscreen = _useState34[1]; //fixation Duration정보..옮기자, 콘트롤러로


  var fd_inform = (0, _react.useMemo)(function () {
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
  }, [fixationData, minFixationCount, endTime]); //리사이즈이벤트

  var resizeInnerFrame = _react.default.useCallback(function () {
    if (!topRef.current) return;
    setTimeout(function () {
      var max = (window.screen.height / window.devicePixelRatio).toFixed(0) * 1; // console.log("max:" + max);
      // console.log("window.innerHeight:" + window.innerHeight);

      if (isfullscreen) {
        if (max !== window.innerHeight) {
          set_isfullscreen(false);
        }
      }
    }, 150);
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
  }, [data, isfullscreen]);

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
    var playSpeed = chartOption.playSpeed,
        drawFPS = chartOption.drawFPS;
    var fpsInterval = 1000 / drawFPS;
    var myrequest;
    var startTime = Date.now();
    var then = startTime;

    function timeUpdate() {
      myrequest = window.requestAnimationFrame(timeUpdate);
      var now = Date.now();
      var elapsed = now - then; // console.log("fps", 1000 / elapsed);

      if (elapsed > fpsInterval) {
        then = now - elapsed % fpsInterval;
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
    }

    if (isPlaying === true) {
      timeUpdate();
    } else {
      window.cancelAnimationFrame(myrequest);
    }

    return function () {
      window.cancelAnimationFrame(myrequest);
    };
  }, [isPlaying, endTime, chartOption]); //툴팁


  _react.default.useEffect(function () {
    _reactTooltip.default.rebuild();
  }); //그리기


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
    var size = chartOption.RPOG_size * 2 / 100;
    var r = cw * 0.01 * size; // console.log("지워");

    rctx.clearRect(0, 0, cw, ch);
    var gazeData = data.gazeData;
    var pT = chartOption.GazePastRange; // console.log("gazeData",gazeData)
    // //비율계산필요
    // //cw,ch는 지금의 사이즈고
    // //기록된 

    var prevx = null;
    var prevy = null; // let prevp = null;
    //draw rawdata

    for (var i = 0; chartOption.RPOG && i < gazeData.length; i++) {
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
            if (chartOption.RPOG_line && prevx && prevy) {
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


    var fr = cw * 0.01 * chartOption.FPOG_size * 1.5 / 100;
    prevx = null;
    prevy = null;

    for (var _i2 = 0; chartOption.FPOG && _i2 < fixationData.length; _i2++) {
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
            if (chartOption.FPOG_line && prevx && prevy) {
              rctx.beginPath();
              rctx.lineWidth = 0.5;
              rctx.strokeStyle = 'green';
              rctx.fillStyle = 'green';
              rctx.moveTo(prevx * cw, prevy * ch);
              rctx.lineTo(f.x * cw, f.y * ch);
              rctx.stroke();
              rctx.closePath();
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
              rctx.closePath();
            } else {
              // 작게 그려
              var ratio = (nowTime - f.relTime_s) / (f.relTime_e - f.relTime_s);
              rctx.beginPath();
              rctx.lineWidth = 0.5;
              rctx.strokeStyle = 'rgb(0,0,255,0.3)';
              rctx.fillStyle = 'rgb(0,0,255,0.3)';
              rctx.arc(f.x * cw, f.y * ch, fsize * ratio, 0, Math.PI * 2);
              rctx.fill();
              rctx.closePath();
            }

            if (chartOption.FPOG_number === true) {
              rctx.beginPath();
              rctx.strokeStyle = "black";
              rctx.fillStyle = "black";
              rctx.lineWidth = 1;
              rctx.font = cw / 100 * chartOption.FPOG_number_size + "px Arial";
              rctx.textAlign = "center";
              rctx.textBaseline = "middle";
              rctx.fillText(f.fixationNumber, f.x * cw, f.y * ch);
              rctx.stroke();
            }

            prevx = f.x;
            prevy = f.y;
          }
        }
      }
    } //draw pencil


    var startdrawX, startdrawY; // console.log("chartOption.penPermit",chartOption.penPermit)

    for (var _i3 = 0; chartOption.penPermit * 1 && _i3 < gazeData.length; _i3++) {
      var _d2 = gazeData[_i3];
      var pageNum = _d2.pageNum;
      var draw = gazeData[_i3].draw; // if (pT) {
      //     if (d.relTime < (nowTime - pT)) {
      //         continue;
      //     }
      // }

      if (!draw) {
        continue;
      } // console.log("t",t);


      if (_d2.relTime * 1 <= nowTime * 1) {
        // console.log("그려")
        if (nowPage === pageNum) {
          rctx.lineWidth = (chartOption.penWeight * 1).toFixed(0) * 1;
          rctx.strokeStyle = chartOption.penColor;
          rctx.fillStyle = chartOption.penColor;

          if (draw.type === 'startDrawing') {
            // console.log("draw", draw);
            // console.log("그리기시작");
            startdrawX = draw.x * cw;
            startdrawY = draw.y * ch;
            rctx.beginPath();
            rctx.moveTo(draw.x * cw, draw.y * ch); // testdata.push(draw);
          } else if (draw.type === 'draw') {
            if (startdrawX && startdrawY) {
              rctx.lineTo(draw.x * cw, draw.y * ch);
              rctx.stroke(); // testdata.push(draw);
            } else {
              startdrawX = draw.x * cw;
              startdrawY = draw.y * ch;
              rctx.beginPath();
              rctx.moveTo(draw.x * cw, draw.y * ch);
            }
          } else if (draw.type === 'stopDrawing') {
            rctx.closePath();
          }
        }
      }
    }
  }, [data, nowTime, nowPage, chartOption, nowPDFviewInform, fixationData, minFixationCount]); //PDF 스크롤과 page 이동기록을 따라가는 함수


  var handlePDFmoveEvent = _react.default.useCallback(function () {
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
      handlePDFmoveEvent();
    }
  }, [handlePDFmoveEvent, followEvent]);

  _react.default.useEffect(function () {
    handleDraw();
  }, [handleDraw]); //PDF writing 할때 쓰는것들임. 분리 필요


  var _useState35 = (0, _react.useState)(null),
      _useState36 = _slicedToArray(_useState35, 2),
      jejuFontArrayBuffer = _useState36[0],
      set_jejuFontArrayBuffer = _useState36[1];

  _react.default.useEffect(function () {
    (0, _util.getFileAsArrayBuffer)(_JejuMyeongjo.default).then(function (res_arrbuffer) {
      set_jejuFontArrayBuffer(res_arrbuffer);
    });
  }, []); //path값에 따라서 PDFarraybuffer 보관


  var _useState37 = (0, _react.useState)(null),
      _useState38 = _slicedToArray(_useState37, 2),
      pdfArrayBuffer = _useState38[0],
      set_pdfArrayBuffer = _useState38[1];

  _react.default.useEffect(function () {
    if (!path) return;
    fetch(path).then( /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(res) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", res.arrayBuffer());

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()).then( /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(buffer) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                set_pdfArrayBuffer(buffer);

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
  }, [path]);

  var _useState39 = (0, _react.useState)(null),
      _useState40 = _slicedToArray(_useState39, 2),
      readersEyeLogoArrayBuffer = _useState40[0],
      set_readersEyeLogoArrayBuffer = _useState40[1];

  _react.default.useEffect(function () {
    fetch(_readereyelogo.default).then(function (r) {
      return r.arrayBuffer();
    }).then(function (buf) {
      set_readersEyeLogoArrayBuffer(buf);
    });
  }, []);

  var handleFullScreen = function handleFullScreen() {
    if (isfullscreen) {
      (0, _util.closeFullscreen)();
    } else {
      var max = (window.screen.height / window.devicePixelRatio).toFixed(0) * 1;

      if (max !== window.innerHeight) {
        (0, _util.openFullScreen)();
        set_isfullscreen(true);
      }
    }
  }; //pdf 인쇄


  var handleTryPrint = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var fontBytes, existingPdfBytes, pdfDoc, pages, firstPage, _firstPage$getSize, width, height, cw, ch, prevx, prevy, pngImageBytes, pngImage, pngDims, i, gazeData, size, r, _i4, d, fr, _i5, f, fsize, startdrawX, startdrawY, _i6, _d3, pageNum, draw, rgbobj, newPage, fontSize, title, titleFontSize, customFont, textWidth, topMargin, textMarginTop, textMarginLeft, keycount, key, pdfBytes, blob, blobURL, link;

      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (data) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              //폰트파일 할당
              fontBytes = jejuFontArrayBuffer; // let pdfDoc;

              existingPdfBytes = pdfArrayBuffer; //PDF 버퍼

              _context3.next = 6;
              return _pdfLib.PDFDocument.load(existingPdfBytes, {
                ignoreEncryption: true
              });

            case 6:
              pdfDoc = _context3.sent;
              // console.log("registerFontkit");
              pdfDoc.registerFontkit(_fontkit.default); // console.log("registerFontkitend");
              // Embed the Helvetica font
              // const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
              // Get the first page of the document
              // console.log("pdfDoc", pdfDoc);
              // const pageIndices = pdfDoc.getPageIndices();
              // console.log("pageIndices",pageIndices);

              if (!pdfDoc.isEncrypted) {
                _context3.next = 11;
                break;
              }

              alert("수정금지된 PDF 파일이라 다운로드할 수 없습니다. 수정금지 해제 후 재등록해 주시기 바랍니다. 수정금지 해지하기 (https://smallpdf.com/unlock-pdf).");
              return _context3.abrupt("return");

            case 11:
              pages = pdfDoc.getPages();
              firstPage = pages[0]; // Get the width and height of the first page

              _firstPage$getSize = firstPage.getSize(), width = _firstPage$getSize.width, height = _firstPage$getSize.height;
              cw = width;
              ch = height;
              prevx = null;
              prevy = null; //페이지별로 마크 넣을것
              // console.log("바이트 가능?")
              //이미지 준비~~~~~~
              // const pngImageBytes=Uint8Array.from(atob(base64img['리더스아이로고']), c => c.charCodeAt(0))
              // const pngImageBytes = _base64ToArrayBuffer(base64img['리더스아이로고']);
              // const pngImageBytes = await fetch(readerseyelogo).then(r=>r.arrayBuffer());

              pngImageBytes = readersEyeLogoArrayBuffer; //base64를 Bytes 로 변환

              _context3.next = 21;
              return pdfDoc.embedPng(pngImageBytes);

            case 21:
              pngImage = _context3.sent;
              pngDims = pngImage.scale(0.05);

              for (i = 0; i < pages.length; i++) {
                pages[i].drawImage(pngImage, {
                  // x: newpage.getWidth() / 2 - pngDims.width / 2,
                  // y: newpage.getHeight() / 2 - pngDims.height / 2,
                  // x: newpage.getWidth()- pngDims.width ,
                  x: 5,
                  y: -5 + height - pngDims.height,
                  width: pngDims.width,
                  height: pngDims.height
                });
              }

              gazeData = data.gazeData;
              size = chartOption.RPOG_size * 2 / 100;
              r = cw * 0.01 * size; //draw rawData

              for (_i4 = 0; chartOption.RPOG && _i4 < gazeData.length; _i4++) {
                d = gazeData[_i4]; // console.log("t",t);
                // if (d.relTime * 1 <= nowTime * 1) {

                if (d.pdfx && d.pdfy) {
                  // console.log("그려")
                  if (r) {
                    if (prevx && prevy) {
                      pages[d.pageNum - 1].drawLine({
                        start: {
                          x: prevx * cw,
                          y: height - prevy * ch
                        },
                        end: {
                          x: d.pdfx * cw,
                          y: height - d.pdfy * ch
                        },
                        color: (0, _pdfLib.rgb)(1, 0, 0),
                        opacity: 0.3,
                        borderOpacity: 0.3,
                        thickness: 1
                      });
                    } //선먼저 그린후 그리기


                    pages[d.pageNum - 1].drawCircle({
                      x: d.pdfx * cw,
                      y: height - d.pdfy * ch,
                      size: r,
                      borderWidth: 1,
                      // borderDashArray: [1],
                      // borderDashPhase: 25,
                      borderColor: (0, _pdfLib.rgb)(1, 0, 0),
                      borderOpacity: 0.3,
                      // fill:rgb(1,0,0)
                      color: (0, _pdfLib.rgb)(1, 0, 0),
                      opacity: 0.3 // borderColor: cmyk(0, 0, 0, 1), //blue red yeloow
                      // borderLineCap: LineCapStyle.Round,

                    }); // rctx.beginPath();
                    // rctx.lineWidth = 0.5;
                    // rctx.strokeStyle = 'rgb(255,0,0,0.3)';
                    // rctx.fillStyle = 'rgb(255,0,0,0.3)';
                    // rctx.arc((d.pdfx) * cw, (d.pdfy) * ch, r, 0, Math.PI * 2);
                    // rctx.fill();
                  } // prevp = d.pageNum


                  prevx = d.pdfx;
                  prevy = d.pdfy;
                } // }

              } //draw Fixation


              fr = cw * 0.01 * chartOption.FPOG_size * 1.5 / 100;
              prevx = null;
              prevy = null;

              for (_i5 = 0; chartOption.FPOG && _i5 < fixationData.length; _i5++) {
                f = fixationData[_i5]; // if (f.relTime_s * 1 <= nowTime * 1) {

                if (fr) {
                  if (f.count >= minFixationCount) {
                    //선그리기...
                    if (prevx && prevy) {
                      pages[f.pageNum_s - 1].drawLine({
                        start: {
                          x: prevx * cw,
                          y: height - prevy * ch
                        },
                        end: {
                          x: f.x * cw,
                          y: height - f.y * ch
                        },
                        color: (0, _pdfLib.rgb)(0, 1, 0),
                        opacity: 0.3,
                        borderOpacity: 0.3,
                        thickness: 1
                      });
                    } //원그리기 fixation


                    fsize = fr * Math.sqrt(f.count);
                    pages[f.pageNum_s - 1].drawCircle({
                      x: f.x * cw,
                      y: height - f.y * ch,
                      size: fsize,
                      borderWidth: 1,
                      // borderDashArray: [1],
                      // borderDashPhase: 25,
                      borderColor: (0, _pdfLib.rgb)(0, 1, 0),
                      borderOpacity: 0.3,
                      // fill:rgb(1,0,0)
                      color: (0, _pdfLib.rgb)(0, 1, 0),
                      opacity: 0.3 // borderColor: cmyk(0, 0, 0, 1), //blue red yeloow
                      // borderLineCap: LineCapStyle.Round,

                    });
                    prevx = f.x;
                    prevy = f.y;
                  }
                } // }

              } //draw pencil


              _i6 = 0;

            case 33:
              if (!(chartOption.penPermit && _i6 < gazeData.length)) {
                _context3.next = 43;
                break;
              }

              _d3 = gazeData[_i6];
              pageNum = _d3.pageNum;
              draw = gazeData[_i6].draw;

              if (draw) {
                _context3.next = 39;
                break;
              }

              return _context3.abrupt("continue", 40);

            case 39:
              // console.log("t",t);
              if (_d3.relTime * 1 <= nowTime * 1) {
                // console.log("그려")
                // rctx.lineWidth = 0.5;
                // rctx.strokeStyle = 'red';
                // rctx.fillStyle = 'red';
                if (draw.type === 'startDrawing') {
                  startdrawX = draw.x;
                  startdrawY = draw.y; // rctx.beginPath();
                  // rctx.moveTo(draw.x * cw, draw.y * ch);
                } else if (draw.type === 'draw') {
                  //hexToRgb(chartOption.penColor)
                  rgbobj = (0, _util.hexToRgb)(chartOption.penColor); // console.log("rgbobj",rgbobj)

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
                      //#@! 여기 rgb 로
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

            case 40:
              _i6++;
              _context3.next = 33;
              break;

            case 43:
              //////새로운패이지 생성
              newPage = pdfDoc.insertPage(0, [width, height]);
              fontSize = 15;
              title = "Pathway 시선추적 측정 결과";
              titleFontSize = 25;
              _context3.next = 49;
              return pdfDoc.embedFont(fontBytes);

            case 49:
              customFont = _context3.sent;
              // const HelveticaFont =await pdfDoc.embedFont(StandardFonts.Helvetica); 
              textWidth = customFont.widthOfTextAtSize(title, titleFontSize); // const textHeight = customFont.heightAtSize(titleFontSize);
              //printPDFData

              newPage.drawText(title, {
                x: width / 2 - textWidth / 2,
                y: height * 3 / 5 - 1 * titleFontSize,
                size: titleFontSize,
                font: customFont,
                color: (0, _pdfLib.rgb)(0, 0, 0)
              });
              topMargin = 15;
              textMarginTop = 5;
              textMarginLeft = 15;
              keycount = 1; // const textWidth = customFont.widthOfTextAtSize(text, textSize)
              // const textHeight = customFont.heightAtSize(textSize)

              for (key in printPDFData) {
                newPage.drawText("".concat(key, " : ") + printPDFData[key], {
                  x: textMarginLeft,
                  y: -topMargin - textMarginTop * keycount + height - keycount * fontSize,
                  size: fontSize,
                  font: customFont,
                  color: (0, _pdfLib.rgb)(0, 0, 0)
                });
                keycount++;
              }

              newPage.drawImage(pngImage, {
                // x: newpage.getWidth() / 2 - pngDims.width / 2,
                // y: newpage.getHeight() / 2 - pngDims.height / 2,
                // x: newpage.getWidth()- pngDims.width ,
                x: width / 2 - pngDims.width / 2,
                y: -textMarginTop * (keycount + 3) + height * 3 / 8 - (keycount + 3) * fontSize,
                width: pngDims.width,
                height: pngDims.height
              }); /////////////저장 다운로드/////////////

              _context3.next = 60;
              return pdfDoc.save({
                updateFieldAppearances: false
              });

            case 60:
              pdfBytes = _context3.sent;
              blob = new Blob([pdfBytes], {
                type: 'application/pdf'
              });
              blobURL = URL.createObjectURL(blob);
              link = document.createElement('a');
              link.href = blobURL;
              link.download = downloadFileName;
              document.body.append(link);
              link.click();
              link.remove();
              setTimeout(function () {
                return URL.revokeObjectURL(link.href);
              }, 7000);

            case 70:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleTryPrint() {
      return _ref4.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "PDFresultModal",
    onClick: function onClick() {
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
    ref: pdfviewref,
    WORKERSRC: WORKERSRC || "http://localhost:3000",
    PDFonloadCallback: PDFonloadCallback ? PDFonloadCallback : function (pageNums) {//페이지수 콜백이 여기로옴
    },
    showConfirmBtn: showConfirmBtn,
    onConfirm: onConfirm,
    onClose: onClose,
    showViewMode: true,
    set_viewpercent: function set_viewpercent() {},
    path: path,
    viewpercent: viewpercent,
    pageCallback: function pageCallback(p) {
      // console.log("page콜백", p);
      set_nowPage(p);
    },
    pdfSizeCallback: function pdfSizeCallback(d) {
      // console.log("임시확인", d);
      set_nowPDFviewInform(d.PDF); // handleDraw();
    }
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
    onChange: function onChange(e) {
      return set_nowTime(e.target.value * 1);
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
    className: "flex",
    style: {
      width: 70,
      height: 48
    },
    "data-tip": "\uC751\uC2DC / \uD788\uD2B8\uB9F5 \uBCF4\uAE30 \uC120\uD0DD"
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "showControllerBtn ".concat(!hideController && 'selected'),
    "data-tip": "\uC81C\uC5B4\uD310 \uBCF4\uAE30",
    onClick: function onClick() {
      set_hideController(function (h) {
        return !h;
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_svg.RemoconSVG, null)), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "configBtn ".concat(showConfig && 'selected'),
    "data-tip": "\uC124\uC815",
    onClick: function onClick(e) {
      e.stopPropagation();
      set_showConfig(function (c) {
        return !c;
      });
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
  })))), /*#__PURE__*/_react.default.createElement(_controller.ConfigController, {
    resaveConfig: resaveConfig,
    showConfig: showConfig,
    ChartOption: chartOption
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
  })))))))))), /*#__PURE__*/_react.default.createElement(_reactTooltip.default, {
    className: "highz",
    borderClass: "custom-tooltip-design",
    effect: "solid" // delayShow="100"
    ,
    backgroundColor: "rgb(210,210,210)",
    textColor: "black",
    border: true
  }));
};

var _default = PDFresultModal;
exports.default = _default;
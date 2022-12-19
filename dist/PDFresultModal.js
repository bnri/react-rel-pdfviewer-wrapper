"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./PDFresultModal.scss");

var _reactRelPdfviewer = _interopRequireDefault(require("react-rel-pdfviewer"));

var _reactDraggable = _interopRequireDefault(require("react-draggable"));

var _pdfLib = require("pdf-lib");

var _fontkit = _interopRequireDefault(require("@pdf-lib/fontkit"));

var _PDF_file_icon = _interopRequireDefault(require("./PDF_file_icon.svg"));

var _reactTooltip = _interopRequireDefault(require("react-tooltip"));

var _readereyelogo = _interopRequireDefault(require("./readereyelogo.png"));

var _JejuMyeongjo = _interopRequireDefault(require("./JejuMyeongjo.ttf"));

var _excluded = ["onClose"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// console.log ("readerseyelogo",typeof readerseyelogo, readerseyelogo);
// console.log("jeju : ",typeof jeju, jeju);
function getFileAsArrayBuffer(importedfile) {
  return new Promise(function (resolve) {
    var oReq = new XMLHttpRequest();
    oReq.open('get', importedfile, true);
    oReq.responseType = 'arraybuffer';

    oReq.onload = function () {
      var arraybuffer = oReq.response; // console.log("blob",blob); 

      resolve(arraybuffer);
    };

    oReq.send();
  });
}

var FullScreenBtn = function FullScreenBtn(_ref) {
  var props = _extends({}, _ref);

  var isfullscreen = props.isfullscreen;

  var buttonRef = _react.default.useRef();

  var fullscreenModalRef = _react.default.useRef();

  var animationFromRef = _react.default.useRef();

  var animationToRef = _react.default.useRef();

  _react.default.useEffect(function () {
    var openFullScreen = function openFullScreen() {
      // 호출할때 javscript로 한것 f11말고
      var elem = document.documentElement;

      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        // Chrome, Safari & Opera 
        elem.webkitRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        // Firefox 
        elem.mozRequestFullScreen();
      } else if (elem.msRequestFullscreen) {
        // IE/Edge 
        elem.msRequestFullscreen();
      }
    };

    var closeFullscreen = function closeFullscreen() {
      // document.exitFullscreen 
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    };

    var animationTo = animationToRef.current,
        animationFrom = animationFromRef.current;
    var button = buttonRef.current;

    if (isfullscreen) {
      button.classList.remove("animated");
      animationTo.beginElement(); // console.log("bbbbbbb fullscreenMode 진입");

      var max = (window.screen.height / window.devicePixelRatio).toFixed(0) * 1;

      if (max !== window.innerHeight) {
        openFullScreen();
      }
    } else {
      // console.log("풀스크린해제");
      button.classList.add("animated");
      animationFrom.beginElement(); // console.log("aaaaaaa fullscreen해제");

      var _max = (window.screen.height / window.devicePixelRatio).toFixed(0) * 1;

      if (_max === window.innerHeight) {
        // 자바스크립트로 홀출했을때만 closeFUllscrenn 호출
        closeFullscreen(); // f11눌러서 전체화면인지 openFullScreen을 눌룬 전체화면인지 알 수가없다. 크롬보안상 f11누룬건 자바스크립트로풀수없다
      }
    }
  }, [isfullscreen, fullscreenModalRef]);

  return /*#__PURE__*/_react.default.createElement("div", {
    ref: buttonRef,
    style: {
      width: '20px',
      height: '20px',
      color: isfullscreen ? 'yellow' : 'white',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/_react.default.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "m 3.4285714,15.428571 -3.42857145,0 0,8.571429 8.57142905,0 0,-3.428571 -5.1428577,0 0,-5.142858 z M -5e-8,8.5714287 l 3.42857145,0 0,-5.1428573 5.1428577,0 L 8.5714291,0 -4.9999999e-8,0 l 0,8.5714287 z M 20.571428,20.571429 l -5.142857,0 0,3.428571 L 24,24 l 0,-8.571429 -3.428572,0 0,5.142858 z M 15.428571,2e-7 l 0,3.4285714 5.142857,0 0,5.1428571 3.428572,0 L 24,2e-7 l -8.571429,0 z"
  }, /*#__PURE__*/_react.default.createElement("animate", {
    ref: animationToRef,
    begin: "indefinite",
    fill: "freeze",
    attributeName: "d",
    dur: "0.15s",
    to: "m 5.0000001e-8,18.857143 5.14285695,0 0,5.142857 3.428572,0 0,-8.571429 -8.571428950000001,0 0,3.428572 z M 5.142857,5.1428572 l -5.14285695,0 0,3.4285714 8.571428949999999,0 0,-8.571428500000001 -3.428572,0 0,5.142857100000001 z M 15.428571,24 l 3.428572,0 0,-5.142857 5.142857,0 0,-3.428572 -8.571429,0 0,8.571429 z m 3.428572,-18.8571428 0,-5.1428571 -3.428572,0 0,8.5714285 8.571429,0 0,-3.4285714 -5.142857,0 z"
  }), /*#__PURE__*/_react.default.createElement("animate", {
    ref: animationFromRef,
    begin: "indefinite",
    fill: "freeze",
    attributeName: "d",
    dur: "0.15s",
    to: "m 3.4285714,15.428571 -3.42857145,0 0,8.571429 8.57142905,0 0,-3.428571 -5.1428577,0 0,-5.142858 z M -5e-8,8.5714287 l 3.42857145,0 0,-5.1428573 5.1428577,0 L 8.5714291,0 -4.9999999e-8,0 l 0,8.5714287 z M 20.571428,20.571429 l -5.142857,0 0,3.428571 L 24,24 l 0,-8.571429 -3.428572,0 0,5.142858 z M 15.428571,2e-7 l 0,3.4285714 5.142857,0 0,5.1428571 3.428572,0 L 24,2e-7 l -8.571429,0 z"
  }))));
};

var PDFresultModal = function PDFresultModal(_ref2) {
  var onClose = _ref2.onClose,
      props = _objectWithoutProperties(_ref2, _excluded);

  var WORKERSRC = props.WORKERSRC,
      path = props.path,
      viewpercent = props.viewpercent,
      data = props.data,
      specialWidth = props.specialWidth,
      specialHeight = props.specialHeight,
      onConfirm = props.onConfirm,
      showConfirmBtn = props.showConfirmBtn,
      printPDFData = props.printPDFData,
      downloadFileName = props.downloadFileName,
      PDFonloadCallback = props.PDFonloadCallback; // console.log("WORKERSRC",WORKERSRC);

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
      _React$useState6 = _slicedToArray(_React$useState5, 1),
      fminx = _React$useState6[0];

  var _React$useState7 = _react.default.useState(1),
      _React$useState8 = _slicedToArray(_React$useState7, 1),
      fminy = _React$useState8[0];

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

  var _React$useState21 = _react.default.useState(0),
      _React$useState22 = _slicedToArray(_React$useState21, 2),
      rawSize = _React$useState22[0],
      set_rawSize = _React$useState22[1];

  var _React$useState23 = _react.default.useState(32),
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
      _React$useState30 = _slicedToArray(_React$useState29, 1),
      minFixationCount = _React$useState30[0]; //콘트롤러


  var _React$useState31 = _react.default.useState(false),
      _React$useState32 = _slicedToArray(_React$useState31, 2),
      isFocus = _React$useState32[0],
      set_isFocus = _React$useState32[1];

  var _React$useState33 = _react.default.useState(200),
      _React$useState34 = _slicedToArray(_React$useState33, 1),
      mw = _React$useState34[0];

  var _React$useState35 = _react.default.useState(503),
      _React$useState36 = _slicedToArray(_React$useState35, 1),
      mh = _React$useState36[0]; //전체화면


  var _React$useState37 = _react.default.useState(false),
      _React$useState38 = _slicedToArray(_React$useState37, 2),
      isfullscreen = _React$useState38[0],
      set_isfullscreen = _React$useState38[1];

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
    // console.log("fa", fa);


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
  }, [isPlaying, endTime, playSpeed]); //툴팁


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

  var _React$useState39 = _react.default.useState(null),
      _React$useState40 = _slicedToArray(_React$useState39, 2),
      jejuFontArrayBuffer = _React$useState40[0],
      set_jejuFontArrayBuffer = _React$useState40[1];

  _react.default.useEffect(function () {
    getFileAsArrayBuffer(_JejuMyeongjo.default).then(function (res_arrbuffer) {
      set_jejuFontArrayBuffer(res_arrbuffer);
    });
  }, []);

  var _React$useState41 = _react.default.useState(false),
      _React$useState42 = _slicedToArray(_React$useState41, 2),
      isMinimizedController = _React$useState42[0],
      set_isMinimizedController = _React$useState42[1];

  var handleCloseController = function handleCloseController() {
    set_isMinimizedController(true);
  }; //path값에 따라서 PDFarraybuffer 보관


  var _React$useState43 = _react.default.useState(null),
      _React$useState44 = _slicedToArray(_React$useState43, 2),
      pdfArrayBuffer = _React$useState44[0],
      set_pdfArrayBuffer = _React$useState44[1];

  _react.default.useEffect(function () {
    fetch(path).then(function (res) {
      // console.log("res",);
      return res.arrayBuffer();
    }).then( /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(buffer) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                set_pdfArrayBuffer(buffer);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());
  }, [path]);

  var _React$useState45 = _react.default.useState(null),
      _React$useState46 = _slicedToArray(_React$useState45, 2),
      readersEyeLogoArrayBuffer = _React$useState46[0],
      set_readersEyeLogoArrayBuffer = _React$useState46[1];

  _react.default.useEffect(function () {
    fetch(_readereyelogo.default).then(function (r) {
      return r.arrayBuffer();
    }).then(function (buf) {
      set_readersEyeLogoArrayBuffer(buf);
    });
  }, []);

  var handleTryPrint = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var fontBytes, existingPdfBytes, pdfDoc, pages, firstPage, _firstPage$getSize, width, height, cw, ch, prevx, prevy, pngImageBytes, pngImage, pngDims, i, gazeData, size, r, _i3, d, fr, _i4, f, fsize, newPage, fontSize, title, titleFontSize, customFont, textWidth, topMargin, textMarginTop, textMarginLeft, keycount, key, pdfBytes, blob, blobURL, link;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (data) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              //폰트파일 할당
              fontBytes = jejuFontArrayBuffer;
              existingPdfBytes = pdfArrayBuffer; //PDF 버퍼

              _context2.next = 6;
              return _pdfLib.PDFDocument.load(existingPdfBytes);

            case 6:
              pdfDoc = _context2.sent;
              console.log("registerFontkit");
              pdfDoc.registerFontkit(_fontkit.default);
              console.log("registerFontkitend"); // Embed the Helvetica font
              // const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
              // Get the first page of the document

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

              _context2.next = 20;
              return pdfDoc.embedPng(pngImageBytes);

            case 20:
              pngImage = _context2.sent;
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
              size = rawSize * 2 / 100;
              r = cw * 0.01 * size; //draw rawData

              for (_i3 = 0; _i3 < gazeData.length; _i3++) {
                d = gazeData[_i3]; // console.log("t",t);
                // if (d.relTime * 1 <= nowTime * 1) {

                if (d.pdfx && d.pdfy) {
                  // console.log("그려")
                  if (r) {
                    if (prevx && prevy) {
                      // rctx.beginPath();
                      // rctx.lineWidth = 0.5;
                      // rctx.strokeStyle = 'red';
                      // rctx.fillStyle = 'red';
                      // rctx.moveTo((prevx) * cw, (prevy) * ch);
                      // rctx.lineTo((d.pdfx) * cw, (d.pdfy) * ch);
                      // rctx.stroke();
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


              fr = cw * 0.01 * fixationSize * 1.5 / 100;
              prevx = null;
              prevy = null;

              for (_i4 = 0; _i4 < fixationData.length; _i4++) {
                f = fixationData[_i4]; // if (f.relTime_s * 1 <= nowTime * 1) {

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


                    fsize = fr * Math.sqrt(f.count); // if (f.relTime_e <= nowTime) {

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

                    }); // }
                    // else {
                    //     // 작게 그려
                    //     let ratio = (nowTime - f.relTime_s) / (f.relTime_e - f.relTime_s);
                    //     pages[f.pageNum_s - 1].drawCircle({
                    //         x: f.x * cw,
                    //         y: height - f.y * ch,
                    //         size: fsize*ratio,
                    //         borderWidth: 1,
                    //         // borderDashArray: [1],
                    //         // borderDashPhase: 25,
                    //         borderColor: rgb(0, 0, 1),
                    //         borderOpacity: 0.3,
                    //         // fill:rgb(1,0,0)
                    //         color: rgb(0, 0, 1),
                    //         opacity: 0.3
                    //         // borderColor: cmyk(0, 0, 0, 1), //blue red yeloow
                    //         // borderLineCap: LineCapStyle.Round,
                    //     });
                    // }

                    prevx = f.x;
                    prevy = f.y;
                  }
                } // }

              } //////새로운패이지 생성


              newPage = pdfDoc.insertPage(0, [width, height]);
              fontSize = 15;
              title = "Pathway 시선추적 측정 결과";
              titleFontSize = 25;
              _context2.next = 37;
              return pdfDoc.embedFont(fontBytes);

            case 37:
              customFont = _context2.sent;
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

              _context2.next = 48;
              return pdfDoc.save();

            case 48:
              pdfBytes = _context2.sent;
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

            case 58:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleTryPrint() {
      return _ref4.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "PDFresultModal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ResultWrap",
    style: {
      width: isfullscreen ? '100%' : specialWidth,
      height: isfullscreen ? '100%' : specialHeight,
      minWidth: isfullscreen ? '100%' : specialWidth
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "marginWrap"
  }, isMinimizedController === false ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactDraggable.default, {
    handle: ".OVM-drag-handle",
    defaultPosition: {
      x: 50,
      y: 50
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
    className: "oneConfig",
    "data-tip": "\uBAA8\uB4E0 \uC2DC\uC120(gaze)\uC758  \uC6D0 (\uBE68\uAC15\uC0C9)\uC758 \uD06C\uAE30\uB97C \uC870\uC815\uD569\uB2C8\uB2E4."
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
    max: 200,
    onChange: function onChange(e) {
      set_rawSize(e.target.value);
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    "data-tip": "\uC751\uC2DC(fixation)\uC758 \uC6D0 (\uCD08\uB85D\uC0C9)\uC758 \uD06C\uAE30\uB97C \uC870\uC815\uD569\uB2C8\uB2E4."
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "c_label"
  }, "\uC751\uC2DC \uD06C\uAE30"), /*#__PURE__*/_react.default.createElement("div", {
    className: "c_data"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "range",
    style: {
      width: '70%'
    },
    value: fixationSize,
    min: 0,
    max: 100,
    onChange: function onChange(e) {
      set_fixationSize(e.target.value);
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    "data-tip": '기록을 재생할 때, 몇 초 전의 시선까지 보여줄지를 설정합니다.'
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
  }, fd_inform.fixationRatio.toFixed(0), "%")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    "data-tip": isfullscreen ? "전체화면취소" : "전체화면",
    style: {
      borderRight: '1px solid gray'
    },
    onClick: function onClick() {
      return set_isfullscreen(function (f) {
        return !f;
      });
    }
  }, /*#__PURE__*/_react.default.createElement(FullScreenBtn, {
    isfullscreen: isfullscreen
  }), "\xA0 ", isfullscreen ? /*#__PURE__*/_react.default.createElement("span", {
    style: {
      color: 'yellow'
    }
  }, "\uCDE8\uC18C") : /*#__PURE__*/_react.default.createElement("span", null, "\uC804\uCCB4")), /*#__PURE__*/_react.default.createElement("div", {
    className: "oneConfig",
    onClick: handleTryPrint,
    "data-tip": "\uC2DC\uC120\uC774\uB3D9\uC774 \uD45C\uD604\uB41C PDF\uB97C \uB2E4\uC6B4\uB85C\uB4DC \uD569\uB2C8\uB2E4."
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _PDF_file_icon.default,
    alt: "",
    style: {
      height: '70%'
    }
  }), "\xA0\uB2E4\uC6B4"))), /*#__PURE__*/_react.default.createElement("div", {
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
  }))))), /*#__PURE__*/_react.default.createElement(_reactTooltip.default, {
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
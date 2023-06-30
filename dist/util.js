"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openFullScreen = exports.hexToRgb = exports.getMedian = exports.getFileAsArrayBuffer = exports.getCanvasImagePngBuffer = exports.getCanvasImageArrayBuffer = exports.findCanvasInChildren = exports.closeFullscreen = void 0;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var getCanvasImageArrayBuffer = function getCanvasImageArrayBuffer(canvas) {
  var context = canvas.getContext('2d');
  var imageData = context.getImageData(0, 0, canvas.width, canvas.height); // 캔버스의 이미지 데이터를 가져옴

  var data = imageData.data,
    width = imageData.width,
    height = imageData.height;
  var buffer = new ArrayBuffer(data.length); // ArrayBuffer를 생성

  var uint8Array = new Uint8Array(buffer);
  for (var i = 0; i < data.length; i++) {
    uint8Array[i] = data[i]; // 이미지 데이터를 Uint8Array에 복사
  }

  return {
    buffer: buffer,
    width: width,
    height: height
  };
};
exports.getCanvasImageArrayBuffer = getCanvasImageArrayBuffer;
var getCanvasImagePngBuffer = function getCanvasImagePngBuffer(canvas) {
  var dataUrl = canvas.toDataURL('image/png'); // 캔버스를 PNG 데이터 URL로 변환
  var base64Data = dataUrl.split(',')[1]; // 데이터 URL에서 base64 인코딩된 이미지 데이터 부분 추출
  var binaryData = atob(base64Data); // base64 디코딩

  var length = binaryData.length;
  var buffer = new ArrayBuffer(length);
  var view = new Uint8Array(buffer);
  for (var i = 0; i < length; i++) {
    view[i] = binaryData.charCodeAt(i); // 디코딩된 데이터를 ArrayBuffer에 복사
  }

  return buffer;
};
exports.getCanvasImagePngBuffer = getCanvasImagePngBuffer;
var findCanvasInChildren = function findCanvasInChildren(element) {
  var children = element.children; // 자식 요소들을 가져옴
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    if (child.tagName === 'CANVAS') {
      return child; // canvas 요소를 찾으면 반환
    } else {
      var canvas = findCanvasInChildren(child); // 재귀적으로 자식 요소에서 canvas를 찾음
      if (canvas) {
        return canvas; // 재귀 호출 결과를 반환
      }
    }
  }

  return null; // canvas를 찾지 못한 경우 null 반환
};
exports.findCanvasInChildren = findCanvasInChildren;
var getFileAsArrayBuffer = function getFileAsArrayBuffer(importedfile) {
  return new Promise(function (resolve) {
    var oReq = new XMLHttpRequest();
    oReq.open('get', importedfile, true);
    oReq.responseType = 'arraybuffer';
    oReq.onload = function () {
      var arraybuffer = oReq.response;
      // console.log("blob",blob); 
      resolve(arraybuffer);
    };
    oReq.send();
  });
};
exports.getFileAsArrayBuffer = getFileAsArrayBuffer;
var getMedian = function getMedian(arr) {
  var mid = Math.floor(arr.length / 2),
    nums = _toConsumableArray(arr).sort(function (a, b) {
      return a - b;
    });
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};
exports.getMedian = getMedian;
var hexToRgb = function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};
exports.hexToRgb = hexToRgb;
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
exports.openFullScreen = openFullScreen;
var closeFullscreen = function closeFullscreen() {
  var errormsg = "F11키를 눌러서 전체화면을 해제해 주세요.";
  if (document.exitFullscreen) {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      alert(errormsg);
    }
  } else if (document.mozCancelFullScreen) {
    if (document.mozFullScreenElement) {
      document.mozCancelFullScreen();
    } else {
      alert(errormsg);
    }
  } else if (document.webkitExitFullscreen) {
    if (document.webkitFullscreenElement) {
      document.webkitExitFullscreen();
    } else {
      alert(errormsg);
    }
  } else if (document.msExitFullscreen) {
    if (document.msFullscreenElement) {
      document.msExitFullscreen();
    } else {
      alert(errormsg);
    }
  }
};
exports.closeFullscreen = closeFullscreen;
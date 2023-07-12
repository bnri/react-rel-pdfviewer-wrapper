export const  getCanvasImageArrayBuffer=(canvas)=> {
  const context = canvas.getContext('2d');
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height); // 캔버스의 이미지 데이터를 가져옴

  const { data, width, height } = imageData;
  const buffer = new ArrayBuffer(data.length); // ArrayBuffer를 생성

  const uint8Array = new Uint8Array(buffer);
  for (let i = 0; i < data.length; i++) {
    uint8Array[i] = data[i]; // 이미지 데이터를 Uint8Array에 복사
  }

  return {
    buffer,
    width,
    height
  };
}
export const mydelay =(ms)=>{
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve(true);
    },ms)
  })
}

export const getCanvasImagePngBuffer=(canvas)=> {
  const dataUrl = canvas.toDataURL('image/png'); // 캔버스를 PNG 데이터 URL로 변환
  const base64Data = dataUrl.split(',')[1]; // 데이터 URL에서 base64 인코딩된 이미지 데이터 부분 추출
  const binaryData = atob(base64Data); // base64 디코딩

  const length = binaryData.length;
  const buffer = new ArrayBuffer(length);
  const view = new Uint8Array(buffer);

  for (let i = 0; i < length; i++) {
    view[i] = binaryData.charCodeAt(i); // 디코딩된 데이터를 ArrayBuffer에 복사
  }

  return buffer;
}

export const  findCanvasInChildren=(element)=> {
  const children = element.children; // 자식 요소들을 가져옴
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child.tagName === 'CANVAS') {
      return child; // canvas 요소를 찾으면 반환
    } else {
      const canvas = findCanvasInChildren(child); // 재귀적으로 자식 요소에서 canvas를 찾음
      if (canvas) {
        return canvas; // 재귀 호출 결과를 반환
      }
    }
  }
  return null; // canvas를 찾지 못한 경우 null 반환
}
export const getFileAsArrayBuffer=(importedfile)=>{
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
}
export const getMedian = arr => {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

export const hexToRgb=(hex) => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

export const openFullScreen = () => {
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
  
  export const closeFullscreen = () => {
    const errormsg = "F11키를 눌러서 전체화면을 해제해 주세요.";
  
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
  
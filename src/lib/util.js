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
  
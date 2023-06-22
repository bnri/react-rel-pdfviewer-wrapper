
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
  
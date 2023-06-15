
import React from "react";
import './PDFresultModal.scss';
import PDFviewModal from 'react-rel-pdfviewer';
import Draggable from 'react-draggable';

import { PDFDocument, rgb } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit'

import pdfsvg from './PDF_file_icon.svg';
import ReactTooltip from 'react-tooltip';
// import { base64img } from "./base64img";

import readerseyelogo from "./readereyelogo.png";
import jeju from './JejuMyeongjo.ttf';
// import * as pdfjsLib from 'pdfjs-dist/webpack';

// console.log("야야야")
// console.log("pdfjsLib",pdfjsLib)


// console.log ("readerseyelogo",typeof readerseyelogo, readerseyelogo);

// console.log("jeju : ",typeof jeju, jeju);


function getFileAsArrayBuffer(importedfile) {
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



const FullScreenBtn = ({ ...props }) => {
    const { isfullscreen } = props;

    const buttonRef = React.useRef();
    const fullscreenModalRef = React.useRef();
    const animationFromRef = React.useRef();
    const animationToRef = React.useRef();

    React.useEffect(() => {
        const openFullScreen = () => {
            // 호출할때 javscript로 한것 f11말고
            var elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) { // Chrome, Safari & Opera 
                elem.webkitRequestFullscreen();
            } else if (elem.mozRequestFullScreen) { // Firefox 
                elem.mozRequestFullScreen();
            } else if (elem.msRequestFullscreen) { // IE/Edge 
                elem.msRequestFullscreen();
            }
        }
        const closeFullscreen = () => {
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
        }

        var animationTo = animationToRef.current,
            animationFrom = animationFromRef.current;
        let button = buttonRef.current;
        if (isfullscreen) {

            button.classList.remove("animated");
            animationTo.beginElement();
            // console.log("bbbbbbb fullscreenMode 진입");
            let max = (window.screen.height / (window.devicePixelRatio)).toFixed(0) * 1;
            if (max !== window.innerHeight) {
                openFullScreen();
            }

        }
        else {
            // console.log("풀스크린해제");
            button.classList.add("animated");
            animationFrom.beginElement();
            // console.log("aaaaaaa fullscreen해제");
            let max = (window.screen.height / (window.devicePixelRatio)).toFixed(0) * 1;
            if (max === window.innerHeight) {
                // 자바스크립트로 홀출했을때만 closeFUllscrenn 호출
                closeFullscreen() // f11눌러서 전체화면인지 openFullScreen을 눌룬 전체화면인지 알 수가없다. 크롬보안상 f11누룬건 자바스크립트로풀수없다
            }

        }

    }, [isfullscreen, fullscreenModalRef])


    return (<div ref={buttonRef}
        style={{ width: '20px', height: '20px', color: isfullscreen ? 'yellow' : 'white', cursor: 'pointer' }} >

        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="m 3.4285714,15.428571 -3.42857145,0 0,8.571429 8.57142905,0 0,-3.428571 -5.1428577,0 0,-5.142858 z M -5e-8,8.5714287 l 3.42857145,0 0,-5.1428573 5.1428577,0 L 8.5714291,0 -4.9999999e-8,0 l 0,8.5714287 z M 20.571428,20.571429 l -5.142857,0 0,3.428571 L 24,24 l 0,-8.571429 -3.428572,0 0,5.142858 z M 15.428571,2e-7 l 0,3.4285714 5.142857,0 0,5.1428571 3.428572,0 L 24,2e-7 l -8.571429,0 z">
                <animate ref={animationToRef} begin="indefinite"
                    fill="freeze" attributeName="d" dur="0.15s"
                    to="m 5.0000001e-8,18.857143 5.14285695,0 0,5.142857 3.428572,0 0,-8.571429 -8.571428950000001,0 0,3.428572 z M 5.142857,5.1428572 l -5.14285695,0 0,3.4285714 8.571428949999999,0 0,-8.571428500000001 -3.428572,0 0,5.142857100000001 z M 15.428571,24 l 3.428572,0 0,-5.142857 5.142857,0 0,-3.428572 -8.571429,0 0,8.571429 z m 3.428572,-18.8571428 0,-5.1428571 -3.428572,0 0,8.5714285 8.571429,0 0,-3.4285714 -5.142857,0 z" />
                <animate ref={animationFromRef} begin="indefinite"
                    fill="freeze" attributeName="d" dur="0.15s"
                    to="m 3.4285714,15.428571 -3.42857145,0 0,8.571429 8.57142905,0 0,-3.428571 -5.1428577,0 0,-5.142858 z M -5e-8,8.5714287 l 3.42857145,0 0,-5.1428573 5.1428577,0 L 8.5714291,0 -4.9999999e-8,0 l 0,8.5714287 z M 20.571428,20.571429 l -5.142857,0 0,3.428571 L 24,24 l 0,-8.571429 -3.428572,0 0,5.142858 z M 15.428571,2e-7 l 0,3.4285714 5.142857,0 0,5.1428571 3.428572,0 L 24,2e-7 l -8.571429,0 z" />
            </path>
        </svg>
    </div>)
}

const PDFresultModal = ({ onClose, ...props }) => {
    const { WORKERSRC,
        path,
         viewpercent, data, specialWidth, specialHeight, onConfirm, showConfirmBtn , printPDFData , downloadFileName ,PDFonloadCallback} = props;

    // console.log("WORKERSRC",WORKERSRC);

    const pdfviewref = React.useRef();
    const [nowPage, set_nowPage] = React.useState(1);

    const [nowTime, set_nowTime] = React.useState(0);
    const endTime = React.useMemo(() => {
        // console.log(data.gazeInform.maxTime);

        let lastTime = data.gazeData[data.gazeData.length - 1].relTime;



        // console.log("et",et);
        set_nowTime(lastTime);
        return lastTime;
    }, [data])


    const [fminx] = React.useState(1);
    const [fminy] = React.useState(1);

    const topRef = React.useRef();
    const [innerFrameScale, set_innerFrameScale] = React.useState(0.5);
    const [innerFrameTop, set_innerFrameTop] = React.useState(0);
    const [innerFrameLeft, set_innerFrameLeft] = React.useState(0);


    const [isPlaying, set_isPlaying] = React.useState(false);
    const [playSpeed, set_playSpeed] = React.useState(1);
    const [followEvent] = React.useState(true);
    const [rawSize, set_rawSize] = React.useState(0);

    const [fixationSize, set_fixationSize] = React.useState(32);
    const [pastTimeRange, set_pastTimeRange] = React.useState(0);
    const [nowPDFviewInform, set_nowPDFviewInform] = React.useState(null);
    const [minFixationCount] = React.useState(3);


    //콘트롤러
    const [isFocus, set_isFocus] = React.useState(false);
    const [mw] = React.useState(200);
    const [mh] = React.useState(503);

    //전체화면
    const [isfullscreen, set_isfullscreen] = React.useState(false);



    const fixationData = React.useMemo(() => {
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
            }
            else {


                let xdiff = Math.abs(d.pdfx - prevx);
                let ydiff = Math.abs(d.pdfy - prevy);

                if (!d.pdfx || !d.pdfy) {
                    //예외처리 없는
                    continue;
                }
                else if (xdiff * 1 <= xdiff_f * 1 && ydiff * 1 <= ydiff_f * 1) {
                    // console.log("ydiff_f",ydiff_f,ydiff);
                    // console.log("xdiff_f",xdiff_f,xdiff);
                    //만약 거리가 가까우면  //기존fixation 유지
                    fixationObj.count++;
                    sumPDF_x += d.pdfx;
                    sumPDF_y += d.pdfy;
                }
                else {
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

        //마지막 fixation 찾아볼까?
        // console.log("fa", fa);

        return fa;
    }, [data, fminx, fminy])

    const fd_inform = React.useMemo(() => {
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



    //viewWrap ratio를 어떻게 구할까    
    const resizeInnerFrame = React.useCallback(() => {

        setTimeout(function () {
            let max = (window.screen.height / (window.devicePixelRatio)).toFixed(0) * 1;

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
        }
        else {
            // console.log("지금 가로가 더 크다 (지금비율이 더 작다)-높이기준셋팅");
            set_innerFrameScale(height / pastScreenH);


            let newwidth = pastScreenW * (height / pastScreenH);
            set_innerFrameTop(0);
            set_innerFrameLeft((width - newwidth) / 2);

        }
    }, [data, isfullscreen]);

    React.useEffect(() => {
        resizeInnerFrame();
        window.addEventListener('resize', resizeInnerFrame);
        return () => {
            //console.log("소멸자");
            window.removeEventListener('resize', resizeInnerFrame);
        }
    }, [resizeInnerFrame]);



    const handleTogglePlay = () => {
        set_isPlaying((p) => !p);
    }




    React.useEffect(() => {
        let myrequest;
        let startTime = Date.now();
        function timeUpdate() {
            myrequest = window.requestAnimationFrame(timeUpdate);
            let now = Date.now();
            let elapsed = now - startTime;
            // console.log("fps", 1000 / elapsed);
            startTime = now;
            set_nowTime((nt) => {

                if (nt * 1 > endTime) {

                    set_isPlaying(false);
                    nt = endTime;

                    return nt;
                }
                else if (nt * 1 === endTime) {
                    return 0;
                }
                else {
                    nt = nt * 1 + (elapsed / 1000) * playSpeed
                    return nt;
                }
            });
        }

        if (isPlaying === true) {
            timeUpdate();
        }
        else {
            window.cancelAnimationFrame(myrequest);
        }

        return () => {
            window.cancelAnimationFrame(myrequest);
        }

    }, [isPlaying, endTime, playSpeed]);


    //툴팁
    React.useEffect(() => {
        ReactTooltip.rebuild();
    });

    //그리기
    const handleDraw = React.useCallback(() => {
        // console.log("handleDraw!! nowP",nowPage);
        let canvasref = pdfviewref.current.get_canvasRef();
        if (!canvasref || !canvasref.current) {
            // console.log("오잉?");
            // console.log("canvasref",canvasref);
            // handleDraw();
            return;
        }
        if (!nowPDFviewInform) {
            return;
        }
        let canvas = canvasref.current;

        let rctx = canvas.getContext('2d');

        let cw = nowPDFviewInform.width;
        let ch = nowPDFviewInform.height;


        let size = rawSize * 2 / 100;

        let r = cw * 0.01 * size;
        // console.log("지워");
        rctx.clearRect(0, 0, cw, ch);

        const gazeData = data.gazeData;

        const pT = pastTimeRange;

        // console.log("gazeData",gazeData)
        // //비율계산필요
        // //cw,ch는 지금의 사이즈고
        // //기록된 

        let prevx = null;
        let prevy = null;
        // let prevp = null;
        
       
        //draw rawdata
        for (let i = 0; i < gazeData.length; i++) {
            let d = gazeData[i];

            if (pT) {
                if (d.relTime < (nowTime - pT)) {
                    continue;
                }
            }

            // console.log("t",t);
            if (d.relTime * 1 <= nowTime * 1) {

                if (d.pdfx && d.pdfy) {
                    // console.log("그려")
                    if (nowPage === d.pageNum && r) {

                        if (prevx && prevy) {
                            rctx.beginPath();
                            rctx.lineWidth = 0.5;
                            rctx.strokeStyle = 'red';
                            rctx.fillStyle = 'red';
                            rctx.moveTo((prevx) * cw, (prevy) * ch);
                            rctx.lineTo((d.pdfx) * cw, (d.pdfy) * ch);
                            rctx.stroke();
                        } //선먼저 그린후 그리기


                        rctx.beginPath();
                        rctx.lineWidth = 0.5;
                        rctx.strokeStyle = 'rgb(255,0,0,0.3)';
                        rctx.fillStyle = 'rgb(255,0,0,0.3)';
                        rctx.arc((d.pdfx) * cw, (d.pdfy) * ch, r, 0, Math.PI * 2);
                        rctx.fill();

                    }
                    // prevp = d.pageNum
                    prevx = d.pdfx;
                    prevy = d.pdfy;



                }




            }

        }

        //draw pencil
        /*
        for(let i = 0 ; i<gazeData.length; i++){
  
            let d = gazeData[i];
            const {pageNum} = d;
            const draw=gazeData[i].draw;

            if (pT) {
                if (d.relTime < (nowTime - pT)) {
                    continue;
                }
            }
            if(!draw){
                continue;
            }
            // console.log("t",t);
            if (d.relTime * 1 <= nowTime * 1) {
                    // console.log("그려")
                if (nowPage === pageNum) {
            
                    if(draw.type==='startDrawing'){
                        rctx.lineWidth = 0.5;
                        rctx.strokeStyle = 'red';
                        rctx.fillStyle = 'red';
                        rctx.beginPath();
                        rctx.moveTo(draw.x, draw.y);
                    }
                    else if(draw.type==='draw'){
                        rctx.lineTo(draw.x, draw.y);
                        rctx.stroke();
                    }
                    else if(draw.type==='stopDrawing'){
                        rctx.closePath();
                    }
                }

                

            }
        }
        */



        //draw Fixation
        let fr = cw * 0.01 * fixationSize * 1.5 / 100;
        prevx = null;
        prevy = null;
        for (let i = 0; i < fixationData.length; i++) {

            let f = fixationData[i];
            if (pT) {
                if (f.relTime_e < (nowTime - pT)) {
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
                            rctx.moveTo((prevx) * cw, (prevy) * ch);
                            rctx.lineTo((f.x) * cw, (f.y) * ch);
                            rctx.stroke();
                        }

                        //원그리기 fixation
                        let fsize = fr * Math.sqrt(f.count);
                        if (f.relTime_e <= nowTime) {
                            //전체 다그려
                            rctx.beginPath();
                            rctx.lineWidth = 0.5;
                            rctx.strokeStyle = 'rgb(0,255,0,0.3)';
                            rctx.fillStyle = 'rgb(0,255,0,0.3)';
                            rctx.arc((f.x) * cw, (f.y) * ch, fsize, 0, Math.PI * 2);
                            rctx.fill();
                        }
                        else {
                            // 작게 그려
                            let ratio = (nowTime - f.relTime_s) / (f.relTime_e - f.relTime_s);

                            rctx.beginPath();
                            rctx.lineWidth = 0.5;
                            rctx.strokeStyle = 'rgb(0,0,255,0.3)';
                            rctx.fillStyle = 'rgb(0,0,255,0.3)';
                            rctx.arc((f.x) * cw, (f.y) * ch, fsize * ratio, 0, Math.PI * 2);
                            rctx.fill();
                        }

                        prevx = f.x;
                        prevy = f.y;
                    }

                }


            }
        }

        // console.log("fixationSize", fixationSize);


    }, [data, nowTime, nowPage, rawSize, nowPDFviewInform, fixationSize, fixationData, minFixationCount, pastTimeRange]);


    const handleEvent = React.useCallback(() => {
        // console.log("handleDraw!!");

        let gazeData = data.gazeData;

        // let firstTime = gazeData[0].t;

        for (let i = 0; i < gazeData.length; i++) {
            // let d = gazeData[i];
            // let dt = d.t;
            // let t = (dt - firstTime) / 1000000;
            // console.log("t",t);
            if (gazeData[i].relTime * 1 <= nowTime * 1) {

            }
            else {
                if (i > 0) {
                    let lastd = gazeData[i - 1];
                    // console.log("lastd",lastd);
                    // if (nowPage !== lastd.pageNum) {
                    pdfviewref.current.set_pageNumber(lastd.pageNum);
                    pdfviewref.current.set_scrollTop(lastd.scrollTop);
                    // }
                }
                break;
            }
        }


    }, [data, nowTime]);



    React.useEffect(() => {
        if (followEvent) {
            handleEvent();
        }
    }, [handleEvent, followEvent])


    React.useEffect(() => {
        handleDraw();
    }, [handleDraw]);


    const [jejuFontArrayBuffer, set_jejuFontArrayBuffer] = React.useState(null);
    React.useEffect(() => {
        getFileAsArrayBuffer(jeju).then(res_arrbuffer => {
            set_jejuFontArrayBuffer(res_arrbuffer);
        });
    }, []);

    const [isMinimizedController, set_isMinimizedController] = React.useState(false);

    const handleCloseController = () => {
        set_isMinimizedController(true);
    }

    //path값에 따라서 PDFarraybuffer 보관
    const [pdfArrayBuffer,set_pdfArrayBuffer]= React.useState(null);
    React.useEffect(()=>{
        fetch(path).then(async res => {
            // console.log("res",res);
            // console.log("path",path);
            // console.log("URL.createObjectURL(path)",path);
            // console.log("pdfjsLib",pdfjsLib);

            // const pdf = await pdfjsLib.getDocument({ url: path, password: '' }).promise;


            // const f = await pdf.getData(); //unit8array
            // var arrayBuffer = f.buffer; 
            // console.log("arrayBuffer",arrayBuffer)    
            // let af = await res.arrayBuffer();
            // console.log("두개비교",arrayBuffer,af);
            return res.arrayBuffer()
            // return arrayBuffer;
        }).then(async (buffer) => {
            set_pdfArrayBuffer(buffer);
        });
    },[path]);


    const [readersEyeLogoArrayBuffer,set_readersEyeLogoArrayBuffer] = React.useState(null);
    React.useEffect(()=>{
        fetch(readerseyelogo).then(r=>r.arrayBuffer()).then(buf=>{
            set_readersEyeLogoArrayBuffer(buf);
        });
    },[])


    const handleTryPrint = async () => {

        if (!data) {
            return;
        }



        //폰트파일 할당
        const fontBytes = jejuFontArrayBuffer;
        
            // let pdfDoc;
            const existingPdfBytes = pdfArrayBuffer; //PDF 버퍼

             const   pdfDoc = await PDFDocument.load(existingPdfBytes
                ,{ignoreEncryption:true}
                );
    

            console.log("registerFontkit");
            pdfDoc.registerFontkit(fontkit)
            console.log("registerFontkitend");


            // Embed the Helvetica font
            // const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
            // Get the first page of the document
            console.log("pdfDoc",pdfDoc);

            // const pageIndices = pdfDoc.getPageIndices();
            // console.log("pageIndices",pageIndices);
            if(pdfDoc.isEncrypted){
                alert("수정금지된 PDF 파일이라 다운로드할 수 없습니다. 수정금지 해제 후 재등록해 주시기 바랍니다. 수정금지 해지하기 (https://smallpdf.com/unlock-pdf).");
                return;
            }
            const pages = pdfDoc.getPages();

            const firstPage = pages[0]

            // Get the width and height of the first page
            const { width, height } = firstPage.getSize();
            let cw = width;
            let ch = height;
            let prevx = null;
            let prevy = null;


            //페이지별로 마크 넣을것
              // console.log("바이트 가능?")

            //이미지 준비~~~~~~
            
            // const pngImageBytes=Uint8Array.from(atob(base64img['리더스아이로고']), c => c.charCodeAt(0))
            // const pngImageBytes = _base64ToArrayBuffer(base64img['리더스아이로고']);
            // const pngImageBytes = await fetch(readerseyelogo).then(r=>r.arrayBuffer());
            const pngImageBytes=readersEyeLogoArrayBuffer;

            //base64를 Bytes 로 변환
            const pngImage = await pdfDoc.embedPng(pngImageBytes)
            const pngDims = pngImage.scale(0.05)

            for (let i = 0; i < pages.length; i++) {
                pages[i].drawImage(pngImage, {
                    // x: newpage.getWidth() / 2 - pngDims.width / 2,
                    // y: newpage.getHeight() / 2 - pngDims.height / 2,
                    // x: newpage.getWidth()- pngDims.width ,
                    x: 5,
                    y: -5 + height - pngDims.height,
                    width: pngDims.width,
                    height: pngDims.height,
                })
            }

            const gazeData = data.gazeData;
            let size = rawSize * 2 / 100;
            let r = cw * 0.01 * size;
            //draw rawData
            for (let i = 0; i < gazeData.length; i++) {
                let d = gazeData[i];


                // console.log("t",t);
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
                                    y: height - prevy * ch,
                                },
                                end: {
                                    x: d.pdfx * cw,
                                    y: height - d.pdfy * ch,
                                },
                                color: rgb(1, 0, 0),
                                opacity: 0.3,
                                borderOpacity: 0.3,
                                thickness: 1,

                            });

                        } //선먼저 그린후 그리기

                        pages[d.pageNum - 1].drawCircle({
                            x: d.pdfx * cw,
                            y: height - d.pdfy * ch,
                            size: r,
                            borderWidth: 1,
                            // borderDashArray: [1],
                            // borderDashPhase: 25,
                            borderColor: rgb(1, 0, 0),
                            borderOpacity: 0.3,
                            // fill:rgb(1,0,0)
                            color: rgb(1, 0, 0),
                            opacity: 0.3
                            // borderColor: cmyk(0, 0, 0, 1), //blue red yeloow
                            // borderLineCap: LineCapStyle.Round,
                        });


                        // rctx.beginPath();
                        // rctx.lineWidth = 0.5;
                        // rctx.strokeStyle = 'rgb(255,0,0,0.3)';
                        // rctx.fillStyle = 'rgb(255,0,0,0.3)';
                        // rctx.arc((d.pdfx) * cw, (d.pdfy) * ch, r, 0, Math.PI * 2);
                        // rctx.fill();

                    }
                    // prevp = d.pageNum
                    prevx = d.pdfx;
                    prevy = d.pdfy;



                }




                // }

            }

            //draw Fixation
            let fr = cw * 0.01 * fixationSize * 1.5 / 100;
            prevx = null;
            prevy = null;

            for (let i = 0; i < fixationData.length; i++) {

                const f = fixationData[i];


                // if (f.relTime_s * 1 <= nowTime * 1) {
                if (fr) {
                    if (f.count >= minFixationCount) {

                        //선그리기...
                        if (prevx && prevy) {

                            pages[f.pageNum_s - 1].drawLine({
                                start: {
                                    x: prevx * cw,
                                    y: height - prevy * ch,
                                },
                                end: {
                                    x: f.x * cw,
                                    y: height - f.y * ch,
                                },
                                color: rgb(0, 1, 0),
                                opacity: 0.3,
                                borderOpacity: 0.3,
                                thickness: 1,

                            });
                        }

                        //원그리기 fixation
                        let fsize = fr * Math.sqrt(f.count);
                        // if (f.relTime_e <= nowTime) {

                        pages[f.pageNum_s - 1].drawCircle({
                            x: f.x * cw,
                            y: height - f.y * ch,
                            size: fsize,
                            borderWidth: 1,
                            // borderDashArray: [1],
                            // borderDashPhase: 25,
                            borderColor: rgb(0, 1, 0),
                            borderOpacity: 0.3,
                            // fill:rgb(1,0,0)
                            color: rgb(0, 1, 0),
                            opacity: 0.3
                            // borderColor: cmyk(0, 0, 0, 1), //blue red yeloow
                            // borderLineCap: LineCapStyle.Round,
                        });


                        // }
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

                }


                // }
            }

            //////새로운패이지 생성
            const newPage = pdfDoc.insertPage(0, [width, height]);

      

            const fontSize = 15;
            const title="Pathway 시선추적 측정 결과";
            const titleFontSize=25;

            const customFont = await pdfDoc.embedFont(fontBytes);
            // const HelveticaFont =await pdfDoc.embedFont(StandardFonts.Helvetica); 
            
            const textWidth = customFont.widthOfTextAtSize(title, titleFontSize);
            // const textHeight = customFont.heightAtSize(titleFontSize);

            //printPDFData
            newPage.drawText(title, {
                x: width/2 - textWidth/2,
                y:  height*3/5 - 1 * titleFontSize,
                size: titleFontSize,
                font: customFont,
                color: rgb(0, 0,0),
            });

            const topMargin=15;

            const textMarginTop=5;
            const textMarginLeft=15;
            let keycount=1;
            // const textWidth = customFont.widthOfTextAtSize(text, textSize)
            // const textHeight = customFont.heightAtSize(textSize)

            for(let key in printPDFData){
                newPage.drawText(`${key} : `+printPDFData[key], {
                    x: textMarginLeft,
                    y: -topMargin -textMarginTop*keycount + height - keycount * fontSize,
                    size: fontSize,
                    font: customFont,
                    color: rgb(0, 0,0),
                });
                keycount++;

            }

            newPage.drawImage(pngImage, {
                // x: newpage.getWidth() / 2 - pngDims.width / 2,
                // y: newpage.getHeight() / 2 - pngDims.height / 2,
                // x: newpage.getWidth()- pngDims.width ,
                x: width / 2 - pngDims.width / 2,
                y: -textMarginTop*(keycount+3) + height*3/8 - (keycount+3) * fontSize,
                width: pngDims.width,
                height: pngDims.height,
            })


            /////////////저장 다운로드/////////////

            const pdfBytes = await pdfDoc.save({updateFieldAppearances: false})
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            const blobURL = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = blobURL;
            link.download = downloadFileName;
            document.body.append(link);
            link.click();
            link.remove();
            setTimeout(() => URL.revokeObjectURL(link.href), 7000);
    }



    return (<div className="PDFresultModal">
        <div className="ResultWrap" style={{
            width: isfullscreen ? '100%' : specialWidth,
            height: isfullscreen ? '100%' : specialHeight,
            minWidth: isfullscreen ? '100%' : specialWidth,
        }}>
            <div className="marginWrap">

                {
                    isMinimizedController === false ?
                        <>
                            <Draggable

                                handle=".OVM-drag-handle"
                                defaultPosition={{ x: 50, y: 50 }}
                                bounds=".marginWrap"
                                grid={[1, 1]} >

                                <div tabIndex='0' className="moveableBarwrapper" style={{ width: mw + 'px', height: mh + 'px', backgroundColor: 'white', zIndex: isFocus ? 10 : 9 }}
                                    onBlur={() => {
                                        //console.log("OVM BLUR");
                                        set_isFocus(false);
                                    }}
                                    onFocus={() => {
                                        //console.log("OVM FOCUS");
                                        set_isFocus(true);
                                    }}
                                >
                                    <div className="header OVM-drag-handle" style={{ backgroundColor: isFocus ? 'rgb(40,40,40)' : 'rgb(20,20,20)' }}>

                                        Controller
                                        <button className="icon-btn" style={{ position: 'absolute', right: 0 }} onClick={handleCloseController}>
                                            <i className="fa fa-times" aria-hidden="true"></i></button>

                                    </div>
                                    <div className="middle">

                                        <div className="moveBar">




                                            <div className="SideBar">
                                                {/* <div>
                                                    이벤트동작 <input type="checkbox"
                                                        checked={followEvent}
                                                        onChange={(e) => {
                                                            set_followEvent(evt => !evt);
                                                        }} />
                                                </div> */}

                                                <div className="oneConfig">

                                                    <div className="c_label">
                                                        재생 배속
                                                    </div>
                                                    <div className="c_data">
                                                        <select value={playSpeed} onChange={e => set_playSpeed(e.target.value)}>
                                                            <option>
                                                                0.1
                                                            </option>
                                                            <option>
                                                                0.5
                                                            </option>
                                                            <option>
                                                                1
                                                            </option>
                                                            <option>
                                                                2
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="oneConfig" data-tip="모든 시선(gaze)의  원 (빨강색)의 크기를 조정합니다.">

                                                    <div className="c_label">
                                                        시선 크기
                                                    </div>
                                                    <div className="c_data">
                                                        <input type="range" style={{ width: '70%' }} value={rawSize} min={0} max={200}
                                                            onChange={(e) => {
                                                                set_rawSize(e.target.value)

                                                            }} />
                                                    </div>
                                                </div>

                                                <div className="oneConfig" data-tip="응시(fixation)의 원 (초록색)의 크기를 조정합니다.">

                                                    <div className="c_label">
                                                        응시 크기
                                                    </div>
                                                    <div className="c_data">
                                                        <input type="range" style={{ width: '70%' }} value={fixationSize} min={0} max={100}
                                                            onChange={(e) => {
                                                                set_fixationSize(e.target.value)

                                                            }} />
                                                    </div>
                                                </div>
                                                <div className="oneConfig" data-tip={'기록을 재생할 때, 몇 초 전의 시선까지 보여줄지를 설정합니다.'}>

                                                    <div className="c_label">
                                                        시선창 과거
                                                    </div>
                                                    <div className="c_data">
                                                        <select value={pastTimeRange} onChange={e => set_pastTimeRange(e.target.value * 1)}>
                                                            <option value={0}>전체</option>
                                                            <option value={0.5}>0.5초</option>
                                                            <option value={1}>1초</option>
                                                            <option value={2}>2초</option>
                                                            <option value={5}>5초</option>
                                                            <option value={10}>10초</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="oneConfig">

                                                    <div className="c_label">
                                                        평균응시시간
                                                    </div>
                                                    <div className="c_data">
                                                        {fd_inform.avgDuration.toFixed(0)}ms
                                                    </div>
                                                </div>
                                                <div className="oneConfig">

                                                    <div className="c_label">
                                                        응시비율
                                                    </div>
                                                    <div className="c_data">
                                                        {fd_inform.fixationRatio.toFixed(0)}%
                                                    </div>
                                                </div>
                                                <div style={{ display: 'flex' }}>
                                                    <div
                                                        className="oneConfig"
                                                        data-tip={isfullscreen ? "전체화면취소" : "전체화면"}
                                                        style={{ borderRight: '1px solid gray' }} onClick={() => set_isfullscreen(f => !f)}>
                                                        <FullScreenBtn
                                                            isfullscreen={isfullscreen}
                                                        />&nbsp; {isfullscreen ? <span style={{ color: 'yellow' }}>취소</span> : <span>전체</span>}
                                                    </div>
                                                    <div className="oneConfig" onClick={handleTryPrint} data-tip="시선이동이 표현된 PDF를 다운로드 합니다.">
                                                        <img src={pdfsvg} alt="" style={{ height: '70%' }} />&nbsp;다운
                                                    </div>
                                                </div>

                                                {/* <div className="oneConfig">

                                                    <div className="c_label">
                                                        fX diff
                                                    </div>
                                                    <div className="c_data">

                                                        <input type="number" min={1} max={100} value={fminx} onChange={e => set_fminx(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="oneConfig">

                                                    <div className="c_label">
                                                        fY diff
                                                    </div>
                                                    <div className="c_data">

                                                        <input type="number" min={1} max={100} value={fminy} onChange={e => set_fminy(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="oneConfig">

                                                    <div className="c_label">
                                                        minF_Cnt
                                                    </div>
                                                    <div className="c_data">

                                                        <input type="number" min={1} max={100} value={minFixationCount} onChange={e => set_minFixationCount(e.target.value)} />
                                                    </div>
                                                </div> */}


                                            </div>
                                            <div className="GC-playzone">
                                                <div className="GC-playWrapper">
                                                    <button className={isPlaying ? "GC-playbtn playing" : "GC-playbtn"} onClick={handleTogglePlay} />

                                                </div>
                                                <div className="GC-TimeWrapper">
                                                    <div className="nowTimeWrapper">
                                                        {nowTime.toFixed(2)}
                                                    </div>
                                                    <div className="endTimeWrapper">
                                                        &nbsp;/&nbsp;{endTime.toFixed(2)}
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                            </Draggable>

                        </>
                        :
                        <>
                            <div className="minimizedController">
                                <div>
                                    <button className="makeHuge-btn" onClick={() => set_isMinimizedController(false)}>Controller</button>
                                </div>
                                <div>
                                    <button className={isPlaying ? "mbbtn playing" : "mbbtn"} onClick={handleTogglePlay}></button>
                                </div>
                                <div className="timeWrapper">
                                    <div className="nt">
                                        {nowTime.toFixed(2)}
                                    </div>
                                    <div className="et">
                                        &nbsp;/&nbsp;{endTime.toFixed(2)}
                                    </div>

                                </div>
                            </div>
                        </>
                }



                <div className="rightZone">
                    <div className="topVacancy" ref={topRef}>
                        <div className="viewWrap" style={{
                            width: data.screenSize.width,
                            height: data.screenSize.height,
                            transform: `scale(${innerFrameScale})`,
                            top: `${innerFrameTop}px`,
                            left: `${innerFrameLeft}px`
                        }}>
                      
                                              <PDFviewModal
                                              {...props}
              
                                              ref={pdfviewref}
                                              WORKERSRC={WORKERSRC || "http://localhost:3000"}
                                              PDFonloadCallback={PDFonloadCallback?PDFonloadCallback:(pageNums)=>{
                                                  //페이지수 콜백이 여기로옴
                                              }}
              
                                              showConfirmBtn={showConfirmBtn}
                                              onConfirm={onConfirm}
              
              
                                              onClose={onClose}
                                              showViewMode={true}
                                              set_viewpercent={() => { }}
                                              path={path}
                                              viewpercent={viewpercent}
                                              pageCallback={(p) => {
                                                  // console.log("page콜백", p);
                                                  set_nowPage(p);
              
                                              }}
                                              pdfSizeCallback={(d) => {
                                                  // console.log("임시확인", d);
                                                  set_nowPDFviewInform(d.PDF);
              
                                                  handleDraw();
              
                                              }}
              
              
              
                                          />          
                            
                            {/* <PDFviewModal
                                {...props}

                                ref={pdfviewref}
                                WORKERSRC={WORKERSRC || "http://localhost:3000"}
                                PDFonloadCallback={PDFonloadCallback?PDFonloadCallback:(pageNums)=>{
                                    //페이지수 콜백이 여기로옴
                                }}

                                showConfirmBtn={showConfirmBtn}
                                onConfirm={onConfirm}


                                onClose={onClose}
                                showViewMode={true}
                                set_viewpercent={() => { }}
                                path={path}
                                viewpercent={viewpercent}
                                pageCallback={(p) => {
                                    // console.log("page콜백", p);
                                    set_nowPage(p);

                                }}
                                pdfSizeCallback={(d) => {
                                    // console.log("임시확인", d);
                                    set_nowPDFviewInform(d.PDF);

                                    handleDraw();

                                }}



                            /> */}
                        </div>

                    </div>
                    <div className="playBarWrap">
                        <input className="rangePlay" type="range" step="0.01"
                            value={nowTime} max={endTime} min='0' onChange={(e) => set_nowTime(e.target.value * 1)} />
                    </div>
                </div>

            </div>

        </div>

        <ReactTooltip className="highz"
            borderClass="custom-tooltip-design"

            effect="solid"
            // delayShow="100"
            backgroundColor="rgb(210,210,210)"
            textColor="black"
            border={true}
        />
    </div>)
}

export default PDFresultModal;
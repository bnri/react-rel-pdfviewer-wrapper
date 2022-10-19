
import React from "react";
import './PDFresultModal.scss';
import PDFviewModal from 'react-rel-pdfviewer';
import Draggable from 'react-draggable';

import { PDFDocument, rgb } from 'pdf-lib';
import pdfsvg from './PDF_file_icon.svg';


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
        style={{ width: '20px', height: '20px', color: isfullscreen ? 'yellow' : 'white', cursor: 'pointer' }} data-tip={isfullscreen ? "전체화면취소" : "전체화면"}>

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
    const { path, viewpercent, data, specialWidth, specialHeight ,onConfirm ,showConfirmBtn } = props;


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

    const [fminx, set_fminx] = React.useState(1);
    const [fminy, set_fminy] = React.useState(1);

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
    const [minFixationCount, set_minFixationCount] = React.useState(3);


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


        let prevx = null;
        let prevy = null;
        // let prevp = null;

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



    const [isMinimizedController, set_isMinimizedController] = React.useState(false);

    const handleCloseController = () => {
        set_isMinimizedController(true);
    }

    const handleTryPrint = () => {

        if (!data) {
            return;
        }

        fetch(path).then(res => {
            console.log("res",);
            return res.arrayBuffer()
        }).then(async (buffer) => {
            const existingPdfBytes = buffer;
            const pdfDoc = await PDFDocument.load(existingPdfBytes);
            // Embed the Helvetica font
            // const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
            // Get the first page of the document
            const pages = pdfDoc.getPages()
            const firstPage = pages[0]

            // Get the width and height of the first page
            const { width, height } = firstPage.getSize();
            let cw = width;
            let ch = height;
            let prevx = null;
            let prevy = null;
            const pT = pastTimeRange;
      

            //#@!
            console.log("data", data);
            console.log("fixationData", fixationData);


            //#@!
            const gazeData = data.gazeData;
            let size = rawSize * 2 / 100;
            let r = cw * 0.01 * size;
            //draw rawData
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
                        if (r) {
    
                            if (prevx && prevy) {
                                // rctx.beginPath();
                                // rctx.lineWidth = 0.5;
                                // rctx.strokeStyle = 'red';
                                // rctx.fillStyle = 'red';
                                // rctx.moveTo((prevx) * cw, (prevy) * ch);
                                // rctx.lineTo((d.pdfx) * cw, (d.pdfy) * ch);
                                // rctx.stroke();

                                pages[d.pageNum- 1].drawLine({
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
                                    thickness:1,

                                });

                            } //선먼저 그린후 그리기
    
                            pages[d.pageNum- 1].drawCircle({
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
    
    
    
    
                }
    
            }
    





            //draw Fixation
            let fr = cw * 0.01 * fixationSize * 1.5 / 100;
            prevx = null;
            prevy = null;

           

            for (let i = 0; i < fixationData.length; i++) {

                const f = fixationData[i];
                if (pT) {
                    if (f.relTime_e < (nowTime - pT)) {
                        continue;
                    }
                }

                if (f.relTime_s * 1 <= nowTime * 1) {
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
                                    thickness:1,

                                });
                            }

                            //원그리기 fixation
                            let fsize = fr * Math.sqrt(f.count);
                            if (f.relTime_e <= nowTime) {
                  
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


                            }
                            else {
                                // 작게 그려
                                let ratio = (nowTime - f.relTime_s) / (f.relTime_e - f.relTime_s);

                     
                                pages[f.pageNum_s - 1].drawCircle({
                                    x: f.x * cw,
                                    y: height - f.y * ch,
                                    size: fsize*ratio,
                                    borderWidth: 1,
                                    // borderDashArray: [1],
                                    // borderDashPhase: 25,
                                    borderColor: rgb(0, 0, 1),
                                    borderOpacity: 0.3,
                                    // fill:rgb(1,0,0)
                                    color: rgb(0, 0, 1),
                                    opacity: 0.3
                                    // borderColor: cmyk(0, 0, 0, 1), //blue red yeloow
                                    // borderLineCap: LineCapStyle.Round,
                                });
                            }

                            prevx = f.x;
                            prevy = f.y;
                        }

                    }


                }
            }

    


            const pdfBytes = await pdfDoc.save()
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });

            const blobURL = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = blobURL;
            link.download = "downloadPDF";
            document.body.append(link);
            link.click();
            link.remove();
            setTimeout(() => URL.revokeObjectURL(link.href), 7000);

            // window.open(blobURL);
            // URL.revokeObjectURL(blobURL);
        });
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
                                                <div className="oneConfig">

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

                                                <div className="oneConfig">

                                                    <div className="c_label">
                                                        응시크기
                                                    </div>
                                                    <div className="c_data">
                                                        <input type="range" style={{ width: '70%' }} value={fixationSize} min={0} max={100}
                                                            onChange={(e) => {
                                                                set_fixationSize(e.target.value)

                                                            }} />
                                                    </div>
                                                </div>
                                                <div className="oneConfig">

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
                                                <div style={{display:'flex'}}>
                                                <div className="oneConfig" style={{borderRight:'1px solid gray'}} onClick={() => set_isfullscreen(f => !f)}>
                                                    <FullScreenBtn
                                                        isfullscreen={isfullscreen}
                                                    />&nbsp; {isfullscreen ? <span style={{ color: 'yellow' }}>취소</span> : <span>전체</span>}
                                                </div>
                                                <div className="oneConfig" onClick={handleTryPrint}>
                                                    <img src={pdfsvg} alt="" style={{height:'70%'}}/>&nbsp;다운
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
                                
                                //#@!#@!
                                showConfirmBtn={showConfirmBtn}
                                onConfirm={onConfirm}


                                onClose={onClose}
                                showViewMode={true}
                                set_viewpercent={() => { }}
                                path={path}
                                viewpercent={viewpercent}
                                workerSRC={process.env.WORKERSRC}
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
                        </div>

                    </div>
                    <div className="playBarWrap">
                        <input className="rangePlay" type="range" step="0.01"
                            value={nowTime} max={endTime} min='0' onChange={(e) => set_nowTime(e.target.value * 1)} />
                    </div>
                </div>

            </div>

        </div>


    </div>)
}

export default PDFresultModal;
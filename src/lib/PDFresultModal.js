
import React, { useState, useRef, useMemo } from "react";
import './PDFresultModal.scss';
import PDFviewModal from 'react-rel-pdfviewer';
import { PDFDocument, rgb } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit'
import ReactTooltip from 'react-tooltip';
import readerseyelogo from "./img/readereyelogo.png";
import jeju from './font/JejuMyeongjo.ttf';
import { closeFullscreen, getFileAsArrayBuffer, hexToRgb, openFullScreen } from "./util";
// import { ReactComponent as RemoconSVG } from "./img/remotecontroller.svg";
import { ConfigController, RemoconController } from "./controller";
import { RemoconSVG } from "./svg";


const PDFresultModal = ({ ...props }) => {
    const { WORKERSRC,
        onClose,
        path,
        viewpercent, data, specialWidth, specialHeight,
        onConfirm, showConfirmBtn, printPDFData, downloadFileName, PDFonloadCallback, penweight, pencolor, penpermit } = props;
    const topRef = useRef();
    const pdfviewref = useRef();
    const [nowPage, set_nowPage] = useState(1);
    const [nowTime, set_nowTime] = useState(0);
    const endTime = useMemo(() => {
        // console.log(data.gazeInform.maxTime);

        let lastTime = data.gazeData[data.gazeData.length - 1].relTime;



        // console.log("et",et);
        set_nowTime(lastTime);
        return lastTime;
    }, [data])

    const originViewPercent = useMemo(() => {
        return viewpercent;
    }, [viewpercent]);

    //리모콘
    const [hideController, set_hideController] = useState(false);

    //차트 옵션. 톱니바퀴
    const [showConfig, set_showConfig] = useState(false);
    const resaveConfig = () => {
        set_chartOption(JSON.parse(JSON.stringify(chartOption)));
    }

    const [chartOption, set_chartOption] = useState({
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


        GazePastRange: 0, //0인경우 전체
        ChartPastRange: 20, //0인경우 전체

        playSpeed: 1,
        drawFPS: 30,
        penPermit: penpermit ? penpermit * 1 : 1,
        penColor: pencolor ? pencolor : '#FF0000',
        penWeight: penweight ? penweight : 1, //유저가 PDF에 펜으로 글씨 쓴것.
    })
    //문서내의 temp offset
    const [offsetX, set_offsetX] = useState("0.00");
    const [offsetY, set_offsetY] = useState("0.00");



    //fixation 값들. fixationArr 만들때 쓰임개발때 쓰임.
    const [fminx] = useState(1);
    const [fminy] = useState(1);
    //fixationData는 darw시에도 사용됨.
    const fixationData = useMemo(() => {
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
        // console.log("fa", fa);
        return fa;
    }, [data, fminx, fminy])
    const [minFixationCount] = useState(3);
    const fd_inform = useMemo(() => {
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
    const [innerFrameScale, set_innerFrameScale] = useState(0.5);
    const [innerFrameTop, set_innerFrameTop] = useState(0);
    const [innerFrameLeft, set_innerFrameLeft] = useState(0);


    //재생과 멈춤.
    const [isPlaying, set_isPlaying] = useState(false);

    //재생시 스크롤 따라갈것인가 옵션
    const [followEvent,set_followEvent] = useState(true);

    //PDF 인쇄시 사용함
    const [nowPDFviewInform, set_nowPDFviewInform] = useState(null);
  
    //전체화면
    const [isfullscreen, set_isfullscreen] = useState(false);


    //리사이즈이벤트
    const resizeInnerFrame = React.useCallback(() => {
        if (!topRef.current) return;

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

    //재생
    React.useEffect(() => {
        const { playSpeed, drawFPS } = chartOption;
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
                then = now - (elapsed % fpsInterval);
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

    }, [isPlaying, endTime, chartOption]);


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

        let size = chartOption.RPOG_size * 2 / 100;

        let r = cw * 0.01 * size;
        // console.log("지워");
        rctx.clearRect(0, 0, cw, ch);

        const gazeData = data.gazeData;

        const pT = chartOption.GazePastRange;

        // console.log("gazeData",gazeData)
        // //비율계산필요
        // //cw,ch는 지금의 사이즈고
        // //기록된 

        let prevx = null;
        let prevy = null;
        // let prevp = null;
        let osx = offsetX * 1;
        let osy = offsetY * 1;

        function drawRPOG() {
            //draw rawdata
            for (let i = 0; chartOption.RPOG && (i < gazeData.length); i++) {
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

                            if (chartOption.RPOG_line && prevx && prevy) {
                                rctx.beginPath();
                                rctx.lineWidth = 0.5;
                                rctx.strokeStyle = 'red';
                                rctx.fillStyle = 'red';
                                rctx.moveTo((prevx + osx) * cw, (prevy + osy) * ch);
                                rctx.lineTo((d.pdfx + osx) * cw, (d.pdfy + osy) * ch);
                                rctx.stroke();
                            } //선먼저 그린후 그리기


                            rctx.beginPath();
                            rctx.lineWidth = 0.5;
                            rctx.strokeStyle = 'rgb(255,0,0,0.3)';
                            rctx.fillStyle = 'rgb(255,0,0,0.3)';
                            rctx.arc((d.pdfx + osx) * cw, (d.pdfy + osy) * ch, r, 0, Math.PI * 2);
                            rctx.fill();

                        }
                        // prevp = d.pageNum
                        prevx = d.pdfx;
                        prevy = d.pdfy;



                    }




                }

            }



        }

        function drawFixation() {
            //draw Fixation
            let fr = cw * 0.01 * chartOption.FPOG_size * 1.5 / 100;
            prevx = null;
            prevy = null;
            for (let i = 0; (chartOption.FPOG && (i < fixationData.length)); i++) {

                const f = fixationData[i];
                if (pT) { //과거시간까지만 재생. pT가0이면 전체시간
                    if (f.relTime_e < (nowTime - pT)) {
                        continue;
                    }
                }
                //현재시간 전까지만 재생
                if (f.relTime_s * 1 <= nowTime * 1) {
                    if (nowPage === f.pageNum_s && fr) {
                        if (f.count >= minFixationCount) {

                            //선그리기...
                            if (chartOption.FPOG_line && prevx && prevy) {
                                rctx.beginPath();
                                rctx.lineWidth = 0.5;
                                rctx.strokeStyle = 'green';
                                rctx.fillStyle = 'green';
                                rctx.moveTo((prevx + osx) * cw, (prevy + osy) * ch);
                                rctx.lineTo((f.x + osx) * cw, (f.y + osy) * ch);
                                rctx.stroke();
                                rctx.closePath();
                            }

                            //원그리기 fixation
                            let fsize = fr * Math.sqrt(f.count);
                            if (f.relTime_e <= nowTime) {
                                //전체 다그려
                                rctx.beginPath();
                                rctx.lineWidth = 0.5;
                                rctx.strokeStyle = 'rgb(0,255,0,0.3)';
                                rctx.fillStyle = 'rgb(0,255,0,0.3)';
                                rctx.arc((f.x + osx) * cw, (f.y + osy) * ch, fsize, 0, Math.PI * 2);
                                rctx.fill();
                                rctx.closePath();
                            }
                            else {
                                // 작게 그려
                                let ratio = (nowTime - f.relTime_s) / (f.relTime_e - f.relTime_s);

                                rctx.beginPath();
                                rctx.lineWidth = 0.5;
                                rctx.strokeStyle = 'rgb(0,0,255,0.3)';
                                rctx.fillStyle = 'rgb(0,0,255,0.3)';
                                rctx.arc((f.x + osx) * cw, (f.y + osy) * ch, fsize * ratio, 0, Math.PI * 2);
                                rctx.fill();
                                rctx.closePath();
                            }


                            if (chartOption.FPOG_number === true) {
                                rctx.beginPath();
                                rctx.strokeStyle = "black";
                                rctx.fillStyle = "black";
                                rctx.lineWidth = 1;
                                rctx.font = (cw / 100) * chartOption.FPOG_number_size + "px Arial";
                                rctx.textAlign = "center";
                                rctx.textBaseline = "middle";
                                rctx.fillText(f.fixationNumber, (f.x + osx) * cw, (f.y + osy) * ch);
                                rctx.stroke();
                            }
                            prevx = f.x;
                            prevy = f.y;
                        }
                    }
                }
            }

        }

        function drawPencil() {
            //draw pencil

            let startdrawX, startdrawY;
            // console.log("chartOption.penPermit",chartOption.penPermit)
            for (let i = 0; (chartOption.penPermit * 1 && (i < gazeData.length)); i++) {

                let d = gazeData[i];
                const { pageNum } = d;
                const draw = gazeData[i].draw;

                // if (pT) {
                //     if (d.relTime < (nowTime - pT)) {
                //         continue;
                //     }
                // }
                if (!draw) {
                    continue;
                }
                // console.log("t",t);


                if (d.relTime * 1 <= nowTime * 1) {
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
                            rctx.moveTo(draw.x * cw, draw.y * ch);
                            // testdata.push(draw);
                        }
                        else if (draw.type === 'draw') {
                            if (startdrawX && startdrawY) {
                                rctx.lineTo(draw.x * cw, draw.y * ch);
                                rctx.stroke();
                                // testdata.push(draw);
                            }
                            else {
                                startdrawX = draw.x * cw;
                                startdrawY = draw.y * ch;
                                rctx.beginPath();
                                rctx.moveTo(draw.x * cw, draw.y * ch);
                            }

                        }
                        else if (draw.type === 'stopDrawing') {
                            rctx.closePath();
                        }

                    }
                }
            }
        }
        drawRPOG();
        drawFixation();
        drawPencil();




    }, [data, nowTime, nowPage, chartOption, nowPDFviewInform, fixationData, minFixationCount, offsetX, offsetY]);



    //PDF 스크롤과 page 이동기록을 따라가는 함수
    const handlePDFmoveEvent = React.useCallback(() => {
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
            handlePDFmoveEvent();
        }
    }, [handlePDFmoveEvent, followEvent])


    React.useEffect(() => {
        handleDraw();
    }, [handleDraw]);


    //PDF writing 할때 쓰는것들임. 분리 필요
    const [jejuFontArrayBuffer, set_jejuFontArrayBuffer] = useState(null);
    React.useEffect(() => {
        getFileAsArrayBuffer(jeju).then(res_arrbuffer => {
            set_jejuFontArrayBuffer(res_arrbuffer);
        });
    }, []);


    //인쇄할 PDF데이터 path값에 따라서 PDFarraybuffer 보관
    const [pdfArrayBuffer, set_pdfArrayBuffer] = useState(null);
    React.useEffect(() => {
        if (!path) return;
        fetch(path).then(async res => {
            return res.arrayBuffer()
        }).then(async (buffer) => {
            set_pdfArrayBuffer(buffer);
        });
    }, [path]);

    //인쇄할 리더스아이로고 데이터
    const [readersEyeLogoArrayBuffer, set_readersEyeLogoArrayBuffer] = useState(null);
    React.useEffect(() => {
        fetch(readerseyelogo).then(r => r.arrayBuffer()).then(buf => {
            set_readersEyeLogoArrayBuffer(buf);
        });
    }, [])


    const handleFullScreen = () => {
        if (isfullscreen) {
            closeFullscreen();
        }
        else {
            let max = (window.screen.height / window.devicePixelRatio).toFixed(0) * 1;
            if (max !== window.innerHeight) {
                openFullScreen();
                set_isfullscreen(true);
            }
        }
    }


    //pdf 인쇄
    const handleTryPrint = async () => {

        if (!data) {
            return;
        }



        //폰트파일 할당
        const fontBytes = jejuFontArrayBuffer;

        // let pdfDoc;
        const existingPdfBytes = pdfArrayBuffer; //PDF 버퍼

        const pdfDoc = await PDFDocument.load(existingPdfBytes
            , { ignoreEncryption: true }
        );


        // console.log("registerFontkit");
        pdfDoc.registerFontkit(fontkit);
        // console.log("registerFontkitend");


        // Embed the Helvetica font
        // const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
        // Get the first page of the document
        // console.log("pdfDoc", pdfDoc);

        // const pageIndices = pdfDoc.getPageIndices();
        // console.log("pageIndices",pageIndices);
        if (pdfDoc.isEncrypted) {
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
        const pngImageBytes = readersEyeLogoArrayBuffer;

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

        let osx=offsetX*1;
        let osy=offsetY*1;

        const gazeData = data.gazeData;
        let size = chartOption.RPOG_size * 2 / 100;
        let r = cw * 0.01 * size;
        //draw rawData
        for (let i = 0; chartOption.RPOG && (i < gazeData.length); i++) {
            let d = gazeData[i];
            if (d.pdfx && d.pdfy) {
                if (r) {

                    if (prevx && prevy) {
                        pages[d.pageNum - 1].drawLine({
                            start: {
                                x: (prevx+osx) * cw,
                                y: height - (prevy+osy) * ch,
                            },
                            end: {
                                x: (d.pdfx+osx) * cw,
                                y: height - (d.pdfy+osy) * ch,
                            },
                            color: rgb(1, 0, 0),
                            opacity: 0.3,
                            borderOpacity: 0.3,
                            thickness: 1,

                        });

                    } //선먼저 그린후 그리기

                    pages[d.pageNum - 1].drawCircle({
                        x: (d.pdfx+osx) * cw,
                        y: height - (d.pdfy+osy) * ch,
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

                }
                prevx = d.pdfx;
                prevy = d.pdfy;
            }
        }



        //draw Fixation
        let fr = cw * 0.01 * chartOption.FPOG_size * 1.5 / 100;
        prevx = null;
        prevy = null;

        for (let i = 0; chartOption.FPOG && (i < fixationData.length); i++) {
            const f = fixationData[i];
            if (fr) {
                if (f.count >= minFixationCount) {

                    //선그리기...
                    if (prevx && prevy) {
                        pages[f.pageNum_s - 1].drawLine({
                            start: {
                                x: (prevx+osx) * cw,
                                y: height - (prevy+osy) * ch,
                            },
                            end: {
                                x: (f.x+osx) * cw,
                                y: height - (f.y+osy) * ch,
                            },
                            color: rgb(0, 1, 0),
                            opacity: 0.3,
                            borderOpacity: 0.3,
                            thickness: 1,

                        });
                    }

                    //원그리기 fixation
                    let fsize = fr * Math.sqrt(f.count);
                    pages[f.pageNum_s - 1].drawCircle({
                        x: (f.x+osx) * cw,
                        y: height - (f.y+osy) * ch,
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
                    prevx = f.x;
                    prevy = f.y;
                }

            }


            // }
        }


        //draw pencil
        let startdrawX, startdrawY;
        for (let i = 0; (chartOption.penPermit && (i < gazeData.length)); i++) {

            let d = gazeData[i];
            const { pageNum } = d;
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
                }
                else if (draw.type === 'draw') {
                    //hexToRgb(chartOption.penColor)
                    let rgbobj = hexToRgb(chartOption.penColor);
                    // console.log("rgbobj",rgbobj)
                    if (startdrawX && startdrawY) {
                        // rctx.lineTo(draw.x * cw, draw.y * ch);
                        // rctx.stroke();
                        // testdata.push(draw);
                        pages[pageNum - 1].drawLine({
                            start: {
                                x: startdrawX * cw,
                                y: height - startdrawY * ch,
                            },
                            end: {
                                x: draw.x * cw,
                                y: height - draw.y * ch,
                            },
                            color: rgbobj ? rgb(rgbobj.r / 255, rgbobj.g / 255, rgbobj.b / 255) : '#0000FF',//#@! 여기 rgb 로
                            opacity: 1,
                            borderOpacity: 0.3,
                            thickness: (chartOption.penWeight / 2).toFixed(0) * 1 || 1,

                        });
                        startdrawX = draw.x;
                        startdrawY = draw.y;
                    }
                    else {
                        // startdrawX = draw.x * cw;
                        // startdrawY = draw.y * ch;
                        // rctx.beginPath();
                        // rctx.moveTo(draw.x * cw, draw.y * ch);

                        startdrawX = draw.x;
                        startdrawY = draw.y;
                    }

                }
                else if (draw.type === 'stopDrawing') {
                    // rctx.closePath();
                    startdrawX = null;
                    startdrawY = null;
                }


            }
        }


        //////새로운패이지 생성
        const newPage = pdfDoc.insertPage(0, [width, height]);



        const fontSize = 15;
        const title = "Pathway 시선추적 측정 결과";
        const titleFontSize = 25;
        const customFont = await pdfDoc.embedFont(fontBytes);
        // const HelveticaFont =await pdfDoc.embedFont(StandardFonts.Helvetica); 

        const textWidth = customFont.widthOfTextAtSize(title, titleFontSize);
        // const textHeight = customFont.heightAtSize(titleFontSize);

        //printPDFData
        newPage.drawText(title, {
            x: width / 2 - textWidth / 2,
            y: height * 3 / 5 - 1 * titleFontSize,
            size: titleFontSize,
            font: customFont,
            color: rgb(0, 0, 0),
        });

        const topMargin = 15;
        const textMarginTop = 5;
        const textMarginLeft = 15;
        let keycount = 1;
        // const textWidth = customFont.widthOfTextAtSize(text, textSize)
        // const textHeight = customFont.heightAtSize(textSize)

        for (let key in printPDFData) {
            newPage.drawText(`${key} : ` + printPDFData[key], {
                x: textMarginLeft,
                y: -topMargin - textMarginTop * keycount + height - keycount * fontSize,
                size: fontSize,
                font: customFont,
                color: rgb(0, 0, 0),
            });
            keycount++;

        }

        newPage.drawImage(pngImage, {
            x: width / 2 - pngDims.width / 2,
            y: -textMarginTop * (keycount + 3) + height * 3 / 8 - (keycount + 3) * fontSize,
            width: pngDims.width,
            height: pngDims.height,
        })


        /////////////저장 다운로드/////////////
        const pdfBytes = await pdfDoc.save({ updateFieldAppearances: false })
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




    return (<div className="PDFresultModal" onClick={() => {
        set_showConfig(false);
    }}>
        <div className="ResultWrap" style={{
            width: isfullscreen ? '100%' : specialWidth,
            height: isfullscreen ? '100%' : specialHeight,
            minWidth: isfullscreen ? '100%' : specialWidth,
        }}>
            <div className="marginWrap">
                <RemoconController fd_inform={fd_inform} handleTryPrint={handleTryPrint}
                    offsetX={offsetX} offsetY={offsetY}
                    hideController={hideController}
                    set_offsetX={set_offsetX} set_offsetY={set_offsetY} originViewPercent={originViewPercent}
                />
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
                                PDFonloadCallback={PDFonloadCallback ? PDFonloadCallback : (pageNums) => {
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

                                    // handleDraw();

                                }}
                            />
                        </div>
                    </div>
                    <div className="playbarWrapper no-drag">
                        <div className="rangePlayWrapper">
                            <input className="rangePlay" type="range" step="0.01"
                                value={nowTime} max={endTime} min='0' onChange={(e) => set_nowTime(e.target.value * 1)} />
                        </div>
                        <div className="rangeBtnWrapper">
                            <div className="leftBtnWrap">
                                <div>
                                    <button className={isPlaying ? "playBtn playing" : "playBtn"} onClick={handleTogglePlay}></button>
                                </div>
                                <div className="GC-TimeWrapper">
                                    <div className="nowTimeWrapper">{nowTime.toFixed(2)}</div>
                                    <div className="endTimeWrapper">&nbsp;/&nbsp;{endTime.toFixed(2)}</div>
                                </div>
                            </div>

                            <div className="rightBtnWrap">
                                <div className="flex" style={{ width: 70, height: 48 }}
                                    data-tip="응시 / 히트맵 보기 선택"
                                >
                                    {/* <ToggleSwitch
                                // className="showattendingcheckbox"
                                {...toggleInfo}
                                onClickToggle={() => {
                                    // console.log("토글");        
                                    if (toggleInfo.checked) {
                                        //응시온
                                        GazeChartOption.FPOG = true;
                                        GazeChartOption.FPOG_size = 20;
                                        GazeChartOption.FPOG_line = true;
                                        GazeChartOption.FPOG_number = false;
                                        GazeChartOption.FPOG_number_size = 1.7;
                                        GazeChartOption.heatMap = false;
                                        GazeChartOption.heatMapMax = 40;
                                        GazeChartOption.heatMapRadius = 40;
                                        GazeChartOption.heatMapMaxOpacity = 0.7;
                                        resaveGazeChartOption();
                                    }
                                    else {
                                        //힛맵온
                                        GazeChartOption.FPOG = false;
                                        GazeChartOption.FPOG_size = 20;
                                        GazeChartOption.FPOG_line = false;
                                        GazeChartOption.FPOG_number = false;
                                        GazeChartOption.FPOG_number_size = 1.7;
                                        GazeChartOption.heatMap = true;
                                        GazeChartOption.heatMapMax = 40;
                                        GazeChartOption.heatMapRadius = 40;
                                        GazeChartOption.heatMapMaxOpacity = 0.7;
                                        resaveGazeChartOption();
                                    }
                                    setToggleInfo({ ...toggleInfo, checked: !toggleInfo.checked, color: !toggleInfo.checked ? "#145894" : "gray" });

                                }}
                            /> */}

                                </div>


                                <button className={`showControllerBtn ${!hideController && 'selected'}`}
                                    data-tip="제어판 보기"
                                    onClick={() => {
                                        set_hideController(h => !h);
                                    }}>
                                    <RemoconSVG />
                                </button>


                                <div style={{ position: 'relative' }}>
                                    <button className={`configBtn ${showConfig && 'selected'}`}
                                        data-tip={`설정`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            set_showConfig(c => !c)
                                        }}>
                                        <svg
                                            className={showConfig ? "configArea config selected" : "configArea config"}
                                            style={{
                                                enableBackground: "new 0 0 24 24",
                                            }}
                                            fill="currentColor"
                                            version="1.1"
                                            viewBox="0 0 24 24"
                                            xmlSpace="preserve"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                        >
                                            <g />
                                            <g>
                                                <path d="M22.2,14.4L21,13.7c-1.3-0.8-1.3-2.7,0-3.5l1.2-0.7c1-0.6,1.3-1.8,0.7-2.7l-1-1.7c-0.6-1-1.8-1.3-2.7-0.7   L18,5.1c-1.3,0.8-3-0.2-3-1.7V2c0-1.1-0.9-2-2-2h-2C9.9,0,9,0.9,9,2v1.3c0,1.5-1.7,2.5-3,1.7L4.8,4.4c-1-0.6-2.2-0.2-2.7,0.7   l-1,1.7C0.6,7.8,0.9,9,1.8,9.6L3,10.3C4.3,11,4.3,13,3,13.7l-1.2,0.7c-1,0.6-1.3,1.8-0.7,2.7l1,1.7c0.6,1,1.8,1.3,2.7,0.7L6,18.9   c1.3-0.8,3,0.2,3,1.7V22c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2v-1.3c0-1.5,1.7-2.5,3-1.7l1.2,0.7c1,0.6,2.2,0.2,2.7-0.7l1-1.7   C23.4,16.2,23.1,15,22.2,14.4z M12,16c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4s4,1.8,4,4C16,14.2,14.2,16,12,16z" />
                                            </g>
                                        </svg>
                                    </button>

                                    <ConfigController
                                        resaveConfig={resaveConfig}
                                        showConfig={showConfig}
                                        ChartOption={chartOption}
                                        set_followEvent={set_followEvent}
                                        followEvent={followEvent}
                                    />
                                </div>


                                <button className={`fullScreenBtn ${isfullscreen ? 'fullscreenstate' : ''}`}
                                    data-tip="전체화면"
                                    onClick={handleFullScreen}>
                                    {isfullscreen ? <svg version="1.1" viewBox="0 0 36 36" fill="currentColor">
                                        <g>
                                            <path d="m 14,14 -4,0 0,2 6,0 0,-6 -2,0 0,4 0,0 z" ></path>
                                        </g>
                                        <g>
                                            <path d="m 22,14 0,-4 -2,0 0,6 6,0 0,-2 -4,0 0,0 z" ></path>
                                        </g>
                                        <g>
                                            <path d="m 20,26 2,0 0,-4 4,0 0,-2 -6,0 0,6 0,0 z" ></path>
                                        </g>
                                        <g>
                                            <path d="m 10,22 4,0 0,4 2,0 0,-6 -6,0 0,2 0,0 z" ></path>
                                        </g>
                                    </svg> :
                                        <svg version="1.1" viewBox="0 0 36 36" fill="currentColor">
                                            <g>
                                                <path d="m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z"></path>
                                            </g>
                                            <g>
                                                <path d="m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z"></path>
                                            </g>
                                            <g>
                                                <path d="m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z"></path>
                                            </g>
                                            <g>
                                                <path d="M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z"></path>
                                            </g>
                                        </svg>
                                    }

                                </button>
                            </div>
                        </div>

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
    </div>);
}

export default PDFresultModal;
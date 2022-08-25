
import React from "react";
import './PDFresultModal.scss';
import PDFviewModal from 'react-rel-pdfviewer';
import Draggable from 'react-draggable';

const PDFresultModal = ({ onClose, ...props }) => {
    const { path, viewpercent, data ,specialWidth,specialHeight} = props;


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

    const [fixationSize, set_fixationSize] = React.useState(40);
    const [pastTimeRange, set_pastTimeRange] = React.useState(0);
    const [nowPDFviewInform, set_nowPDFviewInform] = React.useState(null);
    const [minFixationCount, set_minFixationCount] = React.useState(3);


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
        console.log("fa", fa);

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
    }, [data]);

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


    const [isFocus, set_isFocus] = React.useState(false);
    const [mw] = React.useState(200);
    const [mh] = React.useState(503);

    const [isMinimizedController, set_isMinimizedController] = React.useState(false);
    const handleCloseController = () => {
        set_isMinimizedController(true);
    }
    return (<div className="PDFresultModal">
        <div className="ResultWrap" style={{
            width: specialWidth,
            height: specialHeight
        }}>
            <div className="marginWrap">

                {
                    isMinimizedController === false ?
                        <>
                            <Draggable

                                handle=".OVM-drag-handle"
                                defaultPosition={{ x: 0, y: 0 }}
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
                                        <button className="icon-btn" style={{ position: 'absolute', right: 0 }} onClick={handleCloseController}><i className="fa fa-times" aria-hidden="true"></i></button>

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
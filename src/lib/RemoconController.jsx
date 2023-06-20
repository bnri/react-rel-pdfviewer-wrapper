
import React, { useState, useEffect } from "react";
import Draggable from 'react-draggable';
import pdfsvg from './PDF_file_icon.svg';
const KeyboardLeftArrow = ({ ...props }) => {
    const { onClick } = props;
    let defaultStyle = {
        width: "37px",
        height: "37px",
        boxSizing: "border-box",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
    };
    let defaultClassName = "oneKey";
    let customStyle = props.style;
    let customClassName = props.className;
    if (customClassName) {
        defaultClassName = defaultClassName + " " + customClassName;
    }

    for (let key in customStyle) {
        // console.log(key);
        defaultStyle[key] = customStyle[key];
    }

    // console.log(defaultStyle);

    return (
        <div className={defaultClassName} style={defaultStyle} onClick={onClick}>
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 493.578 493.578"
                style={{
                    enableBackground: "new 0 0 493.578 493.578",
                    width: "70%",
                    height: "70%",
                }}
                fill="currentColor"
                xmlSpace="preserve"
            >
                <g>
                    <path
                        d="M487.267,225.981c0-17.365-13.999-31.518-31.518-31.518H194.501L305.35,83.615c12.24-12.24,12.24-32.207,0-44.676
                  L275.592,9.18c-12.24-12.24-32.207-12.24-44.676,0L15.568,224.527c-6.12,6.12-9.256,14.153-9.256,22.262
                  c0,8.032,3.136,16.142,9.256,22.262l215.348,215.348c12.24,12.239,32.207,12.239,44.676,0l29.758-29.759
                  c12.24-12.24,12.24-32.207,0-44.676L194.501,299.498h261.094c17.366,0,31.519-14.153,31.519-31.519L487.267,225.981z"
                    />
                </g>
            </svg>
        </div>
    );
};

const RemoconController = ({ ...props }) => {
    const { hideController, handleTryPrint, fd_inform
        , offsetX, offsetY, set_offsetX, set_offsetY
    } = props;

    const [visibility, set_visibility] = useState('visible');
    useEffect(() => {
        let a;
        if (hideController) {
            a = setTimeout(function () {
                set_visibility('hidden');
            }, 200)
        }
        else {
            set_visibility('visible');
        }
        return () => {
            clearTimeout(a);
        }
    }, [hideController])

    return <Draggable
        bounds=".topVacancy"
        handle=".Remocon-drag-handle"
        // defaultPosition={{ x: 50, y: 50 }}

        grid={[1, 1]} >

        <div className="controllerWrapper" style={{
            // display: hideController ? 'block' : 'block',
            opacity: hideController ? 0 : 1,
            visibility: visibility,
            transition: 'opacity .2s ease'
        }}>
            <div className="header Remocon-drag-handle">
                Drag
            </div>
            <div className="cbody">
                <div className="GC-etcWrapper">
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
                
                    <div className="oneConfig downloadpdf" onClick={handleTryPrint} data-tip="시선이동이 표현된 PDF를 다운로드 합니다.">
                            <img src={pdfsvg} alt="" />&nbsp;&nbsp;PDF다운로드
                    </div>
                    
                </div>
                <div className="GC-fixoffsetWrapper no-drag">
                    <div className="title">시선 위치 조정</div>

                    <div className="keyboardWrapper">
                        <div className="kw">
                            <div className="kw-row">
                                <div></div>
                                <div data-tip="(단축키-키보드 방향키)">
                                    <KeyboardLeftArrow style={{ transform: "rotate(90deg)" }} onClick={() => set_offsetY((offsetY * 1 - 0.01).toFixed(2))} />
                                </div>
                                <div></div>
                            </div>
                            <div className="kw-row">
                                <div data-tip="(단축키-키보드 방향키)">
                                    <KeyboardLeftArrow onClick={() => set_offsetX((offsetX * 1 - 0.01).toFixed(2))} />
                                </div>
                                <div data-tip="(단축키-키보드 방향키)">
                                    <KeyboardLeftArrow style={{ transform: "rotate(270deg)" }} onClick={() => set_offsetY((offsetY * 1 + 0.01).toFixed(2))} />
                                </div>
                                <div data-tip="(단축키-키보드 방향키)">
                                    <KeyboardLeftArrow onClick={() => set_offsetX((offsetX * 1 + 0.01).toFixed(2))} style={{ transform: "rotate(180deg)" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="offsetWrapper">{"X : " + offsetX + " Y : " + offsetY}</div>
                </div>



            </div>
        </div>
    </Draggable>
}
/*
const RemoconController = ({ ...props }) => {
    const { hideController, handleTryPrint, fd_inform } = props;


    const [isFocus, set_isFocus] = useState();
    const [visibility, set_visibility] = useState('visible');
    useEffect(() => {
        let a;
        if (hideController) {
            a = setTimeout(function () {
                set_visibility('hidden');
            }, 200)
        }
        else {
            set_visibility('visible');
        }
        return () => {
            clearTimeout(a);
        }
    }, [hideController])

    return <Draggable
        bounds=".topVacancy"
        handle=".Remocon-drag-handle"
        // defaultPosition={{ x: 50, y: 50 }}
       
        grid={[1, 1]} >

        <div tabIndex='0' className="RemoconController"
            style={{
                backgroundColor: 'white',
                opacity: hideController ? 0 : 1,
                visibility: visibility,
                transition: 'opacity .2s ease',
                zIndex: isFocus ? 10 : 9
            }}
            onBlur={() => {
                //console.log("OVM BLUR");
                set_isFocus(false);
            }}
            onFocus={() => {
                //console.log("OVM FOCUS");
                set_isFocus(true);
            }}
        >
            <div className="header Remocon-drag-handle" style={{ backgroundColor: isFocus ? 'rgb(40,40,40)' : 'rgb(20,20,20)' }}>
                Drag
            </div>

            <div className="middle">
                <div className="moveBar">
                    <div className="SideBar">
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
                            <div className="oneConfig" onClick={handleTryPrint} data-tip="시선이동이 표현된 PDF를 다운로드 합니다.">
                                <img src={pdfsvg} alt="" style={{ height: '70%' }} />&nbsp;다운
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </Draggable>
}
*/
export default RemoconController;
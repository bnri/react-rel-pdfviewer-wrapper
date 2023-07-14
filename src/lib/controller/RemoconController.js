import React, { useState, useEffect } from "react";
import Draggable from 'react-draggable';
import { KeyboardLeftArrow, PDFSVG } from "../svg";

const RemoconController = ({ ...props }) => {
    const { hideController, handleTryPrint, fd_inform
        , offsetX, offsetY, set_offsetX, set_offsetY
        ,originViewPercent,

        isPossiblePDFDownload
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
    }, [hideController]);



    

    return (<Draggable
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
                    <div className="oneConfig">
                        <div className="c_label">
                            측정시문서배율
                        </div>
                        <div className="c_data">
                            {originViewPercent}%
                        </div>
                    </div>

                    <div className="oneConfig downloadpdf" 
                            style={{
                                background:isPossiblePDFDownload?'':'gray',
                                cursor:'not-allowed'
                            }}
                    onClick={()=>{
                        if(isPossiblePDFDownload){
                            handleTryPrint();
                        }

                        }} data-tip="시선이동이 표현된 PDF를 다운로드 합니다.">
                        <PDFSVG />&nbsp;&nbsp;PDF다운로드
                    </div>

                </div>
                <div className="GC-fixoffsetWrapper no-drag">
                    <div className="title">시선 위치 조정</div>

                    <div className="keyboardWrapper">
                        <div className="kw">
                            <div className="kw-row">
                                <div></div>
                                <div>
                                    <KeyboardLeftArrow style={{ transform: "rotate(90deg)" }} onClick={() => set_offsetY((offsetY * 1 - 0.01).toFixed(2))} />
                                </div>
                                <div></div>
                            </div>
                            <div className="kw-row">
                                <div>
                                    <KeyboardLeftArrow onClick={() => set_offsetX((offsetX * 1 - 0.01).toFixed(2))} />
                                </div>
                                <div>
                                    <KeyboardLeftArrow style={{ transform: "rotate(270deg)" }} onClick={() => set_offsetY((offsetY * 1 + 0.01).toFixed(2))} />
                                </div>
                                <div>
                                    <KeyboardLeftArrow onClick={() => set_offsetX((offsetX * 1 + 0.01).toFixed(2))} style={{ transform: "rotate(180deg)" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="offsetWrapper">{"X : " + offsetX + " Y : " + offsetY}</div>
                </div>



            </div>
        </div>
    </Draggable>);
}

export default RemoconController;
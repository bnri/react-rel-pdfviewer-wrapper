import React, { useState, useEffect } from "react";

import { CheckSVG, ChevronLeftSVG, ChevronRightSVG } from "../svg";

const ConfigController = ({ ...props }) => {
    const { resaveConfig, showConfig, ChartOption } = props;
    const [, forceUpdate] = useState();
    useEffect(() => {
        forceUpdate({});
    }, [ChartOption]);

    const [mainConfigWidth, set_mainConfigWidth] = useState("250px");
    const [mainConfigHegiht, set_mainConfigHeight] = useState("950px");

    const [subConfig1Width, set_subConfig1Width] = useState("0");
    const [subConfig1Hegiht, set_subConfig1Height] = useState("0");



    const [subConfig3Width, set_subConfig3Width] = useState("0");
    const [subConfig3Hegiht, set_subConfig3Height] = useState("0");

    const [subConfig4Width, set_subConfig4Width] = useState("0");
    const [subConfig4Hegiht, set_subConfig4Height] = useState("0");



    const [subConfig6Width, set_subConfig6Width] = useState("0");
    const [subConfig6Hegiht, set_subConfig6Height] = useState("0");


    useEffect(() => {
        let a;
        if (!showConfig) {
            a = setTimeout(function () {
                set_mainConfigWidth('250px');
                set_mainConfigHeight('800px');
                set_subConfig1Width("0");
                set_subConfig1Height("0");

                set_subConfig3Width("0");
                set_subConfig3Height("0");
                set_subConfig4Width("0");
                set_subConfig4Height("0");

                set_subConfig6Width("0");
                set_subConfig6Height("0");
            }, 300);
        }
        return () => {
            clearTimeout(a);
        }
    }, [showConfig])


    return (<div
        className="ConfigWrapper configArea"
        style={{
            opacity: showConfig ? "1" : "0",
            visibility: showConfig ? "visible" : "hidden",
        }}
        onClick={(e) => {
            e.stopPropagation();
        }}
    >
        <div
            className="mainConfig"
            style={{
                width: mainConfigWidth,
                height: mainConfigHegiht,
            }}
        >


            <div
                className="oneConfig"
                onClick={() => {
                    ChartOption.heatMap = !ChartOption.heatMap;
                    resaveConfig();
                }}
            >
                <div className="c_label">히트맵 보기(H)</div>
                <div className="c_data">
                    <div className="ckbx-style-8">
                        <input type="checkbox" name="ckbx-style-8" checked={ChartOption.heatMap} onChange={() => { }} />
                        <label />
                    </div>
                </div>
            </div>

            <div
                className="oneConfig borderBottom"
                onClick={() => {
                    //여기 팝
                    set_mainConfigWidth(0);
                    set_mainConfigHeight(0);
                    set_subConfig6Width("250px");
                    set_subConfig6Height("200px");
                }}
            >
                <div className="c_label">히트맵 세부설정</div>
                <div className="c_data">
                    <div style={{ width: "75%", display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: "15px" }}>기본</div>
                    <div style={{ width: "25%", display: "flex", alignItems: "center", justifyContent: "center", paddingRight: "10px" }}>
                        <ChevronRightSVG />
                    </div>
                </div>
            </div>


            <div className="oneConfig">
                <div className="c_label">시선 크기</div>
                <div className="c_data">
                    <input
                        type="range"
                        style={{ width: "70%" }}
                        value={ChartOption.RPOG_size}
                        min={1}
                        step={0.1}
                        max={80}
                        onChange={(e) => {
                            ChartOption.RPOG_size = e.target.value * 1;
                            resaveConfig();
                        }}
                    />
                </div>
            </div>

            <div
                className="oneConfig"
                onClick={() => {
                    ChartOption.RPOG = !ChartOption.RPOG;
                    resaveConfig();
                }}
            >
                <div className="c_label">시선 보기(G)</div>
                <div className="c_data">
                    <div className="ckbx-style-8">
                        <input type="checkbox" name="ckbx-style-8" checked={ChartOption.RPOG} onChange={() => { }} />
                        <label />
                    </div>
                </div>
            </div>


            <div
                className="oneConfig borderBottom"
                onClick={() => {
                    ChartOption.RPOG_line = !ChartOption.RPOG_line;
                    resaveConfig();
                }}
            >
                <div className="c_label">시선 이동 보기(K)</div>
                <div className="c_data">
                    <div className="ckbx-style-8">
                        <input type="checkbox" name="ckbx-style-8" checked={ChartOption.RPOG_line} onChange={() => { }} />
                        <label />
                    </div>
                </div>
            </div>

            <div className="oneConfig">
                <div className="c_label">응시 크기</div>
                <div className="c_data">
                    <input
                        type="range"
                        style={{ width: "70%" }}
                        value={ChartOption.FPOG_size}
                        min={0}
                        step={0.1}
                        max={100}
                        onChange={(e) => {
                            ChartOption.FPOG_size = e.target.value * 1;
                            resaveConfig();
                        }}
                    />
                </div>
            </div>
            <div
                className="oneConfig"
                onClick={() => {
                    if (ChartOption.FPOG && ChartOption.FPOG_number) {
                        ChartOption.FPOG_number = !ChartOption.FPOG_number;
                    }

                    ChartOption.FPOG = !ChartOption.FPOG;
                    resaveConfig();
                }}
            >
                <div className="c_label">응시 보기(F)</div>
                <div className="c_data">
                    <div className="ckbx-style-8">
                        <input type="checkbox" name="ckbx-style-8" checked={ChartOption.FPOG} onChange={() => { }} />
                        <label />
                    </div>
                </div>
            </div>

            <div
                className="oneConfig"
                onClick={() => {
                    ChartOption.FPOG_line = !ChartOption.FPOG_line;
                    resaveConfig();
                }}
            >
                <div className="c_label">응시 이동 보기(L)</div>
                <div className="c_data">
                    <div className="ckbx-style-8">
                        <input type="checkbox" name="ckbx-style-8" checked={ChartOption.FPOG_line} onChange={() => { }} />
                        <label />
                    </div>
                </div>
            </div>

            <div
                className="oneConfig"
                onClick={() => {
                    if (!ChartOption.FPOG_number && !ChartOption.FPOG) {
                        ChartOption.FPOG = !ChartOption.FPOG;
                    }
                    ChartOption.FPOG_number = !ChartOption.FPOG_number;
                    resaveConfig();
                }}
            >
                <div className="c_label">응시 순번 보기(N)</div>
                <div className="c_data">
                    <div className="ckbx-style-8">
                        <input type="checkbox" name="ckbx-style-8" checked={ChartOption.FPOG_number} onChange={() => { }} />
                        <label />
                    </div>
                </div>
            </div>
            <div className="oneConfig borderBottom">
                <div className="c_label">응시 순서 크기</div>
                <div className="c_data">
                    <input
                        type="range"
                        style={{ width: "70%" }}
                        value={ChartOption.FPOG_number_size}
                        min={0}
                        step={0.1}
                        max={5}
                        onChange={(e) => {
                            ChartOption.FPOG_number_size = e.target.value * 1;
                            resaveConfig();
                        }}
                    />
                </div>
            </div>

            <div
                className="oneConfig"
                onClick={() => {
                    //subConfig1로
                    set_mainConfigWidth(0);
                    set_mainConfigHeight(0);
                    set_subConfig1Width("250px");
                    set_subConfig1Height("350px");
                }}
            >
                <div className="c_label">시선창 과거범위</div>
                <div className="c_data">
                    <div style={{ width: "75%", display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: "15px" }}>{ChartOption.GazePastRange !== null && ChartOption.GazePastRange === 0 ? "전체" : ChartOption.GazePastRange + "초"}</div>
                    <div style={{ width: "25%", display: "flex", alignItems: "center", justifyContent: "center", paddingRight: "10px" }}>
                        <ChevronRightSVG />
                    </div>
                </div>
            </div>

            <div
                className="oneConfig"
                onClick={() => {
                    //subConfig1로
                    set_mainConfigWidth(0);
                    set_mainConfigHeight(0);
                    set_subConfig3Width("250px");
                    set_subConfig3Height("350px");
                }}
            >
                <div className="c_label">재생 배속</div>
                <div className="c_data">
                    <div style={{ width: "75%", display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: "15px" }}>{ChartOption.playSpeed !== null && `x${ChartOption.playSpeed}`}</div>
                    <div style={{ width: "25%", display: "flex", alignItems: "center", justifyContent: "center", paddingRight: "10px" }}>
                        <ChevronRightSVG />
                    </div>
                </div>
            </div>
            <div
                className="oneConfig"
                onClick={() => {
                    //subConfig1로
                    set_mainConfigWidth(0);
                    set_mainConfigHeight(0);
                    set_subConfig4Width("250px");
                    set_subConfig4Height("250px");
                }}
            >
                <div className="c_label">재생 목표 FPS</div>
                <div className="c_data">
                    <div style={{ width: "75%", display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: "15px" }}>{ChartOption.drawFPS !== null && `${ChartOption.drawFPS}FPS`}</div>
                    <div style={{ width: "25%", display: "flex", alignItems: "center", justifyContent: "center", paddingRight: "10px" }}>
                        <ChevronRightSVG />
                    </div>
                </div>
            </div>




        </div>
        <div className="subConfig1" style={{ width: subConfig1Width, height: subConfig1Hegiht }}>
            <div
                className="oneConfig"
                style={{ borderBottom: "1px solid #fff" }}
                onClick={() => {
                    //다시 mainConfig으로
                    set_mainConfigWidth("250px");
                    set_mainConfigHeight("950px");
                    set_subConfig1Width("0");
                    set_subConfig1Height("0");
                }}
            >
                <div className="c_label" style={{ width: '100%' }}>
                    <ChevronLeftSVG />
                    &nbsp; 시선창 과거범위
                </div>
                <div className="c_data" style={{ width: 0 }}></div>
            </div>
            <div
                className="oneConfig"
                onClick={() => {
                    ChartOption.GazePastRange = 0;
                    resaveConfig();
                }}
            >
                <div className="sub_checkzone">{ChartOption.GazePastRange === 0 ? <CheckSVG /> : ""}</div>
                <div className="sub_labelzone">전체</div>
            </div>
            <div
                className="oneConfig"
                onClick={() => {
                    ChartOption.GazePastRange = 0.5;
                    resaveConfig();
                }}
            >
                <div className="sub_checkzone">{ChartOption.GazePastRange === 0.5 ? <CheckSVG /> : ""}</div>
                <div className="sub_labelzone">0.5초</div>
            </div>
            <div
                className="oneConfig"
                onClick={() => {
                    ChartOption.GazePastRange = 1;
                    resaveConfig();
                }}
            >
                <div className="sub_checkzone">{ChartOption.GazePastRange === 1 ? <CheckSVG /> : ""}</div>
                <div className="sub_labelzone">1초</div>
            </div>
            <div
                className="oneConfig"
                onClick={() => {
                    ChartOption.GazePastRange = 2;
                    resaveConfig();
                }}
            >
                <div className="sub_checkzone">{ChartOption.GazePastRange === 2 ? <CheckSVG /> : ""}</div>
                <div className="sub_labelzone">2초</div>
            </div>
            <div
                className="oneConfig"
                onClick={() => {
                    ChartOption.GazePastRange = 5;
                    resaveConfig();
                }}
            >
                <div className="sub_checkzone">{ChartOption.GazePastRange === 5 ? <CheckSVG /> : ""}</div>
                <div className="sub_labelzone">5초</div>
            </div>
            <div
                className="oneConfig"
                onClick={() => {
                    ChartOption.GazePastRange = 10;
                    resaveConfig();
                }}
            >
                <div className="sub_checkzone">{ChartOption.GazePastRange === 10 ? <CheckSVG /> : ""}</div>
                <div className="sub_labelzone">10초</div>
            </div>
        </div>

        <div className="subConfig3" style={{ width: subConfig3Width, height: subConfig3Hegiht }}>
            <div
                className="oneConfig"
                style={{ borderBottom: "1px solid #fff" }}
                onClick={() => {
                    //다시 mainConfig으로
                    set_mainConfigWidth("250px");
                    set_mainConfigHeight("950px");
                    set_subConfig3Width("0");
                    set_subConfig3Height("0");
                }}
            >
                <div className="c_label">
                    <ChevronLeftSVG />
                    &nbsp; 재생배속
                </div>
                <div className="c_data"></div>
            </div>
            <div
                className="oneConfig"
                onClick={() => {
                    ChartOption.playSpeed = 0.1;
                    resaveConfig();
                }}

            >
                <div className="sub_checkzone">{ChartOption.playSpeed === 0.1 ? <CheckSVG /> : ""}</div>
                <div className="sub_labelzone">x0.1</div>
            </div>
            <div
                className="oneConfig"
                onClick={() => {
                    ChartOption.playSpeed = 0.5;
                    resaveConfig();
                }}
            >
                <div className="sub_checkzone">{ChartOption.playSpeed === 0.5 ? <CheckSVG /> : ""}</div>
                <div className="sub_labelzone">x0.5</div>
            </div>
            <div
                className="oneConfig"
                onClick={() => {
                    ChartOption.playSpeed = 1;
                    resaveConfig();
                }}
            >
                <div className="sub_checkzone">{ChartOption.playSpeed === 1 ? <CheckSVG /> : ""}</div>
                <div className="sub_labelzone">x1</div>
            </div>
            <div
                className="oneConfig"
                onClick={() => {
                    ChartOption.playSpeed = 2;
                    resaveConfig();
                }}
            >
                <div className="sub_checkzone">{ChartOption.playSpeed === 2 ? <CheckSVG /> : ""}</div>
                <div className="sub_labelzone">x2</div>
            </div>
            <div
                className="oneConfig"
                onClick={() => {
                    ChartOption.playSpeed = 3;
                    resaveConfig();
                }}
            >
                <div className="sub_checkzone">{ChartOption.playSpeed === 3 ? <CheckSVG /> : ""}</div>
                <div className="sub_labelzone">x3</div>
            </div>
            <div
                className="oneConfig"
                onClick={() => {
                    ChartOption.playSpeed = 5;
                    resaveConfig();
                }}
            >
                <div className="sub_checkzone">{ChartOption.playSpeed === 5 ? <CheckSVG /> : ""}</div>
                <div className="sub_labelzone">x5</div>
            </div>
        </div>
        <div className="subConfig4" style={{ width: subConfig4Width, height: subConfig4Hegiht }}>
            <div
                className="oneConfig"
                style={{ borderBottom: "1px solid #fff" }}
                onClick={() => {
                    //다시 mainConfig으로
                    set_mainConfigWidth("250px");
                    set_mainConfigHeight("950px");
                    set_subConfig4Width("0");
                    set_subConfig4Height("0");
                }}
            >
                <div className="c_label">
                    <ChevronLeftSVG />
                    &nbsp; 재생 목표 FPS
                </div>
                <div className="c_data"></div>
            </div>
            <div
                className="oneConfig"
                onClick={() => {
                    ChartOption.drawFPS = 10;
                    resaveConfig();
                }}
            >
                <div className="sub_checkzone">{ChartOption.drawFPS === 10 ? <CheckSVG /> : ""}</div>
                <div className="sub_labelzone">10FPS</div>
            </div>
            <div
                className="oneConfig"
                onClick={() => {
                    ChartOption.drawFPS = 20;
                    resaveConfig();
                }}
            >
                <div className="sub_checkzone">{ChartOption.drawFPS === 20 ? <CheckSVG /> : ""}</div>
                <div className="sub_labelzone">20FPS</div>
            </div>
            <div
                className="oneConfig"
                onClick={() => {
                    ChartOption.drawFPS = 30;
                    resaveConfig();
                }}
            >
                <div className="sub_checkzone">{ChartOption.drawFPS === 30 ? <CheckSVG /> : ""}</div>
                <div className="sub_labelzone">30FPS</div>
            </div>
            <div
                className="oneConfig"
                onClick={() => {
                    ChartOption.drawFPS = 60;
                    resaveConfig();
                }}
            >
                <div className="sub_checkzone">{ChartOption.drawFPS === 60 ? <CheckSVG /> : ""}</div>
                <div className="sub_labelzone">60FPS</div>
            </div>

        </div>



        <div className="subConfig6" style={{ width: subConfig6Width, height: subConfig6Hegiht }}>
            <div
                className="oneConfig"
                style={{ borderBottom: "1px solid #fff" }}
                onClick={() => {
                    //다시 mainConfig으로
                    set_mainConfigWidth("250px");
                    set_mainConfigHeight("950px");
                    set_subConfig6Width("0");
                    set_subConfig6Height("0");
                }}
            >
                <div className="c_label" style={{ width: '100%' }}>
                    <ChevronLeftSVG />
                    &nbsp; 히트맵 세부설정
                </div>
                <div className="c_data" style={{ width: 0 }}></div>
            </div>


            <div className="oneConfig">
                <div className="c_label">HM_max{ChartOption.heatMapMax}</div>
                <div className="c_data">
                    <input
                        type="range"
                        style={{ width: "70%" }}
                        value={ChartOption.heatMapMax}
                        min={1}
                        step={1}
                        max={420}
                        onChange={(e) => {
                            ChartOption.heatMapMax = e.target.value * 1;
                            resaveConfig();
                        }}
                    />
                </div>
            </div>
            <div className="oneConfig">
                <div className="c_label">HM_radius{ChartOption.heatMapRadius}</div>
                <div className="c_data">
                    <input
                        type="range"
                        style={{ width: "70%" }}
                        value={ChartOption.heatMapRadius}
                        min={1}
                        step={1}
                        max={180}
                        onChange={(e) => {
                            ChartOption.heatMapRadius = e.target.value * 1;
                            resaveConfig();
                        }}
                    />
                </div>
            </div>
            <div className="oneConfig">
                <div className="c_label">HM_MaxOpacity{ChartOption.heatMapMaxOpacity}</div>
                <div className="c_data">
                    <input
                        type="range"
                        style={{ width: "70%" }}
                        value={ChartOption.heatMapMaxOpacity}
                        min={0}
                        step={0.01}
                        max={1}
                        onChange={(e) => {
                            ChartOption.heatMapMaxOpacity = e.target.value * 1;
                            resaveConfig();
                        }}
                    />
                </div>
            </div>
        </div>
    </div>);
}
export default ConfigController;
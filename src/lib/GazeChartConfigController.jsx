import { useState, useEffect } from "react";
const GazeChartConfigController = ({ ...props }) => {
    const { resaveGazeChartOption,showConfig, GazeChartOption, AutoReplay, set_AutoReplay } = props;
    const [,forceUpdate]=useState();
    useEffect(()=>{
        forceUpdate({});
    },[GazeChartOption]);

    const [mainConfigWidth, set_mainConfigWidth] = useState("250px");
    const [mainConfigHegiht, set_mainConfigHeight] = useState("950px");

    const [subConfig1Width, set_subConfig1Width] = useState("0");
    const [subConfig1Hegiht, set_subConfig1Height] = useState("0");

    const [subConfig2Width, set_subConfig2Width] = useState("0");
    const [subConfig2Hegiht, set_subConfig2Height] = useState("0");

    const [subConfig3Width, set_subConfig3Width] = useState("0");
    const [subConfig3Hegiht, set_subConfig3Height] = useState("0");

    const [subConfig4Width, set_subConfig4Width] = useState("0");
    const [subConfig4Hegiht, set_subConfig4Height] = useState("0");

    const [subConfig5Width, set_subConfig5Width] = useState("0");
    const [subConfig5Hegiht, set_subConfig5Height] = useState("0");

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
                set_subConfig2Width("0");
                set_subConfig2Height("0");
                set_subConfig3Width("0");
                set_subConfig3Height("0");
                set_subConfig4Width("0");
                set_subConfig4Height("0");
                set_subConfig5Width("0");
                set_subConfig5Height("0");
                set_subConfig6Width("0");
                set_subConfig6Height("0");
            }, 300);
        }
        return () => {
            clearTimeout(a);
        }
    }, [showConfig])


    return (
        <div
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
                        GazeChartOption.heatMap = !GazeChartOption.heatMap;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="c_label">히트맵 보기(H)</div>
                    <div className="c_data">
                        <div className="ckbx-style-8">
                            <input type="checkbox" name="ckbx-style-8" checked={GazeChartOption.heatMap} onChange={() => { }} />
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
                            <i className="fa fa-chevron-right" aria-hidden="true" style={{ marginTop: "3px" }}></i>
                        </div>
                    </div>
                </div>


                <div className="oneConfig">
                    <div className="c_label">시선 크기</div>
                    <div className="c_data">
                        <input
                            type="range"
                            style={{ width: "70%" }}
                            value={GazeChartOption.RPOG_size}
                            min={0}
                            step={0.1}
                            max={20}
                            onChange={(e) => {
                                GazeChartOption.RPOG_size = e.target.value * 1;
                                resaveGazeChartOption();
                            }}
                        />
                    </div>
                </div>

                <div
                    className="oneConfig"
                    onClick={() => {
                        GazeChartOption.RPOG = !GazeChartOption.RPOG;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="c_label">시선 보기(G)</div>
                    <div className="c_data">
                        <div className="ckbx-style-8">
                            <input type="checkbox" name="ckbx-style-8" checked={GazeChartOption.RPOG} onChange={() => { }} />
                            <label />
                        </div>
                    </div>
                </div>


                <div
                    className="oneConfig borderBottom"
                    onClick={() => {
                        GazeChartOption.RPOG_line = !GazeChartOption.RPOG_line;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="c_label">시선 이동 보기(K)</div>
                    <div className="c_data">
                        <div className="ckbx-style-8">
                            <input type="checkbox" name="ckbx-style-8" checked={GazeChartOption.RPOG_line} onChange={() => { }} />
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
                            value={GazeChartOption.FPOG_size}
                            min={0}
                            step={0.1}
                            max={100}
                            onChange={(e) => {
                                GazeChartOption.FPOG_size = e.target.value * 1;
                                resaveGazeChartOption();
                            }}
                        />
                    </div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        if(GazeChartOption.FPOG&&GazeChartOption.FPOG_number){
                            GazeChartOption.FPOG_number=!GazeChartOption.FPOG_number;
                        }

                        GazeChartOption.FPOG = !GazeChartOption.FPOG;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="c_label">응시 보기(F)</div>
                    <div className="c_data">
                        <div className="ckbx-style-8">
                            <input type="checkbox" name="ckbx-style-8" checked={GazeChartOption.FPOG} onChange={() => { }} />
                            <label />
                        </div>
                    </div>
                </div>

                <div
                    className="oneConfig"
                    onClick={() => {
                        GazeChartOption.FPOG_line = !GazeChartOption.FPOG_line;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="c_label">응시 이동 보기(L)</div>
                    <div className="c_data">
                        <div className="ckbx-style-8">
                            <input type="checkbox" name="ckbx-style-8" checked={GazeChartOption.FPOG_line} onChange={() => { }} />
                            <label />
                        </div>
                    </div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        GazeChartOption.ShowSaccade = !GazeChartOption.ShowSaccade;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="c_label">응시 이동 구분(S)</div>
                    <div className="c_data">
                        <div className="ckbx-style-8">
                            <input type="checkbox" name="ckbx-style-8" checked={GazeChartOption.ShowSaccade} onChange={() => { }} />
                            <label />
                        </div>
                    </div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        if(!GazeChartOption.FPOG_number&&!GazeChartOption.FPOG){
                            GazeChartOption.FPOG=!GazeChartOption.FPOG;
                        }
                        GazeChartOption.FPOG_number = !GazeChartOption.FPOG_number;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="c_label">응시 순번 보기(N)</div>
                    <div className="c_data">
                        <div className="ckbx-style-8">
                            <input type="checkbox" name="ckbx-style-8" checked={GazeChartOption.FPOG_number} onChange={() => { }} />
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
                            value={GazeChartOption.FPOG_number_size}
                            min={0}
                            step={0.1}
                            max={5}
                            onChange={(e) => {
                                GazeChartOption.FPOG_number_size = e.target.value * 1;
                                resaveGazeChartOption();
                            }}
                        />
                    </div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        GazeChartOption.AOI = !GazeChartOption.AOI;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="c_label">핵심 영역 보기(A)</div>
                    <div className="c_data">
                        <div className="ckbx-style-8">
                            <input type="checkbox" name="ckbx-style-8" checked={GazeChartOption.AOI} onChange={() => { }} />
                            <label />
                        </div>
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
                        <div style={{ width: "75%", display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: "15px" }}>{GazeChartOption.GazePastRange !== null && GazeChartOption.GazePastRange === 0 ? "전체" : GazeChartOption.GazePastRange + "초"}</div>
                        <div style={{ width: "25%", display: "flex", alignItems: "center", justifyContent: "center", paddingRight: "10px" }}>
                            <i className="fa fa-chevron-right" aria-hidden="true" style={{ marginTop: "3px" }}></i>
                        </div>
                    </div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        //subConfig1로
                        set_mainConfigWidth(0);
                        set_mainConfigHeight(0);
                        set_subConfig2Width("250px");
                        set_subConfig2Height("350px");
                    }}
                >
                    <div className="c_label">차트의 과거범위</div>
                    <div className="c_data">
                        <div style={{ width: "75%", display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: "15px" }}>{GazeChartOption.ChartPastRange !== null && GazeChartOption.ChartPastRange === 0 ? "전체" : GazeChartOption.ChartPastRange + "초"}</div>
                        <div style={{ width: "25%", display: "flex", alignItems: "center", justifyContent: "center", paddingRight: "10px" }}>
                            <i className="fa fa-chevron-right" aria-hidden="true" style={{ marginTop: "3px" }}></i>
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
                        <div style={{ width: "75%", display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: "15px" }}>{GazeChartOption.playSpeed !== null && `x${GazeChartOption.playSpeed}`}</div>
                        <div style={{ width: "25%", display: "flex", alignItems: "center", justifyContent: "center", paddingRight: "10px" }}>
                            <i className="fa fa-chevron-right" aria-hidden="true" style={{ marginTop: "3px" }}></i>
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
                        <div style={{ width: "75%", display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: "15px" }}>{GazeChartOption.drawFPS !== null && `${GazeChartOption.drawFPS}FPS`}</div>
                        <div style={{ width: "25%", display: "flex", alignItems: "center", justifyContent: "center", paddingRight: "10px" }}>
                            <i className="fa fa-chevron-right" aria-hidden="true" style={{ marginTop: "3px" }}></i>
                        </div>
                    </div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        //subConfig1로
                        set_mainConfigWidth(0);
                        set_mainConfigHeight(0);
                        set_subConfig5Width("250px");
                        set_subConfig5Height("300px");
                    }}
                >
                    <div className="c_label">초당 차트 샘플수</div>
                    <div className="c_data">
                        <div style={{ width: "75%", display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: "15px" }}>{GazeChartOption.chartSampleNumber !== null && `${GazeChartOption.chartSampleNumber}개`}</div>
                        <div style={{ width: "25%", display: "flex", alignItems: "center", justifyContent: "center", paddingRight: "10px" }}>
                            <i className="fa fa-chevron-right" aria-hidden="true" style={{ marginTop: "3px" }}></i>
                        </div>
                    </div>
                </div>

                <div
                    className="oneConfig"
                    onClick={() => {
                        GazeChartOption.hideStats = !GazeChartOption.hideStats;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="c_label">재생 FPS 보기</div>
                    <div className="c_data">
                        <div className="ckbx-style-8">
                            <input type="checkbox" name="ckbx-style-8" checked={!GazeChartOption.hideStats} onChange={() => { }} />
                            <label />
                        </div>
                    </div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        set_AutoReplay(!AutoReplay);
                    }}
                >
                    <div className="c_label">반복 재생(R)</div>
                    <div className="c_data">
                        <div className="ckbx-style-8">
                            <input type="checkbox" name="ckbx-style-8" checked={AutoReplay} onChange={() => { }} />
                            <label />
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
                    <div className="c_label">
                        <i className="fa fa-chevron-left" aria-hidden="true" style={{ marginTop: "3px" }} />
                        &nbsp; 시선창 과거범위
                    </div>
                    <div className="c_data"></div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        GazeChartOption.GazePastRange = 0;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="sub_checkzone">{GazeChartOption.GazePastRange === 0 ? <i className="fa fa-check" area-hidden="true" /> : ""}</div>
                    <div className="sub_labelzone">전체</div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        GazeChartOption.GazePastRange = 0.5;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="sub_checkzone">{GazeChartOption.GazePastRange === 0.5 ? <i className="fa fa-check" area-hidden="true" /> : ""}</div>
                    <div className="sub_labelzone">0.5초</div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        GazeChartOption.GazePastRange = 1;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="sub_checkzone">{GazeChartOption.GazePastRange === 1 ? <i className="fa fa-check" area-hidden="true" /> : ""}</div>
                    <div className="sub_labelzone">1초</div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        GazeChartOption.GazePastRange = 2;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="sub_checkzone">{GazeChartOption.GazePastRange === 2 ? <i className="fa fa-check" area-hidden="true" /> : ""}</div>
                    <div className="sub_labelzone">2초</div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        GazeChartOption.GazePastRange = 5;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="sub_checkzone">{GazeChartOption.GazePastRange === 5 ? <i className="fa fa-check" area-hidden="true" /> : ""}</div>
                    <div className="sub_labelzone">5초</div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        GazeChartOption.GazePastRange = 10;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="sub_checkzone">{GazeChartOption.GazePastRange === 10 ? <i className="fa fa-check" area-hidden="true" /> : ""}</div>
                    <div className="sub_labelzone">10초</div>
                </div>
            </div>
            <div className="subConfig2" style={{ width: subConfig2Width, height: subConfig2Hegiht }}>
                <div
                    className="oneConfig"
                    style={{ borderBottom: "1px solid #fff" }}
                    onClick={() => {
                        //다시 mainConfig으로
                        set_mainConfigWidth("250px");
                        set_mainConfigHeight("950px");
                        set_subConfig2Width("0");
                        set_subConfig2Height("0");
                    }}
                >
                    <div className="c_label">
                        <i className="fa fa-chevron-left" aria-hidden="true" style={{ marginTop: "3px" }} />
                        &nbsp; 차트의 과거범위
                    </div>
                    <div className="c_data"></div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        GazeChartOption.ChartPastRange = 0;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="sub_checkzone">{GazeChartOption.ChartPastRange === 0 ? <i className="fa fa-check" area-hidden="true" /> : ""}</div>
                    <div className="sub_labelzone">전체</div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        GazeChartOption.ChartPastRange = 5;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="sub_checkzone">{GazeChartOption.ChartPastRange === 5 ? <i className="fa fa-check" area-hidden="true" /> : ""}</div>
                    <div className="sub_labelzone">5초</div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        GazeChartOption.ChartPastRange = 10;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="sub_checkzone">{GazeChartOption.ChartPastRange === 10 ? <i className="fa fa-check" area-hidden="true" /> : ""}</div>
                    <div className="sub_labelzone">10초</div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        GazeChartOption.ChartPastRange = 15;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="sub_checkzone">{GazeChartOption.ChartPastRange === 15 ? <i className="fa fa-check" area-hidden="true" /> : ""}</div>
                    <div className="sub_labelzone">15초</div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        GazeChartOption.ChartPastRange = 20;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="sub_checkzone">{GazeChartOption.ChartPastRange === 20 ? <i className="fa fa-check" area-hidden="true" /> : ""}</div>
                    <div className="sub_labelzone">20초</div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        GazeChartOption.ChartPastRange = 25;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="sub_checkzone">{GazeChartOption.ChartPastRange === 25 ? <i className="fa fa-check" area-hidden="true" /> : ""}</div>
                    <div className="sub_labelzone">25초</div>
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
                        <i className="fa fa-chevron-left" aria-hidden="true" style={{ marginTop: "3px" }} />
                        &nbsp; 재생배속
                    </div>
                    <div className="c_data"></div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        GazeChartOption.playSpeed = 0.1;
                        resaveGazeChartOption();
                    }}

                >
                    <div className="sub_checkzone">{GazeChartOption.playSpeed === 0.1 ? <i className="fa fa-check" area-hidden="true" /> : ""}</div>
                    <div className="sub_labelzone">x0.1</div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        GazeChartOption.playSpeed = 0.5;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="sub_checkzone">{GazeChartOption.playSpeed === 0.5 ? <i className="fa fa-check" area-hidden="true" /> : ""}</div>
                    <div className="sub_labelzone">x0.5</div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        GazeChartOption.playSpeed = 1;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="sub_checkzone">{GazeChartOption.playSpeed === 1 ? <i className="fa fa-check" area-hidden="true" /> : ""}</div>
                    <div className="sub_labelzone">x1</div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        GazeChartOption.playSpeed = 2;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="sub_checkzone">{GazeChartOption.playSpeed === 2 ? <i className="fa fa-check" area-hidden="true" /> : ""}</div>
                    <div className="sub_labelzone">x2</div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        GazeChartOption.playSpeed = 3;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="sub_checkzone">{GazeChartOption.playSpeed === 3 ? <i className="fa fa-check" area-hidden="true" /> : ""}</div>
                    <div className="sub_labelzone">x3</div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        GazeChartOption.playSpeed = 5;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="sub_checkzone">{GazeChartOption.playSpeed === 5 ? <i className="fa fa-check" area-hidden="true" /> : ""}</div>
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
                        <i className="fa fa-chevron-left" aria-hidden="true" style={{ marginTop: "3px" }} />
                        &nbsp; 재생 목표 FPS
                    </div>
                    <div className="c_data"></div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        GazeChartOption.drawFPS = 10;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="sub_checkzone">{GazeChartOption.drawFPS === 10 ? <i className="fa fa-check" area-hidden="true" /> : ""}</div>
                    <div className="sub_labelzone">10FPS</div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        GazeChartOption.drawFPS = 20;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="sub_checkzone">{GazeChartOption.drawFPS === 20 ? <i className="fa fa-check" area-hidden="true" /> : ""}</div>
                    <div className="sub_labelzone">20FPS</div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        GazeChartOption.drawFPS = 30;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="sub_checkzone">{GazeChartOption.drawFPS === 30 ? <i className="fa fa-check" area-hidden="true" /> : ""}</div>
                    <div className="sub_labelzone">30FPS</div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        GazeChartOption.drawFPS = 60;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="sub_checkzone">{GazeChartOption.drawFPS === 60 ? <i className="fa fa-check" area-hidden="true" /> : ""}</div>
                    <div className="sub_labelzone">60FPS</div>
                </div>

            </div>
            <div className="subConfig5" style={{ width: subConfig5Width, height: subConfig5Hegiht }}>
                <div
                    className="oneConfig"
                    style={{ borderBottom: "1px solid #fff" }}
                    onClick={() => {
                        //다시 mainConfig으로
                        set_mainConfigWidth("250px");
                        set_mainConfigHeight("950px");
                        set_subConfig5Width("0");
                        set_subConfig5Height("0");
                    }}
                >
                    <div className="c_label">
                        <i className="fa fa-chevron-left" aria-hidden="true" style={{ marginTop: "3px" }} />
                        &nbsp; Sample/s
                    </div>
                    <div className="c_data"></div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        GazeChartOption.chartSampleNumber = 10;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="sub_checkzone">{GazeChartOption.chartSampleNumber === 10 ? <i className="fa fa-check" area-hidden="true" /> : ""}</div>
                    <div className="sub_labelzone">10개</div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        GazeChartOption.chartSampleNumber = 20;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="sub_checkzone">{GazeChartOption.chartSampleNumber === 20 ? <i className="fa fa-check" area-hidden="true" /> : ""}</div>
                    <div className="sub_labelzone">20개</div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        GazeChartOption.chartSampleNumber = 30;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="sub_checkzone">{GazeChartOption.chartSampleNumber === 30 ? <i className="fa fa-check" area-hidden="true" /> : ""}</div>
                    <div className="sub_labelzone">30개</div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        GazeChartOption.chartSampleNumber = 60;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="sub_checkzone">{GazeChartOption.chartSampleNumber === 60 ? <i className="fa fa-check" area-hidden="true" /> : ""}</div>
                    <div className="sub_labelzone">60개</div>
                </div>
                <div
                    className="oneConfig"
                    onClick={() => {
                        GazeChartOption.chartSampleNumber = 120;
                        resaveGazeChartOption();
                    }}
                >
                    <div className="sub_checkzone">{GazeChartOption.chartSampleNumber === 120 ? <i className="fa fa-check" area-hidden="true" /> : ""}</div>
                    <div className="sub_labelzone">120개</div>
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
                    <div className="c_label">
                        <i className="fa fa-chevron-left" aria-hidden="true" style={{ marginTop: "3px" }} />
                        &nbsp; 히트맵 세부설정
                    </div>
                    <div className="c_data"></div>
                </div>


                <div className="oneConfig">
                    <div className="c_label">HM_max{GazeChartOption.heatMapMax}</div>
                    <div className="c_data">
                        <input
                            type="range"
                            style={{ width: "70%" }}
                            value={GazeChartOption.heatMapMax}
                            min={1}
                            step={1}
                            max={420}
                            onChange={(e) => {
                                GazeChartOption.heatMapMax = e.target.value * 1;
                                resaveGazeChartOption();
                            }}
                        />
                    </div>
                </div>
                <div className="oneConfig">
                    <div className="c_label">HM_radius{GazeChartOption.heatMapRadius}</div>
                    <div className="c_data">
                        <input
                            type="range"
                            style={{ width: "70%" }}
                            value={GazeChartOption.heatMapRadius}
                            min={1}
                            step={1}
                            max={180}
                            onChange={(e) => {
                                GazeChartOption.heatMapRadius = e.target.value * 1;
                                resaveGazeChartOption();
                            }}
                        />
                    </div>
                </div>
                <div className="oneConfig">
                    <div className="c_label">HM_MaxOpacity{GazeChartOption.heatMapMaxOpacity}</div>
                    <div className="c_data">
                        <input
                            type="range"
                            style={{ width: "70%" }}
                            value={GazeChartOption.heatMapMaxOpacity}
                            min={0}
                            step={0.01}
                            max={1}
                            onChange={(e) => {
                                GazeChartOption.heatMapMaxOpacity = e.target.value * 1;
                                resaveGazeChartOption();
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default GazeChartConfigController;
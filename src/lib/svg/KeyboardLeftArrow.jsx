import React from "react";
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
export default KeyboardLeftArrow;
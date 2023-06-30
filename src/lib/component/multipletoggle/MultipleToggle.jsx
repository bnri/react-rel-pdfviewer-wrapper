import React from "react";
import './MultipleToggle.scss';

const MultipleToggle = ({...props})=>{
    const {btnArr,selBtnIndex}=props;


    return (<div className="MultipleToggle"style={{display:'flex'}}>{btnArr.map((btn,index)=>{
        return (<button className={`mtbtn ${index*1===selBtnIndex*1?'selected':''}`}onClick={(e)=>{
            if(btn.onClick){
                btn.onClick(e);
            }            
        }} key={`mtbtn_${index}`}>
            {btn.Label}
        </button>)
    })}
    </div>)
}
export default MultipleToggle;
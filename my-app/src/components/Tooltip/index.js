import { Children, useCallback, useState } from "react";
import './index.css';


export default function Tooltip({placement, text, children}){
    const [active, setActive] = useState(false);
    const [style, setStyle] = useState({left: 0, top : 0});
    const showTooltip = useCallback(() => {
        setActive(prev => !prev);
    })

    const hideTooltip = useCallback(() => {
        setActive(prev => !prev);
    })

    // let style = {
    //     left: ((state.x + window.scrollX) + 'px'),
    //     top: ((state.y + window.scrollY) + 'px')
    // };

    if(placement == 'LEFT'){
        let y = 0;
        // let styleLeft = {
        //     left: x,
        //     top: y
        // }
    }

    return<>
        <div className={'tooltip-container'}>
            <div className={'tooltip-content'} onMouseOver={showTooltip} onMouseOut={hideTooltip}>
            {children}
            {<div className={`tooltip ${placement}`} >
                <span >{text}</span>
            </div>}
            </div>
            
        </div>

    </>

}
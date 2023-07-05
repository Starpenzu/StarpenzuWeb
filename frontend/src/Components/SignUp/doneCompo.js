import React from "react";
import './done.css';
import {Link} from 'react-router-dom'


export default function DoneCompo(props){
    return(
        <>
            <div className="donecompo">
                <img src={props.img} className='img1 img1--margin' alt=""/>

                <div className="donetext">
                    {props.donetext}

                </div>

                <div className="donetext" id='mailtext'>
                    {props.mailtext}
                </div>

                <Link to={props.ff} className='link-d'>
                <div className="proceed">
                    <img src={props.img2} className='img2 img2--margin'  alt=""/>
                    <div className="proceedsubtext">
                        {props.proceedsubtext}
                    </div>
                </div>
                </Link>
            </div>
        </>
    )
}
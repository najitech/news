import React from 'react'
import { AiOutlineFall, AiOutlineRise } from 'react-icons/ai'
import { MdShowChart } from 'react-icons/md'
import './TopLocationMapBoxInf.css'
function nFormatter(num) {
    if (num >= 1000000000) {
       return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (num >= 1000000) {
       return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
       return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
}
function TopLocationMapBoxInf(props) {
    return (
        <div className="topLocationBoxMapBox">
            <div className="nameLocationBoxMapBoxTop">
                <div style={{flex:'0.3'}}><div className={["numberOfTopTenLocationBox",props.rank%2===0? "oddLocationIconStyleTopTen": 'evenLocationIconStyleTopTen'].join(" ")}>{props.rank}</div></div>
                <div style={{textAlign:'right',flex:'0.7'}}><h4>{props.location}</h4></div>
            </div>
            <div style={{flex:'0.3',textAlign:'center',display:'flex',alignItems:'center'}}>
                <div style={{flex:'0.7'}}>
                    <h5>{nFormatter(parseInt(props.num))}</h5>
                    <p className={props.growth? "greenGrowthTopLocationStyle":'redGrowthTopLocationStyle'}>{props.rate}{props.growth? "+" : "-"}</p>
                </div>
                <div className="growthIconTopLocationMapBox">
                    {props.growth ? <AiOutlineRise className="greenGrowthTopLocationStyle"/> : <AiOutlineFall className="redGrowthTopLocationStyle"/>}
                </div>
            </div>
        </div>
    )
}

export default TopLocationMapBoxInf

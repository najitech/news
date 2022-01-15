import React from 'react'
import './DA3.css'
import DA3_Box from './DA3_Box'

function DA3() {
    const NER_Result = [
        {
            title:'کلمات کلیدی',
            count:"54,835",
            percent:23,
            top3:[
            {
                name: "شادی",
                count: "34,754",
                countRaise:'1,284',
                raising:true,
            },
            {
                name: "شادی",
                count: "54,314",
                countRaise:'4,253',
                raising:true,
            },
            {
                name: "شادی",
                count: "23,731",
                countRaise:'8,419',
                raising:true,
            },
            ],
        },
    ]
    return (
        <div className='DA3'>
            <DA3_Box color="#E865C5" title={NER_Result[0].title} count={NER_Result[0].count} percent={NER_Result[0].percent} tops={NER_Result[0].top3}/>
            <DA3_Box color="#1AC4ED" title={NER_Result[0].title} count={NER_Result[0].count} percent={NER_Result[0].percent} tops={NER_Result[0].top3} raising/>
            <DA3_Box color="#EC7274" title={NER_Result[0].title} count={NER_Result[0].count} percent={NER_Result[0].percent} tops={NER_Result[0].top3}/>
            <DA3_Box color="#A483E9" title={NER_Result[0].title} count={NER_Result[0].count} percent={NER_Result[0].percent} tops={NER_Result[0].top3} raising/>
            <DA3_Box color="#27C2E4" title={NER_Result[0].title} count={NER_Result[0].count} percent={NER_Result[0].percent} tops={NER_Result[0].top3}/>
        </div>
    )
}

export default DA3

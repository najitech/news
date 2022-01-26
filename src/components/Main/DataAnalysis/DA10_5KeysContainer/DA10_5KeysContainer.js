import React , {useState} from 'react';
import './DA10_5KeysContainer.css'
import DA10_5Keys from './DA10_5Keys'

const keys = [
    'مشهد',
    'یلدا' ,
    'مهربانی' ,
    'بازار' ,
    'مذاکره' ,
]

function DA10_5KeysContainer() {
    let currentHour= new Date().getHours();    
    const tempnum = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    const ChartTemp = tempnum.map((number) => (currentHour-number-1)%24 )
    let xChart = ChartTemp.map ((number) => number > 0 ? number : (24+number)%24)
    xChart.reverse()
    let xChartLabel = xChart.map(e => e > 11 ? 'pm' : 'am')
    return (
        <div className='DA10'>
            <DA10_5Keys keys={keys} time={xChart[11]} timeAb={xChartLabel[11]}/>
            <DA10_5Keys keys={keys} time={xChart[10]} timeAb={xChartLabel[10]} otherColor/>
            <DA10_5Keys keys={keys} time={xChart[9]} timeAb={xChartLabel[9]}/>
            <DA10_5Keys keys={keys} time={xChart[8]} timeAb={xChartLabel[8]} otherColor/>
            <DA10_5Keys keys={keys} time={xChart[7]} timeAb={xChartLabel[7]}/>
            <DA10_5Keys keys={keys} time={xChart[6]} timeAb={xChartLabel[6]} otherColor/>
            <DA10_5Keys keys={keys} time={xChart[5]} timeAb={xChartLabel[5]} />
            <DA10_5Keys keys={keys} time={xChart[4]} timeAb={xChartLabel[4]} otherColor/>
            <DA10_5Keys keys={keys} time={xChart[3]} timeAb={xChartLabel[3]}/>
            <DA10_5Keys keys={keys} time={xChart[2]} timeAb={xChartLabel[2]} otherColor/>
            <DA10_5Keys keys={keys} time={xChart[1]} timeAb={xChartLabel[1]}/>
            <DA10_5Keys keys={keys} time={xChart[0]} timeAb={xChartLabel[0]} otherColor/>


        </div>
    )
}

export default DA10_5KeysContainer;

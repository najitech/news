import React , {useState} from 'react'
import './DA3_Box.css'
import {BsArrowDownShort , BsArrowUpShort} from 'react-icons/bs'
import Chart from 'react-apexcharts'
import {CgArrowTopRight,CgArrowBottomRight} from 'react-icons/cg'

function DA3_Box(props) {
    const {tops} = props;
    const [ChartData , setChartData] = useState({     
        series: [{
          name: 'Sales',
          data: [4, 3, 10, 9, 29, 19, 22]
        }],
        options: {
          fill: {
            colors: [props.color]
          },    
          tooltip: {
            enabled: false,
          },
          grid: {
            show: true,
            borderColor: '#90A4AE',
            strokeDashArray: 0,
            position: 'back',
            xaxis: {
                lines: {
                    show: false
                }
            },   
            yaxis: {
                lines: {
                    show: false
                }
            },  
            row: {
                colors: undefined,
                opacity: 0.1
            },  
            column: {
                colors: undefined,
                opacity: 0.1
            },  
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }, 
          },
          chart: {
            height: 350,
            type: 'line',
            sparkline: {
                enabled: true
              }
          },
          stroke: {
            width: 3,
            curve: 'smooth',
            show: true,
            curve: 'smooth',
            colors: [props.color],
            dashArray: 0,      
          },
          xaxis: {
            type: 'datetime',
            categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000'],
            tickAmount: 10,
          },
        },
    })
    return (
        <div className='DA3_Box'>
            <div className='DA3_BoxDownload'>
                <span>...</span>
            </div>
           <div className='DA3_BoxBody'>
                <span className='DA3_BBodyTitle'>{props.title}</span>
                <span className='DA3_BBodyCount'>{props.count}</span>
                <div className={['DA3_BBodyRaise',props.raising? "DA3_Raise" : "DA3_Fall"].join(' ')}>
                    {props.raising? <BsArrowUpShort className="DA3_RaiseIcon" />  : <BsArrowDownShort className="DA3_FallIcon "/>}
                    {props.percent}%
                </div>
                <div className='DA3_BChart'>
                    <Chart options={ChartData.options} series={ChartData.series} type="line" height={"60px"} />
                </div>
                <div className='DA3_BBody_Footer'>
                    <span>سه {props.title} برتر</span>
                    <div className='DA3_BChartTops'>
                        <div className='DA3_BChartT_TitleNumber'>
                            <span className='DA3_BChartT_Title'>{tops[0].name}</span>
                            <span className='DA3_BChartT_Number'>{tops[0].count}</span>
                        </div>

                        <div className='DA3_BChartT_Raise'>
                            <span className={['DA3_BChartT_RaiseNumber',props.tops[0].raising? "DA3_Raise" : "DA3_Fall"].join(' ')}>{tops[0].countRaise}</span>
                            {tops[0].raising? <CgArrowTopRight className="DA3_RaiseIcon DA3_IconTops" /> : <CgArrowBottomRight className="DA3_FallIcon DA3_IconTops"/>}
                        </div>
                    </div>
                    <div className='DA3_BChartTops'>
                        <div className='DA3_BChartT_TitleNumber'>
                            <span className='DA3_BChartT_Title'>{tops[0].name}</span>
                            <span className='DA3_BChartT_Number'>{tops[0].count}</span>
                        </div>

                        <div className='DA3_BChartT_Raise'>
                            <span className={['DA3_BChartT_RaiseNumber',props.tops[0].raising? "DA3_Raise" : "DA3_Fall"].join(' ')}>{tops[0].countRaise}</span>
                            {tops[0].raising? <CgArrowTopRight className="DA3_RaiseIcon DA3_IconTops" /> : <CgArrowBottomRight className="DA3_FallIcon DA3_IconTops"/>}
                        </div>
                    </div>
                    <div className='DA3_BChartTops'>
                        <div className='DA3_BChartT_TitleNumber'>
                            <span className='DA3_BChartT_Title'>{tops[0].name}</span>
                            <span className='DA3_BChartT_Number'>{tops[0].count}</span>
                        </div>

                        <div className='DA3_BChartT_Raise'>
                            <span className={['DA3_BChartT_RaiseNumber',props.tops[0].raising? "DA3_Raise" : "DA3_Fall"].join(' ')}>{tops[0].countRaise}</span>
                            {tops[0].raising? <CgArrowTopRight className="DA3_RaiseIcon DA3_IconTops" /> : <CgArrowBottomRight className="DA3_FallIcon DA3_IconTops"/>}
                        </div>
                    </div>
                </div>
           </div>

        </div>
    )
}

export default DA3_Box

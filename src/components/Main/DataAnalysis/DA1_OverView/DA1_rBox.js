import React , {useState} from 'react'
import './DA1_rBox.css'
import Chart from 'react-apexcharts'
import { useMediaQuery } from 'react-responsive'
import { BsArrowDownRightCircleFill, BsFillArrowUpRightCircleFill } from 'react-icons/bs';

function DA1_rBox(props) {
    let q952 = useMediaQuery({query :'(max-width : 952px)'}); 
    let q1145 = useMediaQuery({query :'(max-width : 1145px)'}); 
    const [ChartData , setChartData] = useState({     
        series: [{
          name: 'Sales',
          data: [4, 3, 10, 9, 29, 19, 22]
        }],
        options: {
          fill: {
            colors: ['#764ee3']
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
            dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                blur: 2,
                color:['#764ee3'],
                opacity: 0.2,
              
              },
            height: 350,
            type: 'line',
            sparkline: {
                enabled: true
              }
          },
          stroke: {
            width: 2,
            curve: 'smooth',
            show: true,
            curve: 'smooth',
            colors: ["#72D2CF"],
            width: 2,
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
        <div className='DA1_rBox'>
            <div className='DA1_rBox_Result'>
                <span className='DA1_rBox_ResultTitle'>{props.title}</span>
                <div>
                    <div className="MOresult_WeekResultFooter DA1_rBox_ResultFooter">
                        <span className="MOresult_HeaderBox_dataNumber DA1_rBox_ResultNumber">{props.weekData.split('.')[0]}K</span>
                        <div className="MOresult_HeaderBox_raise ">
                            <span style={{color : props.weekRaising? '#0FA86A' : '#DC595A'}}>{!q952?props.weekRaise : props.weekRaise.split('.')[0]}% </span>
                            {
                                props.weekRaising ?
                                <BsFillArrowUpRightCircleFill className="MOresult_Box_raiseIcon DA1_RaiseIcon"/>
                                :
                                <BsArrowDownRightCircleFill className="MOresult_Box_raiseIcon KP_Fall "/>
                            }
                        </div>

                    </div>
                </div>
            </div>
            <div className='DA1_rbox_Chart'>
                <Chart options={ChartData.options} series={ChartData.series} type="line" height={"60px"} />
            </div>
        </div>
    )
}

export default DA1_rBox

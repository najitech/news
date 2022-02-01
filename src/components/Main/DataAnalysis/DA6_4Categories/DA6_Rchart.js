import React , {useState} from 'react'
import './DA6_Rchart.css'
import Chart from 'react-apexcharts'
import { useMediaQuery } from 'react-responsive';

function DA6_Rchart() {
    let q952 = useMediaQuery({query :'(max-width : 952px)'}); 
    const [ChartData , setChartData] = useState({
            series: [44, 55, 17, 15],
            options: {
              labels: ['کم تکرار', 'نسبتا پرتکرار', 'پر تکرار', 'بسیار پر تکرار'],
              chart: {
                dropShadow: {
                  enabledOnSeries: [1,2,3,4],
                  top: 2,
                  left: 0,
                  blur: 3,
                  color:['#7F7ECC','#92CFDB'],
                  opacity: 0.2,
                
                },
                type: 'donut',
                events: {
                    selection: function(chartContext, { xaxis, yaxis }) {
                        // ...
                      }
                },
                selection: {
                    enabled: true,
                    type: 'x',
                    fill: {
                      color: '#24292e',
                      opacity: 0.1
                    },
                    stroke: {
                      width: 1,
                      dashArray: 3,
                      color: '#24292e',
                      opacity: 0.4
                    },
                    xaxis: {
                      min: undefined,
                      max: undefined
                    },
                    yaxis: {
                      min: undefined,
                      max: undefined
                    }
                  }
                
              },
              stroke: {
                width:13
              },
              
              plotOptions: {
                pie: {
                    expandOnClick: true,
                    donut: {
                        size: '81%',
                        labels: {
                            show: true,
                            total: {
                                show: true,
                                label: ' کل دیتا',
                                formatter: function (w) {
                                  return w.globals.seriesTotals.reduce((a, b) => {
                                    return a + b
                                  }, 0)
                                }
                            },
                            name: {
                              show: true,
                              fontSize: '22px',
                              fontFamily: 'Helvetica, Arial, sans-serif',
                              fontWeight: 600,
                              color: 'black',
                              offsetY: -10,
                              formatter: function (val) {
                                return val
                              }
                            },
                            value: {
                              show: true,
                              fontSize: '16px',
                              fontFamily: 'Helvetica, Arial, sans-serif',
                              fontWeight: 400,
                              color: undefined,
                              offsetY: 16,
                              formatter: function (val) {
                                return val
                              }
                            },
                    }}
                }
              },
              legend: {
                show:false,
                position: 'bottom'
              },
              dataLabels: {
                enabled: false,
              },
            },
          
          
    })
    return (
        <div className='DA6_Rchart'>
            <div>
                <Chart options={ChartData.options} series={ChartData.series} type="donut" height={240} />
            </div>
            <div className='DA6_RchartResultContainer'>
                <div className='DA2_BehaviorCategory'>
                        <div className='DA2_BCategoryTitle'>
                            <span>{'کم تکرار'}</span>
                            <span>{45}K , {26}%</span>
                        </div>
                        <div className='DA2_BCategoryBarcontainer'>
                            <div className='DA2_BCategoryBar DA6_Rchart_low' style={{width : `${26}%`}}>

                            </div>
                        </div>
                </div>
                <div className='DA2_BehaviorCategory'>
                        <div className='DA2_BCategoryTitle'>
                            <span>{'نسبتا پر تکرار'}</span>
                            <span>{45}K , {26}%</span>
                        </div>
                        <div className='DA2_BCategoryBarcontainer'>
                            <div className='DA2_BCategoryBar DA6_Rchart_medium' style={{width : `${26}%`}}>

                            </div>
                        </div>
                </div>
                <div className='DA2_BehaviorCategory'>
                        <div className='DA2_BCategoryTitle'>
                            <span>{'پر تکرار'}</span>
                            <span>{45}K , {8}%</span>
                        </div>
                        <div className='DA2_BCategoryBarcontainer'>
                            <div className='DA2_BCategoryBar DA6_Rchart_high' style={{width : `${8}%`}}>

                            </div>
                        </div>
                </div>
                <div className='DA2_BehaviorCategory'>
                        <div className='DA2_BCategoryTitle'>
                            <span>{'بسیار پر تکرار'}</span>
                            <span>{45}K , {40}%</span>
                        </div>
                        <div className='DA2_BCategoryBarcontainer'>
                            <div className='DA2_BCategoryBar DA6_Rchart_veryHigh' style={{width : `${40}%`}}>

                            </div>
                        </div>
                </div>

            </div>

        </div>
    )
}

export default DA6_Rchart

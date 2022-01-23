import React , {useState} from 'react'
import './DA2.css'
import DA2_Behavior from './DA2_Behavior'
import Chart from 'react-apexcharts'

function DA2() {
    const [Behaviors,setBehaviors] = useState([
        {
            title:'پرخواشگرانه',
            count:54,
            percent:35,
        },
        {
            title:'شادمان',
            count:23,
            percent:13,
        },
        {
            title:'ناراحت',
            count:98,
            percent:8,
        },
        {
            title:'پرخواشگرانه',
            count:32,
            percent:48,
        },
        {
            title:'مهربان',
            count:23,
            percent:15,
        },
        {
            title:'پرخواشگرانه',
            count:23,
            percent:28,
        },
        {
            title:'پرخواشگرانه',
            count:23,
            percent:13,
        },
        {
            title:'پرخواشگرانه',
            count:23,
            percent:10,
        },
        {
            title:'پرخواشگرانه',
            count:23,
            percent:28,
        },
        {
            title:'پرخواشگرانه',
            count:23,
            percent:13,
        },
        {
            title:'پرخواشگرانه',
            count:23,
            percent:26,
        },

        {
            title:'بی پروا',
            count:23,
            percent:20,
        },
        {
            title:'عصبی',
            count:23,
            percent:13,
        },
        {
            title:'غمگین',
            count:23,
            percent:37,
        },
        {
            title:'پرخواشگرانه',
            count:23,
            percent:33,
        },
        {
            title:'پرخواشگرانه',
            count:23,
            percent:3,
        },
        {
            title:'پرخواشگرانه',
            count:23,
            percent:16,
        },
        {
            title:'پرخواشگرانه',
            count:23,
            percent:13,
        },
        {
            title:'پرخواشگرانه',
            count:23,
            percent:25,
        },
        {
            title:'پرخواشگرانه',
            count:23,
            percent:38,
        },
        {
            title:'پرخواشگرانه',
            count:23,
            percent:13,
        },
        
    ])
    const [ChartData , setChartData] = useState({
        series: [{
            name: 'Series 1',
            data: [80, 72, 73, 70, 83, 80],
          }],
          
          options: {
            plotOptions: {
                radar: {
                  polygons: {
                          strokeColors: ['#F8F8F8t', '#F8F8F8', '#F8F8F8', '#F8F8F8', '#F8F8F8', '#F8F8F8'],
                          connectorColors: '#F8F8F8'
                    }
                }
              },
              fill: {
                type: 'gradient',
                gradient: {
                  shade: 'light',
                  type: "vertical",
                  shadeIntensity: 0.4,
                  gradientToColors:  ["rgba(57,179,227,0.6)"], // optional, if not defined - uses the shades of same color in series
                  inverseColors: true,
                  opacityFrom: 0.4,
                  opacityTo: 0.1,
                  stops: [0, 100],
                }
              },
            stroke: {
                show: true,
                width: 2,
                colors: ['#49c3f3'],
                dashArray: 0
              },
              markers: {
                size: 0,
                colors: '#B3C5F1',
                strokeColors: '#fff',
                hover: {
                  size: 5
                }
              },
            chart: {
                dropShadow: {
                    enabled: true,
                    top: 0,
                    left: 0,
                    blur: 5,
                    color:['rgba(57,179,227,0.8)'],
                    opacity: 0.7,
                  
                  },
              height: 350,
              type: 'radar',
              toolbar: {
                show: false,
                tools: {
                  download: false
                },
              },
            },
            yaxis: {
                show: false,
            },
            xaxis: {
              categories: ['January', 'February', 'March', 'April', 'May', 'June'],

        },
            toolbar: {
                show: false,
                tools: {
                  download: false
                },
              },
              legend: {
                show: false,
              },
    
              grid: {
                show: false,
                borderColor: 'rgb(248, 248, 248)',
                xaxis: {
                    lines: {
                        show: false
                    }
                },
              },
          },

    })
    return (
        <div className='DA2'>
            <div className='DA2_BehaviorContainer'>
                <DA2_Behavior BData={Behaviors.slice(0,7)}/>
                <DA2_Behavior BData={Behaviors.slice(7,14)}/>
                <DA2_Behavior  BData={Behaviors.slice(14,21)}/>
            </div>
            <div className='DA2Chart'>
                <div className='DA2Chart_Header'>
                    <span>6 مدل رفتاری برتر</span>
                    <span>...</span>
                </div>
                <Chart options={ChartData.options} series={ChartData.series} type="radar" height={320} />
            </div>
        </div>
    )
}

export default DA2

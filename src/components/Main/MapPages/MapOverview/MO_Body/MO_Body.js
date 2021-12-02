import React,{useState} from 'react'
import './MO_Body.css'
import Chart from 'react-apexcharts'
import MO_BodyResultBox from './MO_BodyResultBox'

function MO_Body() {
    const [ChartData , setChartData] = useState({
            series: [{
              name: 'اینستاگرام',
              data: [ 5, 13, 9, 17, 2, 7, 5]
            },
            {
                name: 'تلگرام',
                data: [10, 8, 5, 24, 13, 19, 22]
            },
            {
                name: 'خبرخوان',
                data: [10,20,24,33,10,4,10]
            },
            {
                name: 'توییتر',
                data: [1,20,15,37,20,30,15]
            },
            {
                name: 'روزنامه',
                data: [7,14,20,16,26,32,17]
            },
        
        
        ],
         options: {
              chart: {
                height: 350,
                type: 'line',
                toolbar: {
                    show: false,
                    tools: {
                      download: false
                    },
                  },
              },
              legend: {
                show: false,
              },
              grid: {
                show: true,
                borderColor: 'rgb(238, 238, 238)',
                xaxis: {
                    lines: {
                        show: false
                    }
                },
                yaxis: {
                    lines: {
                        show: true,
                        color:"white"
                    }
                },
            },
              stroke: {
                width: 3,
                curve: 'smooth'
              },

              fill: {
                type: 'gradient',
                gradient: {
                  shade: 'dark',
                  gradientToColors: [ '#FDD835'],
                  shadeIntensity: 1,
                  type: 'horizontal',
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [0, 100, 100, 100]
                },
              },
              yaxis: {
                min: 0,
                max: 40,
                tickAmount: 4,
              }
            },
          
          
          })
    return (
        <div className="MO_Body">
            <div className="MO_BodyResult">
                <MO_BodyResultBox type="rss" weekData="120.353K" weekRaise="10.342K" weekRaising/>
                <MO_BodyResultBox type="telegram" weekData="93.925K" weekRaise="5.632K"/>
                <MO_BodyResultBox type="paper" weekData="105.195K" weekRaise="8.363K" weekRaising/>
                <MO_BodyResultBox type="twitter" weekData="80.872K" weekRaise="26.435K"/>
                <MO_BodyResultBox type="instagram" weekData="230.563K" weekRaise="12.865K" weekRaising/>
                <MO_BodyResultBox type="telegram" weekData="153.564K" weekRaise="4.753K"/>
            </div>
            <div className="MOBodyChart">
                <Chart options={ChartData.options} series={ChartData.series} type="line" height={300} />
            </div>

        </div>
    )
}

export default MO_Body

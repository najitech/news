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

          colors: ['rgb(233, 51, 233)','#11cbfa','#f38b5b','#00ACEE','rgba(81,214,168,1)'],
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
                width: 2.5,
                curve: 'smooth'
              },

              fill: {
                
                type: 'gradient',
                gradient: {
                  shade: 'light',
                  gradientToColors: ['rgb(233, 51, 233)','#11cbfa','#f38b5b','#00ACEE','rgba(81,214,168,1)'],
                  shadeIntensity: 1,
                  type: 'horizontal',
                  opacityFrom: 1,
                  opacityTo: 0.75,
                  stops: [0,100]
                },
              },
              yaxis: {
                min: 0,
                max: 40,
                tickAmount: 4,
              },
              tooltip: {
                enabled: true,
                custom: function({ series, seriesIndex, dataPointIndex, w }) {
                  return (
                    '<div class="MO_ChartTooltip">' +
                        '<div class="ChartHoverItem ChartHoverInstagram whitecolor"'+
                        "<span class='MO_TooltipNumber'> 12.8K</span>" +
                        '<span class="MO_TooltipTitle"> خبرخوان : </span>' +
                        '<div class="MOrssBack circleMargin"></div>' +
                        '</div>' +

                        '<div class="ChartHoverItem ChartHoverInstagram whitecolor "'+
                        "<span class='MO_TooltipNumber'> 20.5K</span>" +
                        '<span class="MO_TooltipTitle"> تلگرام : </span>' +
                        '<div class="MOtelBack circleMargin"></div>' +
                        '</div>' +
                        '<div class="ChartHoverItem ChartHoverInstagram whitecolor "'+
                        '<span class="MO_TooltipNumber"> 8.3K</span>' +
                        '<span class="MO_TooltipTitle"> روزنامه : </span>' +
                        '<div class="MOpaperBack circleMargin"></div>' +
                        '</div>' +
                        '<div class="ChartHoverItem ChartHoverInstagram whitecolor "'+
                        "<span class='MO_TooltipNumber'> 13.8K</span>" +
                        '<span class="MO_TooltipTitle"> توییتر : </span>' +
                        '<div class="MOtwiBack circleMargin"></div>' +
                        '</div>' +
                        '<div class="ChartHoverItem ChartHoverInstagram whitecolor "'+
                        "<span class='MO_TooltipNumber'> 17.4K</span>" +
                        '<span class="MO_TooltipTitle"> اینستاگرام : </span>' +
                        '<div class="MOInstaBack circleMargin"></div>' +
                        '</div>' +

                    "</div>"
                  );
                },
              },
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



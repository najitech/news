import React , {useState} from 'react'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import {FaRss, FaRssSquare, FaTelegram,FaTelegramPlane } from 'react-icons/fa'
import {SiRss} from 'react-icons/si'
import TelegramIcon from '@material-ui/icons/Telegram';
import {BiRss} from 'react-icons/bi'
import {FiRss} from 'react-icons/fi'
import './PSR_TopSlider_Slide.css'
import Chart from "react-apexcharts";
import { useMediaQuery } from 'react-responsive';

function PSR_TopSlider_Slide(props) {
    const [chartCircle2 , setChartCircle2] = React.useState({     
        series: [{
          name: 'Sales',
          data: [7, 19, 5, 13, 9, 17, 5]
        }],
        options: {
          fill: {
            colors: ['#764ee3']
          }, 
          
        tooltip: {
            enabled: false,
        },   
          legend : {
              show :false,
          },
          markers: {
            size: 0,
            colors: undefined,
            strokeColors: '#fff',
            strokeWidth: 2,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
            discrete: [],
            shape: "circle",
            radius: 2,
            offsetX: 0,
            offsetY: 0,
            onClick: undefined,
            onDblClick: undefined,
            showNullDataPoints: true,
            hover: {
              size: undefined,
              sizeOffset: 3
            }
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
            width: 2,
            curve: 'smooth',
            show: true,
            curve: 'smooth',
            colors: ["#764ee3"],
            width: 2,
            dashArray: 0,      
          },
          xaxis: {
            type: 'datetime',
            categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
            tickAmount: 10,
          },
        },
    });

    let TopSliderColor = "PSR_TopSlider_instagram"
    if (props.type==="twitter") {
        TopSliderColor = "PSR_TopSlider_twitter"
    }
    else if (props.type==="telegram"){
        TopSliderColor = "PSR_TopSlider_telegram"
    }
    else if (props.type==="rss") {
        TopSliderColor = "PSR_TopSlider_rss"
    }
    let chartheight="43";
    let chartwidth = "700px";
    const q434 = useMediaQuery({query :'(max-width : 434px)'});
    const q343 = useMediaQuery({query :'(max-width : 343px)'});
    if (q434) {
        chartheight="30" ;
        chartwidth = "530px";
    }
    if (q343) {
        chartheight="24" ;
        chartwidth = "460px";
    }
    return (
        <div className="PSR_TopSlider_Slide">
            <div className={["TopSlider_top" , TopSliderColor].join(" ")}>
                <div className="PSR_TopSlider_result">
                    <span>داده های یافته شده </span>
                    <span className="PSR_TopSlider_number">23600</span>
                </div>
                <div className="PSR_TopSlider_all">
                    <span>کل داده های امروز </span>
                    <span className="PSR_TopSlider_number">5400440</span>
                </div>
            </div>

            <div className="Slide_typeIconContainer">
                {
                    props.type==="telegram" ?
                    <FaTelegramPlane className="Slide_telegramIcon"/> :
                    props.type==="instagram" ?
                    <AiFillInstagram className="Slide_instgramIcon"/> :
                    props.type==="twitter" ? 
                    <AiFillTwitterCircle className="Slide_twitterIcon"/> :
                    props.type==="rss" ?
                    <BiRss className="Slide_rssIcon"/> :
                    null
                }

            </div>
            <Chart className="PSR_TopSlider_chart" options={chartCircle2.options} series={chartCircle2.series} type="line" height={chartheight} width={chartwidth}/>
        </div>
    )
}

export default PSR_TopSlider_Slide

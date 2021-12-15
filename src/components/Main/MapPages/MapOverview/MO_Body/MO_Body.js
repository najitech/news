import React,{useState} from 'react'
import './MO_Body.css'
import Chart from 'react-apexcharts'
import MO_BodyResultBox from './MO_BodyResultBox'
import { useMediaQuery } from 'react-responsive'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import ItemsCarousel from 'react-items-carousel';

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
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const q1145 = useMediaQuery({query :'(max-width : 1145px)'}); 
    const q922 = useMediaQuery({query :'(max-width : 922px)'}); 
    const q1398 = useMediaQuery({query :'(max-width : 1398px)'});
    const q1179 = useMediaQuery({query :'(max-width : 1179px)'});
    const q964 = useMediaQuery({query :'(max-width : 964px)'});
    const q770 = useMediaQuery({query :'(max-width : 770px)'});
    const q672 = useMediaQuery({query :'(max-width : 672px)'});
    const q540 = useMediaQuery({query :'(max-width : 540px)'});
    const q487 = useMediaQuery({query :'(max-width : 487px)'});
    const q410 = useMediaQuery({query :'(max-width : 410px)'});
    const q343 = useMediaQuery({query :'(max-width : 343px)'});
    let gutternum = 40;
    let cardnumbers = 6;
    if (q1398) {
        cardnumbers=5;
    }
    if (q1179) {
        cardnumbers=4;
    }
    if (q964) {
        cardnumbers=3;
    }
    if (q672) {
        cardnumbers=2;
    }
    if (q487) {
        cardnumbers=1;
    }
    let chartHeight =300;
    if (q1145) {
      chartHeight=257;
    }
    if (q922) {
      chartHeight=220;
    }
    if (q672) {
      chartHeight=200;
    }
    if (q540) {
      chartHeight=180;
    }
    if (q487) {
      chartHeight=170;
    }
    if (q410) {
      chartHeight=150;
    }
    return (
        <div className="MO_Body">

            <div className="MOBodyChart">
                <Chart options={ChartData.options} series={ChartData.series} type="line" height={chartHeight} />
            </div>
            {!q770 ? <div className="MO_BodyResult">
                <MO_BodyResultBox type="rss" weekData="120.353" weekRaise="10.342" weekRaising/>
                <MO_BodyResultBox type="telegram" weekData="93.925" weekRaise="5.632"/>
                <MO_BodyResultBox type="paper" weekData="105.195" weekRaise="8.363" weekRaising/>
                <MO_BodyResultBox type="twitter" weekData="80.872" weekRaise="26.435"/>
                <MO_BodyResultBox type="instagram" weekData="230.563" weekRaise="12.865" weekRaising/>
                <MO_BodyResultBox type="telegram" weekData="153.564" weekRaise="4.753"/>
           </div> 
           :

           <div className="MOBody_SliderContainer">
           <ItemsCarousel
               placeholderItem={<div style={{ height: 200, background: '#EEE' }} />}
               enablePlaceholder={true}
               numberOfPlaceholderItems={cardnumbers}
               numberOfCards={cardnumbers}
               classes = {{itemsWrapper:"MO_TopSliderItems MO_TopSliderItemsMarginz"} }
               slidesToScroll={1}
               alwaysShowChevrons={true}
               chevronWidth={35}
               outsideChevron={true}
               showSlither={false}
               firstAndLastGutter={false}
               requestToChangeActive={setActiveItemIndex}
               activeItemIndex={activeItemIndex}
               rightChevron={<IoIosArrowDroprightCircle className="Slider_icon MO_Slider_icon"/>}
               leftChevron={<IoIosArrowDropleftCircle className="Slider_icon MO_Slider_icon"/>}
           >
           { 
           [
             <MO_BodyResultBox type="rss" weekData="120.353" weekRaise="10.342" weekRaising/>,
             <MO_BodyResultBox type="telegram" weekData="93.925" weekRaise="5.632"/>,
             <MO_BodyResultBox type="paper" weekData="105.195" weekRaise="8.363" weekRaising/>,
             <MO_BodyResultBox type="twitter" weekData="80.872" weekRaise="26.435"/>,
             <MO_BodyResultBox type="instagram" weekData="230.563" weekRaise="12.865" weekRaising/>,
             <MO_BodyResultBox type="telegram" weekData="153.564" weekRaise="4.753"/>  
           ]

           }

           </ItemsCarousel>  
          </div>
          }
                
        </div>
    )
}

export default MO_Body



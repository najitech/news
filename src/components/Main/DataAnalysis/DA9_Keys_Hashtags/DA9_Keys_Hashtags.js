import React , {useState} from 'react'
import './DA9_Keys_Hashtags.css'
import Chart from 'react-apexcharts'
import DA_NER_Box from './DA_NER_Box';

function DA9_Keys_Hashtags(props) {
    let currentHour= new Date().getHours();    
    const tempnum = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    const ChartTemp = tempnum.map((number) => (currentHour-number-1)%24 )
    let xChart = ChartTemp.map ((number) => number > 0 ? number : (24+number)%24)
    xChart.reverse()
    let xChartLabel = xChart.map(e => e > 11 ? 'بعد از ظهر ' : 'قبل از ظهر')
    const [TimeFilter,SetTimeFilter] = useState(1)
    const handleTimeFilter = (e) => {
        let a=e;
        if (TimeFilter===a) {
          
        }
        else {
          SetTimeFilter(a)
        }
    }
    const [ChartData , setChartData] = useState({
          
        series: [{
          name: 'PRODUCT A',
          data: [14, 16, 16, 17, 17, 13, 19, 18, 16, 11, 12, 19, 14, 13, 11, 12,
            17, 18, 11, 14, 19, 12, 11, 19]
        }, {
          name: 'PRODUCT B',
          data: [12, 17, 15, 14, 19, 14, 11, 16, 16, 17, 20, 17, 20, 12, 14, 14,
            20, 19, 15, 14, 18, 18, 15, 18]
        }],
        options: {
            colors : ['rgb(253, 181, 47)','rgb(136, 187, 59)'],
            dataLabels: {
                enabled: false,
            },
            grid: {
                borderColor: 'rgb(248, 248, 248)',
            },
            tooltip: {
                enabled: true,
              },
              xaxis:{
                categories:xChart,
                labels: {
                    show: true,
                    align: 'right',
                    style: {
                        colors: ["#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3","#BEBDC3",],
                        fontSize: '10px',
                        fontFamily: 'Shabnam',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    },
                  },
                  axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
              },
              yaxis: {
                show: true,
                labels: {
                  show: true,
                  align: 'right',
                  tickAmount: 4,
                  style: {
                      colors: ['#BEBDC3'],
                      fontSize: '10px',
                      fontFamily: 'Shabnam',
        
                      cssClass: 'apexcharts-yaxis-label',
                  },
                  offsetX: -10,
                }
            },
          chart: {
            dropShadow: {
              enabled: true,
              top: 4,
              left: 0,
              blur: 3,
              color:['rgb(253, 181, 47)','rgb(136, 187, 59)'],
              opacity: 0.3,
            
            },
            type: 'bar',
            height: 350,
  
            toolbar: {
                show: false,
                tools: {
                  download: false
                },
              },
            zoom: {
              enabled: true
            }
          },
          stroke: {
            width: 1.8,
            curve: 'smooth'
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '30%',
              borderRadius: 5
            },
          },
          legend: {
            show:false,
            position: 'right',
            offsetY: 40
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'light',
              gradientToColors: ["rgb(255, 255, 255)","rgb(255, 255, 255)"],
              shadeIntensity: 0,
              type: 'horizontal',
              stops: [0,7,93,100]
            },
          },
          tooltip: {
            enabled: true,
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
              return (
                '<div class="DA9_ChartTooltip">' +
                    '<div class="DA9_ChartTHeader"'+
                    '<span class="DA9_ChartTHeaderTitle">' + xChart[dataPointIndex]%12 + ' ' + xChartLabel[dataPointIndex] + '</span>' +
                    '</div>' +

                    '<div class="DA9_ChartTKeys"'+
                    "<span class='MDA9_ChartTKeysNumber'> 20.5K</span>" +
                    '<span class="DA9_ChartTKeysTitle"> کلمات کلیدی </span>' +
                    '</div>' +

                    '<div class="DA9_ChartTHashtags"'+
                    "<span class='DA9_ChartTHashtagsNumber'> 20.5K</span>" +
                    '<span class="DA9_ChartTHashtagsTitle"> کلمات کلیدی </span>' +
                    '</div>' +

                "</div>"
              );
            },
        }
        },
      
 })
    return (
        <div className='DA9'>
            <div className='DA1_Header DA9_Header'>
                        <div className='DA1_HeaderTitleDes'>

                        </div>

                    <div className='DA1_HeaderFilters'>
                        <div className='DA_CTimeFilters'>
                            <div className={['DA_CTimeFilter' ,TimeFilter===1? 'DA_CTimeFilterActive' : ''].join(' ')} onClick={() => handleTimeFilter(1)}>
                                امروز
                            </div>
                            <div className={['DA_CTimeFilter' ,TimeFilter===2? 'DA_CTimeFilterActive' : ''].join(' ')} onClick={() => handleTimeFilter(2)}>
                                هفته
                            </div>
                            <div className={['DA_CTimeFilter' ,TimeFilter===3? 'DA_CTimeFilterActive' : ''].join(' ')} onClick={() => handleTimeFilter(3)}>
                                ماه
                            </div>
                            <div className='DA_DownloadPng'>
                            ...
                            </div>
                        </div>
                    </div>
            </div>
            <div className='DA9_ResultContainer'>
                <span className='DA9_ResultContainerTitle'>وضعیت کلمات کلیدی و هشتگ ها</span>
                <div className='DA9_Result'>
                    <div className='DA9_ResultBox DA9_ResultBox1'>
                        <span className='DA9_RNumber'>3.753 K</span>
                        <span className='DA9_RDescrition'>کلمات کلیدی امروز , 4.464K</span>
                    </div>
                    <div className='DA9_ResultBox DA9_ResultBox2'>
                        <span className='DA9_RNumber'>54.327 K</span>
                        <span className='DA9_RDescrition'>هشتگ های امروز , 1.357K</span>
                    </div>
                </div>
            </div>
            <div className='DA9_Chart'>
                <Chart options={ChartData.options} series={ChartData.series} type="line" height={250} />
            </div>
  
            <div className='DA_NERsHelp'>
              <span className='DA_NERsHelpTitle'>موجودیت ها :</span>
              <div className='DA_NERHelp'>
                <div className='DA_NERHelpCircle DA_NERCircle_Location'>

                </div>
                <span className='DA_NERHelpTitle'>مکان ها</span>
              </div>
              <div className='DA_NERHelp'>
                <div className='DA_NERHelpCircle DA_NERCircle_Persons'>

                </div>
                <span className='DA_NERHelpTitle'>اشخاص</span>
              </div>
              <div className='DA_NERHelp'>
                <div className='DA_NERHelpCircle DA_NERCircle_Time'>

                </div>
                <span className='DA_NERHelpTitle'>بازه زمانی</span>
              </div>
              <div className='DA_NERHelp'>
                <div className='DA_NERHelpCircle DA_NERCircle_Events'>

                </div>
                <span className='DA_NERHelpTitle'>رویداد ها</span>
              </div>
              <div className='DA_NERHelp'>
                <div className='DA_NERHelpCircle DA_NERCircle_Organs'>

                </div>
                <span className='DA_NERHelpTitle'>سازمان ها</span>
              </div>
            </div>
            <div className='DA_NERContainer'>
              <DA_NER_Box type="Location" title="مشهد" />
              <DA_NER_Box type="Persons" title="رونالدو" />
              <DA_NER_Box type="Time" title="شهریور" />
              <DA_NER_Box type="Events" title="عید" />
              <DA_NER_Box type="Organs" title="مجلس" />
              <DA_NER_Box type="Location" title="تهران" />
              <DA_NER_Box type="Persons" title="محمد صلاح" />
              <DA_NER_Box type="Location" title="مشهد" />
              <DA_NER_Box type="Persons" title="رونالدو" />
              <DA_NER_Box type="Location" title="مشهد" />
              <DA_NER_Box type="Persons" title="رونالدو" />
              <DA_NER_Box type="Time" title="شهریور" />
              <DA_NER_Box type="Events" title="عید" />
              <DA_NER_Box type="Organs" title="مجلس" />
              <DA_NER_Box type="Location" title="تهران" />
              <DA_NER_Box type="Persons" title="محمد صلاح" />
              <DA_NER_Box type="Location" title="مشهد" />
              <DA_NER_Box type="Persons" title="رونالدو" />

              <DA_NER_Box type="Location" title="مشهد" />
              <DA_NER_Box type="Persons" title="رونالدو" />
              <DA_NER_Box type="Time" title="شهریور" />
              <DA_NER_Box type="Events" title="عید" />
              <DA_NER_Box type="Organs" title="مجلس" />
              <DA_NER_Box type="Location" title="تهران" />
              <DA_NER_Box type="Persons" title="محمد صلاح" />
              <DA_NER_Box type="Location" title="مشهد" />
              <DA_NER_Box type="Persons" title="رونالدو" />


            </div>
        </div>
    )
}

export default DA9_Keys_Hashtags

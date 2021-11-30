import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { GrLocationPin } from 'react-icons/gr';
import { MdArrowUpward } from 'react-icons/md';
import Chart from 'react-apexcharts';
import './MapPostInfBox.css';
import TopLocationMapBoxInf from './TopLocationMapBoxInf';
function MapPostInfBox(props) {
    const [donut,setDonut] = React.useState({
        options: {
            series: [44, 55, 41, 17],
            labels: ['خبرخوان', 'شیپور', 'توییتر', 'تلگرام'],
            colors : ["#F9B503", "#4FDDAF" , '#3DC0F3' , "#5B76F7"],
            legend:{show:false},
            plotOptions: {
                pie: {
                expandOnClick: false,      
                  donut: {
                    size: '67%',
                    labels: {
                    }
                  }
                }
              }
        },
        series: [44, 55, 41, 17],
      });
    return (
        <div className="mapPostInfBox"> 
            <div className="totalInfBoxMapPost">
                <span style={{color:'#8A97A6'}}>موقعیت مکانی های دریافت شده در روز</span>
                <h2>2,456,433 <GrLocationPin/></h2>
                <span style={{fontSize:'10px' ,color:'#B1B5BA' , marginTop:'-10px'}}>موقیت های مکانی روز گذشته : 135,343,211</span>
                <div className="growsMapBoxInf">
                    <div style={{marginLeft:"40px"}}>
                        <div className="baseGrowsBoxStyle" style={{backgroundColor:'#DFF8FF'}}><AiOutlineArrowDown style={{color:'#7CD5EC',fontWeight:'bold'}}/></div>
                        <div><h3>544,234</h3><span>افت نسبت به روز قبل</span></div>
                    </div>
                    <div>
                        <div className="baseGrowsBoxStyle" style={{backgroundColor:'#D9E1FC'}}><MdArrowUpward style={{color:'#6276D4' , fontWeight:'bold'}}/></div>
                        <div><h3>41,234</h3><span>رشد نسبت به روز قبل</span></div>
                    </div>
                </div>
            </div>
            <div className="charInfBoxMapPost">
                <div className="chartMapBoxInf">
                <Chart className="chartDonutMapPostInf" options={donut.options} series={donut.series} type="donut" width="230" />
                </div>
                <div className="topTenLocationMapBoxInf">
                    <div className="toptenLocationPostInf">
                        <TopLocationMapBoxInf growth location="تهران" rank={1} num="436453499" rate="20"/>
                        <TopLocationMapBoxInf location="مشهد" num="3635533" rate="43" rank={2}/>
                        <TopLocationMapBoxInf growth location="اصفهان" num="134566" rate="53" rank={3}/>
                        <TopLocationMapBoxInf growth location="خوزستان" num="134566" rate="79" rank={4}/>
                        <TopLocationMapBoxInf  location="کرج" num="56574" rate="12" rank={5}/>
                    </div>
                    <div className="toptenLocationPostInf">
                        <TopLocationMapBoxInf  location="بیرجند" rank={6} num="78372378" rate="54"/>
                        <TopLocationMapBoxInf growth location="خلیج فارس" num="12234398" rate="2" rank={7}/>
                        <TopLocationMapBoxInf growth location="تبریز" num="5892012" rate="72" rank={8}/>
                        <TopLocationMapBoxInf growth location="اهواز" num="832546" rate="79" rank={9}/>
                        <TopLocationMapBoxInf  location="هرمزگان" num="86493" rate="44" rank={10}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapPostInfBox

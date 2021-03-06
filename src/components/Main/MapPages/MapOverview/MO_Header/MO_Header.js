import React,{useState} from 'react'
import './MO_Header.css'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import ItemsCarousel from 'react-items-carousel';
import MO_Header_box from './MO_Header_box';
import KP_Header_box from '../../../KeywordPage/KP_Header/KP_Header_box';
import { useMediaQuery } from 'react-responsive';

function MO_Header() {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const q1398 = useMediaQuery({query :'(max-width : 1398px)'});
    const q1179 = useMediaQuery({query :'(max-width : 1179px)'});
    const q964 = useMediaQuery({query :'(max-width : 964px)'});
    const q672 = useMediaQuery({query :'(max-width : 672px)'});
    const q487 = useMediaQuery({query :'(max-width : 487px)'});
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
    return (
        <div className="MO_Header">
            <div className="MO_TopHeader">

                <h3>موقعیت های مکانی</h3>
                <p>به بخش موقعیت های مکانی وبسایت خوش آمدید. در این بخش میتوانید پست های مربوط به موقعیت های مکانی را مشاهده کنید</p>
            </div>
            <div className="MO_FooterHeader">
            </div>
            <div className="MO_BottomHeader">
                <div className="MO_SliderContainer">
                    <ItemsCarousel
                        placeholderItem={<div style={{ height: 200, background: '#EEE' }} />}
                        enablePlaceholder={true}
                        numberOfPlaceholderItems={cardnumbers}
                        numberOfCards={cardnumbers}
                        classes = {{itemsWrapper:"MO_TopSliderItems"} }
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
                        <MO_Header_box type="all" percent={100} todayRaising todayData="12.543K" todayRaise="1.482K" weekData="90.426K" weekRaise="5.921K"/>,
                        <MO_Header_box type="rss" percent={10} todayRaising todayData="12.543K" todayRaise="1.482K" weekData="90.426K" weekRaise="5.921K"/>,
                        <MO_Header_box type="telegram" percent={15} todayRaising todayData="16.294K" todayRaise="4.983K" weekData="120.256K" weekRaise="12.742K"/>,
                        <MO_Header_box type="paper" percent={35} todayData="18.327K" todayRaise="4.532K" weekRaising weekData="88.216K" weekRaise="7.319K"/>,
                        <MO_Header_box type="twitter" percent={24} weekRaising todayData="9.342K" todayRaise="1.321K" weekData="70.326K" weekRaise="3.471K"/>,
                        <MO_Header_box type="instagram" percent={6} todayRaising todayData="20.935K" todayRaise="3.429K" weekData="128.866K" weekRaise="8.439K"/>,
                        <MO_Header_box type="sheypoor" percent={10} todayRaising todayData="20.935K" todayRaise="3.429K" weekData="128.866K" weekRaise="8.439K"/>,
                        <MO_Header_box hi="hi7" percent={35}/>,     
                    ]

                    }

                    </ItemsCarousel>  
                </div>
            
            </div>
        </div>
    )
}

export default MO_Header

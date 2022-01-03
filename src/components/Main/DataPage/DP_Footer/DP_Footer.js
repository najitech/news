import React from 'react'
import { BsTelegram } from 'react-icons/bs'
import './DP_Footer.css'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { BiRss } from 'react-icons/bi'
import { FaTelegramPlane } from 'react-icons/fa'
import {ImNewspaper,ImBullhorn} from 'react-icons/im'

function DP_Footer() {
    return (
        <div className='DP_Footer'>
            <div className='DPF_HeaderTitle'>
                <span>گزارش دیتای دریافتی هفته</span>
                <div className='DPF_HeaderButton'>
                    تحلیل کلی پیام ها
                </div>
            </div>
            <div className='DPF_HeaderBar'>
                <div className='DPF_HeaderTelegram' style={{width:'23%'}}></div>
                <div className='DPF_HeaderInstgaram' style={{width:'17%'}}></div>
                <div className='DPF_HeaderTwitter' style={{width:'13%'}}></div>
                <div className='DPF_HeaderRss' style={{width:'10%'}}></div>
                <div className='DPF_HeaderPaper' style={{width:'20%'}}></div>
                <div className='DPF_HeaderSheypoor' style={{width:'17%'}}></div>
            </div>
            <div className="DPF_Data">
 
                <div className='DPF_Biggest'>
                    <div className='DPF_BiggestData'>
                        <span>دیتای دریافتی هفته تلگرام</span>
                        <span className='DPF_BiggestPerc'>527.235K</span>
                    </div>
                </div>
                <div className='DPF_all'>
                    <div className='DPF_Source'>
                        <BsTelegram className="DP_Icon DP_TelegramIcon DPF_Icon"/> 
                        <div className='DPF_SourceData'>
                            <span className='DPF_SourceDataTitle'>دیتای دریافتی هفته تلگرام</span>
                            <span className='DPF_SourceDataNumber'>497.263K</span>
                        </div>
                    </div>
                    <div className='DPF_Source'>
                        <BiRss className="DP_Icon DPF_Icon"/> 
                        <div className='DPF_SourceData'>
                            <span className='DPF_SourceDataTitle'>دیتای دریافتی هفته خبرخوان</span>
                            <span className='DPF_SourceDataNumber'>497.263K</span>
                        </div>
                    </div>
                    <div className='DPF_Source'>
                        <ImBullhorn className="DP_Icon DP_SheypoorIcon DPF_Icon"/> 
                        <div className='DPF_SourceData'>
                            <span className='DPF_SourceDataTitle'>دیتای دریافتی هفته شیپور</span>
                            <span className='DPF_SourceDataNumber'>497.263K</span>
                        </div>
                    </div>
                    <div className='DPF_Source'>
                        <AiFillTwitterCircle className="DP_Icon DP_TwitterIcon DPF_Icon"/> 
                        <div className='DPF_SourceData'>
                            <span className='DPF_SourceDataTitle'>دیتای دریافتی هفته توییتر</span>
                            <span className='DPF_SourceDataNumber'>497.263K</span>
                        </div>
                    </div>
                    <div className='DPF_Source'>
                        <AiFillInstagram className="DP_Icon DP_InstagramIcon DPF_Icon"/> 
                        <div className='DPF_SourceData'>
                            <span className='DPF_SourceDataTitle'>دیتای دریافتی هفته اینستاگرام</span>
                            <span className='DPF_SourceDataNumber'>497.263K</span>
                        </div>
                    </div>

                    <div className='DPF_Source'>
                        <ImNewspaper className="DP_Icon  DP_PaperIcon DPF_Icon"/> 
                        <div className='DPF_SourceData'>
                            <span className='DPF_SourceDataTitle'>دیتای دریافتی هفته روزنامه ها</span>
                            <span className='DPF_SourceDataNumber'>497.263K</span>
                        </div>
                    </div>
                    <div className='DPF_Source'>
                        <AiFillInstagram className="DP_Icon DP_InstagramIcon DPF_Icon"/> 
                        <div className='DPF_SourceData'>
                            <span className='DPF_SourceDataTitle'>دیتای دریافتی هفته اینستاگرام</span>
                            <span className='DPF_SourceDataNumber'>497.263K</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DP_Footer

import React from 'react'
import './KP_Body_Widgets.css'
import ChipDarkTheme from '../../../../../UI/ChipDarkTheme';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { BiRss } from 'react-icons/bi'
import { FaTelegramPlane } from 'react-icons/fa'

function KP_Body_Widgets() {
    return (
        <div className="KP_Body_Widgets">
             <div className="TopKeywoardWidget">
                <h6>کلمات کلیدی برتر </h6>
                <p> کلمات کلیدی برتر در 24 ساعت گذشته </p>
                <div>
                    <ChipDarkTheme label="مشهد" />
                    <ChipDarkTheme label="خراسان" />
                    <ChipDarkTheme label="خبر" />
                    <ChipDarkTheme label="مشرق" />
                    <ChipDarkTheme label="شهر" />
                    <ChipDarkTheme label="روزنامه" />
                    <ChipDarkTheme label="خراسان رضوی" />
                    <ChipDarkTheme label="ایران" />
                    <ChipDarkTheme label="رئیس جمهور" />
                    <ChipDarkTheme label="اخبار روز" />
                </div>
            </div>
            <div className="Widget_3Keywords">

                    <div className="KPWidget_HeaderIcons">
                    <BiRss className="KPWidget_rssIcon KPWidgetIcon"/>
                    <FaTelegramPlane className="KPWidget_telegramIcon KPWidgetIcon"/> 
                    <AiFillInstagram className="KPWidget_instgramIcon KPWidgetIcon"/> 
                    <AiFillTwitterCircle className="KPWidget_twitterIcon KPWidgetIcon"/> 

                    </div>
                    <div className="rightbox">
                    <div className="rb-container">
                        <ul className="rb">
                        <li className="rb-item" ng-repeat="itembx">
                            <div className="timestamp">
                               7:00 Pm
                            </div>
                            <div className="item-title">
                                <div className="KP_Widget_ItemGroup RssColor">
                                    <span> تهران</span>
                                    <span> سایت</span>
                                    <span> ایران</span>
                                </div>
                                <div className="KP_Widget_ItemGroup TelegramColor">
                                    <span> مشهد</span>
                                    <span> عید</span>
                                    <span> ایران</span>
                                </div>
                                <div className="KP_Widget_ItemGroup InstagramColor ">
                                    <span> توییتر</span>
                                    <span> خنده</span>
                                    <span> خوشحالی</span>
                                </div>
                                <div className="KP_Widget_ItemGroup KP_Widget_LastItem TwitterColor ">
                                    <span> ایران</span>
                                    <span> پاییز</span>
                                    <span> طوفان</span>
                                </div>
                            </div>

                        </li>
                        <li className="rb-item" ng-repeat="itembx">
                            <div className="timestamp">
                               8:00 Pm
                            </div>
                            <div className="item-title">
                                <div className="KP_Widget_ItemGroup RssColor">
                                    <span> تهران</span>
                                    <span> سایت</span>
                                    <span> ایران</span>
                                </div>
                                <div className="KP_Widget_ItemGroup TelegramColor">
                                    <span> مشهد</span>
                                    <span> عید</span>
                                    <span> ایران</span>
                                </div>
                                <div className="KP_Widget_ItemGroup InstagramColor ">
                                    <span> توییتر</span>
                                    <span> خنده</span>
                                    <span> خوشحالی</span>
                                </div>
                                <div className="KP_Widget_ItemGroup KP_Widget_LastItem TwitterColor ">
                                    <span> ایران</span>
                                    <span> پاییز</span>
                                    <span> طوفان</span>
                                </div>
                            </div>

                        </li>
                        <li className="rb-item" ng-repeat="itembx">
                            <div className="timestamp">
                               9:00 Pm
                            </div>
                            <div className="item-title">
                                <div className="KP_Widget_ItemGroup RssColor">
                                    <span> تهران</span>
                                    <span> سایت</span>
                                    <span> ایران</span>
                                </div>
                                <div className="KP_Widget_ItemGroup TelegramColor">
                                    <span> مشهد</span>
                                    <span> عید</span>
                                    <span> ایران</span>
                                </div>
                                <div className="KP_Widget_ItemGroup InstagramColor ">
                                    <span> توییتر</span>
                                    <span> خنده</span>
                                    <span> خوشحالی</span>
                                </div>
                                <div className="KP_Widget_ItemGroup KP_Widget_LastItem TwitterColor ">
                                    <span> ایران</span>
                                    <span> پاییز</span>
                                    <span> طوفان</span>
                                </div>
                            </div>

                        </li>
                        <li className="rb-item" ng-repeat="itembx">
                            <div className="timestamp">
                               10:00 Pm
                            </div>
                            <div className="item-title">
                                <div className="KP_Widget_ItemGroup RssColor">
                                    <span> تهران</span>
                                    <span> سایت</span>
                                    <span> ایران</span>
                                </div>
                                <div className="KP_Widget_ItemGroup TelegramColor">
                                    <span> مشهد</span>
                                    <span> عید</span>
                                    <span> ایران</span>
                                </div>
                                <div className="KP_Widget_ItemGroup InstagramColor ">
                                    <span> توییتر</span>
                                    <span> خنده</span>
                                    <span> خوشحالی</span>
                                </div>
                                <div className="KP_Widget_ItemGroup KP_Widget_LastItem TwitterColor ">
                                    <span> ایران</span>
                                    <span> پاییز</span>
                                    <span> طوفان</span>
                                </div>
                            </div>

                        </li>
                        <li className="rb-item" ng-repeat="itembx">
                            <div className="timestamp">
                               11:00 Pm
                            </div>
                            <div className="item-title">
                                <div className="KP_Widget_ItemGroup RssColor">
                                    <span> تهران</span>
                                    <span> سایت</span>
                                    <span> ایران</span>
                                </div>
                                <div className="KP_Widget_ItemGroup TelegramColor">
                                    <span> مشهد</span>
                                    <span> عید</span>
                                    <span> ایران</span>
                                </div>
                                <div className="KP_Widget_ItemGroup InstagramColor ">
                                    <span> توییتر</span>
                                    <span> خنده</span>
                                    <span> خوشحالی</span>
                                </div>
                                <div className="KP_Widget_ItemGroup KP_Widget_LastItem TwitterColor ">
                                    <span> ایران</span>
                                    <span> پاییز</span>
                                    <span> طوفان</span>
                                </div>
                            </div>

                        </li>
                        <li className="rb-item" ng-repeat="itembx">
                            <div className="timestamp">
                               12:00 Pm
                            </div>
                            <div className="item-title">
                                <div className="KP_Widget_ItemGroup RssColor">
                                    <span> تهران</span>
                                    <span> سایت</span>
                                    <span> ایران</span>
                                </div>
                                <div className="KP_Widget_ItemGroup TelegramColor">
                                    <span> مشهد</span>
                                    <span> عید</span>
                                    <span> ایران</span>
                                </div>
                                <div className="KP_Widget_ItemGroup InstagramColor ">
                                    <span> توییتر</span>
                                    <span> خنده</span>
                                    <span> خوشحالی</span>
                                </div>
                                <div className="KP_Widget_ItemGroup KP_Widget_LastItem TwitterColor ">
                                    <span> ایران</span>
                                    <span> پاییز</span>
                                    <span> طوفان</span>
                                </div>
                            </div>

                        </li>
                        <li className="rb-item" ng-repeat="itembx">
                            <div className="timestamp">
                               1:00 Am
                            </div>
                            <div className="item-title">
                                <div className="KP_Widget_ItemGroup RssColor">
                                    <span> تهران</span>
                                    <span> سایت</span>
                                    <span> ایران</span>
                                </div>
                                <div className="KP_Widget_ItemGroup TelegramColor">
                                    <span> مشهد</span>
                                    <span> عید</span>
                                    <span> ایران</span>
                                </div>
                                <div className="KP_Widget_ItemGroup InstagramColor ">
                                    <span> توییتر</span>
                                    <span> خنده</span>
                                    <span> خوشحالی</span>
                                </div>
                                <div className="KP_Widget_ItemGroup KP_Widget_LastItem TwitterColor ">
                                    <span> ایران</span>
                                    <span> پاییز</span>
                                    <span> طوفان</span>
                                </div>
                            </div>

                        </li>
                        <li className="rb-item" ng-repeat="itembx">
                            <div className="timestamp">
                                2:00 Am
                            </div>
                            <div className="item-title">
                                <div className="KP_Widget_ItemGroup RssColor">
                                    <span> تهران</span>
                                    <span> سایت</span>
                                    <span> ایران</span>
                                </div>
                                <div className="KP_Widget_ItemGroup TelegramColor">
                                    <span> مشهد</span>
                                    <span> عید</span>
                                    <span> ایران</span>
                                </div>
                                <div className="KP_Widget_ItemGroup InstagramColor ">
                                    <span> توییتر</span>
                                    <span> خنده</span>
                                    <span> خوشحالی</span>
                                </div>
                                <div className="KP_Widget_ItemGroup KP_Widget_LastItem TwitterColor ">
                                    <span> ایران</span>
                                    <span> پاییز</span>
                                    <span> طوفان</span>
                                </div>
                            </div>

                        </li>

                        </ul>

                    </div>
                    </div>
                </div>
               
        </div>
    )
}

export default KP_Body_Widgets

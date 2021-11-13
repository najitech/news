import React from 'react'
import './KP_Body_Widgets.css'
import ChipDarkTheme from '../../../../../UI/ChipDarkTheme';
function KP_Body_Widgets() {
    return (
        <div className="KP_Body_Widgets">
            <div className="TopKeywoardWidget">
                <h4>کلمات کلیدی برتر </h4>
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
        </div>
    )
}

export default KP_Body_Widgets

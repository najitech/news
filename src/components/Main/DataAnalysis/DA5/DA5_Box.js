import React from 'react'
import './DA5_Box.css'
import DA5_BoxItem from './DA5_BoxItem'

function DA5_Box(props) {
    let DA5_Header = 'DA5_BoxH_low'
    let DA5_HeaderIcon = 'DA5_BoxH_lowIcon'
    let DA5_HeaderTexture = 'DA5_Header_boxlowTexture'
    if (props.type === 'medium') {
        DA5_Header = 'DA5_BoxH_medium'
        DA5_HeaderIcon = 'DA5_BoxH_mediumIcon'
        DA5_HeaderTexture = 'DA5_Header_boxmediumTexture'
    }
    if (props.type === 'high') {
        DA5_Header = 'DA5_BoxH_high'
        DA5_HeaderIcon = 'DA5_BoxH_highIcon'
        DA5_HeaderTexture = 'DA5_Header_boxhighTexture'
    }
    if (props.type === 'veryHigh') {
        DA5_Header = 'DA5_BoxH_veryHigh'
        DA5_HeaderIcon = 'DA5_BoxH_veryHighIcon'
        DA5_HeaderTexture = 'DA5_Header_boxveryHighTexture'
    }

    return (
        <div className='DA5_Box '>
            <div className={['DA5_BoxH',DA5_Header].join(' ')}>
                <div className={['DA5_Header_boxMaskTexture',DA5_HeaderTexture].join(' ')}>

                </div>
                <div className="DA5_BoxHR">
                    <div className={['DA5_BoxHR_Icon',DA5_HeaderIcon].join(' ')}>

                    </div>
                    <span className="DA5_BoxHR_Number">{props.count}</span>
                    <h6 className="DA5_BoxHR_Title">{props.title}</h6>
                </div>
                <div className="DA5_BoxHL">

                </div>
            </div>
            <div className='DA5_BoxF'>
                <DA5_BoxItem title="سیاسی" number={118682} percent="20%" />
                <DA5_BoxItem title="اجتماعی" number={18453} percent="17%"  />
                <DA5_BoxItem title="هنری" number={126934} percent="8%"  />
                <DA5_BoxItem title="ورزشی" number={51573} percent="27%" />
                <DA5_BoxItem title="علمی" number={8632} percent="21%" />
                <DA5_BoxItem title="فرهنگی" number={108352} percent="8%" />
            </div>
        </div>
    )
}

export default DA5_Box

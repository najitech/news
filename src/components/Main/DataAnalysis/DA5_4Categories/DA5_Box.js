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
            <div className='DA5_BoxF' style={{gridTemplateColumns: props.BoxItems.length<4 ? "auto" : props.BoxItems.length<7 ? "auto auto" : props.BoxItems.length<10 ? "auto auto auto" : props.BoxItems.length<13 ? "auto auto auto auto" : "auto auto auto auto auto"}}>
                {
                    props.BoxItems.map((BoxItem) => {
                        return (
                            <DA5_BoxItem title={BoxItem.title} number={BoxItem.number} percent={BoxItem.percent} />
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default DA5_Box

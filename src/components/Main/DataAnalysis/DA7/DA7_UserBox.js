import React from 'react'
import './DA7_UserBox.css'
import {MdSportsBaseball} from 'react-icons/md'


function DA7_UserBox(props) {
    let sourceTitle = 'اینستاگرام'
    if (props.source==='telegram') {
        sourceTitle = 'تلگرام'
    }
    if (props.source==='twitter') {
        sourceTitle = 'توییتر'
    }
    if (props.source==='rss') {
        sourceTitle = 'خبرخوان'
    }
    if (props.source==='sheypoor') {
        sourceTitle = 'تلگرام'
    }
    return (
        <div className='DA7_UserBox'>
            <div className='DA7_UserBoxIcons'>
                <div className='DA7_UserBoxIcon'>
                    <MdSportsBaseball/>
                </div>
                <div className='DA7_UserBoxIcon'>
                    <MdSportsBaseball/>
                </div>
                <div className='DA7_UserBoxIcon'>
                    <MdSportsBaseball/>
                </div>
                <div className='DA7_UserBoxIcon'>
                    <MdSportsBaseball/>
                </div>
            </div>

            <div className='DA7_UBHeader'>
                <img className='DA7_UBH_Avatar' src={props.avatar} />
                <div className='DA7_UBHeaderContent'>
                    <span className='DA7_UBHeaderContentName'>{props.name}</span>
                    <span className='DA7_UBHeaderContentDescribe'>توضیحات مربوط به این کاربر</span>
                </div>
            </div>
            <div className='DA7_UBFooter'>
                <div className='DA7_UBF_Count'>
                    <span>372.537 K</span>
                </div>
                <div className='DA7_UBF_buttons'>
                    <div className='DA7_UBF_Posts DA7_UBF_button'>
                        <span>پست های کاربر</span>
                    </div>
                    <div className='DA7_UBF_Profile DA7_UBF_button'>
                        <span> پروفایل کاربر</span>
                    </div>
                </div>

            </div>  
        </div>
    )
}

export default DA7_UserBox

import React from 'react';
import './DA12_Hashtag.css'

function DA12_Hashtag(props) {
    return (
        <div className='DA12_Hashtag'>
            <div className='DA12_HashtagStart'>
                <div className='DA12_HashtagStartCircle'>
                    <span>{props.count}</span>
                </div>
            </div>
            <div className='DA12_HashtagContent'>
                <span>{props.title}</span>
            </div>
            <div className='DA12_HashtagEnd'>
                <div className='DA12_HashtagEndCircle'>

                </div>
            </div>
        </div>
    )
}

export default DA12_Hashtag;

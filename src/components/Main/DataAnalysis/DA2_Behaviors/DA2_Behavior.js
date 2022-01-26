import React from 'react'
import './DA2_Behavior.css'

function DA2_Behavior(props) {
    const {BData} = props;
    return (
        <div className='DA2_Behavior'>
            <span className='DA2_BehaviorTitle'>مدل های رفتاری</span>
            <div className='DA2_BehaviorCategories'>
                <div className='DA2_BehaviorCategory'>
                    <div className='DA2_BCategoryTitle'>
                        <span>{BData[0].title}</span>
                        <span>{BData[0].count}K , {BData[0].percent}%</span>
                    </div>
                    <div className='DA2_BCategoryBarcontainer'>
                        <div className='DA2_BCategoryBar' style={{width : `${BData[0].percent}%`}}>

                        </div>
                    </div>
                </div>
                <div className='DA2_BehaviorCategory'>
                    <div className='DA2_BCategoryTitle'>
                        <span>{BData[1].title}</span>
                        <span>{BData[1].count}K , {BData[1].percent}%</span>
                    </div>
                    <div className='DA2_BCategoryBarcontainer'>
                        <div className='DA2_BCategoryBar' style={{width : `${BData[1].percent}%`}}>

                        </div>
                    </div>
                </div>
                <div className='DA2_BehaviorCategory'>
                    <div className='DA2_BCategoryTitle'>
                        <span>{BData[2].title}</span>
                        <span>{BData[2].count}K , {BData[2].percent}%</span>
                    </div>
                    <div className='DA2_BCategoryBarcontainer'>
                        <div className='DA2_BCategoryBar' style={{width : `${BData[2].percent}%`}}>

                        </div>
                    </div>
                </div>
                <div className='DA2_BehaviorCategory'>
                    <div className='DA2_BCategoryTitle'>
                        <span>{BData[3].title}</span>
                        <span>{BData[3].count}K , {BData[3].percent}%</span>
                    </div>
                    <div className='DA2_BCategoryBarcontainer'>
                        <div className='DA2_BCategoryBar' style={{width : `${BData[3].percent}%`}}>

                        </div>
                    </div>
                </div>
                <div className='DA2_BehaviorCategory'>
                    <div className='DA2_BCategoryTitle'>
                        <span>{BData[4].title}</span>
                        <span>{BData[4].count}K , {BData[4].percent}%</span>
                    </div>
                    <div className='DA2_BCategoryBarcontainer'>
                        <div className='DA2_BCategoryBar' style={{width : `${BData[4].percent}%`}}>

                        </div>
                    </div>
                </div>
                <div className='DA2_BehaviorCategory'>
                    <div className='DA2_BCategoryTitle'>
                        <span>{BData[5].title}</span>
                        <span>{BData[5].count}K , {BData[5].percent}%</span>
                    </div>
                    <div className='DA2_BCategoryBarcontainer'>
                        <div className='DA2_BCategoryBar' style={{width : `${BData[5].percent}%`}}>

                        </div>
                    </div>
                </div>
                <div className='DA2_BehaviorCategory'>
                    <div className='DA2_BCategoryTitle'>
                        <span>{BData[6].title}</span>
                        <span>{BData[6].count}K , {BData[6].percent}%</span>
                    </div>
                    <div className='DA2_BCategoryBarcontainer'>
                        <div className='DA2_BCategoryBar' style={{width : `${BData[6].percent}%`}}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DA2_Behavior

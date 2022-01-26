import React from 'react';
import './DA10_5Keys.css'

function DA10_5Keys(props) {
  let DA10Back = "DA10BackWhite"
  if (props.otherColor) {
    DA10Back = "DA10Backother"
  }
  return (
    <div className={['DA10_5Keys', DA10Back].join(' ')}>
        <div className='DA10_5KeysHourContainer hexagon'>
            <span className='DA10_5KeysHour'>{props.time} {/*props.timeAb*/}</span>
        </div>

        <div className='DA10_5KeysContainer'>
        {
            props.keys? props.keys.map((key) => {
                return (
                <span key={key} className='DA10_5Key'>{key}</span>
                )
            }) : '' 
        }
        </div>
    </div>
  )
}

export default DA10_5Keys;

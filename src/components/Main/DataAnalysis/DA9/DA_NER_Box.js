import React from 'react'
import './DA_NER_Box.css'

function DA_NER_Box(props) {
    let DANerBox = 'DA_NER_Location'
    let DANERCicle = 'DA_NERCircle_Location'
    if (props.type === 'Persons') {
        DANerBox = 'DA_NER_Persons'
        DANERCicle = 'DA_NERCircle_Persons'
    }
    if (props.type === 'Time') {
        DANerBox = 'DA_NER_Time'
        DANERCicle = 'DA_NERCircle_Time'
    }
    if (props.type === 'Events') {
        DANerBox = 'DA_NER_Events'
        DANERCicle = 'DA_NERCircle_Events'
    }
    if (props.type === 'Organs') {
        DANerBox = 'DA_NER_Organs'
        DANERCicle = 'DA_NERCircle_Organs'
    }
    return (
        <div className={['DA_NER_Box' , DANerBox].join(' ')}>
            <div className={['DA_NER_BoxCircle',DANERCicle].join(' ')}>
                <span>{props.tilte ? '' : props.title.charAt(0) }</span>
            </div>
            <span className='DA_NER_BoxTitle'>
                {props.title}
            </span>
        </div>
    )
}

export default DA_NER_Box

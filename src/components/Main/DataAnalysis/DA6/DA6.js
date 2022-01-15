import React from 'react'
import './DA6.css'
import DA6_Lchart from './DA6_Lchart'
import DA6_Rchart from './DA6_Rchart'

function DA6() {
    return (
        <div className="DA6">
            <DA6_Rchart/>
            <DA6_Lchart/>
        </div>
    )
}

export default DA6

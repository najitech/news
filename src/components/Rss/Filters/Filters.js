import React from 'react'
import Accardion from '../../../UI/Accardion'
import './Filters.css'
import Positiveness from './Positiveness/Positiveness'
function Filters() {
    return (
        <div className="Filters">
            <form>  
                    <Positiveness/> 
            </form>
        </div>
    )
}

export default Filters

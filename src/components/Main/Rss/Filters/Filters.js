import React from 'react'
import Accardion from '../../../../UI/Accardion'
import Categories from './Categories/Categories'
import DateFilter from './Date/DateFilter'
import './Filters.css'
import Positiveness from './Positiveness/Positiveness'
import TagsFilter from './Tags/TagsFilter'
function Filters() {
    return (
        <div className="Filters">
            <form>  
                    <Positiveness/> 
                    <Accardion title="تاریخ">
                        <DateFilter/>
                    </Accardion>
                    <Accardion title="موضوع">
                        <Categories/>
                    </Accardion>
                    <Accardion title="تگ">
                        <TagsFilter/>   
                    </Accardion>
            </form>
        </div>
    )
}

export default Filters

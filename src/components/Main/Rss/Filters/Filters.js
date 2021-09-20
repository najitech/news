import React from 'react'
import Accardion from '../../../../UI/Accardion'
import Categories from './Categories/Categories'
import DateFilter from './Date/DateFilter'
import './Filters.css'
import Positiveness from './Positiveness/Positiveness'
import TagsFilter from './Tags/TagsFilter'
import SitesFilter from './SitesFilter/SitesFilter'
import NERfilter from './NER/NERfilter'
function Filters() {
    return (
        <div className="Filters">
            <form>  
                    <Positiveness/> 
                    <Accardion title="موضوع">
                        <Categories/>
                    </Accardion> 
                    <Accardion title="تاریخ">
                        <DateFilter/>
                    </Accardion>
                    <Accardion title="تگ">
                        <TagsFilter/>   
                    </Accardion>
                    <Accardion title="وب سایت">
                        <SitesFilter/>
                    </Accardion>
                    <Accardion>
                        <NERfilter/>
                    </Accardion>
            </form>
        </div>
    )
}

export default Filters

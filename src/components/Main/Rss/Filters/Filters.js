import React from 'react'
import Accardion from '../../../../UI/Accardion'
import AccardionPS from '../../../../UI/AccardionPS'
import Categories from './Categories/Categories'
import DateFilter from './Date/DateFilter'
import './Filters.css'
import Positiveness from './Positiveness/Positiveness'
import TagsFilter from './Tags/TagsFilter'
import SitesFilter from './SitesFilter/SitesFilter'
import NERfilter from './NER/NERfilter'
function Filters(props) {
    return (
        <div className="Filters">
            <form>  
                    <Positiveness/> 
                    <Accardion title="موضوع">
                        <Categories/>
                    </Accardion> 
                    <Accardion title="تاریخ">
                        <DateFilter mobile={props.mobile}/>
                    </Accardion>
                    <Accardion title="هشتگ">
                        <TagsFilter/>   
                    </Accardion>
                    <Accardion title="وب سایت">
                        <SitesFilter/>
                    </Accardion>
                    <Accardion title="موجودیت ها">
                        <NERfilter/>
                    </Accardion>
            </form>
        </div>
    )
}

export default Filters

import React from 'react'
import Accardion from '../../../../../UI/Accardion'
import AccardionPS from '../../../../../UI/AccardionPS'
import Categories from '../../../Rss/Filters/Categories/Categories'
import DateFilter from '../../../Rss/Filters/Date/DateFilter'
import NERfilter from '../../../Rss/Filters/NER/NERfilter'
import Positiveness from '../../../Rss/Filters/Positiveness/Positiveness'
import TagsFilter from '../../../Rss/Filters/Tags/TagsFilter'
import SitesFilter from '../../../Rss/Filters/SitesFilter/SitesFilter' 
import './PSR_Sidebar_Filters.css'
import { Accordion } from '@material-ui/core'
import ViewsFilter from '../../../Rss/Filters/ViewsFilter/ViewsFilter'

function PSR_Sidebar_Filters(props) {
    return (
        <div className="PSR_Sidebar_Filters">
                    <AccardionPS  instagram title="موضوع">
                        <Categories dark/>
                    </AccardionPS> 
                    <AccardionPS instagram marg title="لایک و بازدید">
                        <ViewsFilter/>
                    </AccardionPS>
                    <AccardionPS off instagram title="تاریخ">
                        <DateFilter dark mobile={props.mobile}/>
                    </AccardionPS>
                    <AccardionPS marg instagram title="هشتگ">
                        <TagsFilter dark/>   
                    </AccardionPS>
                    <AccardionPS instagram title="حس خبر">    
                        <Positiveness dark/> 
                    </AccardionPS>
                    <AccardionPS off instagram title="وب سایت">
                        <SitesFilter dark/>
                    </AccardionPS>
                    <AccardionPS marg instagram title="موجودیت ها">
                        <NERfilter dark/>
                    </AccardionPS> 

        </div>
    )
}

export default PSR_Sidebar_Filters

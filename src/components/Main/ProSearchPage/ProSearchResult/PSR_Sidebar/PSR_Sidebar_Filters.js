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
import UsernameFilter from '../../../Rss/Filters/Username/UsernameFilter'
import CheckBoxFilter from '../../../Rss/Filters/CheckBox/CheckBoxFilter'

function PSR_Sidebar_Filters(props) {
    return (
        <div className="PSR_Sidebar_Filters">
        {props.type === 1 ?
            <><AccardionPS marg instagram title="موضوع">
                <Categories dark/>
            </AccardionPS> 
            <AccardionPS marg instagram title="نوع">
                <CheckBoxFilter dark/>
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
            <AccardionPS marg instagram title="موجودیت ها">
                <NERfilter dark/>
            </AccardionPS> 
            <AccardionPS marg instagram title="کاربر">
                <UsernameFilter dark/>
                
            </AccardionPS></>: props.type === 2 ? <><AccardionPS marg twitter title="موضوع">
                <Categories dark/>
            </AccardionPS> 
            <AccardionPS marg twitter title="نوع">
                <CheckBoxFilter dark/>
            </AccardionPS>
            <AccardionPS twitter marg title=" لایک و بازدید و ریتوییت">
                <ViewsFilter retweet/>
            </AccardionPS>
            <AccardionPS off twitter title="تاریخ">
                <DateFilter dark mobile={props.mobile}/>
            </AccardionPS>
            <AccardionPS marg twitter title="هشتگ">
                <TagsFilter dark/>   
            </AccardionPS>
            <AccardionPS marg twitter title="موجودیت ها">
                <NERfilter dark/>
            </AccardionPS> 
            <AccardionPS marg twitter title="کاربر">
                <UsernameFilter dark/>
            </AccardionPS></> : props.type ===3 ?
                    <><AccardionPS marg rss title="موضوع">
                        <Categories dark/>
                    </AccardionPS> 
                    <AccardionPS marg rss title="نوع">
                        <CheckBoxFilter dark/>
                    </AccardionPS>
                    <AccardionPS rss marg title="بازدید">
                        <ViewsFilter off/>
                    </AccardionPS>        
                    <AccardionPS off rss title="وب سایت">
                        <SitesFilter dark/>
                    </AccardionPS>

                    <AccardionPS marg rss title="حس خبر">    
                        <Positiveness dark/> 
                    </AccardionPS>
                    <AccardionPS off rss title="تاریخ">
                        <DateFilter dark mobile={props.mobile}/>
                    </AccardionPS>
                    <AccardionPS marg rss title="هشتگ">
                        <TagsFilter dark/>   
                    </AccardionPS>
                    <AccardionPS marg rss title="موجودیت ها">
                        <NERfilter dark/>
                    </AccardionPS> 
                    <AccardionPS marg rss title="کاربر">
                        <UsernameFilter dark/>
            </AccardionPS></>: props.type === 4 ? 
                <><AccardionPS marg telegram title="موضوع">
                    <Categories dark/>
                </AccardionPS> 
                <AccardionPS marg telegram title="نوع">
                    <CheckBoxFilter telegram dark/>
                </AccardionPS>
                <AccardionPS telegram marg title="لایک و بازدید">
                    <ViewsFilter />
                </AccardionPS>
                <AccardionPS off telegram title="تاریخ">
                    <DateFilter dark mobile={props.mobile}/>
                </AccardionPS>
                <AccardionPS marg telegram title="هشتگ">
                    <TagsFilter dark/>   
                </AccardionPS>
                <AccardionPS marg telegram title="موجودیت ها">
                    <NERfilter dark/>
                </AccardionPS> 
                <AccardionPS marg telegram title="کاربر">
                    <UsernameFilter dark/>
                    
                </AccardionPS></> :null}
                    
        </div>
    )
}

export default PSR_Sidebar_Filters

import React ,{useContext} from 'react'
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
import ThemeColorContext from '../../../../../UI/ThemeColorContext'
import { BsSunFill } from 'react-icons/bs'
import { MdDarkMode } from 'react-icons/md'

function PSR_Sidebar_Filters(props) {
    const ThemeColor = useContext(ThemeColorContext);
    return (
        <div className="PSR_Sidebar_Filters">
            <div className="Navbar_ThemeToggle">
            <BsSunFill className="Navbar_ThemeToggleLight" onClick={ () => props.setTheme("darkTheme")}/>
            <MdDarkMode className="Navbar_ThemeToggleDark" onClick={ () => props.setTheme("lightTheme")}/>
            </div>
        {props.type === 1 ?
            <>
             <AccardionPS  marg white={ThemeColor==="darkTheme"} instagram title="هشتگ">
                <TagsFilter  dark={ThemeColor==="lightTheme" }/>   
            </AccardionPS>
            <AccardionPS marg  white={ThemeColor==="darkTheme"} instagram title="موجودیت ها">
                <NERfilter dark={ThemeColor==="lightTheme" }/>
            </AccardionPS> 
            <AccardionPS marg white={ThemeColor==="darkTheme"} instagram title="کاربر">
                <UsernameFilter dark={ThemeColor==="lightTheme" } />
            </AccardionPS><AccardionPS marg  white={ThemeColor==="darkTheme"}  instagram title="موضوع">
                <Categories dark={ThemeColor==="lightTheme" }/>
            </AccardionPS > 
            <AccardionPS off  white={ThemeColor==="darkTheme"}   instagram title="تاریخ">
                <DateFilter dark={ThemeColor==="lightTheme" }  mobile={props.mobile}/>
            </AccardionPS>
            <AccardionPS marg  white={ThemeColor==="darkTheme"}   instagram title="نوع">
                <CheckBoxFilter dark={ThemeColor==="lightTheme" }/>
            </AccardionPS>
            <AccardionPS  white={ThemeColor==="darkTheme"}  instagram  marg title="لایک و بازدید">
                <ViewsFilter dark={ThemeColor==="lightTheme" }/>
            </AccardionPS>

           </>: props.type === 2 ? <>
           <AccardionPS marg  white={ThemeColor==="darkTheme"}  twitter title="هشتگ">
                <TagsFilter dark={ThemeColor==="lightTheme" }/>   
            </AccardionPS>
            <AccardionPS marg   white={ThemeColor==="darkTheme"} twitter title="موجودیت ها">
                <NERfilter dark={ThemeColor==="lightTheme" }/>
            </AccardionPS> 
            <AccardionPS marg  white={ThemeColor==="darkTheme"}  twitter title="کاربر">
                <UsernameFilter dark={ThemeColor==="lightTheme" }/>
            </AccardionPS ><AccardionPS  white={ThemeColor==="darkTheme"}  marg twitter title="موضوع">
                <Categories dark={ThemeColor==="lightTheme" }/>
            </AccardionPS> 
            <AccardionPS off  white={ThemeColor==="darkTheme"}  twitter title="تاریخ">
                <DateFilter dark={ThemeColor==="lightTheme" } mobile={props.mobile}/>
            </AccardionPS>
            <AccardionPS marg   white={ThemeColor==="darkTheme"} twitter title="نوع">
                <CheckBoxFilter dark={ThemeColor==="lightTheme" }/>
            </AccardionPS>
            <AccardionPS twitter  white={ThemeColor==="darkTheme"}  marg title=" لایک و بازدید و ریتوییت">
                <ViewsFilter dark={ThemeColor==="lightTheme" } retweet/>
            </AccardionPS>

            </> : props.type ===3 ?
                    <>
                    <AccardionPS marg  white={ThemeColor==="darkTheme"}   rss title="هشتگ">
                        <TagsFilter dark={ThemeColor==="lightTheme" }/>   
                    </AccardionPS>
                    <AccardionPS marg  white={ThemeColor==="darkTheme"}   rss title="موجودیت ها">
                        <NERfilter dark={ThemeColor==="lightTheme" }/>
                    </AccardionPS> 
                    <AccardionPS marg  white={ThemeColor==="darkTheme"}   rss title="کاربر">
                        <UsernameFilter dark={ThemeColor==="lightTheme" }/>
            </AccardionPS><AccardionPS marg  white={ThemeColor==="darkTheme"}  rss title="موضوع">
                        <Categories dark={ThemeColor==="lightTheme" }/>
                    </AccardionPS> 
                    <AccardionPS off rss  white={ThemeColor==="darkTheme"}   title="تاریخ">
                        <DateFilter dark={ThemeColor==="lightTheme" } mobile={props.mobile}/>
                    </AccardionPS>
                    <AccardionPS marg  white={ThemeColor==="darkTheme"}  rss title="نوع">
                        <CheckBoxFilter dark={ThemeColor==="lightTheme" }/>
                    </AccardionPS>
                    <AccardionPS rss  white={ThemeColor==="darkTheme"}   marg title="بازدید">
                        <ViewsFilter dark={ThemeColor==="lightTheme" } off/>
                    </AccardionPS>        
                    <AccardionPS off rss  white={ThemeColor==="darkTheme"}   title="وب سایت">
                        <SitesFilter dark={ThemeColor==="lightTheme" }/>
                    </AccardionPS>

                    <AccardionPS marg rss  white={ThemeColor==="darkTheme"}   title="حس خبر">    
                        <Positiveness size dark={ThemeColor==="lightTheme" }/> 
                    </AccardionPS>

                    </>: props.type === 4 ? 
                <><AccardionPS marg  white={ThemeColor==="darkTheme"}  telegram title="هشتگ">
                <TagsFilter dark={ThemeColor==="lightTheme" }/>   
            </AccardionPS>
            <AccardionPS marg telegram  white={ThemeColor==="darkTheme"}  title="موجودیت ها">
                <NERfilter dark={ThemeColor==="lightTheme" }/>
            </AccardionPS> 
            <AccardionPS marg  white={ThemeColor==="darkTheme"}  telegram title="کاربر">
                <UsernameFilter dark={ThemeColor==="lightTheme" }/>
                
            </AccardionPS>
                <AccardionPS  white={ThemeColor==="darkTheme"}  marg telegram title="موضوع">
                    <Categories dark={ThemeColor==="lightTheme" }/>
                </AccardionPS> 
                <AccardionPS  white={ThemeColor==="darkTheme"}  off telegram title="تاریخ">
                    <DateFilter dark={ThemeColor==="lightTheme" } mobile={props.mobile}/>
                </AccardionPS>
                <AccardionPS  white={ThemeColor==="darkTheme"}  marg telegram title="نوع">
                    <CheckBoxFilter telegram dark={ThemeColor==="lightTheme" }/>
                </AccardionPS>
                <AccardionPS  white={ThemeColor==="darkTheme"}  telegram marg title="لایک و بازدید">
                    <ViewsFilter dark={ThemeColor==="lightTheme" } />
                </AccardionPS>

                </> :null}
                    
        </div>
    )
}

export default PSR_Sidebar_Filters

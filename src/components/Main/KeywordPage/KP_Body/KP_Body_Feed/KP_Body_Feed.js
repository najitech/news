import React from 'react'
import PSR_Sort from '../../../ProSearchPage/ProSearchResult/PSR_Feed/PSR_Sort/PSR_Sort'
import KP_BF_chart from './KP_BF_chart'
import KP_BF_ListItem from './KP_BF_ListItem/KP_BF_ListItem'
import KP_BF_PostShow from './KP_BF_PostShow/KP_BF_PostShow'
import KP_BF_Search from './KP_BF_Search/KP_BF_Search'
import KP_BF_Sort from './KP_BF_Sort/KP_BF_Sort'
import './KP_Body_Feed.css'

function KP_Body_Feed() {
    return (
        <div className="KP_Body_Feed"> 
            <KP_BF_chart/>
            <div className="KP_BF_Main">
                <div className="KP_Sort_Search">
                    <KP_BF_Sort social={1}/>
                    <KP_BF_Search/>
                </div>
                <KP_BF_ListItem sum="10549834" instagram="49535" twitter="578345" rss="15865" telegram="854653" rad off title="مشهد">
                    <div className="postListDivKP">
                        <KP_BF_PostShow image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" 
                                        summary="این یک پست آزمایشی اینستاگرام است که برای نمایش در نظر گرفته شده است" 
                                        avatar="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
                                        username="flower_22_A"
                                        social={1}/>
                        <KP_BF_PostShow title="پست توییتر"
                                        image="https://cdn.vox-cdn.com/thumbor/5NULJp4-1rBYJz5IdmttFuLzdwU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22712959/1328326456.jpg" 
                                        summary="این یک پست آزمایشی اینستاگرام است که برای نمایش در نظر گرفته شده است" 
                                        avatar="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
                                        username="flower_22_A"
                                        social={2}/>
                        <KP_BF_PostShow title="پست خبرخوان"
                                        image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" 
                                        summary=" این یک پست آزمایشی اینستاگرام است که برای نمایش در نظر گرفته شده است که بسیار طولانی تر از متن های قبل است که با این هدف نیز ساخته شده است که طولانی باشد تا به خط بعدی برود" 
                                        avatar="https://upload.wikimedia.org/wikipedia/commons/e/e9/ISNA_logo.jpg"
                                        username="ایسنا"
                                        social={3}/>
                        <KP_BF_PostShow 
                                        image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" 
                                        summary=" این یک پست آزمایشی اینستاگرام است که برای نمایش در نظر گرفته شده است که بسیار طولانی تر از متن های قبل است که با این هدف نیز ساخته شده است که طولانی باشد تا به خط بعدی برود" 
                                        avatar="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
                                        username="کاربر"
                                        social={4}/>
                    </div>
                </KP_BF_ListItem> 
                <KP_BF_ListItem sum="546463543" instagram="36554" twitter="32454" rss="87458" telegram="87234" rad off title="ایران">
                    <div className="postListDivKP">
                        
                    </div>
                </KP_BF_ListItem> 
               
            </div>
        </div>
    )
}

export default KP_Body_Feed

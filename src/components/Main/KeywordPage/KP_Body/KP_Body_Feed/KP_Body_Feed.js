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
                                        summary=" به گزارش خبرآنلاین، معاون وزیر راه و شهرسازی با اعلام این خبر در گفت‌و گو با  یک برنامه رادیویی اعلام کرد: به دنبال افزایش تقاضای تمدید مهلت ثبت‌نام در سامانه نهضت ملی مسکن، نام‌نویسی در این طرح که تا پیش از این ۲۸ آبان به اتمام می‌رسید، تا ۱۵ آذر ماه تمدید شده است. متقاضیان می‌توانند بدون نگرانی ثبت‌نام در مرحله اول نهضت ملی مسکن را در سامانه مربوطه به آدرس saman.mrud.ir انجام دهند.

                                        محمود محمودزاده یادآور شد: تاکنون یک میلیون و ۲۶۰ هزار نفر در سامانه نهضت ملی مسکن ثبت‌نام کرده‌اند که در ۵۲۰ شهر تقاضای آنها ثبت شده است. در این ۵۲۰ شهر، زمین به اندازه کافی تأمین شده است. به مرور تعداد شهرهای مورد تقاضا افزایش خواهد یافت و امیدواریم همه متقاضیان دریافت مسکن تا یکی دو ماه آینده در شهرهای مورد دلخواه ثبت‌نام کنند.
                                        
                                        گفتنی است  از روز ۲۸ مهرماه ثبت‌نام اجرای قانون جهش تولید مسکن در سامانه جامع طرح‌های حمایتی مسکن به نشانی saman.mrud.ir در ۳۱ استان آغاز شده که تا ۱۵ آذرماه ادامه دارد. متقاضیان پس از ورود بر روی گزینه «ثبت نام نهضت ملی مسکن» کلیک کنند. عدم استفاده از تسهیلات یارانه‌ای دولتی در بخش مسکن و سبز بودن فرم «ج»، فقدان مالکیت خصوصی، متاهل یا سرپرست خانوار بودن و سابقه حداقل پنج سال سکونت در شهر مورد تقاضا چهار شرط اصلی خواهد بود. درخصوص شرط تاهل، پنج گروه شامل خانم‌های بالای ۳۵ سال، افراد دارای معلولیت بالای ۲۰ سال، نخبگان علمی، مردان مجرد بالای ۴۵ سال و بیماران خاص، می‌توانند ثبت نام کنند. درباره نداشتن مالکیت نیز برخی گروه‌های درآمدی در بعضی مناطق بر اساس تشخیص وزارت راه و شهرسازی از این شرط معاف هستند." 
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

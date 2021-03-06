import React from 'react'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import {GiTrumpet} from 'react-icons/gi'
import { BiRss } from 'react-icons/bi'
import { FaTelegramPlane } from 'react-icons/fa'
import { FiKey } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'
import KP_BF_Search from '../../../KeywordPage/KP_Body/KP_Body_Feed/KP_BF_Search/KP_BF_Search'
import ListItemMapPost from '../ListItemMapPost/ListItemMapPost'
import KP_BF_Sort from '../../../KeywordPage/KP_Body/KP_Body_Feed/KP_BF_Sort/KP_BF_Sort';
import './MapPostFeed.css'
import MapPostSearch from '../MapPostSearch/MapPostSearch'
import MapPostSort from '../../MapPostSort/MapPostSort'
import MapPostShowItem from '../../MapPostShowItem/MapPostShowItem'
function MapPostFeed(props) {
    return (
        <div className="mapPostFeed">
             <div className="KP_Sort_Search">
                    <MapPostSearch/>
                    <MapPostSort/>
                </div>
                
            <ListItemMapPost rad index={0} sum="10549834" instagram="49535" twitter="578345" rss="15865" telegram="854653" title="تهران">
                <div className="postListDivKP">
                        
                                        <MapPostShowItem text=" به گزارش خبرآنلاین، معاون وزیر راه و شهرسازی با اعلام این خبر در گفت‌و گو با  یک برنامه رادیویی اعلام کرد: به دنبال افزایش تقاضای تمدید مهلت ثبت‌نام در سامانه نهضت ملی مسکن، نام‌نویسی در این طرح که تا پیش از این ۲۸ آبان به اتمام می‌رسید، تا ۱۵ آذر ماه تمدید شده است. متقاضیان می‌توانند بدون نگرانی ثبت‌نام در مرحله اول نهضت ملی مسکن را در سامانه مربوطه به آدرس saman.mrud.ir انجام دهند.

محمود محمودزاده یادآور شد: تاکنون یک میلیون و ۲۶۰ هزار نفر در سامانه نهضت ملی مسکن ثبت‌نام کرده‌اند که در ۵۲۰ شهر تقاضای آنها ثبت شده است. در این ۵۲۰ شهر، زمین به اندازه کافی تأمین شده است. به مرور تعداد شهرهای مورد تقاضا افزایش خواهد یافت و امیدواریم همه متقاضیان دریافت مسکن تا یکی دو ماه آینده در شهرهای مورد دلخواه ثبت‌نام کنند.

گفتنی است  از روز ۲۸ مهرماه ثبت‌نام اجرای قانون جهش تولید مسکن در سامانه جامع طرح‌های حمایتی مسکن به نشانی saman.mrud.ir در ۳۱ استان آغاز شده که تا ۱۵ آذرماه ادامه دارد. متقاضیان پس از ورود بر روی گزینه «ثبت نام نهضت ملی مسکن» کلیک کنند. عدم استفاده از تسهیلات یارانه‌ای دولتی در بخش مسکن و سبز بودن فرم «ج»، فقدان مالکیت خصوصی، متاهل یا سرپرست خانوار بودن و سابقه حداقل پنج سال سکونت در شهر مورد تقاضا چهار شرط اصلی خواهد بود. درخصوص شرط تاهل، پنج گروه شامل خانم‌های بالای ۳۵ سال، افراد دارای معلولیت بالای ۲۰ سال، نخبگان علمی، مردان مجرد بالای ۴۵ سال و بیماران خاص، می‌توانند ثبت نام کنند. درباره نداشتن مالکیت نیز برخی گروه‌های درآمدی در بعضی مناطق بر اساس تشخیص وزارت راه و شهرسازی از این شرط معاف هستند." 
                                        avatar="https://i.pinimg.com/564x/a9/d6/05/a9d60534f8f7b6e7d960892db9b0f4ae.jpg"    
                                        username="alireza.m" 
                                        social={1}
                                        date={'10/32/1400'}
                                        others={124352}
                                        type={1}
                                        pos={0}
                                        closeplaces={["البرز" ,"دماوند" , "شهریار"]}
                                        image="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" title="عنوان پست"/>
                        <MapPostShowItem text=" به گزارش خبرآنلاین، معاون وزیر راه و شهرسازی با اعلام این خبر در گفت‌و گو با  یک برنامه رادیویی اعلام کرد: به دنبال افزایش تقاضای تمدید مهلت ثبت‌نام در سامانه نهضت ملی مسکن، نام‌نویسی در این طرح که تا پیش از این ۲۸ آبان به اتمام می‌رسید، تا ۱۵ آذر ماه تمدید شده است. متقاضیان می‌توانند بدون نگرانی ثبت‌نام در مرحله اول نهضت ملی مسکن را در سامانه مربوطه به آدرس saman.mrud.ir انجام دهند.

محمود محمودزاده یادآور شد: تاکنون یک میلیون و ۲۶۰ هزار نفر در سامانه نهضت ملی مسکن ثبت‌نام کرده‌اند که در ۵۲۰ شهر تقاضای آنها ثبت شده است. در این ۵۲۰ شهر، زمین به اندازه کافی تأمین شده است. به مرور تعداد شهرهای مورد تقاضا افزایش خواهد یافت و امیدواریم همه متقاضیان دریافت مسکن تا یکی دو ماه آینده در شهرهای مورد دلخواه ثبت‌نام کنند.

گفتنی است  از روز ۲۸ مهرماه ثبت‌نام اجرای قانون جهش تولید مسکن در سامانه جامع طرح‌های حمایتی مسکن به نشانی saman.mrud.ir در ۳۱ استان آغاز شده که تا ۱۵ آذرماه ادامه دارد. متقاضیان پس از ورود بر روی گزینه «ثبت نام نهضت ملی مسکن» کلیک کنند. عدم استفاده از تسهیلات یارانه‌ای دولتی در بخش مسکن و سبز بودن فرم «ج»، فقدان مالکیت خصوصی، متاهل یا سرپرست خانوار بودن و سابقه حداقل پنج سال سکونت در شهر مورد تقاضا چهار شرط اصلی خواهد بود. درخصوص شرط تاهل، پنج گروه شامل خانم‌های بالای ۳۵ سال، افراد دارای معلولیت بالای ۲۰ سال، نخبگان علمی، مردان مجرد بالای ۴۵ سال و بیماران خاص، می‌توانند ثبت نام کنند. درباره نداشتن مالکیت نیز برخی گروه‌های درآمدی در بعضی مناطق بر اساس تشخیص وزارت راه و شهرسازی از این شرط معاف هستند." 
                                        avatar="https://i.pinimg.com/564x/a9/d6/05/a9d60534f8f7b6e7d960892db9b0f4ae.jpg"    
                                        username="alireza.m" 
                                        social={2}
                                        
                                        date={'11/2/1401'}
                                        others={124352}
                                        type={2}
                                        closeplaces={["البرز" ,"دماوند" , "شهریار"]}
                                        image="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" title="عنوان پست"/>
                      <MapPostShowItem text=" به گزارش خبرآنلاین، معاون وزیر راه و شهرسازی با اعلام این خبر در گفت‌و گو با  یک برنامه رادیویی اعلام کرد: به دنبال افزایش تقاضای تمدید مهلت ثبت‌نام در سامانه نهضت ملی مسکن، نام‌نویسی در این طرح که تا پیش از این ۲۸ آبان به اتمام می‌رسید، تا ۱۵ آذر ماه تمدید شده است. متقاضیان می‌توانند بدون نگرانی ثبت‌نام در مرحله اول نهضت ملی مسکن را در سامانه مربوطه به آدرس saman.mrud.ir انجام دهند.

محمود محمودزاده یادآور شد: تاکنون یک میلیون و ۲۶۰ هزار نفر در سامانه نهضت ملی مسکن ثبت‌نام کرده‌اند که در ۵۲۰ شهر تقاضای آنها ثبت شده است. در این ۵۲۰ شهر، زمین به اندازه کافی تأمین شده است. به مرور تعداد شهرهای مورد تقاضا افزایش خواهد یافت و امیدواریم همه متقاضیان دریافت مسکن تا یکی دو ماه آینده در شهرهای مورد دلخواه ثبت‌نام کنند.

گفتنی است  از روز ۲۸ مهرماه ثبت‌نام اجرای قانون جهش تولید مسکن در سامانه جامع طرح‌های حمایتی مسکن به نشانی saman.mrud.ir در ۳۱ استان آغاز شده که تا ۱۵ آذرماه ادامه دارد. متقاضیان پس از ورود بر روی گزینه «ثبت نام نهضت ملی مسکن» کلیک کنند. عدم استفاده از تسهیلات یارانه‌ای دولتی در بخش مسکن و سبز بودن فرم «ج»، فقدان مالکیت خصوصی، متاهل یا سرپرست خانوار بودن و سابقه حداقل پنج سال سکونت در شهر مورد تقاضا چهار شرط اصلی خواهد بود. درخصوص شرط تاهل، پنج گروه شامل خانم‌های بالای ۳۵ سال، افراد دارای معلولیت بالای ۲۰ سال، نخبگان علمی، مردان مجرد بالای ۴۵ سال و بیماران خاص، می‌توانند ثبت نام کنند. درباره نداشتن مالکیت نیز برخی گروه‌های درآمدی در بعضی مناطق بر اساس تشخیص وزارت راه و شهرسازی از این شرط معاف هستند." 
                                        avatar="https://i.pinimg.com/564x/a9/d6/05/a9d60534f8f7b6e7d960892db9b0f4ae.jpg"    
                                        username="alireza.m" 
                                        social={4}
                                        type={2}
                                        date={'13/32/1400'}
                                        others={9324793742}
                                        pos={1}
                                        closeplaces={["البرز" ,"دماوند" , "شهریار"]}
                                        image="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" title="عنوان پست"/>
                        <MapPostShowItem text=" به گزارش خبرآنلاین، معاون وزیر راه و شهرسازی با اعلام این خبر در گفت‌و گو با  یک برنامه رادیویی اعلام کرد: به دنبال افزایش تقاضای تمدید مهلت ثبت‌نام در سامانه نهضت ملی مسکن، نام‌نویسی در این طرح که تا پیش از این ۲۸ آبان به اتمام می‌رسید، تا ۱۵ آذر ماه تمدید شده است. متقاضیان می‌توانند بدون نگرانی ثبت‌نام در مرحله اول نهضت ملی مسکن را در سامانه مربوطه به آدرس saman.mrud.ir انجام دهند.

محمود محمودزاده یادآور شد: تاکنون یک میلیون و ۲۶۰ هزار نفر در سامانه نهضت ملی مسکن ثبت‌نام کرده‌اند که در ۵۲۰ شهر تقاضای آنها ثبت شده است. در این ۵۲۰ شهر، زمین به اندازه کافی تأمین شده است. به مرور تعداد شهرهای مورد تقاضا افزایش خواهد یافت و امیدواریم همه متقاضیان دریافت مسکن تا یکی دو ماه آینده در شهرهای مورد دلخواه ثبت‌نام کنند.

گفتنی است  از روز ۲۸ مهرماه ثبت‌نام اجرای قانون جهش تولید مسکن در سامانه جامع طرح‌های حمایتی مسکن به نشانی saman.mrud.ir در ۳۱ استان آغاز شده که تا ۱۵ آذرماه ادامه دارد. متقاضیان پس از ورود بر روی گزینه «ثبت نام نهضت ملی مسکن» کلیک کنند. عدم استفاده از تسهیلات یارانه‌ای دولتی در بخش مسکن و سبز بودن فرم «ج»، فقدان مالکیت خصوصی، متاهل یا سرپرست خانوار بودن و سابقه حداقل پنج سال سکونت در شهر مورد تقاضا چهار شرط اصلی خواهد بود. درخصوص شرط تاهل، پنج گروه شامل خانم‌های بالای ۳۵ سال، افراد دارای معلولیت بالای ۲۰ سال، نخبگان علمی، مردان مجرد بالای ۴۵ سال و بیماران خاص، می‌توانند ثبت نام کنند. درباره نداشتن مالکیت نیز برخی گروه‌های درآمدی در بعضی مناطق بر اساس تشخیص وزارت راه و شهرسازی از این شرط معاف هستند." 
                                        avatar="https://i.pinimg.com/564x/a9/d6/05/a9d60534f8f7b6e7d960892db9b0f4ae.jpg"    
                                        username="alireza.m" 
                                        social={5}
                                        type={1}
                                        date={'13/12/1399'}
                                        others={124352}
                                        pos={0}
                                        closeplaces={["البرز" ,"دماوند" , "شهریار"]}
                                        image="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" title="عنوان پست"/>
             
                        </div>  
            </ListItemMapPost>
            <ListItemMapPost index={1} sum="3208320" instagram="898023" twitter="732261" rss="897923" telegram="473873" title="مشهد"  rad/>
            <ListItemMapPost index={2} sum="2345384" instagram="1232" twitter="96842" rss="29831" telegram="7652" title="اصفهان"  rad/>
            <ListItemMapPost index={3} sum="998603" instagram="32718" twitter="12131" rss="96589" telegram="945893" title="تبریز"  rad/>
            <ListItemMapPost index={3} sum="998603" instagram="32718" twitter="12131" rss="96589" telegram="945893" title="تبریز"  rad/>
            <ListItemMapPost index={3} sum="998603" instagram="32718" twitter="12131" rss="96589" telegram="945893" title="تبریز"  rad/>
            <ListItemMapPost index={3} sum="998603" instagram="32718" twitter="12131" rss="96589" telegram="945893" title="تبریز"  rad/>
            <ListItemMapPost index={3} sum="998603" instagram="32718" twitter="12131" rss="96589" telegram="945893" title="تبریز"  rad/>
            <ListItemMapPost index={3} sum="998603" instagram="32718" twitter="12131" rss="96589" telegram="945893" title="تبریز"  rad/>
        </div>
    )
}

export default MapPostFeed

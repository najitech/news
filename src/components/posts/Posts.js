import React ,{useState , useEffect} from 'react';
import axios from 'axios';  
import './Posts.css';
import Post from './Post/Post';
function Posts() {
    /*const [data , setData] = useState([]);
    useEffect(()=>{
        axios.get("url").then((res)=>{
            const respond = res.news;
            this.setData(respond);
        }).catch((error)=>{
            console.log(error);
        });
    } , []);*/
    return (
        <div className="posts">
            {/*data.map((data)=>{
                <Post image={data.image} 
                    link={data.link}
                    titel={data.title}
                    news_text={data.news_text}
                    publish_date={data.publish_date}/>
            })*/}
           {/*<Post image={"https://www.shia-news.com/client/themes/fa/main/img/favicon.ico"} 
                    link={"https://www.shia-news.com/fa/news/260105/هشدار-انتقال-فعالیت‌های-تروریستی-از-افغانستان-به-آسیای-مرکزی"}
                    titel={"هشدار انتقال فعالیت‌های تروریستی از افغانستان به آسیای مرکزی"}
                    news_text="به گزارش «شیعه نیوز»، رئیس مرکز مبارزه با تروریسم کشورهای مستقل مشترک المنافع در مورد خطر انتقال فعالیت‌های تروریستی از افغانستان به کشورهای همسود به ویژه آسیای مرکزی هشدار داد.\n\n«آندره نوویکوف» رئیس مرکز مبارزه با تروریسم کشورهای مستقل مشترک المنافع در مورد خطر انتقال فعالیت‌های تروریستی از افغانستان به آسیای مرکزی گفت: این امر در صورتی امکان پذیر است که سایر گروه‌های تروریستی فعال در افغانستان از طالبان که به قدرت رسیدند، اطاعت نکنند.\n\nوی ادامه داد: علاوه بر طالبان که هنوز در لیست سازمان‌های تروریستی بین المللی است، گروه‌های تروریستی دیگری در افغانستان فعالیت می‌کنند که البته بعید است از طالبان یا قطعنامه‌های ساختارهای بین المللی اطاعت کنند.\n\nبه اعتقاد نوویکوف، این احتمال وجود دارد که در افغانستان، ستیزه جویان چنین سازمان‌هایی اهداف سیاسی خود را در کشورهای همسایه از جمله در کشورهای مستقل مشترک المنافع دنبال کنند.\n\nرئیس این مرکز پژوهشی گفت: از این نظر، ما نه تنها نگران فعالیت‌های تروریستی در خود افغانستان هستیم، بلکه خطر انتقال آن به قلمرو کشورهای مشترک المنافع، به ویژه کشورهای آسیای مرکزی را نگران کننده می‌دانیم.\n\nبه گفته وی، وضعیت افغانستان به ویژه برای کشورهای همسایه مانند تاجیکستان، ازبکستان، ترکمنستان قابل توجه است. در چنین شرایطی، همانطور که گزارش شد، واحدهای ضدتروریستی سرویس‌های ویژه و آژانس‌های امنیتی کشورهای مشترک المنافع از قبل ساختار خود را بازسازی کرده و از حالت زمان صلح به حالت هشدار در بالاترین سطح تبدیل شده‌اند و هر لحظه آماده برای دفاع هستند.\n\nنوویکوف افزود: پیش از هر نکته‌ای، باید هوشیار عملیات برای شناسایی تروریست‌های زیرزمینی و سرکوب طرح‌های پشتیبانی مادی آنها باشیم به عبارت دیگر باید منابع تغذیه مالی تروریست‌ها را شناسایی و سرکوب کنیم.\n\nوی در پایان گفت: سرویس‌های اطلاعاتی کشورهای مستقل مشترک المنافع نیز مرزهای خود را تقویت کرده و با قاچاق مبارزه می‌کنند تا از ورود تسلیحات از افغانستان در خاک خود جلوگیری کنند.\n\nانتهای پیام"
                    publish_date={"05 Sep 2021 11:00:01 +0430"}/>*/}
                <div className="test">
                </div>
                <div className="test">
                </div>
                <div className="test">
                </div>
                <div className="test">
                </div>
                <div className="test">
                </div>
                <div className="test">
                </div>
                
        </div>
    )
}   

export default Posts

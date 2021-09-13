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
        <div>
            {/*data.map((data)=>{
                <Post image={data.image} 
                    link={data.link}
                    titel={data.title}
                    news_text={data.news_text}
                    publish_date={data.publish_date}/>
            })*/}
            <Post image={"https://img9.irna.ir/d/r2/2021/09/08/4/169049562.jpg"} 
                    link={"https://www.shia-news.com/fa/news/260105/هشدار-انتقال-فعالیت‌های-تروریستی-از-افغانستان-به-آسیای-مرکزی"}
                    titel={"هشدار انتقال فعالیت‌های تروریستی از افغانستان به آسیای مرکزی"}
                    news_text= {"رئیس مرکز مبارزه با تروریسم کشورهای مستقل مشترک المنافع در مورد خطر انتقال فعالیت‌های تروریستی از افغانستان به کشورهای همسود به ویژه آسیای مرکزی هشدار داد..."}
                    publish_date={"05 Sep 2021 11:00:01 +0430"}/>
        </div>
    )
}   

export default Posts

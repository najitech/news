import React ,{useState , useEffect} from 'react';
import axios from 'axios';  
import './Posts.css';
import Post from './Post/Post';
function Posts() {
    const [data , setData] = useState([]);
    useEffect(()=>{
        axios.get("url").then((res)=>{
            const respond = res.news;
            this.setData(respond);
        }).catch((error)=>{
            console.log(error);
        });
    } , []);
    return (
        <div>
            {data.map((data)=>{
                <Post image={data.image} 
                    link={data.link}
                    titel={data.title}
                    news_text={data.news_text}
                    publish_date={data.publish_date}/>
            })}
        </div>
    )
}   

export default Posts

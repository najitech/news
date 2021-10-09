import { Button, Zoom } from '@material-ui/core';
import React , {useEffect , useState} from 'react';
import { BsSearch } from 'react-icons/bs';
import Search from '../../Rss/Search/Search';
import './ProSearch.css';
import Grow from '@material-ui/core/Grow';
import SearchTypeTw from './SearchTypeTw/SearchTypeTw';
function ProSearch(props) {
    const handleChange = (e)=>{
        props.setSearchInput(e.target.value);
    }
    const [animate , setAnimate] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            setAnimate(true);
        } ,1000)
       
    } , [])
    return (
        <div className="proSearch">
            <div className="imageContainerPS">    
                <img height="100%" src="https://rcciworld.com/picture/bg.jpg" alt=""/>
                <div className="imagestyle">
                    <Grow in={true}
                    {...(true ? { timeout: 700 } : {})}>    
                        <h1>جستجوی پیشرفته</h1>
                    </Grow>
                    <Grow in={true}
                          style={{transitionDelay:'200ms',}}
                          {...(true ? { timeout: 1000 } : {})}>      
                        <div className="toggleContainerSelect">
                            <SearchTypeTw/>
                        </div>  
                    </Grow>
                    <Grow
                    in={true}
                    style={{ transformOrigin: '0 100 0',
                    transitionDelay:'700ms'}}
                    {...(true ? { timeout: 1700 } : {})}
                    >
                    <div className="proSearchInput" style={{}}>
                        <input placeholder="جستجو" value={props.value} onChange={handleChange}/>
                        <Button onClick={()=>{props.setSubmit(true)}} className="searchButtonPs">
                            <BsSearch/>
                        </Button>
                    </div>
                    </Grow>
                </div>
            </div>
            <div className="footerTW">
                <div>
                    <h5>About</h5>
                    <p >این یک متن آزمایشی برای فوتر سایت است بخش درباره ما در این قسمت قرار میگیرد</p>
                </div>
                <div>
                    <h5>بخش ها</h5>
                    <ul>
                        <li>توییتر</li>
                        <li>خبر خوان</li>
                        <li>ب</li>
                    </ul>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default ProSearch

import { Button } from '@material-ui/core';
import React , {useEffect , useState} from 'react';
import { BsSearch } from 'react-icons/bs';
import Search from '../../Rss/Search/Search';
import './ProSearch.css';
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
                <img width="100%" height="auto" src="https://rcciworld.com/picture/bg.jpg" alt=""/>
                <div className="imagestyle">
                    <h1>جستجوی پیشرفته</h1>
                    <div className="toggleContainerSelect">
                        <SearchTypeTw/>
                    </div>  
                    <div className="proSearchInput" style={{}}>
                        <input placeholder="جستجو" value={props.value} onChange={handleChange}/>
                        <Button onClick={()=>{props.setSubmit(true)}} className="searchButtonPs">
                            <BsSearch/>
                        </Button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ProSearch

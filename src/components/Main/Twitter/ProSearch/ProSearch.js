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
                    <Grow in={true}>    
                        <h1>جستجوی پیشرفته</h1>
                    </Grow>
                    <Zoom in={true}
                          style={{transitionDelay:'200ms',}}>      
                        <div className="toggleContainerSelect">
                            <SearchTypeTw/>
                        </div>  
                    </Zoom>
                    <Grow
                    in={true}
                    style={{ transformOrigin: '0 100 0',
                    transitionDelay:'500ms'}}
                    {...(true ? { timeout: 1000 } : {})}
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
            <div className="footer">

            </div>
        </div>
    )
}

export default ProSearch

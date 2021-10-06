import { Button } from '@material-ui/core';
import React from 'react';
import { BsSearch } from 'react-icons/bs';
import Search from '../../Rss/Search/Search';
import './ProSearch.css';
function ProSearch(props) {
    const handleChange = (e)=>{
        props.setSearchInput(e.target.value);
    }
    return (
        <div className="proSearch">
            <div className="imageContainerPS">    
                <img width="100%" height="auto" src="https://rcciworld.com/picture/bg.jpg" alt=""/>
                <div className="imagestyle">
                    <h1>جستجوی پیشرفته</h1>
                    <div className="proSearchInput">
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

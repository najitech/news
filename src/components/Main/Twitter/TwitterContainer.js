import React , {useState} from 'react';
import ProSearch from './ProSearch/ProSearch';
import './TwitterContainer.css';
import TwitterResult from './TwitterResult/TwitterResult';
function TwitterContainer() {
    const [searchInput , setSearchInput] = useState("");
    const [searchType , setSearchType] = useState("");
    const [submitted , setSubmitted] = useState(false);
    console.log(searchInput);
    return (
        <div className="twitterContianer">
           {!submitted ? <ProSearch value={searchInput} setSearchInput={setSearchInput} setSubmit={setSubmitted}/> : <TwitterResult/> }
        </div>
    )
}

export default TwitterContainer

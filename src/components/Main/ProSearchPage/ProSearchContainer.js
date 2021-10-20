import React , {useState} from 'react';
import ProSearch from './ProSearch/ProSearch';
import './ProSearchContainer.css';
function ProSearchContainer() {
    const [searchInput , setSearchInput] = useState("");
    const [searchType , setSearchType] = useState("");
    const [submitted , setSubmitted] = useState(false);
    return (
        <div className="twitterContianer">
           {<ProSearch value={searchInput} setSearchInput={setSearchInput} setSubmit={setSubmitted}/>}
        </div>
    )
}

export default ProSearchContainer;

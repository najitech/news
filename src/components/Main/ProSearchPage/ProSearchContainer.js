import React , {useState} from 'react';
import ProSearch from './ProSearch/ProSearch';
import './ProSearchContainer.css';
import ProSearchResult from './ProSearchResult/ProSearchResult';
function ProSearchContainer() {
    const [searchInput , setSearchInput] = useState("");
    const [searchType , setSearchType] = useState("");
    const [submitted , setSubmitted] = useState(false);
    return (
        <div className="ProSearchContianer">
           {/*<ProSearch value={searchInput} setSearchInput={setSearchInput} setSubmit={setSubmitted}/>*/}
           <ProSearchResult/>
        </div>
    )
}

export default ProSearchContainer;

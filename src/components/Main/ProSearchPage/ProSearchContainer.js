import React , {useState} from 'react';
import ProSearch from './ProSearch/ProSearch';
import './ProSearchContainer.css';
import ProSearchResult from './ProSearchResult/ProSearchResult';
function ProSearchContainer() {
    const [submitted , setSubmitted] = useState(false);
    return (
        <div className="ProSearchContianer">
           {/*!submitted ? <ProSearch setSubmit={setSubmitted}/> : <ProSearchResult/>*/}
           <ProSearchResult/>
        </div>
    )
}

export default ProSearchContainer;

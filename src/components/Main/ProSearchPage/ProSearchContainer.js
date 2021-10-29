import React , {useState} from 'react';
import ProSearch from './ProSearch/ProSearch';
import './ProSearchContainer.css';
function ProSearchContainer() {
    const [submitted , setSubmitted] = useState(false);
    return (
        <div className="twitterContianer">
           {!submitted ? <ProSearch setSubmit={setSubmitted}/> : <div/>}
        </div>
    )
}

export default ProSearchContainer;

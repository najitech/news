import React , {useState,useContext} from 'react';
import ProSearch from './ProSearch/ProSearch';
import './ProSearchContainer.css';
import ProSearchResult from './ProSearchResult/ProSearchResult';
import ThemeColorContext from '../../../UI/ThemeColorContext';
function ProSearchContainer() {
    const [submitted , setSubmitted] = useState(false);
    const [theme , setTheme] = useState ("lightTheme")
    const handleclick = () => {
        if(theme ==="lightTheme") {
            setTheme("darkTheme")
        }
        else {
            setTheme("lightTheme")
        }
    }
    return (

        <div className={["ProSearchContianer",theme].join(" ")}>
           {/*!submitted ? <ProSearch setSubmit={setSubmitted}/> : <ProSearchResult/>*/}
           <button onClick={handleclick}>click me! </button>
           <ThemeColorContext.Provider value={theme}>
             <ProSearchResult theme={theme}/>
            </ThemeColorContext.Provider>
        </div>

    )
}

export default ProSearchContainer;

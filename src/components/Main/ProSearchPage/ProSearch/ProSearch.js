import { Button, Collapse, IconButton, Zoom } from '@material-ui/core';
import React , {useEffect , useState} from 'react';
import { BsSearch } from 'react-icons/bs';
import Search from '../../Rss/Search/Search';
import './ProSearch.css';
import Grow from '@material-ui/core/Grow';
import SearchTypeTw from './SearchTypeTw/SearchTypeTw';
import SocialMediaSearchType from './SocialMediaType/SocialMediaSearchType';
import AdvancedPS from './advancedPS/AdvancedPS';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import TypeListPS from './TypeListPS/TypeListPS';
import '../../../../UI/Styles.css' 
import { BiSearchAlt } from 'react-icons/bi';
import {GoSettings} from 'react-icons/go'
function ProSearch(props) {
    const [typeInput , setTypeInput] = useState("");
    const [animate , setAnimate] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            setAnimate(true);
        } ,1000)
       
    } , []);
    const [social , setSocial] = useState(1);
    const [typeTw , setTypeTw] = useState(4);
    const [toggleAdvanced , setToggleAdvanced] = useState(false);
    const [instagram , setInstagram] = useState({
        text : [],
        keywoard: [],
        hashtags : [],
        username : [],
        logic : "any",
        advanced : {
            date : null,
            picture : null,
            likes : null,
            views : null,
        }
    });
    const [twitter , setTwitter] = useState({
        text : [],
        keywoard: [],
        hashtags : [],
        username : [],
        logic : "any",
        advanced : {
            date : null,
            picture : null,
            likes : null,
            views : null,
        }
    });
    const [rss , setRss] = useState({
        text : [],
        keywoard: [],
        hashtags : [],
        logic : "any",
        advanced : {
            date : null,
            picture : null,
            views : null,
        }
    });
    const [telegram , setTelegram] = useState({
        text : [],
        keywoard: [],
        hashtags : [],
        username : [],
        logic : "any",
        advanced : {
            date : null,
            picture : null,
            likes : null,
            views : null,
            type : null, //chanell or group
        }
    });
    const handleLogic = (e)=>{
        if(social === 1){setInstagram((prev)=>{return {...prev  ,logic : e}})}
        if(social === 2){setTwitter((prev)=>{return {...prev  , logic : e}})}
        if(social === 3){setRss((prev)=>{return {...prev  , logic : e}})}
        if(social === 4){setTelegram((prev)=>{return {...prev  ,logic : e}})}
    }
    const handleTypeInput = (e)=>{
        setTypeInput(e.target.value);
    }
    const handleInputTypeSubmit = ()=>{
        if(typeInput === "")
        {
            return;
        }
        setTypeInput("");
        switch (social) {
            case 1: //instagram 
                if(typeTw === 1) {setInstagram((prev)=>{ return {...prev , keywoard : [...prev.keywoard , typeInput]}})};
                if(typeTw === 2) {setInstagram({...instagram , hashtags : [...instagram.hashtags , typeInput]})};
                if(typeTw === 3) {setInstagram({...instagram , username : [...instagram.username , typeInput]})};
                if(typeTw === 4) {setInstagram({...instagram , text : [...instagram.text , typeInput]})};
                break;
            case 2://twitter 
                if(typeTw === 1) {setTwitter({...twitter , keywoard : [...twitter.keywoard , typeInput]})};
                if(typeTw === 2) {setTwitter({...twitter , hashtags : [...twitter.hashtags , typeInput]})};
                if(typeTw === 3) {setTwitter({...twitter , username : [...twitter.username , typeInput]})};
                if(typeTw === 4) {setTwitter({...twitter , text : [...twitter.text , typeInput]})};
                break;
            case 3://Rss
                if(typeTw === 1) {setRss({...rss , keywoard : [...rss.keywoard , typeInput]})};
                if(typeTw === 2) {setRss({...rss , hashtags : [...rss.hashtags , typeInput]})};
                if(typeTw === 4) {setRss({...rss , text : [...rss.text , typeInput]})};
                break;
            case 4 : //telegram 
                if(typeTw === 1) {setTelegram({...telegram , keywoard : [...telegram.keywoard , typeInput]})};
                if(typeTw === 2) {setTelegram({...telegram , hashtags : [...telegram.hashtags , typeInput]})};
                if(typeTw === 3) {setTelegram({...telegram , username : [...telegram.username , typeInput]})};
                if(typeTw === 4) {setTelegram({...telegram , text : [...telegram.text , typeInput]})};
                break;
            default:
                break;
        }
    }
    const handleSocial = (e)=>{
        setSocial(e);
    }
    const handleDeleteChip = (data)=>{
        switch (social) {
            case 1: //instagram 
                if(typeTw === 1) {setInstagram((prev)=>{return {...prev , keywoard:prev.keywoard.filter(item=>(item !== data))}})};
                if(typeTw === 2) {setInstagram((prev)=>{return {...prev , hashtags:prev.hashtags.filter(item=>(item !== data))}})};
                if(typeTw === 3) {setInstagram((prev)=>{return {...prev , username:prev.username.filter(item=>(item !== data))}})};
                if(typeTw === 4) {setInstagram((prev)=>{return {...prev , text:prev.text.filter(item=>(item !== data))}})};
                break;
                case 3://Rss 
                if(typeTw === 1) {setRss((prev)=>{return {...prev , keywoard:prev.keywoard.filter(item=>(item !== data))}})};
                if(typeTw === 2) {setRss((prev)=>{return {...prev , hashtags:prev.hashtags.filter(item=>(item !== data))}})};
                if(typeTw === 4) {setRss((prev)=>{return {...prev , text:prev.text.filter(item=>(item !== data))}})};
                break;
                case 2://Twitter
                if(typeTw === 1) {setTwitter((prev)=>{return {...prev , keywoard:prev.keywoard.filter(item=>(item !== data))}})};
                if(typeTw === 2) {setTwitter((prev)=>{return {...prev , hashtags:prev.hashtags.filter(item=>(item !== data))}})};
                if(typeTw === 3) {setTwitter((prev)=>{return {...prev , username:prev.username.filter(item=>(item !== data))}})};
                if(typeTw === 4) {setTwitter((prev)=>{return {...prev , text:prev.text.filter(item=>(item !== data))}})};
                break;
            case 4 : //telegram        
                if(typeTw === 1) {setTelegram((prev)=>{return {...prev , keywoard:prev.keywoard.filter(item=>(item !== data))}})};
                if(typeTw === 2) {setTelegram((prev)=>{return {...prev , hashtags:prev.hashtags.filter(item=>(item !== data))}})};
                if(typeTw === 3) {setTelegram((prev)=>{return {...prev , username:prev.username.filter(item=>(item !== data))}})};
                if(typeTw === 4) {setTelegram((prev)=>{return {...prev , text:prev.text.filter(item=>(item !== data))}})};
                break;
            default:
                break;
        }
    }
    let chooseListChip;
    let disabled =false;
    switch (social) {
        case 1: //instagram 
            if(typeTw === 1) {chooseListChip = instagram.keywoard};
            if(typeTw === 2) {chooseListChip = instagram.hashtags};
            if(typeTw === 3) {chooseListChip = instagram.username};
            if(typeTw === 4) {chooseListChip = instagram.text
                                if(instagram.text.length === 1) {disabled =true;}};
            break;
            case 2://twitter 
            if(typeTw === 1) {chooseListChip = twitter.keywoard};
            if(typeTw === 2) {chooseListChip = twitter.hashtags};
            if(typeTw === 3) {chooseListChip = twitter.username};
            if(typeTw === 4) {chooseListChip = twitter.text
                if(twitter.text.length === 1) {disabled =true;}};
            break;
        case 3://Rss
            if(typeTw === 1) {chooseListChip = rss.keywoard};
            if(typeTw === 2) {chooseListChip = rss.hashtags};
            if(typeTw === 4) {chooseListChip = rss.text
                if(rss.text.length === 1) {disabled =true;}};
            break;
        case 4 : //telegram 
            if(typeTw === 1) {chooseListChip = telegram.keywoard};
            if(typeTw === 2) {chooseListChip = telegram.hashtags};
            if(typeTw === 3) {chooseListChip = telegram.username};
            if(typeTw === 4) {chooseListChip = telegram.text
                if(telegram.text.length === 1) {disabled =true;}};
            break;
        default:
            break;
    }
    return (
        <div className="proSearch noselect">
            <div className="imageContainerPS">    
                <img height="100%" src="https://rcciworld.com/picture/bg.jpg" alt=""/>
                <div className="imagestyle">
                    <Grow in={true}
                    {...(true ? { timeout: 700 } : {})}>    
                        <h1>جستجوی در مرکز داده</h1>
                    </Grow>
                        
                    <Grow in={true}
                          style={{transitionDelay:'200ms',}}
                          {...(true ? { timeout: 1000 } : {})}>      
                        <div className="toggleContainerSelect">
                            <SocialMediaSearchType handleSocial={handleSocial} social={social}/>
                        </div>  
                    </Grow>

                    <div className="">
                            <SearchTypeTw typeTw={typeTw} setTypeTw={setTypeTw} social={social}/>
                    </div>  
                    <Grow
                    in={true}
                    style={{ transformOrigin: '0 100 0',
                    transitionDelay:'700ms'}}
                    {...(true ? { timeout: 1700 } : {})}
                    >
                    <div className="proSearchInput">
                        <TypeListPS handleDelete={handleDeleteChip} chipData={chooseListChip}/>
                        <input disabled={disabled || chooseListChip.length===3} placeholder="افزودن" value={typeInput} onChange={handleTypeInput}/>
                        <Button disabled={ disabled || chooseListChip.length===3} onClick={handleInputTypeSubmit} className="searchButtonPs">
                            <AiOutlinePlus/>
                        </Button>
                    </div>
                    </Grow>
                    <Grow in={!toggleAdvanced} {...(!toggleAdvanced ?  { timeout: 1000 }: {})}  style={{ marginBottom : toggleAdvanced?"-60px" :""}}>
                     <div >
                        <Button onClick={()=>{setToggleAdvanced(true)}} className="advancedSearchOpenBtn">
                            <span>جستجوی پیشرفته</span>
                            <GoSettings/>
                        </Button>
                    </div> 
                    </Grow>
                    <Collapse {...( { timeout: 1000 })} in={toggleAdvanced}><div className="advancedProSearchDiv">
                        <div className="closeAdvancedSearch">
                            <IconButton onClick={()=>{setToggleAdvanced(false)}}  className="closeBtnADv" size="small"><AiOutlineClose/></IconButton>
                        </div>
                        <AdvancedPS
                            logic={social===1? instagram.logic : social ===2 ? twitter.logic : social ===3 ? rss.logic : telegram.logic}
                            setLogic={handleLogic}
                            social={social}
                            handleAddRule={social===1? setInstagram : social ===2 ? setTwitter : social ===3 ? setRss : setTelegram}
                            data={social===1? instagram : social ===2 ? twitter : social ===3 ? rss : telegram}
                            />
                    </div>   </Collapse>
                    
                      
                    <div>
                    <Button className="searchBtnPS">
                        <span>جستجو</span>
                        <BiSearchAlt/>
                    </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProSearch

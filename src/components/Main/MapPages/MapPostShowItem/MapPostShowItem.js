import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import './MapPostShowItem.css'
import Tag from '../../../../UI/Tag';
import { AiFillCalendar, AiFillNotification, AiOutlineScan, AiOutlineTwitter } from 'react-icons/ai';
import { BsCalendar, BsFillReplyAllFill, BsFillRssFill, BsSignpostFill, BsTelegram, BsTextLeft } from 'react-icons/bs';
import { IoKeyOutline, IoKeySharp, IoNewspaperOutline } from 'react-icons/io5';
import { BiCategoryAlt } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import { FiMoreHorizontal } from 'react-icons/fi';
import { GiTrumpet } from 'react-icons/gi';
import { FaRetweet } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';
function nFormatter(num) {
    if (num >= 1000000000) {
       return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (num >= 1000000) {
       return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
       return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
}
function MapPostShowItem(props) {
    let textForc;
    if(props.social === 2 )
    {
        textForc = 'retweet';
    }else{
        textForc = 'گروه'
    }
    let texforpost;
    if(props.social === 4)
    {
        texforpost = "کانال";
    }else{
        texforpost ="پست";
    }
    return (
        <div className={["mapPostItemMapBox",props.social===1? "shaypoorThemePostMapList":props.social===2? "twitterThemePostMapList": props.social===3? "rssThemePostMapList":props.social===4? "telegramThemePostMapList":"newsPaperThemePostMapList"].join(" ")}>
            <div className="postHeaderItemMap">
                <div className="rightsideItemMapBox">
                    <div className="profilePostItemMap">
                        <div className="avatarPostItemMap"><Avatar className="avatarPostItemMapCom" src={props.image} alt={props.alt}/></div>
                        <div className="infPostItemMap"><h5>{props.title}</h5><p>{props.text}</p></div>
                    </div>
                    <div className="typeSocialPostItemMap">
                        {props.social===1 ? <div className="socialMediaPostItem"><GiTrumpet style={{fontSize:'13px',marginLeft:'3px'}}/>شیپور</div>:props.social ===2 ?
                         <div className="socialMediaPostItem"><AiOutlineTwitter style={{fontSize:'13px',marginLeft:'3px'}}/>توییتر</div>:props.social === 3 ? 
                         <div className="socialMediaPostItem"><BsFillRssFill style={{fontSize:'13px',marginLeft:'3px'}}/>خبرخوان</div>:props.social ===4 ? 
                         <div className="socialMediaPostItem"><BsTelegram style={{fontSize:'13px',marginLeft:'3px'}}/>تلگرام</div> : 
                         <div className="socialMediaPostItem"><IoNewspaperOutline style={{fontSize:'13px',marginLeft:'3px'}}/>روزنامه</div>}
                        {props.type===1 ?<div className="socialMediaPostItem">{props.social !== 4 ? <BsSignpostFill style={{fontSize:'13px',marginLeft:'3px'}}/>:<AiFillNotification style={{fontSize:'13px',marginLeft:'3px'}}/>}{texforpost}</div>:props.type ===2? 
                        <div className="socialMediaPostItem">{props.social===2 ?<FaRetweet style={{fontSize:'13px',marginLeft:'3px'}}/>:props.social ===4 ? <MdGroups style={{fontSize:'13px',marginLeft:'3px'}}/> : <BsSignpostFill style={{fontSize:'13px',marginLeft:'3px'}}/>}{textForc}</div> : ''}
                        {props.pos===1 ? <div className="type2SocialPostItem"><BsTextLeft style={{fontSize:'13px',marginLeft:'3px'}}/>مثبت</div> :props.pos === 0 ?<div className="type2SocialPostItemnag"><BsTextLeft style={{fontSize:'13px',marginLeft:'3px'}}/>منفی</div> :''}
                    </div>
                </div>
                <div className="indexOfwordsItemBoxMap">
                    <div><IoKeySharp style={{fontSize:'13px',marginLeft:'1px'}}/><span>کلمات کلیدی</span></div>
                    <div><AiOutlineScan style={{fontSize:'13px',marginLeft:'1px'}}/><span>موجودیت ها</span></div>
                    <div><BiCategoryAlt style={{fontSize:'13px',marginLeft:'1px'}}/><span>موضوعات</span></div>
                </div>
                <div className="wordsBoxMapBoxItem">
                    <div className="keywoardsPostItemMap">
                        <Tag width="" backGroundColor="#3e4eb62c" color="#3E4FB6" text="مشهد"/><Tag width="" backGroundColor="#3e4eb62c" color="#3E4FB6" text="قم"/><Tag width="" backGroundColor="#3e4eb62c" color="#3E4FB6" text="بندرانزلی"/><Tag width="" backGroundColor="#3e4eb62c" color="#3E4FB6" text="تربت حیدریه"/>
                        <Tag width="" backGroundColor="#3e4eb62c" color="#3E4FB6" text="تبریز"/>
                    </div>
                    <div className="nerPostItemMap"><Tag backGroundColor="#e71f622f" color="#E71F62" text="برنامه"/><Tag backGroundColor="#e71f622f" color="#E71F62" text="رادیو"/><Tag backGroundColor="#e71f622f" color="#E71F62" text="خبر"/><Tag backGroundColor="#e71f622f" color="#E71F62" text="نقشه"/></div>
                    <div className="catPostItemMap"><Tag   backGroundColor="#4a657f2a" color="#4A657F" text="سیاسی"/><Tag backGroundColor="#4a657f2a" color="#4A657F" text="اجتماعی"/><Tag  backGroundColor="#4a657f2a" color="#4A657F" text="اقتصادی"/><Tag  backGroundColor="#4a657f2a" color="#4A657F" text="موضوع  علمی"/><Tag  backGroundColor="#4a657f2a" color="#4A657F" text="ورزشی"/></div>
                </div>
                <div className="otherandnumberItemMapBox">
                    <div style={{textAlign:'center'}}><span style={{fontSize:'10px',paddingRight:'3px' , color:'grey'}}><GoLocation/>مکان های اطراف</span></div>
                    <div  className="otherLocationsItemMapBox">{props.closeplaces.map((item,index)=>{
                        return <div className={`otherlocationdiv${index+1}`}>{item[0]}</div>
                    })}</div>
                    <div><h5>{nFormatter(parseInt(props.others))}</h5></div>
                </div>
                <div className="posterItemMapBox">
                    <div className="posterAvatarcontainer"><Avatar className="posterAvatarItemMapBox" src={props.avatar} alt={props.alt}/></div>
                    <div className="dataAndUserInfMapBox"><h5>{props.username}</h5><span>{props.date}<AiFillCalendar style={{fontSize:'14px'}}/></span></div>
                    {/*<div><IconButton className="moreIconPosterItemMapBox"><FiMoreHorizontal/></IconButton></div>*/}
                </div>
            </div>
            
        </div>
    )
}

export default MapPostShowItem

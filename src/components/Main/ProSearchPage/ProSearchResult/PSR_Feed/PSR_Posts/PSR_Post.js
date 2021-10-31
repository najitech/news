import React from 'react'
import './PSR_Post.css'
import {MdOutlineEditCalendar} from 'react-icons/md'
import {BsFillPersonFill, BsPlusCircle} from 'react-icons/bs'
import {FcLike} from 'react-icons/fc'
import {FaBullhorn, FaRegComment, FaTelegramPlane} from 'react-icons/fa'
import {GrPowerCycle} from 'react-icons/gr'
import {BiRecycle, BiRss} from 'react-icons/bi'
import PSR_PostSubjects from './PSR_PostSubjects'
import PSR_PostKeys from './PSR_PostKeys'
import Hashtag2 from '../../../../../../UI/Hashtag2'
import { AiFillInstagram, AiFillPlusCircle, AiFillTwitterCircle } from 'react-icons/ai'
import { HiUserGroup } from 'react-icons/hi'
import ModalPS from '../../../../../../UI/ModalPS'
import colors from 'react-multi-date-picker/plugins/colors'

function PSR_Post(props) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
      };

    const handleClose = () => {
        console.log('called')
        setOpen(false);
      };
    return (
        <div>
<ModalPS open={open} setOpen={setOpen} image={"https://i.insider.com/5d91fdb36f24eb3da40c3e29?width=750&format=jpeg&auto=webp"} positiveness={10} title={"عنوان آزمایشی"} text={"گاهی وارد طبیعت شو و بگذار که نسیمی خنک و زیبا چهره ات را نوازش کند. اگر کمی با خود بیندیشی، می بینی که تمام زیبایی های زندگی در همین است. عده ای همواره به دنبال ثروت هستند، عده ای به دنبال جای و مقام هستند و عده ای هم کامل از همه چیز بریده اند و دیگر امیدی به زندگی ندارند. آنها زیبایی های زندگی را فراموش کرده اند. همینکه گاهی اوقات وارد طبیعت شوی و از زیبایی های آن لذت ببری، خود یک نعمت بزرگ است. همینکه بگذاری آن نسیم خنک صورتت را نوازش کند، خود یک ثروت بزرگ است. ثروت ها همین ها هستند که گاهی نادیده گرفته می شون"} publish_date={"14/06/1400"} handleClose={handleClose} PostProps={props} />
     
        <div className="PSR_Post" onClick={handleOpen}>
            
            <div className="PSR_PostImageContainer">
                <img className="PSR_PostImage" src="https://i.insider.com/5d91fdb36f24eb3da40c3e29?width=750&format=jpeg&auto=webp"/>
                <div className="PSR_PostImageIcon">
                {
                    props.type==="telegram" ?
                    <FaTelegramPlane className="PSR_PostImage_telegramIcon"/> :
                    props.type==="instagram" ?
                    <AiFillInstagram className="PSR_PostImage_instgramIcon"/> :
                    props.type==="twitter" ? 
                    <AiFillTwitterCircle className="PSR_PostImage_twitterIcon"/> :
                    props.type==="rss" ?
                    <BiRss className="PSR_PostImage_rssIcon"/> :
                    null
                }
                </div>
            </div>
            <div className="PSR_SocialHeader">
                <div className="PSR_PostAuthor">
                    <BsFillPersonFill className="PSR_PostAuthorIcon"/>
                    <span>ehsan.ah</span>
                </div>

                <div className="PSR_PostDate">
                    <span>14/06/1400</span>
                    <MdOutlineEditCalendar className="PSR_PostDateIcon"/>
                </div>
            </div>
            {
                props.type==="rss"?
                <div className="PSR_rsstitle">
                    <p>این عنوان خبر است</p>
                </div>
                :
                props.type==="twitter"?
                <div className="PSR_rsstitle">
                    <p>این عنوان توییت است</p>
                </div>
                :
                props.type==="telegram"?
                <div className="PSR_rsstitle">
                    <p>این عنوان پست است</p>
                </div>
                :
                <>
                </>

            }
            <div className="PSR_PostBody">
                <div className={props.type==="instagram" ?"PSR_InstagramBody" : "PSR_rssBody"}>
                    <p>گاهی وارد طبیعت شو و بگذار که نسیمی خنک و زیبا چهره ات را نوازش کند. اگر کمی با خود بیندیشی، می بینی که تمام زیبایی های زندگی در همین است. عده ای همواره به دنبال ثروت هستند، عده ای به دنبال جای و مقام هستند و عده ای هم کامل از همه چیز بریده اند و دیگر امیدی به زندگی ندارند. آنها زیبایی های زندگی را فراموش کرده اند. همینکه گاهی اوقات وارد طبیعت شوی و از زیبایی های آن لذت ببری، خود یک نعمت بزرگ است. همینکه بگذاری آن نسیم خنک صورتت را نوازش کند، خود یک ثروت بزرگ است. ثروت ها همین ها هستند که گاهی نادیده گرفته می شوند</p>
                </div>
            </div>
            <PSR_PostSubjects/>

            <div className="PSR_PostGrid_HashtagsContainer">
                <div className="PSR_PostHashtags">
                    <p className="PSR_Post_Hashtags_title"> کلمات کلیدی : </p>
                    <PSR_PostKeys/>
                </div>
            </div>
            <div className="PSR_Hashtags2">
                <Hashtag2  backGroundColor="none"/>
                <Hashtag2  backGroundColor="none" />
                <Hashtag2  backGroundColor="none" />
                <Hashtag2  backGroundColor="none" />
                <Hashtag2 backGroundColor="none" className="PSR_Hashtag2_lastchild"/>
            </div>

            <div className="PSR_PostFooter">
                {
                    props.type==="instagram" ?
                    <div className="PSR_InstagramFooter">
                        <div className="PSR_InstagramLikes">
                            <FcLike className="PSR_InstagramLikeIcon"/>
                            <span>14690</span>
                        </div>
                        <div className="PSR_InstagramComments">
                            <FaRegComment className="PSR_InstagramCommentIcon"/>
                            <span>1540</span>
                        </div>
                    </div>
                    :
                    props.type==="twitter" ?
                    <div className="PSR_TwitterFooter">
                        <div className="PSR_TwitterLikes">
                        <FcLike className="PSR_TwitterLikeIcon"/>
                        <span>14690</span>
                        </div>
                        <div className="PSR_TwitterComments">
                            <FaRegComment className="PSR_TwitterCommentIcon"/>
                            <span>1540</span>
                        </div>
                        <div className="PSR_TwitterRetweet">
                            <BiRecycle className="PSR_TwitterRetweetCommentIcon"/>
                            <span>1231</span>
                        </div>
                    </div> 
                    :
                    props.type==="telegram" ?
                    <div className="PSR_TelegramFooter">
                        <div className="PSR_TelegramSource">
                            {
                                props.TelegramType==="channel" ?
                                <FaBullhorn className="PSR_TelegramSourceIcon"/>
                                :
                                <div className="PSR_Telegram_Group">
                                <span>نام گروه</span>
                                <HiUserGroup className="PSR_TelegramSourceIcon"/>
                                </div>
                            } 
                        </div>
                        <div className="PSR_TelegramComments">
                            <FaRegComment className="PSR_TelegramCommentIcon"/>
                            <span>1540</span>
                        </div>
                    </div>
                    : 
                    props.type==="rss" ?
                    <div className="PSR_RssFooter">
                        <div className="PSR_RssFeel">
                        <BsPlusCircle className="PSR_RssFeelIcon"/>
                        </div>
                    </div> 
                    :
                    <>
                    </>
                }
            </div>
        </div>
        </div>
    )
}

export default PSR_Post

import React from 'react'
import './PSR_Post.css'
import {MdOutlineEditCalendar} from 'react-icons/md'
import {BsFillPersonFill} from 'react-icons/bs'
import {FcLike} from 'react-icons/fc'
import {FaRegComment} from 'react-icons/fa'
import {GrPowerCycle} from 'react-icons/gr'
import {BiRecycle} from 'react-icons/bi'

function PSR_Post(props) {
    return (
        <div className="PSR_Post">
            <div className="PSR_PostImageContainer">
                <img className="PSR_PostImage" src="https://i.insider.com/5d91fdb36f24eb3da40c3e29?width=750&format=jpeg&auto=webp"/>
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
            <div className="PSR_PostBody">
                <div className="PSR_InstagramBody">
                    <p>اهی وارد طبیعت شو و بگذار که نسیمی خنک و زیبا چهره ات را نوازش کند. اگر کمی با خود بیندیشی، می بینی که تمام زیبایی های زندگی در همین است. عده ای همواره به دنبال ثروت هستند، عده ای به دنبال جای و مقام هستند و عده ای هم کامل از همه چیز بریده اند و دیگر امیدی به زندگی ندارند. آنها زیبایی های زندگی را فراموش کرده اند. همینکه گاهی اوقات وارد طبیعت شوی و از زیبایی های آن لذت ببری، خود یک نعمت بزرگ است. همینکه بگذاری آن نسیم خنک صورتت را نوازش کند، خود یک ثروت بزرگ است. ثروت ها همین ها هستند که گاهی نادیده گرفته می شوند.</p>
                </div>
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
                    <div>
                    </div>
                }
   
            </div>
        </div>
    )
}

export default PSR_Post

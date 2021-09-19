import React from 'react'
import './Categories.css'
import {BiBasketball , BiMovie , BiNews, BiPalette} from 'react-icons/bi';
import CategoryCheckbox from './CategoryCheckbox'
import {BsGraphUp , BsMusicNoteBeamed, BsFillPeopleFill} from 'react-icons/bs';
import {FaCarCrash ,FaRegLaugh  , FaChalkboardTeacher, FaMosque , FaRegHospital} from 'react-icons/fa';
import {RiMoneyEuroCircleLine , RiPercentLine} from 'react-icons/ri';
import  {GrSecure} from 'react-icons/gr';
import { AiOutlineStop , AiFillSecurityScan} from 'react-icons/ai';
import {MdSmokeFree} from 'react-icons/md';
import {ImBooks} from 'react-icons/im';
import {GiShotgunRounds , GiMountains , GiWhiteBook, GiMaterialsScience ,GiEgyptianTemple, GiPartyFlags} from 'react-icons/gi';
const CategoriesRss = { 
    "varzeshi" : ["ورزشی",BiBasketball],
    "eghtesadi" : ['اقتصادی',BsGraphUp],
    "filmocinema" : ['فیلم و سینما', BiMovie],
    'havades' : ['حوادث', FaCarCrash],
    'siasi' : ['سیاسی', RiMoneyEuroCircleLine],
    'ejtemaee' : ['اجتماعی',BsFillPeopleFill ],
    'nezami' : ['نظامی' , GiShotgunRounds],
    "tabiatvahava" : ["طبیعت",GiMountains ] , 
    "pezeshki" : ["پزشکی",FaRegHospital ],
    'adabi' : ['ادبی', GiWhiteBook],
    'elmi' : ['علمی' , GiMaterialsScience],
    'farhangi' : ['فرهنگی', GiPartyFlags] , 
    "honari" : ["هنری" ,BiPalette ], 
    "amniati" : ['امنیتی' ,AiFillSecurityScan],
    'mazhabi' : ['مذهبی' ,FaMosque ] ,
    "mokhadderoalkol" : ['مخدر و الکل', MdSmokeFree], 
    "amozeshi" : ['آموزشی',FaChalkboardTeacher ],
    'music' : ['موسقی' , BsMusicNoteBeamed],
    'fun' : ['طنز' , FaRegLaugh],
    "romanodastan" : ['داستان و رومان' , ImBooks],
    "ITkhabar" : ['آی تی خبر', BiNews], 
    "tarikhi" : ['تاریخی', GiEgyptianTemple],
    "tablighofrosh" : ["تبلیغات" ,  RiPercentLine], 
    "mostahjan" : ["مستحجن" , AiOutlineStop]
}
function Categories() {
    const list = Object.keys(CategoriesRss).map((item)=>{
        return <li>        
                <CategoryCheckbox className="fontStyle" 
                name={item}
                label={CategoriesRss[item][0]}
                Icon={CategoriesRss[item][1]}
                color="secondary"/>
            </li>
    });
    return (
        <div className="categories">
            <ul>
                {list}
            </ul>
            
        </div>  
    )
}

export default Categories

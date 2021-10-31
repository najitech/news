import React , {useContext} from 'react'
import './PSR_PostSubjects.css'
import Tag from '../../../../../../UI/Tag'
import ThemeColorContext from '../../../../../../UI/ThemeColorContext'

function PSR_PostSubjects() {
    const ThemeColor = useContext(ThemeColorContext);
    console.log(ThemeColor);
    return (
        <div className="PSR_PostSubjects">
            {
                ThemeColor==="lightTheme" ?
                <>
                <Tag text = "حوادث" backGroundColor="#30326E" fontSize="10px" color="#7556DB"/>
                <Tag text = "سیاسی"  backGroundColor="#30326E"  fontSize="10px" color="#56bcdb" padding="6px" />
                <Tag text = "اجتماعی" backGroundColor="#30326E" fontSize="10px" color="#56db82"/>
                <Tag text = "فرهنگی"  backGroundColor="#30326E" fontSize="10px" color="#db5656"/>
                <div className="PostTags_lastchild">
                  <Tag  text = "ورزشی"  backGroundColor="#30326E" color="#dbb156" fontSize="10px" />
                </div>
                </>
                :
                <>
                <Tag text = "حوادث" backGroundColor="#EFEBF9" fontSize="10px" color="#7556DB"/>
                <Tag text = "سیاسی"  backGroundColor="#ebf4f9"  fontSize="10px" color="#56bcdb" padding="6px" />
                <Tag text = "اجتماعی" backGroundColor="#ebf9ec" fontSize="10px" color="#56db82"/>
                <Tag text = "فرهنگی"  backGroundColor="#f9ebeb" fontSize="10px" color="#db5656"/>
                <div className="PostTags_lastchild">
                  <Tag  text = "ورزشی"  backGroundColor="#f9f3eb" color="#dbb156" fontSize="10px" />
                </div>
                </>

            }



        </div>
    )
}

export default PSR_PostSubjects

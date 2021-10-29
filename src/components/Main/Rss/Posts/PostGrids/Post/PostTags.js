import React from 'react'
import Tag from '../../../../../../UI/Tag'
import './PostTags.css'
function PostTags() {
    return (
        <div className="PostTags">
            <Tag text = "حوادث" backGroundColor="#EFEBF9" fontSize="7px" color="#7556DB"/>
            <Tag text = "سیاسی"  backGroundColor="#ebf4f9" fontSize="7px" color="#56bcdb" padding="6px" />
            <Tag text = "اجتماعی" backGroundColor="#ebf9ec" fontSize="7px" color="#56db82"/>
            <Tag text = "فرهنگی"  backGroundColor="#f9ebeb" fontSize="7px" color="#db5656"/>
            <div className="PostTags_lastchild">
              <Tag  text = "فرهنگی"  backGroundColor="#f9f3eb" color="#dbb156" fontSize="7px" />
            </div>


        </div>
    )
}

export default PostTags

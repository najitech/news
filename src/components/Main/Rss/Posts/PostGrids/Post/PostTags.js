import React from 'react'
import PostTag from '../../../../../../UI/Tag'
import './PostTags.css'
function PostTags() {
    return (
        <div className="PostTags">
            <PostTag text = "حوادث" backGroundColor="#EFEBF9" fontSize="7px" color="#7556DB"/>
            <PostTag text = "سیاسی"  backGroundColor="#ebf4f9" fontSize="7px" color="#56bcdb" padding="6px" />
            <PostTag text = "اجتماعی" backGroundColor="#ebf9ec" fontSize="7px" color="#56db82"/>
            <PostTag text = "فرهنگی"  backGroundColor="#f9ebeb" fontSize="7px" color="#db5656"/>
            <div className="PostTags_lastchild">
              <PostTag  text = "فرهنگی"  backGroundColor="#f9f3eb" color="#dbb156" fontSize="7px" />
            </div>


        </div>
    )
}

export default PostTags

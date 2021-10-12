import React from 'react'
import PostTag from '../../../../../../UI/Tag'
import './PostTags.css'
function PostTags() {
    return (
        <div className="PostTags">
            <PostTag text = "حوادث" backGroundColor="red" fontSize="7px" />
            <PostTag text = "سیاسی"  backGroundColor="rgb(16, 160, 233)" fontSize="7px" padding="6px" />
            <PostTag text = "اجتماعی" backGroundColor="rgb(5, 172, 5)" fontSize="7px"/>
            <PostTag text = "فرهنگی"  backGroundColor="purple" fontSize="7px"/>
            <div className="PostTags_lastchild">
              <PostTag  text = "فرهنگی"  backGroundColor="orange" fontSize="7px" />
            </div>


        </div>
    )
}

export default PostTags

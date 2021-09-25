import React from 'react'
import PostTag from '../../../../../../UI/Tag'
import './PostTags.css'
function PostTags() {
    return (
        <div className="PostTags">
            <PostTag text = "حوادث" backGroundColor="red" />
            <PostTag text = "سیاسی"  backGroundColor="rgb(16, 160, 233)" />
            <PostTag text = "اجتماعی" backGroundColor="rgb(5, 172, 5)"/>
        </div>
    )
}

export default PostTags

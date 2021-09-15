import React from 'react'
import PostTag from '../../../../../UI/Tag'
import './PostTags.css'
function PostTags() {
    return (
        <div className="PostTags">
            <PostTag text="تاریخی"/>
            <PostTag text = "سیاسی" />
            <PostTag text="عمومی"/>
        </div>
    )
}

export default PostTags

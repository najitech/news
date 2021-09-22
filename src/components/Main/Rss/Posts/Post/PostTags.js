import React from 'react'
import PostTag from '../../../../../UI/Tag'
import './PostTags.css'
function PostTags() {
    return (
        <div className="PostTags">
            <PostTag text="اقتصادی" backGroundColor ="#15AEFA"/>
            <PostTag text="حوادث"  backGroundColor="red"/>

        </div>
    )
}

export default PostTags

import React from 'react'
import Tag from '../../../../../../UI/Tag'
import './PostListTags.css'

function PostListTags() {
    return (
        <div className="PostListTags">
            <Tag text = "حوادث" backGroundColor="red" />
            <Tag text = "سیاسی"  backGroundColor="rgb(16, 160, 233)" />
            <Tag text = "اجتماعی" backGroundColor="rgb(5, 172, 5)"/>
        </div>
    )
}

export default PostListTags

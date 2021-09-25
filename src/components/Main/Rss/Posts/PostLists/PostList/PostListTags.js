import React from 'react'
import Tag from '../../../../../../UI/Tag'
import './PostListTags.css'

function PostListTags() {
    return (
        <div className="PostListTags">
            <Tag text = "حوادث" backGroundColor="red" />
            <Tag text = "سیاسی"  backGroundColor="blue" />
            <Tag text = "اجتماعی" backGroundColor="green"/>
        </div>
    )
}

export default PostListTags

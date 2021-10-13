import React from 'react'
import Tag from '../../../../../../UI/Tag'
import './PostListTags.css'

function PostListTags() {
    return (
        <div className="PostListTags">
        <Tag text = "حوادث" backGroundColor="#EFEBF9"  color="#7556DB"/>
        <Tag text = "سیاسی"  backGroundColor="#ebf4f9" color="#56bcdb" padding="6px" />
        <Tag text = "اجتماعی" backGroundColor="#ebf9ec"  color="#56db82"/>
        <Tag text = "فرهنگی"  backGroundColor="#f9ebeb"  color="#db5656"/>
        </div>
    )
}

export default PostListTags

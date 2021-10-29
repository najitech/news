import React from 'react'
import './PSR_PostSubjects.css'
import Tag from '../../../../../../UI/Tag'
function PSR_PostSubjects() {
    return (
        <div className="PSR_PostSubjects">
            <Tag text = "حوادث" backGroundColor="none" fontSize="8px" color="#7556DB"/>
            <Tag text = "سیاسی"  backGroundColor="none" fontSize="8px" color="#56bcdb" padding="6px" />
            <Tag text = "اجتماعی" backGroundColor="none" fontSize="8px" color="#56db82"/>
            <Tag text = "فرهنگی"  backGroundColor="none" fontSize="8px" color="#db5656"/>
            <div className="PostTags_lastchild">
              <Tag  text = "ورزشی"  backGroundColor="none" color="#dbb156" fontSize="8px" />
            </div>
        </div>
    )
}

export default PSR_PostSubjects

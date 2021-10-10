import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './WebsitePreview.css'

function WebsitePreview() {
    return (
        <div className="WebsitePreview">
            <Avatar className="WebsitePreview_avatar"  src="https://upload.wikimedia.org/wikipedia/commons/e/e9/ISNA_logo.jpg" className="WebsitePreview_avatar" >R</Avatar>
            <div className="WebsitePreview_header">
                <h4 className="WebsitePreview_title">ایسنا</h4>
            </div>
        </div>
    )
}

export default WebsitePreview

import React from 'react'

function Post(props) {
    const postdate = new Date(props.publish_date);
    return (
        <div>
            <div className="Post_image">
                <image src={props.image} />
            </div>
            <div className="Post_container">
                <h3>
                    <a href={props.link}>{props.title}</a>
                </h3>
                <p>{props.news_text}</p>
            </div>
            <div className="Post_footer">
                {postdate.getHours()}
            </div>
        </div>
    )
}

export default Post
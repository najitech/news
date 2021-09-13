import React from 'react'

function Post(props) {
    postdate = new Date(props.date)
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
                {publish_date}
            </div>


        </div>
    )
}

export default Post
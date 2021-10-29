import React from 'react'
import './PSR_Posts.css'
import PSR_Post from './PSR_Post'

function PSR_Posts(props) {
    return (
        <div className="PSR_Posts">
            {
                props.type!=="all" ?
                <>
                <PSR_Post type={props.type}/>
                <PSR_Post type={props.type}/>
                <PSR_Post type={props.type}/>
                <PSR_Post type={props.type}/>
                <PSR_Post type={props.type}/>
                <PSR_Post type={props.type}/>
                <PSR_Post type={props.type}/>
                <PSR_Post type={props.type}/>
                <PSR_Post type={props.type}/>
                <PSR_Post type={props.type}/>
                <PSR_Post type={props.type}/>
                <PSR_Post type={props.type}/>
                </>
                :
                <>
                <PSR_Post type={"instagram"}/>
                <PSR_Post type={"twitter"}/>
                <PSR_Post type={"rss"}/>
                <PSR_Post type={"telegram"}/>
                <PSR_Post type={"instagram"}/>
                <PSR_Post type={"twitter"}/>
                <PSR_Post type={"rss"}/>
                <PSR_Post type={"telegram"}/>
                <PSR_Post type={"instagram"}/>
                <PSR_Post type={"twitter"}/>
                <PSR_Post type={"rss"}/>
                <PSR_Post type={"telegram"}/>
                </>
            }

        </div>
    )
}

export default PSR_Posts

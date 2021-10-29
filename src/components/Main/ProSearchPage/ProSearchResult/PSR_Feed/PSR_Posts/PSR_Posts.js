import React from 'react'
import './PSR_Posts.css'
import PSR_Post from './PSR_Post'

function PSR_Posts(props) {
    return (
        <div className="PSR_Posts">
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
        </div>
    )
}

export default PSR_Posts

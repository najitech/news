import React from 'react'
import Rss from './Rss/Rss'
import { Switch , Route } from 'react-router-dom'
import './Main.css'
import Home from './Home/Home'
import Twitter from './Twitter/Twitter';
function Main() {
    return (
        <div className="Main">
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/RSS">
                        <Rss/>
                    </Route>
                    <Route path="/Twitter">
                        <Twitter/>
                    </Route>
                </Switch>
        </div>
    )
}

export default Main

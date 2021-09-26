import React from 'react'
import Rss from './Rss/Rss'
import { Switch , Route } from 'react-router-dom'
import './Main.css'
import Home from './Home/Home'
import Twitter from './Twitter/Twitter';
import TheLayout from '../../containers/TheLayout'
function Main() {
    return (
        <div className="Main">
                <Switch>
                    <Route exact path="/">
                        <TheLayout/>
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

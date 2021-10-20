import React from 'react'
import Rss from './Rss/Rss'
import { Switch , Route } from 'react-router-dom'
import './Main.css'
import TheLayout from '../../containers/TheLayout'
import ProSearchContainer from './ProSearchPage/ProSearchContainer'
import Websites from './Websites/Websites'
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
                        <ProSearchContainer/>
                    </Route>
                </Switch>
        </div>
    )
}

export default Main

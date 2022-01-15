import React from 'react'
import Rss from './Rss/Rss'
import { Switch , Route } from 'react-router-dom'
import './Main.css'
import TheLayout from '../../containers/TheLayout'
import ProSearchContainer from './ProSearchPage/ProSearchContainer'
import Websites from './Websites/Websites'
import KeywordPage from './KeywordPage/KeywordPage'
import MapOverview from './MapPages/MapOverview/MapOverview'
import MapPage from './MapPages/MapPosts/MapPosts'
import DataPage from './DataPage/DataPage'
import DataAnalysis from './DataAnalysis/DataAnalysis'

function Main() {
    return (
        <div className="Main">
                <Switch>
                    <Route exact path="/">
                        {/*<TheLayout/>*/}
                        {/*<DataPage/>*/}
                        <DataAnalysis/>
                    </Route>
                    <Route path="/RSS">
                        {/*<Rss/>*/}
                        <DataPage/>
                    </Route>
                    <Route path="/Websites">
                        {<MapOverview/>}
                    </Route>
                    <Route path="/ProSearch">
                        {<ProSearchContainer/>}
                    </Route>
                </Switch>
        </div>
    )
}

export default Main

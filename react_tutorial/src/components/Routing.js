import React, { Component } from 'react'
import Classcomponents from './Classcomponents'
import Functioncomponents from './Functioncomponents'
import List from './List'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

export default class Routing extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Link to="/Classcomponents">Class component</Link>
                    <Link to="/Functioncomponents">Function component</Link>
                    <Link to="/List">List with mapping</Link>

                    <Route exact path="/Classcomponents" component={Classcomponents}/>
                    <Route path="/Functioncomponents" component={Functioncomponents}/>
                    <Route path="/List" component={List}/>
                </Router>    
            </div>
        )
    }
}

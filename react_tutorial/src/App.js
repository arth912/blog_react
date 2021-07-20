import './App.css'
import Classcomponents from './components/Classcomponents'
import Functioncomponents from './components/Functioncomponents'
import State from './components/State'
import Lifecycle from './components/Lifecycle'
import List from './components/List'
import Routing from './components/Routing'
import Bootstrapinreact from './components/Bootstrapinreact'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <header>
        <Router>
          <Link to='/Classcomponents'>Class component</Link>
          <Link to='/Functioncomponents'>Function component</Link>
          <Link to='/List'>List with mapping</Link>

          <Route exact path='/Classcomponents' component={Classcomponents} />
          <Route path='/Functioncomponents' component={Functioncomponents} />
          <Route path='/List' component={List} />
        </Router>

        {/* <Classcomponents text="peter"/>
        <Functioncomponents text="function"/> */}

        {/* <State/> */}

        
        {/* <Bootstrapinreact/> */}
      </header>
    </div>
  )
}

export default App

import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero.js'
import Nav from './components/Nav.js'
import Heroo from './components/Heroo.js'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Heroo/>
      <Hero/>
    </div>
  );
}

export default App;

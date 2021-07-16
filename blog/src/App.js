import logo from './logo.svg';
import './App.css';
import Service from './components/Service.js'
import Nav from './components/Nav.js'
import Heroo from './components/Heroo.js'
import Gallery from './components/Gallery'
import Testimonial from './components/Testimonial'
import Location from './components/Location'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Heroo/>
      <Service name1="Threading" name2="Make Up" name3="Hair Treatment"  />
      <Service name1="Manicure" name2="Pedicure" name3="Waxing"  />
      <Service name1="Facials" name2="Rejuvenation Therapies" name3="Clean Up / Bleach"  />
      <Testimonial/>
      <Gallery/>
      <Location/>
    </div>
  );
}

export default App;

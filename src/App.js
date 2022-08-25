import {Routes, Route} from 'react-router-dom'
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import People from './pages/People';
import Sites from './pages/Sites';
function App() {
  return (
<Routes>
<Route path= "/" element={<Home />}></Route>
<Route path= "contact" element={<Contact />}></Route>
<Route path="People" element={<People />}></Route>
<Route path='Sites' element={<Sites />}></Route>
<Route path='About' element={<About />}></Route>
</Routes>
  );
}

export default App;

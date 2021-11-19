import './App.css';
import { BrowserRouter ,Routes, Route} from "react-router-dom";
import {Home} from './components/Home';
import {News} from './components/News';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import {HeaderW} from './components/Layouts/HeaderW';
import {FooterW} from './components/Layouts/FooterW';
function App() {
  return (
    <BrowserRouter>
      <HeaderW/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />\

      </Routes>
      <FooterW/>
     </BrowserRouter>
    
   
  );
}

export default App;

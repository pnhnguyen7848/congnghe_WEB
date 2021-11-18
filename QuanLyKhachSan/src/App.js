import './App.css';
import { BrowserRouter ,Routes, Route} from "react-router-dom";
import {Home} from './components/Home';
import {News} from './components/News';
import {MenuNgang} from './components/MenuNgang';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <MenuNgang/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />\

      </Routes>
     
     </BrowserRouter>
    
   
  );
}

export default App;

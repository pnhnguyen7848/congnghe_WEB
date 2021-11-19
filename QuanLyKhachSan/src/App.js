import './App.css';
import { BrowserRouter ,Routes, Route} from "react-router-dom";
import {Home} from './pages/Home';
import NewsList from './pages/News';
import ProjectList from './pages/Projects';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import {HeaderW} from './components/Layouts/HeaderW';
import {FooterW} from './components/Layouts/FooterW';
function App() {
  return (
    <BrowserRouter>
      <HeaderW/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/news' element={<NewsList/>} />
        <Route path='/projects' element={<ProjectList/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />\

      </Routes>
      <FooterW/>
     </BrowserRouter>
    
   
  );
}

export default App;

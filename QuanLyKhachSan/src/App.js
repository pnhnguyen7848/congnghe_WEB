import './App.css';
import { BrowserRouter ,Routes, Route} from "react-router-dom";
import {Home} from './components/Home';
import NewsList from './pages/NewsList';
import ProjectList from './pages/ProjectList';
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

// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import About from './pages/About';
import { Home } from './pages/Home';
import { ContactUs } from './pages/ContactUs';
import { Feedback } from './pages/Feedback';

function App() {
  return (
  <BrowserRouter>
  <Routes>
        <Route  path='/' element={< Home />} />
        <Route  path='/about' element={< About />} />
        <Route  path='/contact' element={< ContactUs />} />
        <Route  path='/feedback' element={< Feedback />} />
       
    </Routes> 

  </BrowserRouter>
 
  );
}

export default App;

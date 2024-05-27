
import './App.css';
import { BrowserRouter, Route,Routes,useLocation} from 'react-router-dom';
import About from './pages/About';
import { Home } from './pages/Home';
import { ContactUs } from './pages/ContactUs';
import { Feedback } from './pages/Feedback';

import { Navigation } from './components/Navigation';
import { Login } from './pages/Login';

import Courses from './pages/Courses';
import { Footer } from './components/Footer';
import { StudentReg } from './pages/StdRegistered';
import { StudentList } from './pages/StdList';
import { PrivateRoute } from './components/privateRoute';
import { StudentEditForm } from './pages/StudentEditForm';




function App() {

  const location = useLocation();
  const showNavAndFooter = location.pathname!=='/';

  return (
    <>
      {showNavAndFooter && <Navigation />}
<Routes>
<Route  path='/' element={< Login />} />
<Route element={<PrivateRoute/>}>
  <Route path="/home" element={<Home/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/contact" element={<ContactUs/>} />
  <Route path="/course" element={<Courses/>} />
  <Route path="/feedback" element={<Feedback/>} />
  <Route path="/stdreg" element={<StudentReg/>} />
  <Route path="/stdlist" element={<StudentList/>} />
  <Route path="/edit-student/:id" element={<StudentEditForm/>} />
</Route>
      {/* <PrivateRoute path="/home" element={< Home />} />

      <PrivateRoute path='/about' element={< About />} />
      
      <PrivateRoute path='/contact' element={< ContactUs />}/>
      <PrivateRoute  path='/course' element={< Courses />} />
     

      <PrivateRoute   path='/feedback' element={< Feedback />} />
     
      <PrivateRoute path='/stdreg' element={< StudentReg />} />
    
      <PrivateRoute path='/stdlist' element={< StudentList />} />
   
     */}
        {/* <Route  path='/home' element={< Home />} />
     <Route  path='/about' element={< About />} />
       <Route  path='/contact' element={< ContactUs />} />
       <Route  path='/feedback' element={< Feedback />} />
       <Route  path='/course' element={< Courses />} />
        
     <Route  path='/' element={< Login />} />
      <Route  path='/stdreg' element={< StudentReg />} />
       <Route  path='/stdlist' element={< StudentList />} /> */}
      
  </Routes> 
{showNavAndFooter && <Footer />}


    </>



 
  );
}

export default function Main() {
  return (
      <BrowserRouter>
          <App />
      </BrowserRouter>
  );
}
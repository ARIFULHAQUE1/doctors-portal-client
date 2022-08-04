
import './App.css';
import Header from './pages/Header/Header';
import {Routes,Route }from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './pages/Shared/Footer/Footer';
import Appointments from './pages/Appointments/Appointments';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import RequireAuth from './pages/RequireAuth';
function App() {
  return (
    <div >
      <Header></Header>
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='about' element={<About></About>}></Route>
    <Route path='/appointment' element={
    <RequireAuth>
      <Appointments></Appointments>
    </RequireAuth>}>

    </Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/signUp' element={<SignUp></SignUp>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;

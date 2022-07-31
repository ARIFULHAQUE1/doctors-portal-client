
import './App.css';
import Header from './pages/Header/Header';
import {Routes,Route }from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
function App() {
  return (
    <div >
      <Header></Header>
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='about' element={<About></About>}></Route>
    </Routes>
    </div>
  );
}

export default App;

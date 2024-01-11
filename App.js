import'./Components/navbar/navbar.css'
import './App.css';
import Navbar from './Components/navbar/Navbar';
import Home from './Home/Home';
import LoginForm from './Home/Loginform';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
  <div>
    <>
    <Navbar/>
    {/* <Home/> */}
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/sign in' element={<LoginForm/>}></Route>
    </Routes>
    {/* <LoginForm/> */}
    </>
  </div>
  );
}

export default App;
import 'bootstrap/dist/css/bootstrap.min.css';
import Singup from './Singup';
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Login from './Login';
import Home from './Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Navigate to="/login" />} />
        <Route path='/register' element={<Singup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App;

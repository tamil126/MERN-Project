import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { Register } from './register';
import { Login } from './login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './home';
import { Main } from './main';
import { UserView } from './userView';
import { Upadteuser } from './update';
import { ProductView } from './productView';
import { Booking } from './booking';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/register' element={<Register/>} />
        <Route path='/' element={<Main/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/update/:id' element={<Upadteuser/>} />
        <Route path='/users' element={<UserView/>} />
        <Route path='/booking' element={<Booking/>} />
        <Route path='/menu' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Login, Register } from './pages/';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path="/admin" element={<App/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
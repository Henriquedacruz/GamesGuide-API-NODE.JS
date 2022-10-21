import './App.css';

import { useState } from 'react';

// import { Button } from 'react-bootstrap';
import Main from './pages/Main';
import Login from './pages/Login';
import Guia from './pages/Guia/guide';
import Cadastro from './pages/Cadastro';
import Gender from './pages/Gender';
import Erro from './pages/Erro';
import Header from './components/Header';
import Footer from './components/Footer';
import ModalEdit from './components/ModalEditGender';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRouter from './protectedRouter';


function App() {
  const [isSigned, setIsSigned] = useState(false);

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<ProtectedRouter isAuth={isSigned} />}>
            <Route path='/Guia' element={<Guia />} />
          </Route>
          <Route path='/' element={<Main />} />
          <Route path='/Login' element={<Login changeSigned={setIsSigned} isSigned={isSigned} />} />
          <Route path='/Cadastro' element={<Cadastro />} />
          <Route path='/gender' element={<Gender />} />
          <Route path='/Modal' element={<ModalEdit />} />
          <Route path='*' element={<Erro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

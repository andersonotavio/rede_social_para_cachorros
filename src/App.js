import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Componentes/Footer';
import Header from './Componentes/Header';
import Home from './Componentes/Home'
import Login from './Componentes/Login/Login';
import {  UserStorage } from './UserContext';
import User from './Componentes/User/User';
import ProtectRouter from './Componentes/Help/ProtectRouter';
import Photo from './Componentes/Photo/Photo';
import UserProfile from './Componentes/User/UserProfile';
import NotFound from './Componentes/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
            <main className="AppBody">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login/*" element={<Login />} />
                <ProtectRouter path="conta/*" element={<User />} />
                <Route path="foto/:id" element={<Photo />} />
                <Route path="perfil/:user" element={<UserProfile />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main> 
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;

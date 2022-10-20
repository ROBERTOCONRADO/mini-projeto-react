import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produtos from './Componentes/Produtos';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Contato from './Componentes/Contato';
import Produto from './Componentes/Produtos';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path="contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

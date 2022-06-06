import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Contato } from './pages/contato/Contato';
import { Error } from './pages/error/Error';
import { Home } from './pages/home/Home'
import { Produtos } from './pages/produtos/Produtos';
import { Sobre } from './pages/sobre/Sobre'

export function RoutesApp() {
  return (
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato/>} />
        <Route path="/produtos/:id" element={<Produtos/>} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

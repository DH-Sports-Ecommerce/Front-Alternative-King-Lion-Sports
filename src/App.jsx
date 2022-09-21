import './App.css';

import { Routes, Route } from 'react-router-dom';
import { AdminPageContextProvider } from './Contexts/AdminContext';
import NavAndSid_Bar from './Components/Header/NavAndSid_Bar';
import Footer from './Components/Footer/Footer';
import Home from './pages/home_pg/Home';
import Admin from './pages/admin_pg/Admin';
import Products from './pages/produtct_pg/Products';
import Categories from './pages/categories_pg/Categories';
import Carrinho from './pages/carrinho_pg/Carrinho';
import Sobre from './pages/sobre_pg/Sobre';
import Errorpg from './pages/error_pg/Errorpg';


function App() {
  
  return (
  <>
  <NavAndSid_Bar/>
  <AdminPageContextProvider>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path='/pg_admin' element={<Admin />}/>
    <Route path='/pg_products' element={<Products />}/>
    <Route path='/pg_categories' element={<Categories />}/>
    <Route path='/pg_carrinho' element={<Carrinho />}/>
    <Route path='/pg_sobre' element={<Sobre />}/>
    <Route path='/pg_404' element={<Errorpg />}/>
  </Routes>
  </AdminPageContextProvider>
  <Footer/>
  </>
  )
}

export default App;

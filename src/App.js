import './App.css';


import { BrowserRouter, Routes, Route} from "react-router-dom";

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import ClasesPage from './pages/ClasesPage';
import EquiposPage from './pages/EquiposPage';
import NovedadesPage from './pages/NovedadesPage';
import ProfesoresPage from './pages/ProfesoresPage';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="Clases" element={<ClasesPage/>}/>
          <Route path="Profesores" element={<ProfesoresPage/>}/>
          <Route path="Equipos" element={<EquiposPage/>}/>
          <Route path="Novedades" element={<NovedadesPage/>}/>
        </Routes>
      </BrowserRouter>
      <Nav/>
      <Footer></Footer>
    </div>
  );
}

export default App;

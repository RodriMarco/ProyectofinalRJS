import './App.css';



import { BrowserRouter, Routes, Route} from "react-router-dom";

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import ClasesPage from './pages/ClasesPage';
import EquiposPage from './pages/EquiposPage';
import NovedadesPage from './pages/NovedadesPage';
import ProfesoresPage from './pages/ProfesoresPage';
import ConsultasPage from './pages/ConsultasPage';

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
          <Route path="Consultas" element={<ConsultasPage/>}/>         

        </Routes>
        
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;

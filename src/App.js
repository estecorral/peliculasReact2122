import './App.css';
import Home from './components/home/home.jsx';
import Barra from './components/navbar/barra.jsx';
import Peliculas from './components/peliculas/peliculas';
import Pelicula from "./components/Pelicula/pelicula";
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Barra />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index path="/home" element={<Home/>}/>
          <Route path="/peliculas" element={<Peliculas/>}/>
          <Route path="/pelicula/:id/:title" element={<Pelicula/>}/>
          <Route path="*" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

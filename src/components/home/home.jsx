import React from "react";
import peliculasJSON from './../../assets/peliculas.json';
import seriesJSON from './../../assets/series.json';
import CardInfo from "../CardInfo/cardinfo";
import './home.css';

const Home = () => {
    const peliculas = peliculasJSON.slice(0, 5);
    const series = seriesJSON.slice(0, 5);
    const listPeliculas = peliculas.map((pelicula) =>{
        return <CardInfo key={pelicula.id} pelicula={pelicula}/>
    });

    const listSeries = series.map(serie => {
        return <div key={serie.id}>{serie.name}</div>
    });
    return (
      <>
        <div className="home">
          <h2>Peliculas reciente</h2>  
          <div className="peliculas">
              {listPeliculas}
          </div>
          <h2>Series recientes</h2>
          <div className="series">
            {peliculas.map(pelicula => {
                return <CardInfo key={pelicula.key} pelicula={pelicula}/>
            })}
          </div>
        </div>
      </>
    );
} 

export default Home;
import React from "react";
import CardInfo from "../CardInfo/cardinfo";
import { useEffect, useState } from "react";
import { getPopularMovies } from "../../API/api";

const Peliculas = () => {
    let [peliculas, setPeliculas] = useState([]);
    useEffect(() => {
        getPopularMovies().then(res => (setPeliculas(peliculas = res )));
    }, []);

    const listPeliculas = peliculas.map((pelicula) => {
      return <CardInfo key={pelicula.id} pelicula={pelicula} />;
    });

    return(
        <div>{listPeliculas}</div>
    );
}

export default Peliculas;
import React from "react";
import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react';
import { getMovieData } from "../../API/api";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const Pelicula = () => {
    let [pelicula, setPelicula] = useState({});
    let {id, title} = useParams();
    useEffect(() => {
        getMovieData(id).then(res => (setPelicula(pelicula = res)));
    }, []);
    const image = "https://image.tmdb.org/t/p/w220_and_h330_face/" + pelicula.poster_path;
    console.log(pelicula);
    const generos = () => {
        if (pelicula) {
            return pelicula.genres.map((genero, index) => {
              console.log(genero);
              return <Chip key={index} label={genero.name} color="primary" />;
            });
        } else {
             console.log('Sin datos');
        }
    }
    return (
      <>
        <div className="pelicula">
          <div className="info">
            <div className="caratula">
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="190"
                    image={image}
                    alt="caratula"
                  />
                </CardActionArea>
              </Card>
            </div>
            <div className="data">
              <h3>
                {pelicula.title}
                <Stack direction="row" spacing={1}>
                  <Chip label={pelicula.vote_average} color="primary" />
                </Stack>
              </h3>
              <p>{pelicula.overview}</p>
              <p>Géneros:</p>
              <Stack spacing={1} alignItems="center">
                <Stack direction="row" spacing={1}>
                  {generos()}
                </Stack>
              </Stack>
            </div>
          </div>
        </div>
      </>
    );
}

export default Pelicula;
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Movie from "@mui/icons-material/Movie";
import {Link, useNavigate} from 'react-router-dom';

const Barra = () => {
  const navigate = useNavigate();
  const goToPeliculas = () => {
    navigate("/peliculas");
  }
    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Movie />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/home">Aplicación Películas</Link>
              </Typography>
              <Link to="/peliculas">
                <Button variant="contained">Peliculas Link</Button>
              </Link>
              <Button variant="contained" onClick={goToPeliculas}>
                Peliculas
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </>
    );
} 

export default Barra;
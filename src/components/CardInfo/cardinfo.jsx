import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const CardInfo = (props) => {
    console.log(props.pelicula);
    const image = "https://image.tmdb.org/t/p/w220_and_h330_face/" + props.pelicula.poster_path;
    return (
      <>
        <Button>
          <Card>
            <CardMedia
              component="img"
              height="330"
              image={image}
              alt="pelicula image"
            />
          </Card>
        </Button>
      </>
    );
}

export default CardInfo;
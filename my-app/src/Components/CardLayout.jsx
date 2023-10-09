import React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CardLayout = () => {
  return (
    <Grid
      container
      spacing={3}
      sx={{ justifyContent: "center", textAlign: "center" }}
    >
      <Grid item lg={3} xs={3.7} md={2.4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Senaste nytt
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
            />
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item lg={3} xs={3.7} md={2.4}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Senaste nytt
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
          />
        </CardActionArea>
      </Grid>
      <Grid item lg={3} xs={3.7} md={2.4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Senaste nytt
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
            />
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CardLayout;

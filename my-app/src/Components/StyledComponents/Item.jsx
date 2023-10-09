import React from "react";
import { Paper, Button } from "@mui/material";
import LandingPage from "../../pages/LandingPage";
const Item = ({ item }) => {
  return (
    <LandingPage>
      <Paper>
        <img src={item.image} />

        <Button className="CheckButton">Check it out!</Button>
      </Paper>
    </LandingPage>
  );
};

export default Item;

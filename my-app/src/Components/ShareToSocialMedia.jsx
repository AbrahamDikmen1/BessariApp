import React from "react";
import styled from "styled-components";
import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ShareToSocialMedia = ({ image, desc }) => {
  console.log(image);
  console.log(desc);

  const url = image;

  return (
    <SocialMediaButtons>
      <Grid
        sx={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
        container
      >
        <Grid item xs={0}>
          <Typography style={{ fontSize: "20px" }}>Dela</Typography>
        </Grid>

        <Grid item xs={0}>
          <a href="https://www.instagram.com/alanbessari/">
            <Button>
              <InstagramIcon />
            </Button>
          </a>
        </Grid>

        <Grid item xs={0}>
          <a
            href={`https://www.facebook.com/sharer.php?u=${url}`}
            target="_blank"
          >
            <Button>
              <FacebookIcon fontSize="medium" />
            </Button>
          </a>
        </Grid>

        <Grid item xs={0}>
          <a href="https://www.linkedin.com/in/al%C3%A1n-ali-95282685/">
            <Button>
              <LinkedInIcon fontSize="medium" />
            </Button>
          </a>
        </Grid>
      </Grid>
    </SocialMediaButtons>
  );
};

export default ShareToSocialMedia;

export const SocialMediaButtons = styled.div`
  width: 100%;
`;

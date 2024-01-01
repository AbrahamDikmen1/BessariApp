import React from "react";
import styled from "styled-components";
import { Button, Grid, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router";
const ShareToSocialMedia = ({ image, desc, openModal, handleCloseModal }) => {
  console.log(image);
  console.log(desc);
  const navigate = useNavigate();
  const url = image;
  const style = {
    m: "14vh auto",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 5,
  };

  return (
    <>
      <Modal open={openModal}>
        <Box
          sx={{
            ...style,
            width: "60%",
            maxHeight: "70%",
            textAlign: "center",
          }}
        >
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
                <a
                  href="https://www.instagram.com/alanbessari/"
                  target="_blank"
                >
                  <Button>
                    <InstagramIcon fontSize="large" />
                  </Button>
                </a>
              </Grid>

              <Grid item xs={0}>
                <a
                  href={`https://www.facebook.com/sharer.php?u=${url}`}
                  target="_blank"
                >
                  <Button>
                    <FacebookIcon fontSize="large" />
                  </Button>
                </a>
              </Grid>

              <Grid item xs={0}>
                <a
                  href="https://www.linkedin.com/in/al%C3%A1n-ali-95282685/"
                  target="_blank"
                >
                  <Button>
                    <LinkedInIcon fontSize="large" />
                  </Button>
                </a>
              </Grid>
            </Grid>

            <div className="buttons">
              <Button onClick={handleCloseModal}>Tillbaka </Button>
              <Button onClick={() => navigate(-1)}>Hem</Button>
            </div>
          </SocialMediaButtons>
        </Box>
      </Modal>
    </>
  );
};

export default ShareToSocialMedia;

export const SocialMediaButtons = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;

  .buttons {
    margin-top: 20px;
  }
`;

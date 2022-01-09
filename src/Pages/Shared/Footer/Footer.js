import React from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../../../Img/logoforq.png";

const Footer = () => {
  return (
    <div>
      <Box style={{ padding: 20, backgroundColor: "black", color: "white" }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12} md={12}>
            <img src={logo} style={{ width: 250, height: "auto" }} />
          </Grid>
          <Grid item xs={12} md={12}>
            <Link
              sx={{ color: "balck" }}
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "bold",
                marginRight: 10,
              }}
              to="/about"
            >
              About Us
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "bold",
                marginRight: 10,
              }}
              to="/about"
            >
              Contact Us{" "}
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "bold",
                marginRight: 10,
              }}
              to="/about"
            >
              Privacy Policies
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "bold",
                marginRight: 10,
              }}
              to="/about"
            >
              FAQ
            </Link>
          </Grid>
          <Grid item xs={12} md={12}>
            <FacebookIcon style={{ marginRight: 10 }}></FacebookIcon>{" "}
            <YouTubeIcon
              style={{ color: "red", marginRight: 10 }}
            ></YouTubeIcon>{" "}
            <InstagramIcon></InstagramIcon>
          </Grid>
          <Grid item xs={12} md={12}>
            <Box style={{ color: "white" }}>
              {" "}
              Quarter &reg; {new Date().getFullYear}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Footer;

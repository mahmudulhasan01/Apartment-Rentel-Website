import React, { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import Navber from "../Shared/Navber/Navber";
import Footer from "../Shared/Footer/Footer";

const Shop = () => {
  const [apartments, setApartments] = useState([]);
  // console.log(apartments);

  useEffect(() => {
    fetch(`http://localhost:5000/apartments`)
      .then((res) => res.json())
      .then((data) => setApartments(data));
  }, []);

  return (
    <Box className="">
      <Navber></Navber>
      <Box style={{ textAlign: "center" }}>
        <h2>Featured Listings</h2>
        {/* <Container style={{ textAlign: "center" }}> */}
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {apartments.map((apartment) => (
              <Grid key={apartment._id} item xs={12} sm={6} md={4}>
                <Box style={{ textAlign: "left" }}>
                  <Card
                    sx={{
                      // maxWidth: 440,
                      boxShadow: 3,
                      // bgcolor: "background.paper",
                      m: 3,
                      p: 0.5,
                      // width: "8rem",
                      // height: "5rem",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="300"
                      image="https://i.ibb.co/gZgYgTg/house111111.jpg"
                    />
                    <CardContent>
                      <Link to="" style={{ textDecoration: "none" }}></Link>

                      <Typography variant="body2" color="text.secondary">
                        <Box
                          style={{
                            fontSize: "18px",
                            fontWeight: 600,
                            color: "#ff6044",
                            marginBottom: "5px",
                          }}
                        >
                          <span>
                            ${apartment.billPerMOnth}
                            <label>/Month</label>
                          </span>
                        </Box>
                        <Link to="" style={{ textDecoration: "none" }}>
                          <h2>{apartment.name}</h2>
                        </Link>
                        <br />
                        <Typography variant="body2" gutterBottom>
                          Beautiful Huge 1 Family House In Heart Of <br />
                          Westbury. Newly Renovated With New Wood
                        </Typography>
                        <Box
                          style={{
                            borderTop: "1px solid #E6E6E6",
                            marginBottom: "1px",
                            marginTop: "3px",
                            padding: "3px",
                            display: "block",
                            marginRight: 10,
                          }}
                          className=""
                        >
                          <ul style={{ listStyleType: "none" }}>
                            <li
                              className=""
                              style={{
                                borderRight: "1px solid #E6E6E6",
                                display: "inline-block",
                                paddingLeft: "10px",
                                paddingRight: "10px",
                                marginRight: 10,
                              }}
                            >
                              {apartment.bed} <i className="fas fa-bed"></i>{" "}
                              <br />
                              Bed
                            </li>
                            <li
                              className=""
                              style={{
                                borderRight: "1px solid #E6E6E6",
                                display: "inline-block",
                                paddingLeft: "10px",
                                paddingRight: "10px",
                                marginRight: 10,
                              }}
                            >
                              {apartment.bath} <i className="fas fa-sink"></i>
                              <br />
                              Bath
                            </li>
                            <li
                              className=""
                              style={{
                                borderRight: "1px solid #E6E6E6",
                                display: "inline-block",
                                paddingLeft: "10px",
                                paddingRight: "10px",
                                // marginRight: ,
                              }}
                            >
                              {apartment.area}{" "}
                              <i className="fas fa-vector-square"></i> <br />
                              Squre
                            </li>
                          </ul>
                        </Box>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link to="" style={{ textDecoration: "none" }}>
                        <Button size="small">Find A Home</Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* </Container> */}
      </Box>
      <Footer></Footer>
    </Box>
  );
};

export default Shop;

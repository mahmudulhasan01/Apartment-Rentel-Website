import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";

const OureServices = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ fontSize: 44, fontWeight: 700 }}>Our Main Focus</h2>
      <Container style={{ textAlign: "center" }}>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={12} sm={6} md={4}>
              <div className="">
                <Card sx={{ maxWidth: 440 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://i.ibb.co/d4BZX2h/fouces1.png"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Link style={{ textDecoration: "none" }}>
                      <Typography gutterBottom variant="h5" component="div">
                        Buy a home
                      </Typography>
                    </Link>

                    <Typography variant="body2" color="text.secondary">
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nesciunt officia impedit doloribus vero nostrum
                        minima dolores unde dignissimos deleniti ut!
                      </p>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link style={{ textDecoration: "none" }}>
                      <Button size="small">Find A Home</Button>
                    </Link>
                  </CardActions>
                </Card>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className="">
                <Card sx={{ maxWidth: 440 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://i.ibb.co/d4BZX2h/fouces1.png"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Link style={{ textDecoration: "none" }}>
                      <Typography gutterBottom variant="h5" component="div">
                        Buy a home
                      </Typography>
                    </Link>

                    <Typography variant="body2" color="text.secondary">
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nesciunt officia impedit doloribus vero nostrum
                        minima dolores unde dignissimos deleniti ut!
                      </p>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link style={{ textDecoration: "none" }}>
                      <Button size="small">Find A Home</Button>
                    </Link>
                  </CardActions>
                </Card>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className="">
                <Card sx={{ maxWidth: 440 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://i.ibb.co/d4BZX2h/fouces1.png"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Link style={{ textDecoration: "none" }}>
                      <Typography gutterBottom variant="h5" component="div">
                        Buy a home
                      </Typography>
                    </Link>

                    <Typography variant="body2" color="text.secondary">
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nesciunt officia impedit doloribus vero nostrum
                        minima dolores unde dignissimos deleniti ut!
                      </p>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link style={{ textDecoration: "none" }}>
                      <Button size="small">Find A Home</Button>
                    </Link>
                  </CardActions>
                </Card>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default OureServices;

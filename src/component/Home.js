import React, { useEffect, useState } from "react";
import "../component/HomeStyle.css";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { FormControl, Grid, OutlinedInput } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/ProductSlice";
import { add } from "../redux/CartSlice";
import Loading from "./Loading";
import STATUSES from "../redux/ProductSlice"

const Home = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  const [searchItem, setSearchItem] = useState("");

  const handleAdd = (data) => {
    dispatch(add(data));
  };

  return (
    <>
      <div className="">
        <section className="banner">
          <div className="search_product">
            <TextField
              id="outlined-adornment-weight"
              onChange={(e) => setSearchItem(e.target.value)}
              value={data.name}
              aria-describedby="outlined-weight-helper-text"
              fullWidth
              placeholder="search"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </section>

        <section
          style={{ width: "90%", margin: "auto", paddingBottom: "1rem" }}
        >
          <div className="">
            <Grid container spacing={2}>
              {data
                .filter((item) => {
                  if (searchItem === "") {
                    return item;
                  } else if (
                    item.title
                      .toLowerCase()
                      .includes(searchItem.toLocaleLowerCase())
                  ) {
                    return item;
                  }
                })
                .map((item, i) => {
                  return (
                    <>
                     {
                      (status === STATUSES.LOADING)? (<Loading />):(
                        <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                        <Card className="product-container">
                          <CardMedia
                            component="img"
                            height="140"
                            width="100"
                            image={item.image}
                            alt="green iguana"
                            style={{ objectFit: "contain", paddingTop: "1rem" }}
                          />
                          <CardContent>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <div>
                                <Typography
                                  gutterBottom
                                  variant="h6"
                                  component="div"
                                >
                                  {item.title.substring(0, 10)}
                                </Typography>
                              </div>
                              <div>
                                <PlaylistAddIcon style={{ color: "grey" }} />
                                <span>
                                  <FavoriteIcon style={{ color: "grey" }} />
                                </span>
                              </div>
                            </div>

                            <Typography variant="body2" color="text.secondary">
                              {item.description.substring(0, 100)}
                            </Typography>
                          </CardContent>
                          <CardActions
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div>
                              <Typography>${item.price}</Typography>
                              <Typography
                                sx={{ fontSize: "1.5rem", color: "#f8b400" }}
                              >
                                *******
                              </Typography>
                            </div>
                            <div>
                              <Button
                                variant="outlined"
                                size="small"
                                startIcon={
                                  <ShoppingCartIcon
                                    style={{ color: "#42b883" }}
                                  />
                                }
                                onClick={() => handleAdd(item)}
                              >
                                Add To Cart
                              </Button>
                            </div>
                          </CardActions>
                        </Card>
                      </Grid>
                      )
                     }
                    </>
                  );
                })}
            </Grid>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import "../component/MainStyle.css";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { Grid } from "@mui/material";
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

const Main = () => {
  const dispatch = useDispatch();
  const { data, status} = useSelector((state)=>state.product);

 console.log(data)
  

  useEffect(()=>{
    dispatch(fetchProduct())
  },[]);
  const [searchItem, setSearchItem] = useState("");

  const handleAdd = (data) => {
    dispatch(add(data))
  }

  return (
    <>
      <div className="main-container">
        <section style={{marginBottom: "2rem"}}>
          <div className="header-container">
            <div className="header-wraper">
              <div className="header">
                <div className="img_wraper">
                  <div className="searchBox">
                    <TextField
                      placeholder="Search"
                      onChange={(e) => setSearchItem(e.target.value)}
                      value={data.name}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <SearchIcon />
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                      fullWidth
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
             
        <section   style={{ width: "90%", margin: "auto", paddingBottom: "1rem" }}>
          <div className="">
            <Grid
              container
              spacing={2}
            >
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
                .map((item) => {
                  return (
                    <>
                      <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card className="product-container">
                          <CardMedia
                            component="img"
                            height="140"
                            width="100"
                            image={item.image}
                            alt="green iguana"
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
                                  variant="h5"
                                  component="div"
                                >
                                  {item.title.substring(0,10)}
                                </Typography>
                              </div>
                              <div>
                                <PlaylistAddIcon />
                                <span>
                                  <FavoriteIcon />
                                </span>
                              </div>
                            </div>

                            <Typography variant="body2" color="text.secondary">
                              {item.description.substring(0,100)}
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
                                sx={{ fontSize: "1rem", color: "teal" }}
                              >
                                *******
                              </Typography>
                            </div>
                            <div>
                              <ShoppingCartIcon
                                sx={{ mr: 1, fontSize: "20px" }}
                              />
                              <Button variant="outlined" size="small" onClick={()=>handleAdd(item)} >
                                Add To Cart
                              </Button>
                            </div>
                          </CardActions>
                        </Card>
                      </Grid>
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

export default Main;

import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { remove, increaseCartItem, decreaseCartItem } from "../redux/CartSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ButtonGroup from "@mui/material/ButtonGroup";
import FastRewindIcon from '@mui/icons-material/FastRewind';
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleRemove = (item) => {
    dispatch(remove(item));
  };

  const addProduct = (item) => {
    dispatch(increaseCartItem(item));
  };

  const decreaseProduct = (item) => {
    dispatch(decreaseCartItem(item));
  };

  return (
    <div style={{marginBottom: "1.5rem"}}>
      <section style={{ width: "90%", margin: "auto", paddingBottom: "1rem" }}>
        <Container>
          <Grid item sx={{ marginTop: "7rem", marginBottom: "1rem" }}>
            <div style={{ boxShadow: "0 4px 6px -6px #222" }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Added product on Cart
              </Typography>
            </div>
          </Grid>
          <Grid container spacing={2}>
            {items.cartItems && items.cartItems.length ? (
              items.cartItems.map((item, i) => {
                return (
                  <>
                    <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                      <Card className="product-container">
                        <CardMedia
                          component="img"
                          height="140"
                          width="100"
                          image={item.image}
                          alt="green iguana"
                          style={{ objectFit: "contain",paddingTop: "15px" }}
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
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              paddingTop: "5px",
                            }}
                          >
                            <Typography variant="p">
                              Quantity: {item.cartQuantity}
                            </Typography>

                            <div>
                              <ButtonGroup
                                size="small"
                                aria-label="small button group"
                              >
                                <Button
                                  key="one"
                               
                                  onClick={() => addProduct(item)}
                                >
                                  <AddIcon />
                                </Button>
                                <Button
                                  key="two"
                                  onClick={() => decreaseProduct(item)}
                                >
                                  <RemoveIcon />
                                </Button>
                              </ButtonGroup>
                            </div>
                          </div>
                        </CardContent>
                        <CardActions
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div>
                            <Typography>${(item.price * item.cartQuantity).toFixed(2)}</Typography>
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
                                <DeleteIcon style={{ color: "#ff5757" }} />
                              }
                              onClick={() => handleRemove(item)}
                            >
                              Remove Card
                            </Button>
                          </div>
                        </CardActions>
                      </Card>
                    </Grid>
                  </>
                );
              })
            ) : (
              <Typography
                variant="h6"
                sx={{ paddingTop: "3rem", margin: "auto" }}
              >
                 <Button variant="contained" onClick={()=>navigate("/")} startIcon={<FastRewindIcon />}>
        Send
      </Button>
              </Typography>
            )}
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export default Cart;

import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { remove } from "../redux/CartSlice";
import { toast } from "react-toastify";



const Cart = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (item) =>{
    dispatch(remove(item))
    toast.warning("Remove product from cart successfully!!")

  }
  return (
    <div>
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
            {items.cartItems.map((item) => {
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
                              {item.title.substring(0, 10)}
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
                          {item.description.substring(0, 100)}
                        </Typography>
                        <Typography variant="h5" color="text.success">
                          Quantity: {item.cartQuantity}
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
                          <Typography sx={{ fontSize: "1rem", color: "teal" }}>
                            *******
                          </Typography>
                        </div>
                        <div>
                          <ShoppingCartIcon sx={{ mr: 1, fontSize: "20px" }} />
                          <Button variant="outlined" size="small" onClick={()=>handleRemove(item)}>
                            Remove Card
                          </Button>
                        </div>
                      </CardActions>
                    </Card>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export default Cart;

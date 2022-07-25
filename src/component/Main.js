import React, { useState } from "react";
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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import data from "../record.json"; 
import { fontSize } from "@mui/system";

const Main = () => {
  const [searchItem, setSearchItem] = useState('')



 
   
 
  return ( 
    <>
      <div className="main-container">
        <section>
          <div className="header-container">
            <div className="header-wraper">
              <div className="header">
                <div className="img_wraper">
                  <div className="searchBox">
                    <TextField
                      placeholder="Search"
                      onChange={(e)=>setSearchItem(e.target.value)}
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
        <section>
          <div className="">
            <Grid container  spacing={2} style={{padding: "3rem"}}>
                  
                      {
                        data.filter((item)=>{
                          if(searchItem == ''){
                            return item
                          }else if(item.title.toLowerCase().includes(searchItem.toLocaleLowerCase())){
                            return item

                          }

                        }).map((item)=>{
                          return (
                            <>
                              <Grid item xs={3} >
                    <Card className="product-container">
                      <CardMedia
                        component="img"
                        height="140"
                        image={item.image}
                        alt="green iguana"
                      />
                      <CardContent>
                        <div style={{display: "flex", justifyContent: "space-between", alignItems:"center"}}>
                          <div>
                          <Typography gutterBottom variant="h5" component="div">
                          {item.title}
                        </Typography>
                          </div>
                          <div>
                            <span><FavoriteIcon/></span>
                            
                          </div>
                        </div>
                        
                        <Typography variant="body2" color="text.secondary">
                          {item.desc}
                        </Typography>
                      </CardContent>
                      <CardActions sx={{display: "flex", justifyContent: "space-between"}}>
                        <div>
                            <Typography>${item.price}</Typography>
                            <Typography sx={{fontSize: '1rem', color: "teal", fontSize: "20px"}}>*******</Typography>
    
                        </div>
                        <div>
                        <ShoppingCartIcon sx={{mr:1, fontSize: "20px"}}/>
                        <Button variant="outlined" size="medium">LIVE PREVIEW</Button>
                        </div>
                      </CardActions>
                    </Card>
                  </Grid>
                  
                            </>
                          )
                      })
                      }
                     

            


              
              
              
              
              
              
              
              
              
              
              
            </Grid>
          </div>
        </section>
      </div>
    </>
  );
};

export default Main;

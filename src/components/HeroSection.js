import React from 'react'
import { Typography,Grid, Button } from '@mui/material';
import { Box } from '@mui/system';
import Cake from '../images/cake.png'

const HeroSection = () => {
    return (
        <Grid container direction="row" alignItems="center">
           <Grid item xs={12} sm={6} order={{xs:2,sm:1}}>
               <Typography variant="h3">
                  A bliss in every byte
               </Typography>
               <Typography variant="h5">
                  we offer tasty cakes and sweets for you.
               </Typography>
               <Button size="large" variant="contained" sx={{borderRadius:5}}>
                  Call us
               </Button>
           </Grid>
           <Grid container item xs={12} sm={6} justifyContent="center" order={{xs:1,sm:2}}>
               <Box component="img" src={Cake}/>
           </Grid>
        </Grid>
    )
}

export default HeroSection

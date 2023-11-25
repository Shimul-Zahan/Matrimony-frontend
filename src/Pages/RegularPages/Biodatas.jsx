import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import img from '../../assets/slider-resources/andy-holmes-XaQ-aaMJKgc-unsplash.jpg'
import TitleBar from '../../Utils/TitleBar';
import useAllBiodatas from '../../Hooks/useAllBiodatas';



const Biodatas = () => {

  const { data, refetch, isLoading } = useAllBiodatas();

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Container maxWidth='xl' sx={{ mt: 16, mb: 16 }}>
      <TitleBar title={'ALL BIODATAS'} subTitle={'All Users Biodata Here'}/>
      <Box container sx={{ width: '100%' }}>
        <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {
            data?.map((user, index) =>
              <Grid key={index} item xs={12} sm={12} md={6} lg={3}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 240 }}
                    image={img}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            )
          }
        </Grid>
      </Box>
    </Container>
  );
}

export default Biodatas
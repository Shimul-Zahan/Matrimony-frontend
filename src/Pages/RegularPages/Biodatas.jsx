import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import img from '../../assets/slider-resources/andy-holmes-XaQ-aaMJKgc-unsplash.jpg'
import TitleBar from '../../Utils/TitleBar';
import useAllBiodatas from '../../Hooks/useAllBiodatas';
import { Link } from 'react-router-dom';



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
                    sx={{ height: 240, width: 400 }}
                    image={user?.image}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Biodata ID: {user?.biodataId}
                    </Typography>
                    <Typography gutterBottom variant="body6" component="div" style={{ textTransform: 'capitalize' }}>
                      Occupation: {user?.occupation}
                    </Typography>
                    <Grid style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      textTransform: 'capitalize'
                    }}>
                      <Typography gutterBottom variant="body6" component="div" >
                        Biodata Type: {user?.biodataType}
                      </Typography>
                      <Typography gutterBottom variant="body6" component="div">
                        Age: {user?.age}
                      </Typography>
                    </Grid>
                    <Typography gutterBottom variant="body6" component="div" style={{ textTransform: 'capitalize' }}>
                      Permanent Division: {user?.permanentDivision}
                    </Typography>
                    <Typography variant="body6" color="text.secondary">

                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={`/viewDetails/${user?._id}`}>
                      <Button sx={{ backgroundColor: '#1976D2', color: '#000' }} size="lg">View Profile</Button>
                    </Link>
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
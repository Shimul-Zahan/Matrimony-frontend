import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, Card, CardActions, CardContent, CardMedia, Typography, capitalize } from '@mui/material';
import img from '../../assets/slider-resources/andy-holmes-XaQ-aaMJKgc-unsplash.jpg'
import TitleBar from '../../Utils/TitleBar';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import useAllBiodatas from '../../Hooks/useAllBiodatas';
// import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';


const PremiumMember = () => {

    const { data, refetch, isLoading } = useAllBiodatas();
    console.log(data)

    Aos.init({
        duration: "500"
    });

    if (isLoading) {
        return <Loading />
    }

    const premiumAccount = data?.filter(user => user.accountType === 'premium')


    return (
        <Box data-aos="fade-right" sx={{ width: '100%', mt: 4 }}>
            <TitleBar className='text-[#FFC436]' title={'Premium Section'} subTitle={'Here Our Some Premium Members'} />
            <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    premiumAccount?.map((user, index) =>
                        <Grid key={index} item xs={12} sm={6} md={4} lg={3}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Card sx={{ maxWidth: 345, backgroundColor: '#0C356A', color: '#FFC436' }}>
                                <CardMedia
                                    sx={{ height: 240, width: 400 }}
                                    image={user?.image}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Biodata ID: {user?.biodataId}
                                    </Typography>
                                    <Typography gutterBottom variant="body3" component="div" style={{ textTransform: 'capitalize' }}>
                                        Occupation: {user?.occupation}
                                    </Typography>
                                    <Grid style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        textTransform: 'capitalize'
                                    }}>
                                        <Typography gutterBottom variant="body3" component="div" >
                                            Biodata Type: {user?.biodataType}
                                        </Typography>
                                        <Typography gutterBottom variant="body3" component="div">
                                            Age: {user?.age}
                                        </Typography>
                                    </Grid>
                                    <Typography gutterBottom variant="body3" component="div" style={{ textTransform: 'capitalize' }}>
                                        Permanent Division: {user?.permanentDivision}
                                    </Typography>
                                    <Typography variant="body3" color="text.secondary">

                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link to={`/viewDetails/${user?._id}`}>
                                        <Button sx={{ backgroundColor: '#FFF0CE', color: '#000' }} size="lg">View Profile</Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                }
            </Grid>
        </Box>
    );
}

export default PremiumMember
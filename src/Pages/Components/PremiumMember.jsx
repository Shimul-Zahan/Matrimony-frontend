import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import img from '../../assets/slider-resources/andy-holmes-XaQ-aaMJKgc-unsplash.jpg'
import TitleBar from '../../Utils/TitleBar';


const PremiumMember = () => {

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch('./users.json')
            .then(res => res.json())
            .then(data => setDatas(data));
    }, [])

    return (
        <Box sx={{ width: '100%', mt: 4 }}>
            <TitleBar title={'Premium Section'} subTitle={'Here Our Some Premium Members'} />
            <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    datas?.slice(0, 6).map((data, index) => 
                        <Grid key={index} item xs={12} sm={6} md={4} lg={3}
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
    );
}

export default PremiumMember
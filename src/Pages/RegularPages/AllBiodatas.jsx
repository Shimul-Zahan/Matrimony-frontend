import React, { useContext, useEffect, useState } from 'react'
import Biodatas from './Biodatas'
import TitleBar from '../../Utils/TitleBar'
import useAxiosSecure from '../../Hooks/useAxiosSecure'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, Card, CardActions, CardContent, CardMedia, Container, Pagination, Stack, Typography } from '@mui/material';
import img from '../../assets/slider-resources/andy-holmes-XaQ-aaMJKgc-unsplash.jpg'
import useAllBiodatas from '../../Hooks/useAllBiodatas';
import { Link } from 'react-router-dom';
import { MyAuthContext } from '../../Context/AuthContext';
import useCount from '../../Hooks/useCount';
import { useQuery } from '@tanstack/react-query';

const AllBiodatas = () => {

    const [checkGender, setCheckGender] = useState('')
    const [check, setCheck] = useState('')
    const [lowAge, setLowAge] = useState('')
    const [highAge, setHighAge] = useState('')


    const [totalData, setTotalData] = useState(0)
    const [page, setPage] = useState(0)
    const axiosSecureInstance = useAxiosSecure();
    const totalPage = Math.ceil(parseInt(totalData / 4));
    const countableBtn = [...Array(totalPage).keys()]
    axiosSecureInstance.get("/count").then((res) => setTotalData(res.data.count))
    console.log(check, page, checkGender, lowAge, highAge, 'filter');

    const { data: allBiodata = [], isLoading } = useQuery({
        queryKey: ['allBioDatas', check, checkGender, page, highAge, lowAge],
        queryFn: async () => {
            const res = await axiosSecureInstance.get(`/filter-data?search=${check}&gender=${checkGender}&page=${page}&lowAge=${lowAge}&highAge=${highAge}`)
            return res.data;
        }
    })


    const handleFilterByAge = async (e) => {
        e.preventDefault();
        const lowAge = parseInt(e.target.lowAge.value);
        const highAge = parseInt(e.target.highAge.value);
        setLowAge(lowAge);
        setHighAge(highAge);
        setPage(0)
        setCheckGender('')
        setCheck('')
    }

    const handleCount = (event, value) => {
        setPage(value - 1)
        setCheck('')
        setCheckGender('')
        setLowAge('');
        setHighAge('');
    }

    const handleCheek = (e) => {
        const check = e.target.value
        setCheck(check);
        setCheckGender('');
        setPage(0)
        setLowAge('');
        setHighAge('');
    }

    const handleCheekGender = (e) => {
        const gender = e.target.value
        setCheckGender(gender);
        setCheck('');
        setPage(0);
        setLowAge('');
        setHighAge('');
    }

    return (
        <div className='pt-10 min-h-screen'>
            <TitleBar title={'ALL BIODATAS'} />
            <div className="container mx-auto grid grid-cols-1 gap-4 lg:grid-cols-[300px_1fr] lg:gap-8">
                <div className="space-y-2 px-5">
                    <div className='w-full lg:px-0'>
                        <h1 className='text-base text-indigo-700'>Filter by Biodata Type</h1>
                        <select onChange={handleCheek}
                            className="mt-1.5 w-full text-lg px-2 py-3 rounded-lg border-black border-2 text-gray-700 sm:text-sm"
                        >
                            <option disabled className='text-lg' value="gender">Filter by Biodata Type</option>
                            <option className='text-lg' value="male">Male</option>
                            <option className='text-lg' value="female">Female</option>
                        </select>
                    </div>
                    <div className='w-full text-lg lg:px-0'>
                        <h1 className='text-base text-indigo-700'>Filter by division</h1>
                        <select onChange={handleCheekGender}
                            className="mt-1.5 w-full px-2 py-3 rounded-lg border-black border-2 text-gray-700 sm:text-sm"
                        >
                            <option disabled className='text-lg' value="default">Filter by Division</option>
                            <option className='text-lg' value="dhaka">Dhaka</option>
                            <option className='text-lg' value="rajshahi">Rajshahi</option>
                            <option className='text-lg' value="chattagram">Chittagone</option>
                            <option className='text-lg' value="barisal">Barisal</option>
                            <option className='text-lg' value="sylet">Sylet</option>
                            <option className='text-lg' value="rangpur">Rangpur</option>
                            <option className='text-lg' value="khulna">Khulna</option>
                            <option className='text-lg' value="mymensingh">Mymensingh</option>
                        </select>
                    </div>
                    <details
                        className="overflow-hidden rounded border-black border-2"
                    >
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
                        >
                            <span className="text-base font-medium"> Age </span>
                        </summary>

                        <div className="border-t border-gray-200 bg-white">
                            <div className="border-t border-gray-200 p-4">
                                <form onSubmit={handleFilterByAge} className=''>
                                    <div className="flex justify-between flex-col gap-4">
                                        <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                                            <span className="text-sm text-gray-600">Min age</span>

                                            <input
                                                type="number"
                                                name="lowAge"
                                                placeholder="From"
                                                className="w-full text-lg rounded-md border-gray-200 shadow-sm sm:text-sm"
                                            />
                                        </label>

                                        <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                                            <span className="text-sm text-gray-600">Max age</span>

                                            <input
                                                type="number"
                                                name='highAge'
                                                placeholder="To"
                                                className="w-full rounded-md text-lg border-gray-200 shadow-sm sm:text-sm"
                                            />
                                        </label>
                                        <button type='submit' className='bg-indigo-500 rounded-sm p-1'>Filter</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </details>
                </div>

                <div className="w-full">
                    <Container maxWidth='xl' sx={{ mb: 5 }}>
                        <Box container sx={{ width: '100%' }}>
                            <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 0 }}>
                                {
                                    allBiodata?.map((user, index) =>
                                        <Grid key={index} item xs={12} sm={12} md={6} lg={4}
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
                    <Stack spacing={3} sx={{ my: 10 }}>
                        <Pagination count={countableBtn.length} page={page + 1} onChange={handleCount} variant="outlined" shape="rounded" />
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default AllBiodatas
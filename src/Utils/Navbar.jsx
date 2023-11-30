import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { ListItem } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css'
import { MyAuthContext } from '../Context/AuthContext';
import fetchAdmin from '../Hooks/fetchAdmin';
import logo from '../assets/logo/logo.png'


const Navbar = () => {

    const { user, logOut } = React.useContext(MyAuthContext);
    const {admin}=fetchAdmin()
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleSignOut = () => {
        logOut()
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <AppBar position="fixed" sx={{ fontFamily: 'cursive', backgroundColor: '#0C356A'}} >
                <Container sx={{ padding: 1 }} maxWidth="xl">
                    <Toolbar disableGutters>
                        <img src={logo} alt="" className='w-12 h-12 hidden lg:block' />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                textDecoration: 'none',
                                color: '#FFC436'
                            }}
                        >
                            MEMORY
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="#FFC436"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <NavLink to='/' sx={{ color: '#FFC436'}}>
                                    <MenuItem sx={{ fontFamily: 'cursive', color: '#FFC436' }}>HOME</MenuItem>
                                </NavLink>
                                <NavLink to='/biodata'>
                                    <MenuItem sx={{ fontFamily: 'cursive', color: '#FFC436' }}>BIODATAS</MenuItem>
                                </NavLink>
                                <NavLink to='/about-us'>
                                    <MenuItem sx={{ fontFamily: 'cursive', color: '#FFC436' }}>ABOUT US</MenuItem>
                                </NavLink>
                                <NavLink to='/contact-us'>
                                    <MenuItem sx={{ fontFamily: 'cursive', color: '#FFC436' }}>CONTACT</MenuItem>
                                </NavLink>
                                {
                                    user && admin?.isAdmin ? <NavLink to='/dashboard/admin-dashboard'>
                                        <MenuItem sx={{ fontFamily: 'cursive', color: '#FFC436' }}>DASHBOARD</MenuItem>
                                    </NavLink> :
                                        user && user && <NavLink to='/dashboard/edit-biodata'>
                                            <MenuItem sx={{ fontFamily: 'cursive', color: '#FFC436' }}>DASHBOARD</MenuItem>
                                        </NavLink>
                                }
                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: '#FFC436',
                                textDecoration: 'none',
                            }}
                        >
                            MEMORY
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <NavLink to='/'>
                                <MenuItem sx={{ fontFamily: 'cursive', color: '#FFC436' }}>HOME</MenuItem>
                            </NavLink>
                            <NavLink to='/biodata'>
                                <MenuItem sx={{ fontFamily: 'cursive', color: '#FFC436' }}>BIODATAS</MenuItem>
                            </NavLink>
                            <NavLink to='/about-us'>
                                <MenuItem sx={{ fontFamily: 'cursive', color: '#FFC436' }}>ABOUT US</MenuItem>
                            </NavLink>
                            <NavLink to='/contact-us'>
                                <MenuItem sx={{ fontFamily: 'cursive', color: '#FFC436' }}>CONTACT</MenuItem>
                            </NavLink>
                            {
                                user && admin?.isAdmin ? <NavLink to='/dashboard/admin-dashboard'>
                                    <MenuItem sx={{ fontFamily: 'cursive', color: '#FFC436' }}>DASHBOARD</MenuItem>
                                </NavLink> :
                                    user && user && <NavLink to='/dashboard/edit-biodata'>
                                        <MenuItem sx={{ fontFamily: 'cursive', color: '#FFC436' }}>DASHBOARD</MenuItem>
                                    </NavLink>
                            }
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, justifyContent: 'center', alignItems: 'center', }}>
                                <Tooltip title="Sign In" sx={{}} >
                                    {
                                        user ? 
                                            <Link onClick={handleSignOut}>
                                                <Button sx={{ fontFamily: 'cursive', backgroundColor: '#FFC436' }} variant="contained" color="success">LOG OUT</Button>
                                            </Link> :
                                            <Link to='signin'>
                                                <Button sx={{ fontFamily: 'cursive', backgroundColor: '#FFC436' }} variant="contained" color="success">SIGN IN</Button>
                                            </Link>
                                    }
                                </Tooltip>
                                <Tooltip sx={{ml: 1}} title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} >
                                        <Avatar alt="Remy Sharp" src={user?.photoURL} />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <ListItem>
                                    <NavLink>PROFILE</NavLink>
                                </ListItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default Navbar
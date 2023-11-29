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
            <AppBar position="fixed" sx={{ fontFamily: 'cursive', backgroundColor: '#164863'}} >
                <Container sx={{ padding: 1 }} maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
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
                                <NavLink to='/'>
                                    <MenuItem sx={{ fontFamily: 'cursive' }}>HOME</MenuItem>
                                </NavLink>
                                <NavLink to='/biodata'>
                                    <MenuItem sx={{ fontFamily: 'cursive' }}>BIODATAS</MenuItem>
                                </NavLink>
                                <NavLink to='/about-us'>
                                    <MenuItem sx={{ fontFamily: 'cursive' }}>ABOUT US</MenuItem>
                                </NavLink>
                                <NavLink to='/contact-us'>
                                    <MenuItem sx={{ fontFamily: 'cursive' }}>CONTACT</MenuItem>
                                </NavLink>
                                {
                                    user && admin?.isAdmin ? <NavLink to='/dashboard/admin-dashboard'>
                                        <MenuItem sx={{ fontFamily: 'cursive' }}>DASHBOARD</MenuItem>
                                    </NavLink> :
                                        user && user && <NavLink to='/dashboard/edit-biodata'>
                                            <MenuItem sx={{ fontFamily: 'cursive' }}>DASHBOARD</MenuItem>
                                        </NavLink>
                                }
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
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
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <NavLink to='/'>
                                <MenuItem sx={{ fontFamily: 'cursive' }}>HOME</MenuItem>
                            </NavLink>
                            <NavLink to='/biodata'>
                                <MenuItem sx={{ fontFamily: 'cursive' }}>BIODATAS</MenuItem>
                            </NavLink>
                            <NavLink to='/about-us'>
                                <MenuItem sx={{ fontFamily: 'cursive' }}>ABOUT US</MenuItem>
                            </NavLink>
                            <NavLink to='/contact-us'>
                                <MenuItem sx={{ fontFamily: 'cursive' }}>CONTACT</MenuItem>
                            </NavLink>
                            {
                                user && admin?.isAdmin ? <NavLink to='/dashboard/admin-dashboard'>
                                    <MenuItem sx={{ fontFamily: 'cursive' }}>DASHBOARD</MenuItem>
                                </NavLink> :
                                    user && user && <NavLink to='/dashboard/edit-biodata'>
                                        <MenuItem sx={{ fontFamily: 'cursive' }}>DASHBOARD</MenuItem>
                                    </NavLink>
                            }
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, justifyContent: 'center', alignItems: 'center', }}>
                                <Tooltip title="Sign In" sx={{}} >
                                    {
                                        user ? 
                                            <Link onClick={handleSignOut}>
                                                <Button sx={{ fontFamily: 'cursive' }} variant="contained" color="success">LOG OUT</Button>
                                            </Link> :
                                            <Link to='signin'>
                                                <Button sx={{ fontFamily: 'cursive' }} variant="contained" color="success">SIGN IN</Button>
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
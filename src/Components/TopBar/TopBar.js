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
import {useNavigate} from 'react-router-dom'
import UseAPI from "../../Hooks/UseAPI";
import {AccountCircle, PowerSettingsNew} from "@mui/icons-material";
import Divider from "@mui/material/Divider";
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const TopBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate()
    const {userLogOut} = UseAPI()
    const handleSubmit = () =>{
        userLogOut(navigate)
    }
    // const logOut = () =>{
    //     localStorage.removeItem("user");
    //     navigate('/')
    //     successNotify('User Logout Successfully')
    //     window.location.reload()
    // }
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

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        LOGO
                    </Typography>

                    {/*<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>*/}
                    {/*    <IconButton*/}
                    {/*        size="large"*/}
                    {/*        aria-label="account of current user"*/}
                    {/*        aria-controls="menu-appbar"*/}
                    {/*        aria-haspopup="true"*/}
                    {/*        onClick={handleOpenNavMenu}*/}
                    {/*        color="inherit"*/}
                    {/*    >*/}
                    {/*        <MenuIcon />*/}
                    {/*    </IconButton>*/}
                    {/*    <Menu*/}
                    {/*        id="menu-appbar"*/}
                    {/*        anchorEl={anchorElNav}*/}
                    {/*        anchorOrigin={{*/}
                    {/*            vertical: 'bottom',*/}
                    {/*            horizontal: 'left',*/}
                    {/*        }}*/}
                    {/*        keepMounted*/}
                    {/*        transformOrigin={{*/}
                    {/*            vertical: 'top',*/}
                    {/*            horizontal: 'left',*/}
                    {/*        }}*/}
                    {/*        open={Boolean(anchorElNav)}*/}
                    {/*        onClose={handleCloseNavMenu}*/}
                    {/*        sx={{*/}
                    {/*            display: { xs: 'block', md: 'none' },*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        {pages.map((page) => (*/}
                    {/*            <MenuItem key={page} onClick={handleCloseNavMenu}>*/}
                    {/*                <Typography textAlign="center">{page}</Typography>*/}
                    {/*            </MenuItem>*/}
                    {/*        ))}*/}
                    {/*    </Menu>*/}
                    {/*</Box>*/}
                    <Box sx={{ flexGrow: 1}}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            LOGO HERE
                        </Typography>
                    </Box>
                    {/*<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>*/}
                    {/*    {pages.map((page) => (*/}
                    {/*        <Button*/}
                    {/*            key={page}*/}
                    {/*            onClick={handleCloseNavMenu}*/}
                    {/*            sx={{ my: 2, color: 'white', display: 'block' }}*/}
                    {/*        >*/}
                    {/*            {page}*/}
                    {/*        </Button>*/}
                    {/*    ))}*/}
                    {/*</Box>*/}

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
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
                            <MenuItem>
                                <Typography sx={{ textAlign:"center", display: 'flex', alignItems: 'center' }}>
                                    <AccountCircle sx={{fontSize: '22px', mr: 1}} />Profile
                                </Typography>
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <Typography onClick={handleSubmit} sx={{ color: "#f00143", textAlign:"center", display: 'flex', alignItems: 'center' }}>
                                    <PowerSettingsNew sx={{fontSize: '22px', mr: 1}} />Logout
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default TopBar;
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {
  Link
} from "react-router-dom";

const pages = ['Home ','Recipes','Article','Contact','Purchase'];

const Navbar = () => {
  const styleTheme= {
    link:{
      fontSize: '14px',
      lineHeight:'18.55px',
      color:'#171717',
    },
    linkActive:{
      fontSize: '14px',
      lineHeight:'18.55px',
      color:'#C9A96E',
    }
  }
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
  
    return (
      <AppBar position='relative' style={{ background: '#F2F2F2' }}>
        <Container maxWidth="xl">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              color="common.black"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              LOGO
            </Typography>
  
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } ,color: 'common.black'}}>
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
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" >{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            
            <Typography
              variant="h6"
              noWrap
              component="div"
              color="common.black"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              LOGO
            </Typography>
            
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }
            ,justifyContent: 'flex-end'}}>
              {pages.map((page,index) => {
                if(index==0){
                  return <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, display: 'block' }}
                    style={styleTheme.linkActive}
                    >
                      {page}
                    </Button>
                }else{
                  return <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: 'block' }}
                  style={styleTheme.link}
                  >
                    {page}
                  </Button>
                }
              })}
              <Button
                  key="Login"
                  sx={{ my: 2, display: 'block' }}
                  style={styleTheme.link}
                  >
                  <Link to="/login">Login</Link>
                </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  };

export default Navbar;
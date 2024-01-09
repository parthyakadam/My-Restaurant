import React, {useState} from 'react'
import  { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import "../styles/HeaderStyles.css"
import Logo from '../images/logo.svg'

const Header = () => {

  const [mobileOpen, setMobileOpen] = useState(false)

  // handle menu click
  const handleDrawerToggle = () =>{
    setMobileOpen(!mobileOpen)
  }

  // menu drawer
  const drawer = (
    // Box component wraps the entire content of the drawer
    <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>

      {/* Typography component is used to display text content */}
      <Typography 
        color={'goldenrod'} 
        variant='h6'
        component="div" 
        sx={{flexGrow: 1, my: 2}}
      >
       <img src={Logo} alt="logo" height={'70'} width={'250'}/>
      </Typography>

      {/* Divider component puts a horizontal line like hr tag */}
      <Divider/>
        <ul className='mobile-navigation'>
          <li>
            <NavLink className={'active'} to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/about'}>About</NavLink>
          </li>
          <li>
            <NavLink to={'/menu'}>Menu</NavLink>
          </li>
          <li>
            <NavLink to={'/contact'}>Contact</NavLink>
          </li>
        </ul>
    </Box>
  )

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          {/* Wrapping all the content inside toolbar component as it aligns all the contents in a neat row */}
          <Toolbar>
            <IconButton
              color='inherit'
              edge='start'
              sx={{
                mr:2,
                display: {sm: "none"}
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon/>
            </IconButton>
            <Typography 
              color={'goldenrod'} 
              variant='h6' 
              component="div" 
              sx={{flexGrow: 1}}
            >
              <img src={Logo} alt='logo' height={'70'} width={'200'}></img>
            </Typography>
            <Box sx={{display: {xs: 'none', sm: 'block'}}}>
              <ul className='navigation-menu'>
                <li>
                  <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={'/about'}>About</NavLink>
                </li>
                <li>
                  <NavLink to={'/menu'}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={'/contact'}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component={'nav'}>
              {/* Drawer component creates a toggle nav bar */}

              {/* varient= 'temporary' means the navbar is temporary and is only for small screens
                  open={mobileOpen} sets state to drawer to note if the drawer is open or close
                  onClose toggles the navbar
              */}


              <Drawer 
                variant='temporary' 
                open={mobileOpen} 
                onClose={handleDrawerToggle}
                sx={{display: 
                      {sx:'block', 
                       sm: 'none'},
                       "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: "240px"
                       }  
                    }}
              >
                {/* provides the content that goes inside the drawer component where we're using the above created drawer constant here */}
                {drawer}
              </Drawer>
        </Box>
        <Toolbar/>
      </Box>
    </>
  )
}

export default Header
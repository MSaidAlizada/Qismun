import React from "react";
import {BrowserView, MobileView} from 'react-device-detect';
import { Link as RouterLink } from 'react-router-dom';
import {Menu ,Link, MenuItem, Box, Toolbar, IconButton,Drawer, CssBaseline, List, Typography, Divider, ListItem, ListItemButton, ListItemIcon, AppBar} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 270;

const Navigator = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <BrowserView>
                <Box sx={{display: 'flex'}}>
                    <CssBaseline />
                    <Drawer variant="permanent" anchor="left" sx={{width: drawerWidth,flexShrink: 0,[`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },}}>
                        <Box sx={{paddingTop: 3}}>
                            <Divider sx={{ backgroundColor: "#6b87b1"}} style={{height: 15, borderRadius: 10, width: 250, margin: "auto"}}/>
                            <List>
                                <ListItem>
                                    <ListItemButton component={RouterLink} to="/Qismun/" sx={{justifyContent: "center"}}>
                                        <Typography variant="h6" sx={{fontFamily: "Nunito", color: "#6b87b1"}}>Home</Typography>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton component={RouterLink} to="/Qismun/about" sx={{justifyContent: "center"}}>
                                        <Typography variant="h6" sx={{fontFamily: "Nunito", color: "#6b87b1"}}>About Us</Typography>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton component={RouterLink} to="/Qismun/conference" sx={{justifyContent: "center"}}>
                                        <Typography variant="h6" sx={{fontFamily: "Nunito", color: "#6b87b1"}}>Conference</Typography>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton component={RouterLink} to="/Qismun/press" sx={{justifyContent: "center"}}>
                                        <Typography variant="h6" sx={{fontFamily: "Nunito", color: "#6b87b1"}}>Press</Typography>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                            <Divider sx={{ backgroundColor: "#6b87b1" }} style={{ height: 15, borderRadius: 10, width: 250, margin: "auto" }} />
                            <List>
                                <ListItem>
                                    <Typography variant="h5" sx={{ fontFamily: "Nunito", color: "#6b87b1"}}>Contacts</Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><EmailIcon sx={{color: "#6b87b1"}} /></ListItemIcon>
                                    <Typography variant="p" sx={{ fontFamily: "Nunito", color: "#6b87b1"}}>info@qis.org</Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><CallIcon sx={{color: "#6b87b1"}}/></ListItemIcon>
                                    <Typography variant="p" sx={{ fontFamily: "Nunito", color: "#6b87b1"}}>+974 4483 3456</Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><LocationOnIcon sx={{color: "#6b87b1"}}/></ListItemIcon>
                                    <Link variant="p" underline="none" href="https://www.google.com/maps/place/Qatar+International+School/@25.3289842,51.5192342,17z/data=!3m1!4b1!4m6!3m5!1s0x3e45c4b1967d62a9:0xe53aab5471d019fc!8m2!3d25.3289842!4d51.5214229!16s%2Fm%2F03cc0hg" sx={{ fontFamily: "Nunito", color: "#6b87b1"}}>United Nations Street, Doha Qatar</Link>
                                </ListItem>
                            </List>
                        </Box>
                    </Drawer>
                </Box>
            </BrowserView>
            <MobileView>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" sx={{bgcolor:"white", marginBottom: "10px"}}>
                        <Toolbar sx={{justifyContent: 'right'}}>
                            <Typography color="inherit" variant="h6" component={RouterLink} to="Qismun/" sx={{color: "#899fc1", fontFamily: "STIX Two Text", textDecoration: 'none', marginRight: "auto" }}>QISMUN</Typography>
                            <IconButton onClick={handleClick}><MenuIcon/></IconButton>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose} component={RouterLink} to="Qismun/">Home</MenuItem>
                                <MenuItem onClick={handleClose} component={RouterLink} to="Qismun/about">About us</MenuItem>
                                <MenuItem onClick={handleClose} component={RouterLink} to="Qismun/conference">Conference</MenuItem>
                                <MenuItem onClick={handleClose} component={RouterLink} to="Qismun/press">Press</MenuItem>
                            </Menu>
                        </Toolbar>
                    </AppBar>
                </Box>
            </MobileView>
        </div>
     );
}
 
export default Navigator;
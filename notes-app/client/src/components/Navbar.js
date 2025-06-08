import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { Switch, FormControlLabel } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';

const Navbar = ({ darkMode, setDarkMode }) => {
const [drawerOpen, setDrawerOpen] = useState(false);

const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Notes', to: '/notes' },
    { label: 'To-Dos', to: '/todos' },
];

return (
    <>
    <AppBar
        position="static"
        color={darkMode ? "primary" : "default"}
        sx={{
        backgroundColor: darkMode ? "#1e1e1e" : "#fff",
        color: darkMode ? "#e0e0e0" : "#000",
        boxShadow: "none",
        }}
    >
        <Toolbar>
          {/* Hamburger menu for small screens */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ mr: 2 }}
            >
            <MenuIcon />
            </IconButton>
        </Box>
          {/* App title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MATHE Notes
        </Typography>
          {/* Navigation buttons for medium and up */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navLinks.map((link) => (
            <Button
                key={link.to}
                color="inherit"
                component={Link}
                to={link.to}
                sx={{ ml: 1 }}
            >
                {link.label}
            </Button>
            ))}
        </Box>
          {/* Dark mode toggle */}
        <FormControlLabel
            control={
            <Switch
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                color="primary"
            />
            }
            label={darkMode ? 'Dark Mode' : 'Light Mode'}
            sx={{ ml: 2 }}
        />
        </Toolbar>
    </AppBar>
      {/* Drawer for mobile navigation */}
    <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
        sx: {
            backgroundColor: darkMode ? "#1e1e1e" : "#fff",
            color: darkMode ? "#e0e0e0" : "#000",
        },
        }}
    >
        <Box sx={{ width: 200 }} role="presentation" onClick={() => setDrawerOpen(false)}>
<List>
{navLinks.map((link) => (
    <ListItem button component={Link} to={link.to} key={link.to}>
    <ListItemText
        primary={link.label}
        sx={{
          color: darkMode ? "#e0e0e0" : "#222", // Ensures visibility in both themes
        fontWeight: 600,
        }}
    />
    </ListItem>
))}
            <ListItem>
            <FormControlLabel
                control={
                <Switch
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                    color="primary"
                />
                }
                label={darkMode ? 'Dark Mode' : 'Light Mode'}
                sx={{
                  // Ensure label is visible in both themes
                color: darkMode ? "#e0e0e0" : "#222",
                fontWeight: 600,
                ml: 1,
                  // Optional: improve accessibility
                '.MuiFormControlLabel-label': {
                    color: darkMode ? "#e0e0e0" : "#222",
                }
                }}
            />
            </ListItem>
        </List>
        </Box>
    </Drawer>
    </>
);
};

export default Navbar;
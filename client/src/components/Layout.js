import { Container, Box } from '@mui/material';
import Navbar from './Navbar';
import React from 'react';

const Layout = ({ children, darkMode, toggleDarkMode }) => {
return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
    <Navbar darkMode={darkMode} setDarkMode={toggleDarkMode} />
    <Container maxWidth="md" sx={{ py: 4 }}>
        {children}
    </Container>
    </Box>
);
};

export default Layout;
import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
    <Typography variant="h3" gutterBottom>
        Welcome to MATHE Notes App
    </Typography>
    <Typography variant="body1" paragraph>
        A simple app to manage your notes and to-do lists.
    </Typography>
    <Box sx={{ mt: 4 }}>
        <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/notes"
        sx={{ mr: 2 }}
        >
        View Notes
        </Button>
        <Button
        variant="contained"
        color="secondary"
        component={Link}
        to="/todos"
        >
        View To-Dos
        </Button>
    </Box>
    </Box>
);
};

export default Home;
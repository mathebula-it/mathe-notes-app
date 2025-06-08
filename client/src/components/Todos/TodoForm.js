import { useState } from 'react';
import {
Box,
TextField,
Button,
Paper,
Typography
} from '@mui/material';

const TodoForm = ({ onAdd }) => {
const [text, setText] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    onAdd({ text });
    setText('');
};

return (
    <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
    <Typography variant="h6" gutterBottom>
        Add New To-Do
    </Typography>
    <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', gap: 2 }}
    >
        <TextField
        label="What needs to be done?"
        variant="outlined"
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
        <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ whiteSpace: 'nowrap' }}
        >
        Add
        </Button>
    </Box>
    </Paper>
);
};

export default TodoForm;
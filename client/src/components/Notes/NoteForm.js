import { useState } from 'react';
import {
Box,
TextField,
Button,
Paper,
Typography
} from '@mui/material';

const NoteForm = ({ onAdd }) => {
const [title, setTitle] = useState('');
const [content, setContent] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;

    onAdd({ title, content });
    setTitle('');
    setContent('');
};

return (
    <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
    <Typography variant="h6" gutterBottom>
        Add New Note
    </Typography>
    <Box component="form" onSubmit={handleSubmit}>
        <TextField
        label="Title"
        variant="outlined"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ mb: 2 }}
        />
        <TextField
        label="Content"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        sx={{ mb: 2 }}
        />
        <Button
        type="submit"
        variant="contained"
        color="primary"
        >
        Add Note
        </Button>
    </Box>
    </Paper>
);
};
export default NoteForm;
import { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import NotesList from '../components/Notes/NotesList';
import NoteForm from '../components/Notes/NoteForm';
import axios from 'axios';

const NotesPage = () => {
const [notes, setNotes] = useState([]);

useEffect(() => {
    fetchNotes();
}, []);

const fetchNotes = async () => {
    try {
    const response = await axios.get('http://localhost:5000/api/notes');
    setNotes(response.data);
    } catch (error) {
    console.error('Error fetching notes:', error);
    }
};

const addNote = async (note) => {
    try {
    const response = await axios.post('http://localhost:5000/api/notes', note);
    setNotes([response.data, ...notes]);
    } catch (error) {
    console.error('Error adding note:', error);
    }
};

const updateNote = async (id, updatedNote) => {
    try {
    await axios.put(`http://localhost:5000/api/notes/${id}`, updatedNote);
    fetchNotes();
    } catch (error) {
    console.error('Error updating note:', error);
    }
};

const deleteNote = async (id) => {
    try {
    await axios.delete(`http://localhost:5000/api/notes/${id}`);
    setNotes(notes.filter(note => note._id !== id));
    } catch (error) {
    console.error('Error deleting note:', error);
    }
};

return (
    <Box>
    <Button
        component={Link}
        to="/"
        variant="contained"
        color="primary"
        sx={{ mb: 2 }}
    >
        Home
    </Button>
    <Typography variant="h4" gutterBottom>
        Notes
    </Typography>
    <NoteForm onAdd={addNote} />
    <NotesList
        notes={notes}
        onUpdate={updateNote}
        onDelete={deleteNote}
    />
    </Box>
);
};

export default NotesPage;
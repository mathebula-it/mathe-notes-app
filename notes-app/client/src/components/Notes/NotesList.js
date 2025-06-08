import { Box, Typography } from '@mui/material';
import NoteItem from './NoteItem';

const NotesList = ({ notes, onUpdate, onDelete }) => {
return (
    <Box>
    {notes.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="body1">
            No notes yet. Add your first note above!
        </Typography>
        </Box>
    ) : (
        notes.map((note) => (
        <NoteItem
            key={note._id}
            note={note}
            onUpdate={onUpdate}
            onDelete={onDelete}
        />
        ))
    )}
    </Box>
);
};

export default NotesList;
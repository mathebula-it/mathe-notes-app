import {
useState,
useEffect
} from 'react';
import {
Paper,
Typography,
Button,
Box,
TextField
} from '@mui/material';
import {
Edit as EditIcon,
Delete as DeleteIcon,
Save as SaveIcon,
Cancel as CancelIcon
} from '@mui/icons-material';

const NoteItem = ({ note, onUpdate, onDelete }) => {
const [isEditing, setIsEditing] = useState(false);
const [editedTitle, setEditedTitle] = useState(note.title);
const [editedContent, setEditedContent] = useState(note.content);

useEffect(() => {
    setEditedTitle(note.title);
    setEditedContent(note.content);
}, [note]);

const handleUpdate = () => {
    onUpdate(note._id, {
    title: editedTitle,
    content: editedContent
    });
    setIsEditing(false);
};

const handleCancel = () => {
    setEditedTitle(note.title);
    setEditedContent(note.content);
    setIsEditing(false);
};

return (
    <Paper elevation={2} sx={{ p: 3, mb: 2 }}>
    {isEditing ? (
        <Box>
        <TextField
            label="Title"
            variant="outlined"
            fullWidth
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            sx={{ mb: 2 }}
        />
        <TextField
            label="Content"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            sx={{ mb: 2 }}
        />
        <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
            variant="contained"
            color="primary"
            startIcon={<SaveIcon />}
            onClick={handleUpdate}
            >
            Save
            </Button>
            <Button
            variant="outlined"
            color="secondary"
            startIcon={<CancelIcon />}
            onClick={handleCancel}
            >
            Cancel
            </Button>
        </Box>
        </Box>
    ) : (
        <Box>
        <Typography variant="h6" gutterBottom>
            {note.title}
        </Typography>
        <Typography variant="body1" paragraph sx={{ whiteSpace: 'pre-wrap' }}>
            {note.content}
        </Typography>
        <Typography variant="caption" color="text.secondary">
            Last updated: {new Date(note.updatedAt).toLocaleString()}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
            <Button
            variant="outlined"
            startIcon={<EditIcon />}
            onClick={() => setIsEditing(true)}
            >
            Edit
            </Button>
            <Button
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={() => onDelete(note._id)}
            >
            Delete
            </Button>
        </Box>
        </Box>
    )}
    </Paper>
);
};

export default NoteItem;

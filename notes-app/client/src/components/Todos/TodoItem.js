import {
ListItem,
ListItemButton,
ListItemIcon,
ListItemText,
Checkbox,
IconButton
} from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

const TodoItem = ({ todo, onToggle, onDelete }) => {
return (
    <ListItem
    secondaryAction={
        <IconButton
        edge="end"
        aria-label="delete"
        onClick={() => onDelete(todo._id)}
        >
        <DeleteIcon />
        </IconButton>
    }
    disablePadding
    >
    <ListItemButton onClick={() => onToggle(todo._id)} dense>
        <ListItemIcon>
        <Checkbox
            edge="start"
            checked={todo.completed}
            tabIndex={-1}
            disableRipple
        />
        </ListItemIcon>
        <ListItemText
        primary={todo.text}
        sx={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            color: todo.completed ? 'text.disabled' : 'text.primary'
        }}
        />
    </ListItemButton>
    </ListItem>
);
};

export default TodoItem;
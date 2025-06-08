import { List, Box, Typography } from '@mui/material';
import TodoItem from './TodoItem';

const TodosList = ({ todos, onToggle, onDelete }) => {
return (
    <Box>
    {todos.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="body1">
            No to-dos yet. Add your first task above!
        </Typography>
        </Box>
    ) : (
        <List dense>
        {todos.map((todo) => (
            <TodoItem
            key={todo._id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            />
        ))}
        </List>
    )}
    </Box>
);
};

export default TodosList;
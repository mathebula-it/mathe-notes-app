import { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import TodosList from '../components/Todos/TodosList';
import TodoForm from '../components/Todos/TodoForm';
import axios from 'axios';

const TodosPage = () => {
const [todos, setTodos] = useState([]);

useEffect(() => {
    fetchTodos();
}, []);

const fetchTodos = async () => {
    try {
    const response = await axios.get('http://localhost:5000/api/todos');
    setTodos(response.data);
    } catch (error) {
    console.error('Error fetching todos:', error);
    }
};

const addTodo = async (todo) => {
    try {
    const response = await axios.post('http://localhost:5000/api/todos', todo);
    setTodos([response.data, ...todos]);
    } catch (error) {
    console.error('Error adding todo:', error);
    }
};

const toggleTodo = async (id) => {
    try {
    await axios.put(`http://localhost:5000/api/todos/${id}`);
    fetchTodos();
    } catch (error) {
    console.error('Error toggling todo:', error);
    }
};

const deleteTodo = async (id) => {
    try {
    await axios.delete(`http://localhost:5000/api/todos/${id}`);
    setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
    console.error('Error deleting todo:', error);
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
        To-Do List
    </Typography>
    <TodoForm onAdd={addTodo} />
    <TodosList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
    />
    </Box>
);
};

export default TodosPage;
const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Get all todos
router.get('/', async (req, res) => {
try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
} catch (err) {
    res.status(500).json({ message: err.message });
}
});

// Create a new todo
router.post('/', async (req, res) => {
const todo = new Todo({
    text: req.body.text
});

try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
} catch (err) {
    res.status(400).json({ message: err.message });
}
});

// Update a todo (toggle completed status)
router.put('/:id', async (req, res) => {
try {
    const todo = await Todo.findById(req.params.id);
    todo.completed = !todo.completed;
    const updatedTodo = await todo.save();
    res.json(updatedTodo);
} catch (err) {
    res.status(400).json({ message: err.message });
}
});

// Delete a todo
router.delete('/:id', async (req, res) => {
try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Todo deleted' });
} catch (err) {
    res.status(500).json({ message: err.message });
}
});

module.exports = router;
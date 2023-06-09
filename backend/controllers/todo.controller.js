const { Todo } = require('../models/todo.model');

const createTodo = async (req, res, next) => {
    const {
        todoTitle,
        todoCreationTime,
        todoDescription,
        todoDeadline,
        todoCompletionTime,
        todoIsPending
    } = req.body;
    try {
        const newTodo = await Todo.create({
            todoTitle,
            todoCreationTime,
            todoDescription,
            todoDeadline,
            todoCompletionTime,
            todoIsPending
        });
        res.status(201).json(newTodo);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Server error'
        });
        next(err);
    }
};

const getTodoById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const todo = await Todo.findByPk(id);
        if (!todo) {
            return res.status(404).json({
                message: 'Todo not found'
            });
        }
        res.status(200).json(todo);
    } catch (error) {
        next(error);
    }
};

const getAllTodos = async (req, res, next) => {
    try {
        const todos = await Todo.findAll();
        if (!todos) {
            return res.status(404).json({
                message: 'Todo not found'
            });
        }
        res.status(200).json(todos);
    } catch (err) {
        next(err);
    }
}

const updateTodoById = async (req, res, next) => {
    const { id } = req.params;
    const { todoTitle, todoDescription, todoDeadline, todoCompletionTime, todoIsPending } = req.body;
    try {
        const todo = await Todo.findByPk(id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        todo.todoTitle = todoTitle;
        todo.todoDeadline = todoDeadline;
        todo.todoCompletionTime = todoCompletionTime;
        todo.todoIsPending = todoIsPending;
        todo.todoDescription = todoDescription;
        await todo.save();
        res.status(200).json(todo);
    } catch (error) {
        next(error);
    }
};

const deleteTodoById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const todo = await Todo.findByPk(id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        await todo.destroy();
        res.status(204).end();
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllTodos,
    createTodo,
    getTodoById,
    updateTodoById,
    deleteTodoById
}

const { Todo } = require('../models/todo.model')
const renderHome = async (req, res) => {
    const todos = await Todo.findAll();
    res.render('home', { title: 'Prioritize Me', todoItems: todos })
}

module.exports = {
    renderHome
}
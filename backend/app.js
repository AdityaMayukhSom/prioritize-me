const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const todoController = require('./controllers/todo.controller')

const config = require('./config')
const db = require('./db').getDB();

app.set('views', './views')
app.set('view engine', 'pug')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', config.frontendURL);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/api/todo/all', todoController.getAllTodos)
app.get('/api/todo/:id', todoController.getTodoById);
app.post('/api/todo', todoController.createTodo);
app.put('/api/todo/:id', todoController.updateTodoById);
app.delete('/api/todo/:id', todoController.deleteTodoById);

const server = app.listen(config.port, 'localhost', () => {
    console.log(`server running on port ${config.port}`)
})

process.on('SIGINT', async () => {
    await db.close();
    console.log('db closed :)')
    server.close(() => {
        process.exit(0);
    });
});


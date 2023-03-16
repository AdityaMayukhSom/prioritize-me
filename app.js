const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const todoController = require('./controllers/todo.controller')
const homeController = require('./controllers/home.controller')

const dbConfig = require('./config')
const db = require('./db').getDB();

app.set('views', './views')
app.set('view engine', 'pug')
app.use(express.static('./public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', homeController.renderHome)

app.get('/api/todo/all', todoController.getTodos);

app.get('/api/todo/:id', todoController.getTodoById);
app.post('/api/todo', todoController.createTodo);
app.put('/api/todo/:id', todoController.updateTodoById);
app.delete('/api/todo/:id', todoController.deleteTodoById);

const server = app.listen(dbConfig.port, 'localhost', () => {
    console.log(`server running on port ${dbConfig.port}`)
})

process.on('SIGINT', async () => {
    await db.close();
    console.log('db closed :)')
    server.close(() => {
        process.exit(0);
    });
});


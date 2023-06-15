import express from 'express';
import exphbs from 'express-handlebars';
import conn from './db/conn.js';
import Task from './models/Task.js';
import taskRoutes from './routes/tasksRoutes.js';

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

app.use(express.static('public'));

app.use('/tasks', taskRoutes);

conn
    .sync()
    .then( () => {
        app.listen(3000);
    })
    .catch((err) => console.log(err))

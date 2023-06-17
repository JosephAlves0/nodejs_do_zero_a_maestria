import express from 'express';
import exphbs from 'express-handlebars';
import session from 'express-session';
import FileStoreFactory from 'session-file-store';
const FileStore = FileStoreFactory(session);
import flash from 'express-flash';
import conn from './db/conn.js';
import { tmpdir } from 'os';
import { join } from 'path';

const app = express();

// Models
import Tought from './models/Tought.js';
import User from './models/User.js';

// Import Routes
import toughtsRoutes from './routes/toughtsRoutes.js';
import authRoutes from './routes/authRoutes.js';

// Import controller
import ToughtController from './controller/ToughtController.js';

// template engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// receber resposta do bady
app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

// session middleware
app.use(
    session({
        name: 'session',
        secret: 'nosso_secret',
        resave: false,
        saveUninitialized: false,
        store: new FileStore({
            logFn: function(){},
            path: join(tmpdir(), 'sessions')
        }),
        cookie: {
            secure: false,
            maxAge: 360000,
            expires: new Date(Date.now() + 360000),
            httpOnly: true
        }
    }),
)

// flash messages
app.use(flash());

//public path
app.use(express.static('public'));

// set session to res
app.use((req, res, next) => {
    
    if(req.session.userid){
        res.locals.session = req.session
    }

    next();
});

//Routes
app.use('/toughts', toughtsRoutes);
app.use('/', authRoutes);

app.get('/', ToughtController.showToughts)

conn
    .sync()
    .then(() => {
        app.listen(3000)
    })
    .catch((err) => console.log(err))
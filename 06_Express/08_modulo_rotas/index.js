import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import routerUser from "./users/index.js";
const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basePath = path.join(__dirname, 'templates');

//ler body
app.use(
    express.urlencoded({
        extended: true
    }),
);

app.use(express.json());

app.use('/users', routerUser);

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
})
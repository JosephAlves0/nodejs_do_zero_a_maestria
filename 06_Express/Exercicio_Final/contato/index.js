import express from 'express';
import path from "path";
import { fileURLToPath } from "url";
const routerContato = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basePath = path.join(__dirname, '../templates');

routerContato.get('/matriz', (req, res) => {
    res.sendFile(`${basePath}/contato.html`);
})


export default routerContato;
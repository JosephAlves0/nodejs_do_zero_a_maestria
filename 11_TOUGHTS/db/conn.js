import { Sequelize } from "sequelize";
import dotenv from "dotenv/config.js";

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    dialect: "mysql",
    host: dbHost,
});

try {
    sequelize.authenticate();
    console.log('Conectamos com sucesso!')
} catch (err) {
    console.log(`Não foi possível conectar: ${err}`)
}

export default sequelize;
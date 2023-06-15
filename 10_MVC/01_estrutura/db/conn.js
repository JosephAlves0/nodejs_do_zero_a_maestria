import { Sequelize } from "sequelize";

const sequelize = new Sequelize('nodemvc2', 'root', '*******', {
    host: 'localhost',
    dialect: 'mysql',
});

try {
    sequelize.authenticate();
    console.log('Conectamos ao MySql');

} catch (error) {
    console.log(`Não foi possível conectar: ${error}`);

}

export default sequelize;
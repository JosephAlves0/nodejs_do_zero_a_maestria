import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('nodesequelize2', 'root', '*******', {
    host: 'localhost',
    dialect: 'mysql',
});

/*try {
    sequelize.authenticate();
    console.log('Conectamos com sucesso com o Sequeliez!');

}catch(err) {
    console.log('Não foi possível conectar: ', err)
}*/

export default sequelize;
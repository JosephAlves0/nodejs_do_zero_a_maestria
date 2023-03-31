import chalk from "chalk";
import inquirer from "inquirer";

inquirer.prompt([
    {
        name: 'p1', 
        message: 'Qual seu nome?'
    },
    {
        name: 'p2',
        message: 'Qual a sua idade?'
    },
]).then((answers) => {
    console.log(chalk.bgYellow.black(`Seu nome é ${answers.p1} e você tem: ${answers.p2} anos`));
}).catch(err => console.log(chalk.bgRed(`Erro: ${err}`)));
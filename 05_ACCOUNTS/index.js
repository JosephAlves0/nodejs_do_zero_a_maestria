// modulos externos
import inquirer from "inquirer";
import chalk from "chalk";

// modulos internos
import fs, { copyFileSync } from "fs";
import { error } from "console";

operation();

function operation(){

    inquirer.prompt([
        {
            type: 'list',
            name: "action",
            message: "O que você deseja fazer?",
            choices: [
                "Criar conta",
                "Consultar saldo",
                "Depositar",
                "Sacar",
                "Sair",
            ]
        },
    ]).then((answer) => {
        const action = answer["action"]
        if(action === "Criar conta"){
            createAccount();
        } else if(action === "Depositar"){
            deposit();
        } else if(action === "Consultar saldo"){

        } else if(action === "Sacar"){
            
        } else if(action === "Sair"){
            console.log(chalk.bgBlue.black("Obrigado por usar o Account!"));
            process.exit();
        } 
    })
    .catch((err) => console.log(err))
}

// create an account
function createAccount(){
    console.log(chalk.bgGreen.black("Parabéns por escolher nosso banco!"));
    console.log(chalk.green("Defina as opções da sua conta a seguir"));

    buildAccount();
}

function buildAccount(){
    inquirer.prompt([
        {
            name: "accountName",
            message: "Digite um nome para a sua conta: "
        }
    ]).then(answer => {
        const accounName = answer['accountName'];

        console.info(accounName);

        if(!fs.existsSync("accounts")){
            fs.mkdirSync("accounts")
        }

        if(fs.existsSync(`accounts/${accounName}.json`)){
            console.log(chalk.bgRed.black("Esta conta já existe, escolha outro nome!"));
            buildAccount();
            return;
        }

        fs.writeFileSync(
            `accounts/${accounName}.json`,
            "{'balance': 0}",
            function(err){
                console.log(err)
            },
        )

        console.log(chalk.green("Parabéns, a sua conta foi criada!"));
        operation();
    })
    .catch((err) => console.log(err))
}

// add an amount to user account
function deposit(){

    inquirer.prompt([
        {
            name: "accountName",
            message: "Qual o nome da sua conta?"
        }
    ])
    .then((answer) => {
        const accountName = answer["accountName"];

        if(!checkAccount(accountName)){
            return deposit();
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

function checkAccount(accounName){
    if(!fs.existsSync(`accounts/${accounName}.json`)){
        console.log(chalk.bgRed.black("Esta conta não existe, escolha outro nome!"));
        return false;
    }

    return true;
}
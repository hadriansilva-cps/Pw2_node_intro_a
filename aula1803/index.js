const inquirer =  require('inquirer')
const chalk = require ('chalk')
const fs = require('fs')

console.log("--||Iniciamos os accounts ||--")

operation()

function operation(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'O que você deseja fazer?',
            choices: ['Criar Conta', 'Consultar Saldo', 'Depositar', 'Sacar', 'Sair']
        }
    //então   //pegar 
    ]).then(
        (answer) =>{
        const action = answer['action']
        if(action === 'Criar Conta'){
            console.log('Criando a Conta')
            //createAccount()
        }
        else if(action === 'Depositar'){
            console.log('Depositando na sua conta!')
            //deposit()
        }
        else if(action === 'Consultar Saldo'){
            console.log('Consultando Saldo!')
            //getaccountBalance()
        }else if(actions === 'Sacar'){
        console.log('Sacando Conta')
        //withdraw
        }
        else if (action === 'Sair'){
            console.log(chalk.bgBlue.black('Obrigado por usar o Accounts App!'))
            process.exit()
        }
        }
    ).catch(err => console.log(err))

}
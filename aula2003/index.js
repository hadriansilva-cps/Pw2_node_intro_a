
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
            createAccount()
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
function createAccount(){
    console.log(chalk.bgGreen.white("Obrigado por utilizar o Accouts Bank!"))
    console.log(chalk.green("Vamos definir as opções da sua conta?"))
    
    buildAccout()
}
function buildAccout(){
    inquirer.prompt([{
        name: 'account name',
        message: 'forneça o nome para a sua conta no banco accounts.',
    }
    ]).then((answer) => {
        const accountName = answer['accountName']

        if(!fs.existsSync('accounts')){
            //monte um diretorio
            fs.mkdirSync('accounts')
        }

        if(fs.existsSync(`accounts/${accountName}.json`)){
        console.info(chalk.bgRed.black(`A conta: ${accountName} já existe.`))
        console.info(chalk.bgRed.black(`Escolha outro nome: `))
        buildAccout(accountName)}

        fs.writeFileSync(
            `account/${accountName}.json`,`{"balance":0}`,
            function(err){
                console.error(err)
            })

            console.info(chalk.bgGreen.white(`Bem vindo ao accounts Bank: ${accountName}`))
            console.info(chalk.green('Obrigado pela preferência!'))

            operation()
       }) 
}

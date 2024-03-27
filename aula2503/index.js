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
    
    ]).then(
        (answer) =>{
        const action = answer['action']
        if(action === 'Criar Conta'){
            console.log('Criando a Conta')
            createAccount()
        }
        else if(action === 'Depositar'){
            console.log('Depositando na sua conta!')
            deposit()
        }
        else if(action === 'Consultar Saldo'){
            console.log('Consultando Saldo!')
            getaccountBalance()
        }else if(action === 'Sacar'){
        console.log('Sacando Conta')
        withdraw
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
        name: 'accountName',
        message: 'forneça o nome para a sua conta no banco accounts.',
    }
    ]).then((answer) => {
        const accountName = answer['accountName']

        if(!fs.existsSync('accounts')){
           
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

function deposit(){

    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual conta deseja depositar?'
        }
    ]).then((answer) => { 
        const accountName = answer['accountName']

        if(!checkAccount(accountName)){
            return deposit()
        }

        inquirer.prompt([
            {
                name: 'amount',
                message: 'Quanto deseja depositar: '
            }
        ]).then((answer) => { const amount = answer['amount']
          addmount(accountName, amount)
          operation()
    })
    }
    
    )
   
}

function checkAccount(accountName){
    if(fs.existsSync(`accounts/${accountName}.json`)){
        console.error(chalk.bgRed.black(`A conta: ${accountName} não existe veja se preencheu os campos corretamente`))
        return false
    }
    return true
}

function addmount(accountName, amount){
    const accountData = getAccount(accountName)

    if(!amount){
        console.error(chalk.bgRed.black('não há valor a ser depositado'))
        deposit()
    }

    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

    fs,fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err){
            console.error(err)
        }
    )

    console.info(chalk.bgGreen.white(`O valor: ${amount}, Foi Depositado.`))
}

function getAccount(accountName){
    const accountJson = fs.readFileSync(`accounts/${accountName}.Json`, {
        encoding:'utf-8',
        flag: 'r'
    })

    return JSON.parse(accountJson)
}

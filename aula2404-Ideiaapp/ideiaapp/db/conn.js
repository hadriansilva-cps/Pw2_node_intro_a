const { Sequelize } = require('sequilize')

const sequelize = new Sequelize('ideias', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

try {
    sequelize.authenticate()
    console.log('conectamos com sequelize!')

}catch(error){
    console.error('não foi possível conectar:', error)

}

module.exports = sequelize
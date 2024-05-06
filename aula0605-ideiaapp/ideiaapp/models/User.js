const { DataType, DataTypes } = require('sequelize')
const db = require('../db/conn')

const User = db.afterDefine("user",{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = user
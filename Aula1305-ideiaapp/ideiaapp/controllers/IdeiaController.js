const Ideia = require('../models/Ideia')
const User = require('../models/User')

const { Op } = require('sequelize')

module.exports = class IdeiaController{
static async deshboard(req, res){
    const userid = req.session.userid

    const user = await User.findOne({
        where:{id:userId},
        include: Ideia,
        plain: true
    })

    const ideias = user.Ideia.map((result) => result.dataValues)

    let emptyIdeias = true

    if(Ideia.length > 0 ){
        emptyIdeias = false
    }

    console.log(ideias)
    console.log(emptyIdeias)

    res.render('ideias/dashboard')
}
}
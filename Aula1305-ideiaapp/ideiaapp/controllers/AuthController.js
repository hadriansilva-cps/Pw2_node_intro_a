const User = require('../models/User')
const bcrypt = require('bcryptjs')

    module.exports = class UserController {
        static login(req, res){
            res.render('auth/login')
        }

        static async loginPost(req, res){
            const {email, password} = req.body

            const user = await User.findOne({where: { email: email }})
            
            if(!user){
                res.render('auth/login', {
                    message: 'Usuário nãom encontrado'
                })
                return
            }
           
            const passwordMatch = bcrypt.compareSync(password, user.password)
        
            if(!passwordMatch){
                res.render('auth/login', {
                    message: 'informações envalidas'
                })
                return
            }0

            req.session.userid = user.id

            req.flash('message', 'login realizado com sucesso!')

            req.session.save(() =>{
                res.redirect('/')
            })
        }

        static register(req, res){
        res.render('auth/resgister')
    }

        static async registerPost(req, res){
            const{name, email, password, corfirmpassword} = req.body

            if(password != confirmpassword){
                req.flash('message', 'As senhas não conferem, tente novamente')
                res.render('auth/register')

                return
            }

            const checkIfUserExists = await User.findOne({ whare: {email: email}})
            if(checkIfUserExists){
                req.flash('message', 'O e-mail já esta registrado')
                res.render('auth/login')
                return
            }

            const salt = bcrypt.genSaltSync(10)
            const hashedPassword = bcrypt.hashSync(password, salt)

            const user ={
                name, 
                email,
                password: hashedPassword,
            }

            user.create(user)
            .then((user) =>{
                
            req.session.userid = user.id

            req.flash('message', 'login realizado com sucesso!')

            req.session.save(() =>{
                res.redirect('/')
            })
            })
            .catch((err) => console.error(err))
        }

}
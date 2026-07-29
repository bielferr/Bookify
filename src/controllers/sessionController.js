const prisma = require("../database/prisma")
const bcrypt = require("bcrypt")
const jsonwebtoken = require("jsonwebtoken")
const authConfig = require("../config/auth")
class SessionController {
    async create(req,res){
        const {email,password} = req.body
        const user  = await prisma.user.findUnique({
            where:{
                email,
            }
        })

        if(!user){
            return res.status(401).json({
                message: "Invalid email or password. "
        })
        }
        
        const passwordMatched = await bcrypt.compare(
            password,
            user.password
        )

        if(!passwordMatched){
            return res.status(401).json({ 
                message:"Invalid email or password."})
        }
        
        const secret = authConfig.jwt.secret
        const expiresIn = authConfig.jwt.expiresIn

        const token = jsonwebtoken.sign(
        {id: user.id} ,
            secret,{
                expiresIn
            }

        )
        return res.json({
            message:"Login successful!",
            "token":token
        })
    }
    
}

module.exports = new SessionController()
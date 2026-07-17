const prisma = require("../database/prisma")
const bcrypt = require("bcrypt")


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
        

        return res.json({
            message:"Login successful!"
        })
       
    }
    
}

module.exports = new SessionController()
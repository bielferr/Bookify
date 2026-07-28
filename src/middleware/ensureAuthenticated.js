const jsonwebtoken = require("jsonwebtoken")
const authConfig = require("../config/auth")


function ensureAuth(req,res,next){
   const authorization = req.headers.authorization
   
   if(!authorization){
        return res.status(401).json({
            message:    "JWT token not provided."
        })
   }

  const [schema, token] =  authorization.split(" ")
   if (schema !== "Bearer"){
    return res.status(401).json({
        message: "Token not formated"
    })
   }
try {

    const decoded =  jsonwebtoken.verify(token, authConfig.secret)
    req.user = decoded
    next()
}catch(error){
    return res.status(401).json({
        message:"Invalid JWT token "
    })
}
    


}

module.exports =  ensureAuth
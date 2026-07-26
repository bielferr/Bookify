

const configJwt = {
    jwt:{
        secret: process.env.JWT_SECRET ,
        expiresIn: "1d"
    }
}


module.exports = configJwt
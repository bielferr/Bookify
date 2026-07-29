const prisma = require("../database/prisma")
const brcrypt = require("bcrypt")
class UserController{
    async create(req,res){
        const {name, email, password} = req.body;
        const hasheadPassword = await brcrypt.hash(password, 10)

        const userAlreadyExists = await  prisma.user.findUnique({
            where:{
                email,
            }
        })

        if (userAlreadyExists){
            return res.status(409).json({
                messagge: "E-mail ja cadastrado "
            })
        }

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password:hasheadPassword,
            },

            select:{
                id:true,
                name:true,
                email:true,
                role: true,
                createdAt:true    
            }
        })
        return res.status(201).json(user)
    }

    async index(req,res){
        const users = await prisma.user.findMany();

        return res.json(users);
    }

    async show(req,res){
        const searchId = req.user.id

        const user = await prisma.user.findUnique({
            where: {
                id: searchId
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                createdAt: true
    }
        })

        if(!user){
            return res.status(404).json({
                message: "User not found "
            })
        }

        return res.json(user)
    }
}

module.exports = new UserController()



// | Operação                        | Prisma         |
// | ------------------------------- | -------------- |
// | Criar um registro               | `create()`     |
// | Buscar um por ID ou campo único | `findUnique()` |
// | Buscar o primeiro que encontrar | `findFirst()`  |
// | **Buscar vários registros**     | `findMany()`   |
// | Atualizar                       | `update()`     |
// | Deletar                         | `delete()`     |


// // Criar
// prisma.user.create()

// // Buscar um
// prisma.user.findUnique()

// // Buscar vários
// prisma.user.findMany()

// // Atualizar
// prisma.user.update()

// // Excluir
// prisma.user.delete()
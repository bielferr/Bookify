const {Router} = require("express")
const UserController = require("../controllers/userController")

const router = Router()

router.post("/",UserController.create)

router.get("/",UserController.index)


module.exports = router;
const {Router} = require("express")
const UserController = require("../controllers/userController")
const ensureAuth = require("../middleware/ensureAuthenticated")

const router = Router()

router.post("/",UserController.create)

router.get("/",UserController.index)

router.get("/me", ensureAuth, UserController.show)



module.exports = router;
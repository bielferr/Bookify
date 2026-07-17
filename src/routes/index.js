const {Router} = require("express")
const userRoutes = require("./user.routes")
const sessionRoutes = require("./session.routes")

const router = Router()

router.use("/users", userRoutes)
router.use("/session",sessionRoutes)

module.exports = router;



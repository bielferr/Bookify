const {Router} = require("express");
const SessionController = require("../controllers/sessionController")

const router = Router()

router.post("/",SessionController.create)

module.exports = router;
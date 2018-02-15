const express = require("express")
const router = express.Router()

const controller = require("./controller")

router.get("/", controller.get)
router.get("/email/:email", controller.getByEmail)
router.get("/:id", controller.getById)

router.post("/register", controller.register)
router.post("/login", controller.login)
router.post("/logout", controller.logout)

module.exports = router

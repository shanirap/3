const express = require("express")
const router = express.Router()
const Article = require("../models/article")

router.post("/", async (req, res) => {
    const {title}=req.body
    const article = await Article.create({ title:title });
    res.json(article)
})
module.exports = router

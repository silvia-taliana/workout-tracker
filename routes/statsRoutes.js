const router = require("express").Router();
const path = require("path");

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});

module.exports = router;
const router = require("express").Router();

router.get("/exercise", (req, res) => {
    res.render('exercise');
});

module.exports = router;
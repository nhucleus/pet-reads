const express = require("express");
const asyncHandler = require("express-async-handler");
const { Species } = require("../../db/models");

const router = express.Router();

router.get("/list", 
    asyncHandler(async (req, res, next) => {
        const list = await Species.findAll({
            order: [["name", "ASC"]]
        });
        return res.json({list});
    })
)


module.exports = router;
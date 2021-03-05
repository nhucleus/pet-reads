const express = require("express");
const asyncHandler = require("express-async-handler");
const { Book } = require("../../db/models");

const router = express.Router();

router.get("/species/:speciesId",
    asyncHandler(async (req, res, next) => {
        const speciesId = req.params.speciesId;
        let books;
        if (speciesId != 0) {
            books = await Book.findAll({
                where: { speciesId: speciesId },
                order: [["title", "ASC"]],
                limit: 10
            });
        } else {
            books = await Book.findAll({
                order: [["title", "ASC"]],
                limit: 10
        });
        }
        return res.json({books})
    }));

    module.exports = router;

    
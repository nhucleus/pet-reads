const express = require("express");
const asyncHandler = require("express-async-handler");
const { Book, Author } = require("../../db/models");

const router = express.Router();

router.get("/species/:speciesId/:order",
    asyncHandler(async (req, res, next) => {
        const speciesId = req.params.speciesId;
        const order = req.params.order;
        let orderBy;
        switch (order) {
            case 1:
                orderBy = [["title", "ASC"]]
                break;
            case 2:
                orderBy = [["title", "DESC"]]
                break;
            default:
                break;
        }

        let booksArr;
        if (speciesId != 0) {
            booksArr = await Book.findAll({
                where: { speciesId: speciesId },
                include: [
                    {model: Author} 
                ],
                order: orderBy,
                limit: 10
            });
        } else {
            booksArr = await Book.findAll({
                include: [
                    {model: Author} 
                ],
                order: orderBy,
                limit: 10
        });
        }
        console.log(booksArr)
        const books = {}
        booksArr.forEach(book => {
            books[book.id] = book;
        })
        return res.json({books})
    }));

    module.exports = router;

    
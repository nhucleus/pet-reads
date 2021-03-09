const express = require("express");
const asyncHandler = require("express-async-handler");
const { Book, Author, Species, Review } = require("../../db/models");

const router = express.Router();

router.get("/species/:speciesId/:order",
    asyncHandler(async (req, res, next) => {
        const speciesId = req.params.speciesId;
        const order = Number(req.params.order);
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
                    {model: Author},
                    {model: Species},
                ],
                order: orderBy,
                limit: 10
            });
        } else {
            booksArr = await Book.findAll({
                include: [
                    {model: Author},
                    {model: Species}, 
                ],
                order: orderBy,
                limit: 28
        });
        }
        const books = {};
        for (let i = 0; i < booksArr.length; i++) {
            books[booksArr[i].id] = booksArr[i];
            const reviews = await Review.findAll({
                where: {bookId: booksArr[i].id}
            });
            if (reviews.length) {
                books[booksArr[i].id].dataValues.reviews = reviews;
                // const total = reviews.reduce((total, review) => {
                //     return total + review.rating;
                // }, 0)
                // await booksArr[i].update({avgRating: total / reviews.length}); 
            }
        }
        
        return res.json({ books });
    }));

    router.get("/:id",
    asyncHandler(async (req, res, next) => { 
        const id = req.params.id;
        const book = await Book.findOne({
            where: { id },
            include: [
                    {model: Author},
                    {model: Species} 
                ],
        });
        return res.json({ book });
    }));

    module.exports = router;

    
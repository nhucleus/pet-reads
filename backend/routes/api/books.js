const express = require("express");
const asyncHandler = require("express-async-handler");
const { Book, Author, Species, Review, User } = require("../../db/models");

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
                    { model: Author },
                    { model: Species },
                ],
                order: orderBy,
                limit: 28
            });
        } else {
            booksArr = await Book.findAll({
                include: [
                    { model: Author },
                    { model: Species },
                ],
                order: orderBy,
                limit: 28
            });
        }
        const books = {};
        for (let i = 0; i < booksArr.length; i++) {
            books[booksArr[i].id] = booksArr[i];
            // const reviews = await Review.findAll({
            //     where: { bookId: booksArr[i].id }
            // });
            // if (reviews.length) {
            //     books[booksArr[i].id].dataValues.reviews = reviews;
            // const total = reviews.reduce((total, review) => {
            //     return total + review.rating;
            // }, 0)
            // await booksArr[i].update({avgRating: total / reviews.length}); 
            // }
        }

        return res.json({ books });
    }));

router.get("/:id",
    asyncHandler(async (req, res, next) => {
        const id = req.params.id;
        const reviewsArr = await Review.findAll({
            where: { bookId: id },
            include: [
                { model: User }
            ]
        });
        const book = await Book.findOne({
            where: { id },
            include: [
                { model: Author },
                { model: Species }
            ],
        });
            const reviews = {};
            reviewsArr.forEach(review => {
                reviews[review.userId] = review;
            })
            book.dataValues.reviews = reviews;

        return res.json({ book });
    }));

router.post("/:id", 
    asyncHandler(async (req, res, next) => {
        const id = req.params.id;   
        const {userId, review, rating} = req.body;
        const newReview = await Review.create({
            userId,
            bookId: id,
            rating,
            body: review
        })
        console.log(newReview)
        const reviews = await Review.findAll({
            where: { bookId: id },
        });
        const book = await Book.findOne({
            where: { id },
        });
        const reviewFull = await Review.findOne({
            where: {
                id: newReview.id
            }, 
            include: [
                { model: User }
            ]
        })
        const total = reviews.reduce((total, review) => {
                return total + review.rating;
            }, 0);
        
        await book.update({avgRating: total / reviews.length});

        return res.json({review: reviewFull, avgRating: book.avgRating})
    }));
module.exports = router;

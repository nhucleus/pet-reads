const express = require("express");
const asyncHandler = require("express-async-handler");
const sequelize = require('sequelize');
const Op = sequelize.Op;
const { Book, Author, Species, Review, User, UserBook } = require("../../db/models");

const router = express.Router();

router.get("/species/:speciesId/:order/:page",
    asyncHandler(async (req, res, next) => {
        const speciesId = req.params.speciesId;
        const page = req.params.page;
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
                offset: page * 28,
                limit: 28,
            });
        } else {
            booksArr = await Book.findAll({
                include: [
                    { model: Author },
                    { model: Species },
                ],
                order: orderBy,
                offset: page * 28,
                limit: 28
            });
        }
        const books = {};
        for (let i = 0; i < booksArr.length; i++) {
            books[booksArr[i].id] = booksArr[i];
            const reviews = await Review.findAll({
                where: { bookId: booksArr[i].id }
            });
            if (reviews.length) {
                books[booksArr[i].id].dataValues.reviews = reviews;
            const total = reviews.reduce((total, review) => {
                return total + review.rating;
            }, 0)
            await booksArr[i].update({avgRating: total / reviews.length}); 
            }
        }

        return res.json({ books });
    }));


router.get("/search/:query",
    asyncHandler(async (req, res, next) => {
        const query = req.params.query;
        const results = await Book.findAll({
            where: {
                title: {
                    [Op.iLike]: `%${query}%`
                }
            },
            include: [
                { model: Author },
                { model: Species }
            ],
            limit: 10
        });
        return res.json({results});
    })
);

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

router.get("/:bookId/:userId",
    asyncHandler(async (req, res, next) => { 
        const bookId = req.params.bookId;
        const userId = req.params.userId;
        const userBook = await UserBook.findOne({
            where: {
                bookId,
                userId
            }
        });
        if (userBook) {
            return res.json({userBookStatus: userBook.readStatus});
        } else {
            return res.json({message: "Not Found"});
        }

    })
);

router.delete("/:bookId/:userId",
    asyncHandler(async (req, res, next) => { 
        const bookId = req.params.bookId;
        const userId = req.params.userId;
        const userBook = await UserBook.findOne({
            where: {
                bookId,
                userId
            }
        });
        await userBook.destroy();
        return res.json({message: "UserBook deleted"});
    })
);

router.put("/:bookId/:userId",
    asyncHandler(async (req, res, next) => { 
        const bookId = req.params.bookId;
        const userId = req.params.userId;
        const readStatus = req.body.status;
        const userBook = await UserBook.findOne({
            where: {
                bookId,
                userId
            }
        });
        if (userBook) {
            await userBook.update({readStatus});
        } else {
            const newUserBook = await UserBook.create({
                bookId,
                userId,
                readStatus
            })
        }
        
        return res.json({message: "UserBook updated"});
    })
);

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


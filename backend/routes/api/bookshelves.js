const express = require("express");
const asyncHandler = require("express-async-handler");
const { Book, Author, Species, UserBook } = require("../../db/models");

const router = express.Router();

router.get("/:userId",
  asyncHandler(async (req, res, next) => {
    const userId = req.params.userId;
    const userBooksArray = await UserBook.findAll({
      where: { userId },
      include:
        [
          {
            model: Book, include: [
              { model: Author },
              { model: Species }
            ]
          }
        ],
    });

    const userBooks = { wantToRead: {}, currentlyReading: {}, read: {} };
    userBooksArray.forEach(book => {
        switch (book.readStatus) {
            case 1:
                userBooks.wantToRead[book.id] = book;
                break;
            case 2:
                userBooks.currentlyReading[book.id] = book;
                break;
            case 3:
                userBooks.read[book.id] = book;
                break;
            default:
                break;
        }
    });
    console.log(userBooks)
    return res.json(userBooks);

  })
);

module.exports = router;
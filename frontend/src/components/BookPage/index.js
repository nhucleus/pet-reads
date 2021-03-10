import "./BookPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchBookInfo } from "../../store/books";
import RatingSystem from "../RatingSystem";
 

const BookPage = () => {
  const dispatch = useDispatch();
  const book = useSelector(state => state.books.current);
  const { id } = useParams();
  const [readMore, setReadMore] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);

  useEffect(() => {
    dispatch(fetchBookInfo(id));
  }, [id]);

  useEffect(() => {
    const description = document.querySelector(".book-page-description");
    if (description) {
      setShowReadMore(description.scrollHeight > description.clientHeight)
    }
  }, [book])

  return (
    <div className="book-page-container">
      {book && <div className="book-page-info">
        <div className="book-page-info-left">
          <div className="book-page-cover">
            <img className="book-page-cover-image" src={book.bookCover} />
          </div>
          <div className="book-page-bookshelf">
            BOOKSHELF LINK PLACEHOLDER
          </div>
          <div className="book-card-rating book-page">
                <RatingSystem rating={book.avgRating}/>
          </div>
        </div>
        <div className="book-page-info-right">
          <div className="book-page-title">{book.title}</div>
          <div className="book-page-author">{book.Author.name}</div>
          <div className="book-page-species">Species: {book.Species.name}</div>
          <div className={readMore ? "book-page-description read-more" : "book-page-description"}>{book.description}</div>
          <div className="book-page-description read-more">
          {showReadMore && !readMore && <div className="read-more-text" onClick={() => setReadMore(true)}>Read More</div>}
          {showReadMore && readMore && <div className="read-more-text" onClick={() => setReadMore(false)}>Show Less</div>}
          </div>
        </div>
      </div>
      }
      <div className="book-page-reviews">
        <div className="reviews-title">COMMUNITY REVIEWS</div>
        {book && book.reviews && book.reviews.map((review) => {
          let date = new Date(review.createdAt).toString().slice(4, 15).split(" ");
          date[1] = date[1] + ",";
          date = date.join(" ");
          return (
          <div className="review-container">
            <div className="review-top">   
              <div className="review-top-left">
                <div className="review-username"><span className="review-user-name-text">{review.User.username}</span> <span className="review-username-rated-it">rated it</span></div>
                <div className="review-rating">
                  <RatingSystem className="review-rating" rating={review.rating} />
                </div>
              </div>
              <div className="review-date">{date}</div>
              
            </div>

            <div className="review-body">{review.body}</div>
          </div>
          )
        })}
        {book && !book.reviews && (
          <div className="review-container no-review-text">No reviews yet. Be the first to review this book!</div>
        )}
      </div>
    
    </div>
  );
};

export default BookPage;
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
  const [readMore, setReadMore] = useState();

  useEffect(() => {
    dispatch(fetchBookInfo(id));
  }, [id]);

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
          <p className="read-more"><a href="" className="read-more-link">Read More</a></p>
          </div>
        </div>
      </div>
      }
      <div className="book-page-reviews">Reviews Placeholder</div>
    
    </div>
  );
};

export default BookPage;
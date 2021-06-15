import "./BookCard.css";
import { useHistory } from "react-router-dom";
import RatingSystem from "../RatingSystem";

const BookCard = ({ book }) => {
    const history = useHistory();
    
    
    return (
      <div
        className="book-card-container"
        onClick={() => {
          history.push(`/book/${book.id}`);
        }}
      >
        <img
          draggable={false}
          className="book-card-cover"
          src={book.bookCover}
          alt="Book cover"
        />
        <div className="book-card-title">{book.title}</div>
        <div className="book-card-author">{book.Author.name}</div>
        <div className="book-card-rating">
          <RatingSystem rating={book.avgRating} />
        </div>
      </div>
    );
};

export default BookCard;
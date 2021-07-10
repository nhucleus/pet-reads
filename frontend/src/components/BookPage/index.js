import "./BookPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchBookInfo, createReview, removeFromShelf, addToShelf } from "../../store/books";
import RatingSystem from "../RatingSystem";
import { IoPawOutline, IoPaw } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
 
const BookPage = () => {
  const dispatch = useDispatch();
  const book = useSelector(state => state.books.current);
  const user = useSelector(state => state.session.user);
  const { id } = useParams();
  const [readMore, setReadMore] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const [paw1, setPaw1] = useState(false);
  const [paw2, setPaw2] = useState(false);
  const [paw3, setPaw3] = useState(false);
  const [paw4, setPaw4] = useState(false);
  const [paw5, setPaw5] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [userReview, setUserReview] = useState(false);
  const [onShelf, setOnShelf] = useState(false);
  const [hover, setHover] = useState(false);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (user) {
      dispatch(fetchBookInfo(id, user.id));
    }
  }, [id, user]);

  useEffect(() => {
    if (book) {
      setOnShelf(book.status ? true : false);
    }
    if (book && book.status) {
      setLoading(false);
    }
  }, [book]);
 

  useEffect(() => {
    const description = document.querySelector(".book-page-description");
    if (description) {
      setShowReadMore(description.scrollHeight > description.clientHeight)
    }
    if (user && book) {
      setUserReview(book.reviews[user.id] ? true : false)
    }
  }, [book, user]);

  const handleSubmit = () => {
    dispatch(createReview(book.id, user.id, rating, review));
  };

  const menuClickHandler = () => {
    if (onShelf) {
      dispatch(removeFromShelf(book.id, user.id));
      setOnShelf(false);
    } else {
      dispatch(addToShelf(book.id, user.id, 1));
      setLoading(true);
      setOnShelf(true);
    }
    setMenuOpen(false);
  };

  const menuOptionHandler = (status) => {
    if (book.status === status) {
      setMenuOpen(false);
      return;
    }
    dispatch(addToShelf(book.id, user.id, status));
    setLoading(true);
    setOnShelf(true);
    setMenuOpen(false);
  };

  return (
    <div className="book-page-container">
      {book && <div className="book-page-info">
        <div className="book-page-info-left">
          <div className="book-page-cover">
            <img draggable={false} className="book-page-cover-image" src={book.bookCover} />
          </div>
          <div className="book-page-bookshelf">
            <div onClick={menuClickHandler} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={onShelf ? "book-page-bookshelf-button on-shelf" : "book-page-bookshelf-button off-shelf"}>
              {onShelf && book.status === 1 && !loading && <span>{hover ? "Remove" : "Want to Read"}</span>}
              {onShelf && book.status === 2 && !loading && <span>{hover ? "Remove" : "Currently Reading"}</span>}
              {onShelf && book.status === 3 && !loading && <span>{hover ? "Remove" : "Read"}</span>}
              {!onShelf && <span>Want to Read</span>}
              {loading && <span>Loading...</span>}
            </div>
            <div className="book-page-bookshelf-arrow" onClick={() => setMenuOpen(!menuOpen)}>
              <FaAngleDown className={menuOpen ? "bookshelf-arrow" : "bookshelf-arrow closed"} />
            </div>
            <div className={menuOpen ? "book-page-bookshelf-menu" : "book-page-bookshelf-menu hidden"}>
              <div onClick={() => menuOptionHandler(1)} className="bookshelf-menu-option">Want to Read</div>
              <div onClick={() => menuOptionHandler(2)} className="bookshelf-menu-option">Currently Reading</div>
              <div onClick={() => menuOptionHandler(3)} className="bookshelf-menu-option">Read</div>
            </div>
          </div>
          <div className={menuOpen ? "menu-overlay" : "menu-overlay closed"} onClick={() => setMenuOpen(false)}></div>
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
        {!userReview && <div className="review-container">
          {book && <div className="new-review-header"><span className="new-review-start">Start your review of</span> <span className="new-review-book-title">{book.title.split(":")[0]}</span></div>}
          <div className="new-review-rating">
            <div onClick={() => setRating(1)} onMouseEnter={() => setPaw1(true)} onMouseLeave={(() => setPaw1(false))} className="paw1">{paw1 || paw2 || paw3 || paw4 || paw5 || rating === 1 || rating === 2 || rating === 3 || rating === 4 || rating === 5 ? <IoPaw className="paw filled"/> : <IoPawOutline className="paw" />}</div>
            <div onClick={() => setRating(2)} onMouseEnter={() => setPaw2(true)} onMouseLeave={(() => setPaw2(false))} className="paw2">{paw2 || paw3 || paw4 || paw5 || rating === 2 || rating === 3 || rating === 4 || rating === 5 ? <IoPaw className="paw filled"/> : <IoPawOutline className="paw" />}</div>
            <div onClick={() => setRating(3)} onMouseEnter={() => setPaw3(true)} onMouseLeave={(() => setPaw3(false))} className="paw3">{paw3 || paw4 || paw5 || rating === 3 || rating === 4 || rating === 5 ? <IoPaw className="paw filled"/> : <IoPawOutline className="paw" />}</div>
            <div onClick={() => setRating(4)} onMouseEnter={() => setPaw4(true)} onMouseLeave={(() => setPaw4(false))} className="paw4">{paw4 || paw5 || rating === 4 || rating === 5 ? <IoPaw className="paw filled"/> : <IoPawOutline className="paw" />}</div>
            <div onClick={() => setRating(5)} onMouseEnter={() => setPaw5(true)} onMouseLeave={(() => setPaw5(false))} className="paw5">{paw5 || rating === 5 ? <IoPaw className="paw filled"/> : <IoPawOutline className="paw" />}</div>
          </div>
          <div className="new-review-body">
              <textarea
              rows="7"
              className="new-review-body-text"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              ></textarea>
          </div>
          <div onClick={handleSubmit} className="review-submit-button">Submit Review</div>
        </div>}
        {book && book.reviews && Object.values(book.reviews).sort((a, b) => a.createdAt > b.createdAt ? -1 : 1).map((review) => {
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
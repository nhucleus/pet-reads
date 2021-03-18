import "./BookCard.css";
// import { GiFeline } from "react-icons/gi";
// import { GiSittingDog } from "react-icons/gi";
// import { GiHorseHead } from "react-icons/gi";
// import { GiRat } from "react-icons/gi";
// import { GiRabbit } from "react-icons/gi";
// import { GiAquarium } from "react-icons/gi";
// import { GiFrog } from "react-icons/gi";
// import { GiGecko } from "react-icons/gi"; 
// import { GiGoat } from "react-icons/gi";
// import { GiPig } from "react-icons/gi";
// import { GiTortoise } from "react-icons/gi";
// import { GiDuck } from "react-icons/gi";
import { useHistory } from "react-router-dom";
import RatingSystem from "../RatingSystem";

const BookCard = ({ book }) => {
    const history = useHistory();
    
    
    return (
        <div className="book-card-container" onClick={() => {
            history.push(`/book/${book.id}`);
        }}>
            <img draggable={false} className="book-card-cover" src={book.bookCover} />
            <div className="book-card-title">
                {book.title}
            </div>
            <div className="book-card-author">
                {book.Author.name}
            </div>
            <div className="book-card-rating">
                <RatingSystem rating={book.avgRating}/>
            </div>
        </div>

    );
};

export default BookCard;
import "./BookCard.css";
import { GiFeline } from "react-icons/gi";
import { GiSittingDog } from "react-icons/gi";
import { GiHorseHead } from "react-icons/gi";
import { GiRat } from "react-icons/gi";
import { GiRabbit } from "react-icons/gi";
import { GiAquarium } from "react-icons/gi";
// import { GiFinch } from "react-icons/gi";
import { GiFrog } from "react-icons/gi";
import { GiGecko } from "react-icons/gi"; 
import { GiGoat } from "react-icons/gi";
// import { GiOwl } from "react-icons/gi";
// import { GiSeagull } from "react-icons/gi";
// import { GiPeaceDove } from "react-icons/gi";
import { GiPig } from "react-icons/gi";
import { GiTortoise } from "react-icons/gi";
import { GiDuck } from "react-icons/gi"; 
   

const BookCard = ({ book }) => {
    return (
        <div className="book-card-container">
            <img className="book-card-cover" src={book.bookCover} />
            <div className="book-card-title">
                {book.title}
            </div>
            <div className="book-card-author">
                {book.Author.name}
            </div>
        </div>

    )
};

export default BookCard;
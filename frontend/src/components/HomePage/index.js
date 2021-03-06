import "./HomePage.css";
import {useSelector} from "react-redux";
import BookCard from "../BookCard";

const HomePage = () => {
  const list = useSelector(state => state.books.list);
  const order = useSelector(state => state.books.order);

  return (
    <div className="books-container">
      {order === 1 && Object.values(list).sort((a, b) => a.title < b.title ? -1 : 1).map(book => {
        return <BookCard book={book} />
      })}
      {order === 2 && Object.values(list).sort((a, b) => a.title > b.title ? -1 : 1).map(book => {
        return <BookCard book={book} />
      })}
    </div>
  );
};

export default HomePage;
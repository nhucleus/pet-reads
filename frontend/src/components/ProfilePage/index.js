import "./ProfilePage.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import BookCard from "../BookCard";
import { fetchUserBooks } from "../../store/bookshelves";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const bookshelves = useSelector(state => state.bookshelves);

  useEffect(() => {
    if (user) {
      dispatch(fetchUserBooks(user.id));
    }
  }, [user]);

  return (
    <div className="bookshelf-container">
      <div className="bookshelf-title">
        Want To Read
      </div>
      <div className="want-bookshelf bookshelf">
        <div className="bookshelf-row">
          {bookshelves.wantToRead && Object.values(bookshelves.wantToRead).map(book => {
            return <BookCard book={book.Book} />
          })}
        </div>
      </div>
      <div className="bookshelf-title">
        Currently Reading
      </div>
      <div className="current-bookshelf bookshelf">
        <div className="bookshelf-row">
          {bookshelves.currentlyReading && Object.values(bookshelves.currentlyReading).map(book => {
            return <BookCard book={book.Book} />
          })}
        </div>
      </div>
      <div className="bookshelf-title">
        Read
      </div>
      <div className="read-bookshelf bookshelf">
          <div className="bookshelf-row">
          {bookshelves.read && Object.values(bookshelves.read).map(book => {
            return <BookCard book={book.Book} />
          })}
        </div>
      </div>
      <div className="bookshelf-title">
        Recommended
      </div>
      <div className="recommended-bookshelf bookshelf">

      </div>
    </div>
  )
};

export default ProfilePage;
import "./HomePage.css";
import {useDispatch, useSelector} from "react-redux";
import { useEffect, useState } from "react";
import BookCard from "../BookCard";
import {fetchSpeciesBooks, clearFeed} from "../../store/books";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "react-loader-spinner";

const HomePage = () => {
  const list = useSelector(state => state.books.list);
  const order = useSelector(state => state.books.order);
  const currentSpecies = useSelector(state => state.species.current);
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpeciesBooks(currentSpecies.id, order, page))
  }, [dispatch, page, order, currentSpecies]);

  useEffect(() => {
    dispatch(clearFeed())
    setPage(0);
  }, [currentSpecies])

  return (
    <>
      {list && 
        <InfiniteScroll
            className="books-container"
            dataLength={Object.values(list).length}
            next={() => setPage(page +1)}
            hasMore={true}
            loader={
                <Loader 
                    className="tail-loader"
                    type="TailSpin"
                    timeout={1000}
                    color="#ef6c00"

                />
            }
        >
        {order === 1 && Object.values(list).sort((a, b) => a.title < b.title ? -1 : 1).map(book => {
          return <BookCard book={book} />
        })}
        {order === 2 && Object.values(list).sort((a, b) => a.title > b.title ? -1 : 1).map(book => {
          return <BookCard book={book} />
        })}
        </InfiniteScroll>
      }
    </>
  );
};

export default HomePage;
import "./Search.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { searchForBooks, clearSearchResults } from "../../store/books";
import {useHistory} from "react-router-dom";

const Search = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [query, setQuery] = useState(null);
  const results = useSelector(state => state.books.search);
  const [menuOpen, setMenuOpen] = useState(false); 

    useEffect(() => {
        if (query) {
            setMenuOpen(true);
            dispatch(searchForBooks(query));
        } else {
            dispatch(clearSearchResults());
        }
    }, [query, dispatch]);


  return (
    <>
    <div className="search-bar-container">
      <input 
        className="book-search-input" 
        type="text" placeholder="Find a book by title..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        onClick={() => setMenuOpen(true)}
      />
      {menuOpen && results && query !== "" && (
        <div className="search-results-container">
          {results.map(result => {
            return (
              <div className="search-result" onClick={() => {
                setQuery("");
                setMenuOpen(false);
                history.push(`/book/${result.id}`)}
                }>
                <div className="search-result-left">
                  <img className="search-result-cover" src={result.bookCover}/>
                </div>
                <div className="search-result-right">
                  <div className="search-result-title">{result.title}</div>
                  <div className="search-result-author">by {result.Author.name}</div>
                </div>
              </div>
            )
          })}
        </div>
      )}
      
    </div>
    <div className={menuOpen ? "menu-overlay" : "menu-overlay closed"} onClick={() => setMenuOpen(false)}></div>
    
    </>
  );

};

export default Search;
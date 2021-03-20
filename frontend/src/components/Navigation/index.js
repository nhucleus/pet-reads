import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navigation.css';
import { GiSittingDog } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import {ImBooks} from "react-icons/im";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import Search from "../Search";


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbar-link navbar-title-container">
          <NavLink className="navbar-title" exact to="/">
            <GiSittingDog className="dog-icon"/>
            <span>PetReads</span>
          </NavLink>
        </div>
        {sessionUser && <Search />}
      </div>
      { isLoaded && <div className="navbar-right">
        {sessionUser && <div className="navbar-link">
          <NavLink className="bookshelves-link" to="/bookshelves">
            <ImBooks className="books-icon"/> 
            <span>Bookshelves</span>
          </NavLink>
        </div>}
        {sessionUser && <FiLogOut className="logout-button" onClick={() => dispatch(sessionActions.logout())}/>}
      </div> }
    </div>
  );
};

export default Navigation;
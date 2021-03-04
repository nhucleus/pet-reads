import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import {GiSittingDog} from "react-icons/gi";


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbar-link navbar-title-container">
          <NavLink className="navbar-title" exact to="/">
            <GiSittingDog className="dog-icon"/><span>PetReads</span></NavLink>
        </div>
      </div>
      { isLoaded && <div className="navbar-right">
        {sessionUser && <div className="navbar-link"><ProfileButton user={sessionUser} /></div>}
        {sessionUser && <div className="navbar-link"><NavLink to="/profile">Profile</NavLink></div>}
      </div> }
    </div>
  );
};

export default Navigation;
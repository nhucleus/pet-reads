import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import * as sessionActions from "../../store/session";


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const credential = "Demo-lition";
  const password = "password";

  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.login({ credential, password }))
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbar-link">
          <NavLink exact to="/">PetReads</NavLink>
        </div>
      </div>
      <div className="navbar-right">
        {isLoaded && !sessionUser && <div className="navbar-link" onClick={handleSubmit}>Demo Login</div>}
        {isLoaded && !sessionUser && <div className="navbar-link"><NavLink to="/login">Login</NavLink></div>}
        {isLoaded && !sessionUser && <div className="navbar-link"><NavLink to="/signup">Sign Up</NavLink></div>}
        {isLoaded && sessionUser && <div className="navbar-link"><ProfileButton user={sessionUser} /></div>}
      </div>
    </div>
  );
};

export default Navigation;
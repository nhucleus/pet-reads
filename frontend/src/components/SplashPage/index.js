import { useState } from "react";
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import "./Splash.css";

function SplashPage() {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [form, setForm] = useState([]);
  
    const handleDemoSubmit = (e) => {
      e.preventDefault();
      return dispatch(sessionActions.login({ credential: "Demo-lition", password: "password" }))
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
          .catch((res) => {
            if (res.data && res.data.errors) setErrors(res.data.errors);
          });
      };

    return (
        <div className="splash-container">
            <div className="splash-title">
                <h1>PetReads</h1>
            </div>
            <div className="splash-slogan">
                <p>Discover books for pet care or to read with your furry friends!</p>
            </div>
            <div className="splash-form-container">
                <ul>
                    {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                    ))}
                </ul>
                <input
                    type="text"
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    placeholder="Email or Username"
                    required
                    className="splash-input"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className="splash-input"
                />
                <div className="splash-login-link" onClick={handleLoginSubmit}>Log In</div>
                <div className="splash-login-link" onClick={handleDemoSubmit}>Demo</div>
                <p>Don't have an account? <NavLink className="splash-link" to="/signup">Sign Up</NavLink> here.</p>
            </div>
        </div>
    )
};

export default SplashPage;
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import HomePage from "./components/HomePage";
import SideNav from "./components/SideNav";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const user = useSelector(state => state.session.user);
  
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            {user && <Redirect to="/"/>}
            <SignupFormPage />
          </Route>
          <Route path="/" exact>
            {!user && <SplashPage />}
            {user && <HomePage />}
            {user && <SideNav />}
          </Route>
          <Route path="/profile">
            {!user && <Redirect to="/"/>}
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;

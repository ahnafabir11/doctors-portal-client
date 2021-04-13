import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from './../../../App';

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser] = useContext(UserContext);
  const isLoggedIn = () => {
    const result = sessionStorage.getItem('email');
    return result;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        (loggedInUser.email || isLoggedIn()) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute;
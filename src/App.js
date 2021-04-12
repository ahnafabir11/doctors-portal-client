import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/HomePage/Home/Home';
import AppointmentMain from './components/AppointmentPage/AppointmentMain/AppointmentMain';
import { createContext } from 'react';
import { useState } from 'react';
import Login from './components/LoginPage/Login/Login';
import PrivateRoute from './components/LoginPage/PrivateRoute/PrivateRoute';
import DashBoard from './components/DashboardPage/DashBoard/DashBoard';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <PrivateRoute exact path="/appointment">
              <AppointmentMain/>
            </PrivateRoute>
            <Route exact path="/login">
              <Login/>
            </Route>
            <PrivateRoute path="/dashboard">
              <DashBoard/>
            </PrivateRoute>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import Payment from './pages/Payment/Payment';
import StartContestPage from './pages/StartContestPage/StartContestPage';
import Dashboard from './pages/Dashboard/Dashboard';
import {withAuthUser, withNotAuthUser} from './components/HOCs';
import NotFound from './components/NotFound/NotFound';
import Home from './pages/Home/Home';
import ContestPage from './pages/ContestPage/ContestPage';
import UserProfile from './pages/UserProfile/UserProfile';
import 'react-toastify/dist/ReactToastify.css';
import ContestCreationPage from './pages/ContestCreation/ContestCreationPage';
import CONSTANTS from './constants';
import browserHistory from './browserHistory';
import ChatContainer from './components/Chat/ChatComponents/ChatContainer/ChatContainer';
import ContestPricing from './pages/ContestPricing/ContestPricing';
import TransactionPage from './pages/TransactionPage/TransactionPage';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={withNotAuthUser(LoginPage)} />
          <Route exact path="/registration" component={withNotAuthUser(RegistrationPage)} />
          <Route exact path="/payment" component={withAuthUser(Payment)} />
          <Route exact path="/startContest" component={withAuthUser(StartContestPage)} />
          <Route
            exact
            path="/startContest/nameContest"
            component={withAuthUser(ContestCreationPage, {
              contestType: CONSTANTS.NAME_CONTEST,
              title: 'Company Name',
            })}
          />
          <Route
            exact
            path="/startContest/taglineContest"
            component={withAuthUser(ContestCreationPage, {
              contestType: CONSTANTS.TAGLINE_CONTEST,
              title: 'TAGLINE',
            })}
          />
          <Route
            exact
            path="/startContest/logoContest"
            component={withAuthUser(ContestCreationPage, {
              contestType: CONSTANTS.LOGO_CONTEST,
              title: 'LOGO',
            })}
          />
          <Route exact path="/dashboard" component={withAuthUser(Dashboard)} />
          <Route exact path="/contest/:id" component={withAuthUser(ContestPage)} />
          <Route exact path="/account" component={withAuthUser(UserProfile)} />
          <Route exact path="/pricing" component={ContestPricing}/>
          <Route exact path="/transactions" component={withAuthUser(TransactionPage)}/>
          <Route component={NotFound}/>
        </Switch>
        <ChatContainer />
      </Router>
    );
  }
}

export default App;
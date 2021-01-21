import React, { useState } from 'react'

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TopTrivialPage from './pages/TopTrivialPage';
import TrivialPage from './pages/TrivialPage';
import AuthPage from './pages/AuthPage';

function App() {

  const [datesUser, setDatesUser] = useState({
    firstName: '',
    lastName: '',
    country: '',
    id: '',
    time: 0,
    category: '',
    difficult: '',
    correct: 0

  })

  const [auth, setAuth] = useState(false);
  const [finTrivial, setFinTrivial] = useState(false);


  return (
    <Router>
      <Switch>
        <Route path="/top">
          <TopTrivialPage finTrivial={finTrivial} datesUser={datesUser} auth={auth} setFinTrivial={setFinTrivial}/>
        </Route>

        <Route path="/trivial">
          <TrivialPage auth={auth} setDatesUser={setDatesUser} datesUser={datesUser} setFinTrivial={setFinTrivial}/>
        </Route>

        <Route path="/">
          <AuthPage setDatesUser={setDatesUser} datesUser={datesUser} auth={auth} setAuth={setAuth} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

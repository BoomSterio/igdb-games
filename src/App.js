import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import {Route} from 'react-router'
import HomePage from './pages/HomePage/HomePage'
import Header from './components/Header/Header'
import GamePage from './pages/GamePage/GamePage'
import {Provider} from 'react-redux'
import store from './redux/redux-store'

function App() {
  return (
      <Router>
          <Header/>
          <Switch>
              <Route exact path={'/'} component={HomePage}/>
              <Route path={`/search/:query?`} component={HomePage}/>
              <Route path={'/game/:id?'} component={GamePage}/>
          </Switch>
      </Router>
  );
}

const AppWrapper = () => {
    return (
        <Router>
            <Provider store={store}>
                <App/>
            </Provider>
        </Router>
    )
}

export default AppWrapper;

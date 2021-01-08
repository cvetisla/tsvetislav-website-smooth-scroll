import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import SignInPage from './pages/signin';
import contactt from './components/contact';
import NavBar from './components/Navbar';

function App() {
  return (
    <Router>
     <Switch>

       <Route path='/' component={Home} exact />
       <Route path='/signin' component={SignInPage} exact />
       <Route path='/contact' component={contactt} exact />
       
       
     </Switch>
    
    </Router>
  );
}

export default App;

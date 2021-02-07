import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import NavBar from './components/Navbar';
import {LogIn} from "./components/login/login";
import {Reg} from "./components/login/register";






function App() {

  return (
    <Router>
     <Switch>

       <Route path='/' component={Home} exact />
       <Route path='/login' component={LogIn} exact />
       <Route path='/register' component={Reg} exact /> 
     
     </Switch>
    
    </Router>

  );
}


export default App;
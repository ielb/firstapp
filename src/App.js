
import './App.css';
import React,{useState} from 'react';
import { BrowserRouter as Router, Switch ,Route } from "react-router-dom";

import Home from './pages';
import SigninPage from './pages/signIn';
import Navbar from './components/Navbar';


function App() {
  const[isOpen,setIsOpen] = useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen)
    }
  return (
    <Router>
        <Navbar toggle={toggle}/>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/signIn" component={SigninPage} exact/>
      </Switch>
    </Router>
  );
}

export default App;

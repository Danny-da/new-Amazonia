import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Menu from './components/menu';
import Home from './components/home';
import Body from './components/body';




const AppRoutes = () => {
  return (
    <Router>
      <div>
        <Header />
        <Menu/>
        <Home/>
        <Body/>

        
        
      </div>
    </Router>
  );
};

export default AppRoutes;

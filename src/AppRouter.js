import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Menu from './components/menu';
import Home from './components/home';




const AppRoutes = () => {
  return (
    <Router>
      <div>
        <Header />
        <Menu/>
        <Home/>

        
        
      </div>
    </Router>
  );
};

export default AppRoutes;

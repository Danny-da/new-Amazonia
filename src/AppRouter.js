import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Menu from './components/menu';
import Home from './components/home';
import Body from './components/body';
import Body2 from './components/body2';
import Footer from './components/footer';





const AppRoutes = () => {
  return (
    <Router>
      <div>
        <Header />
        <Menu/>
        <Home/>
        <Body/>
        <Body2/>
        <Footer/>


        
        
      </div>
    </Router>
  );
};

export default AppRoutes;

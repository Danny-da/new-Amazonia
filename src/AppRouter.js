import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Body from './components/body'



const AppRoutes = () => {
  return (
    <Router>
      <div>
        <Header />
        <Body/>
        
        
      </div>
    </Router>
  );
};

export default AppRoutes;

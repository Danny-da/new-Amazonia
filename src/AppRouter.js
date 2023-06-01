import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';



const AppRoutes = () => {
  return (
    <Router>
      <div>
        <Header />
        
        
      </div>
    </Router>
  );
};

export default AppRoutes;

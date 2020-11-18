
import './App.css';
import './Assets/default.css';
import './Assets/logo.png';
//Component
import Header from './components/headerComponent/header';
//import HomePage from './components/pages/homePage';
import Navbar from './components/Navbar';
import Footer from './components/footerComponent/footer';
import Faq from './components/pages/faq';
import CalendarF from './components/pages/calendar';
import SettingsPane from './components/pages/setting';
import App1 from './components/pages/App1';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import React from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Navbar />
        <Switch>
          <Route path='/homePage' exact component={App1} />
          <Route path='/faq' exact component={Faq} />
          <Route path='/calendar' exact component={CalendarF} />
          <Route path='/setting' exact component={SettingsPane} />
          <Route path='/App1' exact component={App1} />
          
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

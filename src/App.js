
import './App.css';
import './Assets/default.css';
import './Assets/logo.png';
//Component
import Header from './components/headerComponent/header';
import Login from './components/login/login';
//import HomePage from './components/pages/homePage';
import Navbar from './components/Navbar';
import Footer from './components/footerComponent/footer';
import Faq from './components/pages/faq';
import CalendarF from './components/pages/calendar';
import Logout from './components/logout/logout';
import SettingsPane from './components/pages/setting';
import App1 from './components/pages/App1';
import Cookies from 'js-cookie';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from "react";
import "./App.scss";

//import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        password: "",
        email: "",
      },
      roles: "manager",
      isUserActive: false
    }
  }

  

  // componentDidMount() {
  //   //Add .right by default
  //   this.rightSide.classList.add("right");
  // }

  // changeState() {
  //   const { isLogginActive } = this.state;

  //   if (isLogginActive) {
  //     this.rightSide.classList.remove("right");
  //     this.rightSide.classList.add("left");
  //   } else {
  //     this.rightSide.classList.remove("left");
  //     this.rightSide.classList.add("right");
  //   }
  //   this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  // }

  render() {
    const isUserActive = Cookies.get('access_token')!=null && Cookies.get('access_token')!=="";
    return (
      <div className="App">
        <Router>
          <Header></Header>
          {!isUserActive ? (<Login />) : (
            <div>
              <Navbar />
              <App1 />
              <Switch>
                {/* <Route path='/' exact component={App1} /> */}
                <Route path='/faq' exact component={Faq} />
                <Route path='/calendar' exact component={CalendarF} />
                <Route path='/setting' exact component={SettingsPane} />
                <Route path='/App1' exact component={App1} />
                <Route path='/logout' exact component={Logout} />
              </Switch>
            </div>
          )}

          <Footer></Footer>
        </Router>
      </div>
    );
  }
}
// eslint-disable-next-line no-unused-vars
const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};
export default App;

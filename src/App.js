import React, {useEffect, useState, createContext} from 'react';
import NavMenu from "./Components/NavMenu";
import ServiceCard from "./Components/ServiceCard/ServiceCard";
import "./Styles/App.css";
import About from "./Components/About/About";
import Articles from "./Components/Articles/Articles";
import Main from "./Components/Main/Main"
import {Route} from "react-router-dom";
import Registration from "./Components/Registration/Registration";
import Footer from './Components/Footer/Footer';
import Modal from './Components/Modal/Modal';
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext(null);

function App() {

    const [isAuth, setIsAuth] = useState(false)
    const [modalActive, setModalActive] = useState(false);
    const history = useHistory();

    useEffect(() => {
      if (localStorage.getItem('isAuth')) {
        setIsAuth(true)
      }
    },[])

function login() { 
    localStorage.setItem('isAuth', 'true')
    setIsAuth(true);
    history.push("/services");
}

function logout() {
    localStorage.removeItem('isAuth')
    setIsAuth(prevState => false)
    console.log('Logged out');
}

function modalActivate () {
  setModalActive(prevState => true)
}

const context = {isAuth, setIsAuth, login, logout, modalActive, modalActivate, setModalActive}

  return (
    <AuthContext.Provider value={context}>
      <div className="App" >
          <Modal active={modalActive} setActive={setModalActive}/>
          <NavMenu />
            <Route path="/" exact={true} component={Main}/>
            <Route path="/articles" component={Articles}/>
            <Route path="/about" component={About}/>
            <Route path="/registration" component={Registration}/>
            <Route path="/services" component={ServiceCard}/>
          <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;

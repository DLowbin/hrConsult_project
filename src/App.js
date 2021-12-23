import React, {useEffect, useState, createContext} from 'react';
import NavMenu from "./Components/NavMenu";
import ServiceCard from "./Components/ServiceCard/ServiceCard";
// import Image from "./Components/ServiceCard/banner_1.jpg";
import "./Styles/App.css";
// import CardPiece from "./Components/ServiceCard/ServiceCard";
import About from "./Components/About/About";
import Articles from "./Components/Articles/Articles";
// import Registration from "./Components/Registration/Registration";
// import Switch from "react-router-dom/es/Switch";
import Main from "./Components/Main/Main"
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Registration from "./Components/Registration/Registration";
import Private from "./Components/Private/Private";
import Footer from './Components/Footer/Footer';
import Modal from './Components/Modal/Modal';


export const AuthContext = createContext(null);


function App() {


const [isAuth, setIsAuth] = useState(false)
const [modalActive, setModalActive] = useState(false);

useEffect(() => {
  if (localStorage.getItem('isAuth')) {
    setIsAuth(true)
  }
},[])

function login() {  
    localStorage.setItem('isAuth', 'true')
    setIsAuth(true)
    console.log('Logged in');
}

function logout() {
    localStorage.removeItem('isAuth')
    setIsAuth(prevState => false)
    console.log('Logged out');
}

// function changeIsAuth() {
//   setIsAuth(prevState => true)
//   console.log('Loged in');
// }
function modalActivate () {
  setModalActive(prevState => true)
}


const context = {isAuth, setIsAuth, login, logout, modalActivate}

  return (
      <AuthContext.Provider value={context}>
        <div className="App" >
        <Modal active={modalActive} setActive={setModalActive}/>
            <NavMenu />
            {/* <button onClick={() => setModalActive(true)}>Модальное окно</button> */}
            {/* <Modal active={modalActive} setActive={setModalActive}/> */}

                  <Route path="/private" component={Private}/>
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

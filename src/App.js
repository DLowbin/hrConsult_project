import React, {useState} from 'react';
import NavMenu from "./Components/NavMenu";
import ServiceCard from "./Components/ServiceCard/ServiceCard";
// import Image from "./Components/ServiceCard/banner_1.jpg";
import "./Styles/App.css";
// import CardPiece from "./Components/ServiceCard/ServiceCard";
// import AboutArticle from "./Components/About/About";
import Articles from "./Components/Articles/Articles";
// import Registration from "./Components/Registration/Registration";
// import Switch from "react-router-dom/es/Switch";
// import Redirect from "react-router-dom/es/Redirect";
import {Route, BrowserRouter} from "react-router-dom";
import Registration from "./Components/Registration/Registration";




function App() {




  return (
    <BrowserRouter>
        <div className="App" >
            <NavMenu />
            <Route path="/" exact={true} component={ServiceCard}/>
            <Route path="/articles" component={Articles}/>
            <Route path="/registration" component={Registration}/>




            {/*<Articles />*/}
            {/*<ServiceCard />*/}
            {/*<AboutArticle />*/}
            {/*<Registration/>*/}
        </div>
    </BrowserRouter>
  );
}

export default App;

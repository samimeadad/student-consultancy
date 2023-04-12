import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Career from "./Pages/Career/Career";
import Contact from "./Pages/Contact/Contact";
import CoreTeam from "./Pages/CoreTeam/CoreTeam";

function App () {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/home" element={ <Home /> } />
        <Route exact path="/about" element={ <AboutUs /> } />
        <Route exact path="/core-team" element={ <CoreTeam /> } />
        <Route exact path="/career" element={ <Career /> } />
        <Route exact path="/contact" element={ <Contact /> } />
        <Route exact path="*" element={ <PageNotFound /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

function App () {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/home" element={ <Home /> } />
        <Route exact path="*" element={ <PageNotFound /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

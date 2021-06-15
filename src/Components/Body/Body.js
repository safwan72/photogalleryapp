import React from "react";
import { Redirect, Route, Switch } from "react-router";
import PhotoGalleryApp from "../Body/PhotoGalleryApp/PhotoGallery.jsx";
import Feedback from "../Body/Feedback/Feedback";
import Home from "./Home.js";
const Body = () => {
  return (
    <>
      <Switch>
      <Route path='/' exact component={Home}/>
        <Route path="/photogallery" exact component={PhotoGalleryApp} />
        <Route path="/feedback" exact component={Feedback} />
        <Redirect to="/" exact />
      </Switch>
    </>
  );
};

export default Body;

import React from "react";
import { Link } from "react-router-dom";
const Home = (props) => {
  return (
    <>
 <div class="jumbotron w-100" style={{position:'absolute',transform:'translate(-50%,-50%)',top:"50%",left:'50%',backgroundColor:'white',textAlign:'center'}}>
  <h1 class="display-4">Photo Gallery App</h1>
  <p class="lead">Hello, Welcome to Our PhotoGallery Website</p>
  <hr class="my-4"/>
  <p>Click On the button to start viewing photos.....</p>
  <p class="lead">
    <Link class="btn btn-secondary btn-lg" to="/photogallery" role="button">Click Here to Start</Link>
  </p>
</div>
    </>
  );
};

export default Home;

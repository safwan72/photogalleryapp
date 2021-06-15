import React from "react";
import MainComponent from "./Components/MainComponent";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import myStore from "./Redux/Store";
function App() {
  return (
    <>
      <Provider store={myStore}>
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

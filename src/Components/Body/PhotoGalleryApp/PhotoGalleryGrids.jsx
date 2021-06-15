import React, { Component } from "react";
import "./PhotoGallery.css";
class PhotoGalleryGrids extends Component {
  render() {
    let show = null;
    show = this.props.images.map((i) => {
      return (
        <div
          className="portfoilomainpics"
          key={Math.random()}
          style={{ position: "relative" }}
        >
          <img
            src={i.webformatURL}
            className="rigimg"
            alt={i.tags}
            onClick={() => this.props.handleClick(i)}
          />
         <p> Photgrapher: <small> {i.user}</small> </p> 
        </div>
      );
    });

    return <>{show}</>;
  }
}

export default PhotoGalleryGrids;

import React, { Component } from "react";
import PhotoGalleryGrids from "./PhotoGalleryGrids";
import { connect } from "react-redux";
import * as actionStores from "../../../Redux/actionStores";
import Spinners from "../../Body/Spinners";
import "./PhotoGallery.css";
import PhotoGalleryModal from "./PhotoGalleryModal";
import { Link } from "react-router-dom";

const mapdispatchToProps = (dispatch) => {
  return {
    fetchPhotos: (valuesey) => dispatch(actionStores.fetchPhotos(valuesey)),
  };
};
const mapStateToProps = (state) => {
  return {
    pics: state.picsReducer,
  };
};
class PhotoGallery extends Component {
  state = {
    valuesy: "",
    selectedPhoto: null,
    modalOpen: false,
  };
  changeHandle(e) {
    this.setState({
      valuesy: e.target.value,
    });
  }
  handleSearch=val=>{
    this.props.fetchPhotos(this.state.valuesy);

  }
  handleClick = (val) => {
    this.setState({
      selectedPhoto: val,
      modalOpen: !this.state.modalOpen,
    });
  };
  componentDidMount() {
    this.props.fetchPhotos();
  }
  toggle=()=> {
    this.setState({
      modalOpen: false,
    });
  }
  render() {
    let allphoto = this.props.pics.photos;
    let modalphoto = null;
    if(this.state.selectedPhoto!==null&&this.state.modalOpen){
      modalphoto=(
        <PhotoGalleryModal images={this.state.selectedPhoto} open={this.state.modalOpen} togglefun={this.toggle}/>
      )
    }

    return (
      <>
        <h1 className="text-center my-5 " style={{ fontSize: "70px" }}>
          PhotoGallery
        </h1>
        <div className="container my-5">
          <div className="input-group mb-4">
            <input
              type="text"
              className="form-control rounded-lg"
              placeholder="Search Here"
              aria-label="Search Here"
              aria-describedby="basic-addon2"
              value={this.state.valuesy}
              onChange={(e) => this.changeHandle(e)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary rounded-lg"
                type="button"
                onClick={this.handleSearch}
              >
                Search Here
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="portfoliomainsection">
            {this.props.pics.isLoading ? (
              <Spinners />
            ) : (
              <PhotoGalleryGrids
                images={allphoto}
                handleClick={this.handleClick}
              />
            )}
        <Link to='/feedback' className='btn btn-primary' style={{position:'fixed',bottom:"0",right:"0"}}>Go To FeedBack Page</Link>
                {modalphoto}
          </div>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapdispatchToProps)(PhotoGallery);

import React from "react";
import { Modal, ModalBody } from "reactstrap";
import Spinners from "../Spinners";
const PhotoGalleryModal = (props) => {
  return (
    <>
      <Modal
        size="lg"
        style={{ maxWidth: "800px", width: "100%" }}
        isOpen={props.open}
        className="rounded-lg"
      >
        <ModalBody style={{ backgroundColor: "#bbe4e9" }}>
          {props.images !== null ? (
            <img
              src={props.images.largeImageURL}
              alt={props.images.tags}
              style={{ width: "100%", objectFit: "cover", height: "100%" }}
            />
          ) : (
            <Spinners />
          )}
        </ModalBody>
        <button className="btn btn-secondary" onClick={props.togglefun}>
          close
        </button>
      </Modal>
    </>
  );
};

export default PhotoGalleryModal;

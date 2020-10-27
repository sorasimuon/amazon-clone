import React, { useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import { useStateValue } from "../utilities/StateProvider";
import uuid from "react-uuid";

import "./NewDeliveryAddress.css";
import "./Login.js";

function NewDeliveryAddress() {
  const [{ addresses }, dispatch] = useStateValue();
  const [show, setShow] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const maxNbAddresses = 4;
  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseOverlay = () => setShowOverlay(false);
  const handleShowOverlay = () => setShowOverlay(true);

  const addAddress = (e) => {
    //Prevent submission after cliking on add Address
    e.preventDefault();

    // Save the new address in State provider via reducer
    dispatch({
      type: "ADD_ADDRESS",
      address: {
        id: uuid(),
        street: street,
        postalCode: postalCode,
        city: city,
        country: country,
      },
    });

    console.log(addresses);
    // Close the Modal after saving the new address
    handleClose();
  };

  const target = useRef(null);

  const handleShowLimit = (maxNbAddresses) => {
    if (addresses.length < maxNbAddresses) {
      handleShow();
      handleCloseOverlay();
    } else {
      handleShowOverlay();
    }
  };

  return (
    <>
      <Button
        ref={target}
        variant="warning"
        className="btn-new-address"
        onClick={() => handleShowLimit(maxNbAddresses)}
      >
        +
      </Button>

      <Overlay target={target.current} show={showOverlay} placement="top">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            Limited to {maxNbAddresses} addresses
          </Tooltip>
        )}
      </Overlay>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new delivery address</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form>
            <div className="form-group">
              <label for="inputStreet">Street</label>
              <input
                type="text"
                id="inputStreet"
                placeholder="street number, street name"
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="inputPostalCode">Postal Code</label>
              <input
                type="text"
                id="inputPostalCode"
                placeholder="postal code"
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="inputCity">City</label>
              <input
                type="text"
                id="inputCity"
                placeholder="city"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="inputCountry">Country</label>
              <input
                type="text"
                id="inputCountry"
                placeholder="country"
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" type="submit" onClick={addAddress}>
            Save new address
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewDeliveryAddress;

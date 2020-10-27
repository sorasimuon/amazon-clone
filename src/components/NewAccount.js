import React from "react";
import "./NewAccount.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

function NewAccount() {
  return (
    <form>
      <Carousel
        interval={null}
        indicators={false}
        nextIcon={
          <span aria-hidden="true" className="carousel-control-next-icon" />
        }
        prevIcon={
          <span aria-hidden="true" className="carousel-control-prev-icon" />
        }
      >
        {/* First Item */}
        <Carousel.Item>
          <div className="new-account">
            <div className="new-account-container">
              <h1 className="title-item">1 / 3 : Identification</h1>
              <div className="horizontal-container">
                <div className="form-group form-group-elem">
                  <label for="inputUsername">* Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputLastName"
                    placeholder="last name"
                    required
                  />
                </div>
                <div className="form-group form-group-elem">
                  <label for="inputPassword">* First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputFirstName"
                    placeholder="first name"
                    required
                  />
                </div>
              </div>
              <span className="separator"></span>
              <div className="vertical-container">
                <div className="form-group form-group-elem">
                  <label for="inputEmail">* E-mail</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    aria-describedby="emailHelp"
                    placeholder="e-mail address"
                    required
                  />
                </div>
                <div className="horizontal-container">
                  <div className="form-group form-group-elem">
                    <label for="inputPassword">* Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="password"
                      required
                    />
                  </div>
                  <div className="form-group form-group-elem">
                    <label for="inputPassword">* Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputConfirmPassword"
                      placeholder="password"
                      required
                    />
                  </div>
                </div>
              </div>
              <span className="separator"></span>
              <button
                type="button"
                className="btn btn-primary btn-primary-new-account"
                onClick={summarizeAccount}
              >
                Next &#62;&#62;
              </button>
            </div>
          </div>
        </Carousel.Item>

        {/* Second Item */}
        <Carousel.Item>
          <div className="new-account">
            <div className="new-account-container">
              <h1 className="title-item">2 / 3 : Delivery Address</h1>
              <div className="horizontal-container">
                <div className="form-group form-group-elem">
                  <label for="inputPassword">Flat Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputFlat"
                    placeholder="n&#186;"
                  />
                </div>
                <div className="form-group form-group-elem">
                  <label for="inputPassword">Floor Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputFloor"
                    placeholder="n&#186;"
                  />
                </div>
              </div>
              <span className="separator"></span>
              <div className="vertical-container">
                <div className="horizontal-container">
                  <div className="form-group form-group-elem">
                    <label for="inputUsername">Adress</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputStreetNumber"
                      placeholder="n&#186;"
                    />
                  </div>
                  <div className="form-group form-group-elem">
                    <label for="inputUsername">Postal Code</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputStreetNumber"
                      placeholder="n&#186;"
                    />
                  </div>
                </div>
                <div className="horizontal-container">
                  <div className="form-group form-group-elem">
                    <label for="inputUsername">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                      placeholder="city"
                    />
                  </div>
                  <div className="form-group form-group-elem">
                    <label for="inputUsername">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCountry"
                      placeholder="country"
                    />
                  </div>
                </div>
              </div>
              <span className="separator"></span>
              <button
                type="button"
                className="btn btn-primary btn-primary-new-account"
                onClick={summarizeAccount}
              >
                Next &#62;&#62;
              </button>
            </div>
          </div>
        </Carousel.Item>

        {/* Third Item */}
        <Carousel.Item>
          <div className="new-account">
            <div className="new-account-container">
              {/* <form> */}
              <h1 className="title-item">3 / 3 : Confirmation</h1>
              <p className="summary-title">User Information</p>
              <p className="summary-head">Last Name : </p>
              <p className="summary-head">First Name : </p>
              <br></br>
              <p className="summary-head">E-mail Address : </p>
              <br></br>
              <p className="summary-title">Delivery Address</p>
              <p className="summary-head">Adress : </p>
              <p className="summary-head">Postal Code : </p>
              <p className="summary-head">City : </p>
              <p className="summary-head">Country : </p>
              <Link to="/">
                <button
                  type="submit"
                  className="btn btn-success btn-primary-new-account"
                >
                  Create Account
                </button>
              </Link>
              {/* </form> */}
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </form>
  );
}

const summarizeAccount = () => {
  let lastName = document.getElementById("inputLastName");
};

export default NewAccount;

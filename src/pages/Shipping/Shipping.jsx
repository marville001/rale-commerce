import React, { useState } from "react";

import styles from "./Shipping.module.css";
import { Wrapper } from "..";
import { useSelector, useDispatch } from "react-redux";
import { saveShipping } from "../../_actions/cartActions";

import { CheckoutSteps } from "../../components/";

const Shipping = (props) => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(saveShipping({ address, city, postalCode, country }));
    setAddress("");
    setCity("");
    setPostalCode("");
    setCountry("");
    props.history.push("payment");
  };

  return (
    <Wrapper>
      <CheckoutSteps step1 step2 />
      <div className={styles.shippingContainer}>
        <div className={styles.shippingContent}>
          <h2>Shipping</h2>
          <div className={styles.inputContainer}>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter address..."
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city..."
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              placeholder="Enter postal code..."
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Enter country..."
            />
          </div>

          <button className={styles.continueBtn} onClick={handleSubmit}>
            Continue
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Shipping;

import React, { useState } from "react";

import styles from "./Payment.module.css";
import { Wrapper } from "..";
import { useSelector, useDispatch } from "react-redux";
import { savePayment } from "../../_actions/cartActions";
import { CheckoutSteps } from "../../components";

const Payment = (props) => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(savePayment({ paymentMethod }));
    setPaymentMethod("");
    props.history.push("placeorder");
  };

  return (
    <Wrapper>
      <CheckoutSteps step1 step2 step3 />
      <div className={styles.paymentContainer}>
        <div className={styles.paymentContent}>
          <h2>Payment</h2>
          <div className={styles.inputContainer}>
            <input
              type="radio"
              name="paymentMethod"
              value={"paypal"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="paymentMethod">Paypal</label>
          </div>

          <input
            type="button"
            disabled={paymentMethod === ""}
            value="Continue"
            className={styles.continueBtn}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Payment;

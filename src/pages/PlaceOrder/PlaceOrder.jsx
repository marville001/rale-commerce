import React from "react";

import styles from "./PlaceOrder.module.css";
import { Wrapper } from "../";
import { CheckoutSteps } from "../../components/";
import { useSelector } from "react-redux";

const PlaceOrder = (props) => {
  const { shipping, payment, cart } = useSelector((state) => state.cart);

  if (!shipping.address) {
    props.history.push("/shipping");
  } else if (!payment.paymentMethod) {
    props.history.push("/payment");
  }

  const itemsPrice = cart.reduce((a, c) => a + c.total, 0);
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const taxPrice = 0.15 * itemsPrice;

  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  const placeOrderHandler = () => {};

  return (
    <Wrapper>
      <CheckoutSteps step1 step2 step3 step4 />
      <div className={styles.placeOrderContatiner}>
        <div className={styles.placeOrderInfoContainer}>
          <div className={styles.d}>
            <h3>Shipping</h3>
            <div>
              {shipping.address},{shipping.city},{shipping.postalCode},
              {shipping.country}
            </div>
          </div>
          <div className={styles.d}>
            <h3>Payment</h3>
            <div>Payment Method: {payment.paymentMethod} </div>
          </div>
          <div className={styles.cartItems}>
            <table>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
              {/* {cart.map((product) => (
                <CartItem
                  addTotal={addTotal}
                  key={product._id}
                  product={product}
                />
              ))} */}
            </table>
          </div>
        </div>
        <div className={styles.placeOrderActions}>
          <button onClick={placeOrderHandler} className={styles.emptyCartBtn}>
            Place Order
          </button>
          <h3>Order Summary</h3>
          <div className={styles.os}>
            <div>Items</div>
            <div>{itemsPrice}</div>
          </div>
          <div className={styles.os}>
            <div>Shipping</div>
            <div>{shippingPrice}</div>
          </div>
          <div className={styles.os}>
            <div>Tax</div>
            <div>{taxPrice}</div>
          </div>
          <div className={styles.osl}>
            <div>Order Total</div>
            <div>{totalPrice}</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PlaceOrder;

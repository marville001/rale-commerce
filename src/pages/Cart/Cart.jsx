import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import PaymentIcon from "@material-ui/icons/Payment";

import { emptyCart } from "../../_actions";
import { CartItem, IconedButton, ConfirmModal } from "../../components";
import { Wrapper } from "../";

import styles from "./Cart.module.css";

const Cart = ({ emptyCart, history }) => {
  const { cart } = useSelector((state) => state.cart);
  const [cartTotal, setCartTotal] = useState(0);
  const [confirmModalOpen, setConfirmMOpen] = useState(false);
  const deliveryCost = 200;

  const total = cartTotal + deliveryCost;

  const addTotal = () => {
    setCartTotal(cart.reduce((a, c) => a + c.total, 0));
  };

  useEffect(() => {
    addTotal();
  }, [cart]);

  const openConfirmModal = () => {
    setConfirmMOpen(true);
  };
  const closeConfirmModal = () => {
    setConfirmMOpen(false);
  };

  const handleEmpty = (id) => {
    emptyCart();
    closeConfirmModal();
  };

  const handleCheckOut = () => {
    history.push("/login?redirect=shipping");
  };
  return (
    <Wrapper>
      {cart.length === 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
            paddingTop: "20px",
            fontSize: "20px",
          }}
        >
          <h3
            style={{
              fontSize: "2.5rem",
            }}
          >
            Your cart is empty.
          </h3>
          <Link
            style={{
              fontSize: "16px",
            }}
            to="/home"
          >
            Shop ?{" "}
          </Link>
        </div>
      ) : (
        <>
          <Link className={styles.continueShoppingBtn} to="/home">
            Continue shopping
          </Link>
          <div className={styles.cartContatiner}>
            <div className={styles.cartItemsContainer}>
              <h2>
                MyCart ({cart.length} item{cart.length > 1 && "s"})
              </h2>
              <div className={styles.cartItems}>
                <table>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>SubTotal</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((product) => (
                      <CartItem
                        addTotal={addTotal}
                        key={product._id}
                        product={product}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className={styles.cartActions}>
              <h2>Checkout Details</h2>
              <div className={styles.fb}>
                <span>Total</span> <span>Ksh {cartTotal}</span>
              </div>
              <div className={styles.fb}>
                <span>Delivery</span> <span>Ksh {deliveryCost}</span>
              </div>
              <hr />
              <div className={styles.fb}>
                <span>Total Payable</span> <span>Ksh {total}</span>
              </div>
              <button className={styles.checkOutBtn} onClick={handleCheckOut}>
                <PaymentIcon /> Checkout
              </button>
              <button
                className={styles.emptyCartBtn}
                onClick={openConfirmModal}
              >
                <RemoveShoppingCartIcon /> Empty Cart
              </button>
            </div>
          </div>
        </>
      )}
      <ConfirmModal
        confirmAction={handleEmpty}
        closeAction={closeConfirmModal}
        open={confirmModalOpen}
        title="Empty the cart?"
      />
    </Wrapper>
  );
};

export default connect(null, { emptyCart })(Cart);

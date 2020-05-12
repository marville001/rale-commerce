import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import PaymentIcon from "@material-ui/icons/Payment";

import { emptyCart } from "../../_actions";
import { CartItem, Title } from "../../components";
import { Wrapper } from "../";

import "../style.css";
import IconedButton from "../../components/IconedButton/IconedButton";

const Cart = ({ cart, cartTotal, emptyCart }) => {
  return (
    <Wrapper>
      <div className="cart-container">
        <Title name="my" subname="cart" />
        <div className="cart-content">
          {cart.length === 0 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
                border: " 1px solid black"
              }}
            >
              <h3>No item added to cart yet</h3>
              <Link to="/">Click here to shop</Link>
            </div>
          ) : (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <div style={{ flexBasis: "70%" }}>
                {cart.map(product => (
                  <CartItem key={product._id} product={product} />
                ))}
              </div>
              <div className="cart-foot-dets" style={{ flexBasis: "30%" }}>
                <div className="cart-total m-2">
                  Total $ <span className="cart-item-total">{cartTotal}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    flexWrap: "wrap"
                  }}
                >
                  <IconedButton
                    icon={<RemoveShoppingCartIcon />}
                    action={emptyCart}
                    text="empty cart"
                    bgColor="#343a40"
                  />
                  <IconedButton
                    action={() => alert("checkout cart")}
                    icon={<PaymentIcon />}
                    text="checkout"
                    bgColor="#28a745"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  cart: state.cart,
  cartTotal: state.cartTotal
});

export default connect(mapStateToProps, { emptyCart })(Cart);

import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromCart, incrementCount, decrementCount } from "../../_actions";
import DeleteIcon from "@material-ui/icons/Delete";

class CartItem extends Component {
  render() {
    const {
      product,
      removeFromCart,
      incrementCount,
      decrementCount
    } = this.props;
    return (
      <div className="cart-item">
        <div className="cart-item-img">
          <img
            className="cartt-img-top"
            src={product.imageUrl}
            alt={product.name}
          />
        </div>
        <div className="cart-item-dets">
          <h5 className="cart-item-title">{product.name}</h5>
          <div className="cartincdec">
            <span
              onClick={() => {
                decrementCount(product._id);
                this.forceUpdate();
              }}
              className="cartincdec-minus"
            >
              -
            </span>
            <span className="cartincdec-count">{product.count}</span>
            <span
              onClick={() => {
                incrementCount(product._id);
                this.forceUpdate();
              }}
              className="cartincdec-plus"
            >
              +
            </span>
          </div>
        </div>
        <div>
          Price $ <span className="cart-item-price">{product.price}</span>
        </div>
        <div>
          Total $ <span className="cart-item-total">{product.total}</span>
        </div>
        <div
          onClick={() => {
            removeFromCart(product._id);
            this.forceUpdate();
          }}
          className="cart-item-delbtn"
        >
          <span>
            <DeleteIcon />
          </span>
        </div>
      </div>
    );
  }
}
export default connect(null, {
  removeFromCart,
  incrementCount,
  decrementCount
})(CartItem);

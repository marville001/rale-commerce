import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromCart, changeQuantity } from "../../_actions";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import styles from "./CartItem.module.css";
import { ConfirmModal } from "../";

class CartItem extends Component {
  state = { confirmModalOpen: false };

  openConfirmModal = () => {
    this.setState(() => {
      return { confirmModalOpen: true };
    });
  };
  closeConfirmModal = () => {
    this.setState(() => {
      return { confirmModalOpen: false };
    });
  };

  handleRemove = (id) => {
    this.props.removeFromCart(id);
    this.forceUpdate();
    this.closeConfirmModal();
  };

  render() {
    const { product, changeQuantity, addTotal } = this.props;

    return (
      <>
        <tr className={styles.cartItemContainer}>
          <td className={styles.cartItemImg}>
            <img src={product.imageUrl} alt={product.name} />
          </td>
          <td className={styles.cartItemTitle}>{product.name}</td>
          <td className={styles.cartItemPrice}>KSh {product.price}</td>
          <td className={styles.cartItemQuantity}>
            <select
              onChange={(e) => {
                changeQuantity(product._id, e.target.value);
                addTotal();
                this.forceUpdate();
              }}
              name="quantity"
              id=""
              value={product.count}
            >
              {[...Array(10).keys()].map((opt) => (
                <option key={opt + 1} value={opt + 1}>
                  {opt + 1}
                </option>
              ))}
            </select>
          </td>
          <td className={styles.cartItemTotal}>
            KSh {product.total.toFixed(2)}
          </td>
          <td>
            <div onClick={this.openConfirmModal} className={styles.remove}>
              <DeleteIcon />
            </div>
          </td>
        </tr>
        <ConfirmModal
          confirmAction={this.handleRemove}
          closeAction={this.closeConfirmModal}
          id={product._id}
          open={this.state.confirmModalOpen}
          title="Confirm removing item from cart"
        />
      </>
    );
  }
}

export default connect(null, {
  removeFromCart,
  changeQuantity,
})(CartItem);

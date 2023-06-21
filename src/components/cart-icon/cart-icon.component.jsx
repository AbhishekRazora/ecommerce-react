// import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";
import React from "react";
import "./cart-icon.styles.scss";
import { selectCartCount } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";
function CartIcon() {
  const cartCount = useSelector(selectCartCount);

  return (
    <div className="cart-icon-container">
      {/* <ShoppingSvg className="shopping-icon" /> */}
      <i className="fa-solid fa-cart-shopping shopping-icon"></i>
      <span className="item-count">{cartCount}</span>
    </div>
  );
}

export default CartIcon;
import { useContext, useEffect, useState } from "react";

import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    console.log("2nd");
    console.log(`2nd: ${btnIsHighlighted}`);
    setBtnIsHighlighted(true);
    console.log(`2nd: ${btnIsHighlighted}`);

    const timer = setTimeout(() => {
      console.log(`timer1: ${btnIsHighlighted}`);
      setBtnIsHighlighted(false);
      console.log(`timer2: ${btnIsHighlighted}`);
    }, 300);
    return () => {
      console.log("1st");
      console.log(`1nd: ${btnIsHighlighted}`);
      clearTimeout(timer);
      console.log(`1nd: ${btnIsHighlighted}`);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

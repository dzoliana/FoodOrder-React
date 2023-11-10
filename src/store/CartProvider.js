import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    //console.log(updatedTotalAmount);
    //22.99 prva cijena
    //45.98 cijena dva sushija

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    //console.log(existingCartItemIndex);
    //-1 kada kliknemo za prvi sushi (trenutno ne postoji nijedan)
    //0 dodan još jedan sushi (jedan već postoji u košarici)

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    //console.log(existingCartItem);
    //undefinied
    //{id: 'm1', name: 'Sushi', amount: 1, price: 22.99}...

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      //console.log(updatedItem);
      //{id: 'm1', name: 'Sushi', amount: 2, price: 22.99}

      updatedItems = [...state.items];
      //console.log(updatedItems);
      //0: {id: 'm1', name: 'Sushi', amount: 2, price: 22.99}

      updatedItems[existingCartItemIndex] = updatedItem;
      //console.log(updatedItems);
      //0: {id: 'm1', name: 'Sushi', amount: 2, price: 22.99}
    } else {
      updatedItems = state.items.concat(action.item);
      //ili  updatedItems = [...state.items, action.item];
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "CLEAR") {
    return defaultCartState;
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  //console.log(cartState);
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

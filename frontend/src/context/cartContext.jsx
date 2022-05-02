import React from 'react';

const CartContext = React.createContext('');

export default CartContext;
const [cartProductSeller, setCartProductSeller] = React.useState(() =>
  localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : null,
);

const addToCart = () => {
  return null;
};

const contextData = {
  cartProductSeller,
  addToCart,
};

export function CartProvider() {
  return <CartContext.Provider value={contextData} />;
}

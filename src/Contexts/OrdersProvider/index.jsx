import { createContext, useState, useContext } from "react";
import { PropTypes } from "prop-types";
import { ShoppingCartContext } from "../ShoppingCartProvider";

import { calcTotalPrice } from "../../utils/calcTotalPrice";

const OrdersContext = createContext();

const OrdersProvider = ({ children }) => {
  const { cartProducts, onEmptyOrdersHandler } =
    useContext(ShoppingCartContext);
  const [orders, setOrders] = useState([]);

  const handleCheckoutOrder = () => {
    const orderToAdd = {
      id: Date.now(),
      date: Date.now(),
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: calcTotalPrice(cartProducts),
    };

    setOrders([...orders, orderToAdd]);
    onEmptyOrdersHandler();
  };

  return (
    <OrdersContext.Provider value={{ orders, handleCheckoutOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};
OrdersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { OrdersProvider, OrdersContext };

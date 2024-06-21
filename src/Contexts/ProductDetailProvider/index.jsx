import { createContext, useState, useContext } from "react";
import { PropTypes } from "prop-types";

import { ShoppingCartContext } from "../ShoppingCartProvider";

const ProductDetailContext = createContext();

const ProductDetailProvider = ({ children }) => {
  const { isCheckoutOpen, onCloseCheckout } = useContext(ShoppingCartContext);

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  isCheckoutOpen && isProductDetailOpen && setIsProductDetailOpen(false);

  const onSelectProductDetail = (product) => {
    !isProductDetailOpen && setIsProductDetailOpen(true);
    isCheckoutOpen && onCloseCheckout();
    setSelectedProduct(product);
  };
  const onCloseProductDetail = () => setIsProductDetailOpen(false);

  return (
    <ProductDetailContext.Provider
      value={{
        isProductDetailOpen,
        onSelectProductDetail,
        onCloseProductDetail,
        selectedProduct,
      }}
    >
      {children}
    </ProductDetailContext.Provider>
  );
};
ProductDetailProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ProductDetailProvider, ProductDetailContext };

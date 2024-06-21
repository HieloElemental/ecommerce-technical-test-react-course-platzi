import { useContext } from "react";
import { PropTypes } from "prop-types";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";

import { ShoppingCartContext } from "../../Contexts/ShoppingCartProvider";
import { ProductDetailContext } from "../../Contexts/ProductDetailProvider";

const Card = ({ data }) => {
  const { category: categoryName, image, title, price, id } = data;
  const { onAddHandler, cartProducts } = useContext(ShoppingCartContext);
  const { onSelectProductDetail } = useContext(ProductDetailContext);

  const renderIcon = (id) => {
    const isInCart =
      cartProducts.filter((product) => product.id == id).length > 0;
    if (isInCart) {
      return (
        <a className='text-white bg-gray-800 font-medium rounded-lg text-xs px-3 py-2.5 text-center'>
          <CheckIcon className='size-5 inline' /> In cart
        </a>
      );
    } else {
      return (
        <a
          onClick={(event) => onAddHandler(event, data)}
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          <PlusIcon className='size-5 inline' /> Add to cart
        </a>
      );
    }
  };

  return (
    <div
      className='w-60 h-72 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer'
      onClick={() => onSelectProductDetail(data)}
    >
      <figure className='relative mb-2 w-full h-4/6'>
        <span className='absolute bottom-0 left-0 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3 m-2'>
          {categoryName}
        </span>
        <img
          className='w-full h-full object-cover rounded-t-lg'
          src={image}
          alt=''
        />
      </figure>
      <div className='px-5 pb-5'>
        <a
          href=''
          className='text-sm font-semibold tracking-tight text-gray-900 dark:text-white'
        >
          <p className='truncate' title={title}>
            {title}
          </p>
        </a>
        <div className='flex items-center justify-between py-1'>
          <span className='text-xl font-bold text-gray-900 dark:text-white'>
            ${price}
          </span>
          {renderIcon(id)}
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export { Card };

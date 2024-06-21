import { XMarkIcon } from "@heroicons/react/24/solid";
import { PropTypes } from "prop-types";

const OrderCard = ({ id, title, imageUrl, price, onDeleteHandler = false }) => {
  return (
    <div className='flex justify-between items-center mb-3 gap-1'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 min-w-20 h-20'>
          <img
            className='h-20 w-20 rounded-lg object-cover'
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>${price}</p>
        {onDeleteHandler && (
          <XMarkIcon
            onClick={() => onDeleteHandler(id)}
            className='h-6 w-6 text-white cursor-pointer'
          />
        )}
      </div>
    </div>
  );
};
OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onDeleteHandler: PropTypes.func,
};

export { OrderCard };

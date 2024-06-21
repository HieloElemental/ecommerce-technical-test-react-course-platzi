import { PropTypes } from "prop-types";

const types = {
  danger: "bg-red-100 border-red-400 text-red-700",
};

const Alert = ({ type, title, text, onClose }) => {
  return (
    <div className={`${types[type]} px-4 py-3 rounded relative`} role='alert'>
      <strong className='font-bold pr-2'>{title}</strong>
      <span className='block sm:inline mr-9'>{text}</span>
      <span
        className='absolute top-0 bottom-0 right-0 px-4 py-3'
        onClick={onClose}
      >
        <svg
          className='fill-current h-6 w-6 text-red-500'
          role='button'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
        >
          <title>Close</title>
          <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
        </svg>
      </span>
    </div>
  );
};
Alert.propTypes = {
  type: PropTypes.oneOf(Object.keys(types)).isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export { Alert };

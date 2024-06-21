import { XMarkIcon } from "@heroicons/react/24/solid";
import { PropTypes } from "prop-types";

const SideMenu = ({ isOpen, onClose, children, title }) => {
  return (
    <aside
      className={`${
        isOpen ? "flex" : "hidden"
      } overflow-y-auto w-full h-[calc(100vh-60px)] z-10 top-[60px] right-0 rounded-l-lg max-w-md flex-col fixed bg-gray-900 text-white border border-gray-700`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>{title}</h2>
        <div onClick={onClose} className='cursor-pointer'>
          <XMarkIcon className='size-6' />
        </div>
      </div>
      {children}
    </aside>
  );
};
SideMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export { SideMenu };

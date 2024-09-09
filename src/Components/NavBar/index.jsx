import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon, Bars3Icon } from "@heroicons/react/24/solid";

import { ShoppingCartContext } from "../../Contexts/ShoppingCartProvider";
import { UserContext } from "../../Contexts/UserProvider";

import { getUrl } from "../../utils/getUrl";

const navProductCategories = [
  { path: getUrl("/"), text: "All" },
  { path: getUrl("/electronics"), text: "Electronics" },
  { path: getUrl("/jewelery"), text: "Jewelery" },
  { path: getUrl("/mens-clothing"), text: "Men's Clothing" },
  { path: getUrl("/womens-clothing"), text: "Women's Clothing" },
];

const getNavRightPages = (isLoggedIn) => {
  if (isLoggedIn) {
    return [
      { path: getUrl("/my-orders"), text: "My Orders" },
      { path: getUrl("/my-account"), text: "My Account" },
    ];
  } else {
    return [{ path: getUrl("/sign-in"), text: "Sign In" }];
  }
};

const NavItem = ({ path, text }) => (
  <li className='border-b w-full border-y-gray-700 flex items-center justify-center md:border-none md:w-auto'>
    <NavLink
      className={({
        isActive,
      }) => `h-16 w-full flex text-center items-center justify-center align-middle md:h-auto md:w-auto
        ${
          isActive
            ? "bg-gray-900 md:bg-transparent md:underline md:underline-offset-4"
            : undefined
        }`}
      to={path}
    >
      {text}
    </NavLink>
  </li>
);
NavItem.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const NavBar = () => {
  const { user, isLoggedIn } = useContext(UserContext);
  const [isResponsiveOpen, setIsResponsiveOpen] = useState(false);

  const navRightPages = getNavRightPages(isLoggedIn);

  const { cartProducts } = useContext(ShoppingCartContext);

  const renderNavItems = (navItems) => {
    return navItems.map(({ path, text }) => {
      return <NavItem key={path} path={path} text={text}></NavItem>;
    });
  };

  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900 dark:text-white flex justify-between items-center fixed z-20 top-0 w-full py-5 px-8 text-sm font-light'>
      <div className='font-semibold'>
        <NavLink to={getUrl("/")}>Shopi</NavLink>
      </div>
      <button
        onClick={() => setIsResponsiveOpen(!isResponsiveOpen)}
        type='button'
        className='inline-flex items-center w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden'
      >
        <Bars3Icon className='w-8 h-8' />
      </button>
      <div
        className={`dark:bg-gray-800 w-8/12 min-w-80 fixed top-20 h-full flex flex-col justify-between pb-20 border-t border-gray-700 ${
          isResponsiveOpen ? "left-0 md:left-auto" : "-left-full md:left-auto"
        } md:relative md:flex md:w-11/12 md:justify-between md:flex-row md:dark:bg-transparent md:pb-0 md:top-0 md:border-none`}
        id='navbar-default'
      >
        <ul className='flex items-center flex-col gap-0 md:flex-row md:gap-3'>
          {renderNavItems(navProductCategories)}
        </ul>

        <ul className='flex items-center flex-col gap-0 md:flex-row md:gap-3'>
          {isLoggedIn && (
            <li className='border-b border-y-gray-700 md:border-none dark:text-white/60 h-10 w-full flex text-center items-center justify-center align-middle md:h-auto md:w-auto'>
              {user.userEmail}
            </li>
          )}
          {renderNavItems(navRightPages)}
          {isLoggedIn && (
            <li className='h-10 w-full flex text-center items-center justify-center align-middle md:h-auto md:w-auto'>
              <ShoppingCartIcon className='size-4' />
              <span>{cartProducts.length}</span>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export { NavBar };

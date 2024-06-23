import { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

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
  <li>
    <NavLink
      className={({ isActive }) =>
        isActive ? "underline underline-offset-4" : undefined
      }
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

  const navRightPages = getNavRightPages(isLoggedIn);

  const { cartProducts } = useContext(ShoppingCartContext);

  const renderNavItems = (navItems) => {
    return navItems.map(({ path, text }) => {
      return <NavItem key={path} path={path} text={text}></NavItem>;
    });
  };

  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900 dark:text-white flex justify-between items-center fixed z-20 top-0 w-full py-5 px-8 text-sm font-light'>
      <ul className='gap-3 flex items-center'>
        <li className='font-semibold'>
          <NavLink to={getUrl("/")}>Shopi</NavLink>
        </li>
        {renderNavItems(navProductCategories)}
      </ul>

      <ul className='gap-3 flex items-center'>
        {isLoggedIn && <li className='dark:text-white/60'>{user.userEmail}</li>}
        {renderNavItems(navRightPages)}
        {isLoggedIn && (
          <li className='flex items-center justify-center'>
            <ShoppingCartIcon className='size-4' />
            <span>{cartProducts.length}</span>
          </li>
        )}
      </ul>
    </nav>
  );
};

export { NavBar };

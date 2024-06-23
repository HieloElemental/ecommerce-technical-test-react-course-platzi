import { useContext } from "react";
import { PropTypes } from "prop-types";

import { UserContext } from "../../Contexts/UserProvider";
import { Navigate } from "react-router-dom";

import { getUrl } from "../../utils/getUrl";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(UserContext);

  if (!isLoggedIn) return <Navigate to={getUrl("/login")} replace />;

  return children;
};
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ProtectedRoute };

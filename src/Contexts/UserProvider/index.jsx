import { createContext } from "react";
import { PropTypes } from "prop-types";

import { useLocalStorage } from "../../hooks/useLocalStorage";
import { LoadingPage } from "../../Components/LoadingPage";
import { Alert } from "../../Components/Alert";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const {
    item: user,
    setItem: setUser,
    isLoading,
    error,
    clearError,
  } = useLocalStorage({
    itemName: "user-V1",
    initialValue: { isLoggedIn: false, data: undefined },
  });

  const signUpUser = (user) => {
    setUser({ isLoggedIn: true, data: user });
  };

  return (
    <UserContext.Provider
      value={{ user: user.data, isLoggedIn: user.isLoggedIn, signUpUser }}
    >
      {isLoading ? (
        <LoadingPage />
      ) : error ? (
        <Alert
          type='danger'
          title='Whoops!'
          text='Something was wrong'
          onClose={clearError}
        />
      ) : (
        children
      )}
    </UserContext.Provider>
  );
};
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserProvider, UserContext };

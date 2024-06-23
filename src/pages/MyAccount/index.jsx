import { useContext } from "react";
import { Layout } from "../../Containers/Layout";
import { UserContext } from "../../Contexts/UserProvider";
import { useNavigate } from "react-router-dom";

import { getUrl } from "../../utils/getUrl";

const MyAccount = () => {
  const { user, logoutUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onLogoutHandler = () => {
    logoutUser();
    navigate(getUrl("/login"));
  };

  return (
    <Layout>
      <div className='flex flex-col w-80'>
        <h1 className='text-center text-2xl mb-4'>My Account</h1>
        <p>
          <span className='font-light text-sm'>Email: </span>
          <span>{user?.userEmail}</span>
        </p>
        <p>
          <span className='font-light text-sm'>Password: </span>
          <span>{user?.password}</span>
        </p>
        <button
          onClick={onLogoutHandler}
          className='border border-white disabled:text-white/40 w-full disabled:border-white/40 rounded-lg mt-6 py-3'
        >
          Log Out
        </button>
      </div>
    </Layout>
  );
};

export { MyAccount };

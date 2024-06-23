import { Link, useNavigate } from "react-router-dom";

import { Layout } from "../../Containers/Layout";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserProvider";

import { getUrl } from "../../utils/getUrl";

const Login = () => {
  const { user, loginUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onLoginHandler = async () => {
    if (user) {
      await loginUser();
      navigate(getUrl("/"));
    }
  };

  return (
    <Layout>
      <div className='flex flex-col w-80'>
        <h1 className='text-center text-2xl mb-4'>Login</h1>
        <p>
          <span className='font-light text-sm'>Email: </span>
          <span>{user?.userEmail}</span>
        </p>
        <p>
          <span className='font-light text-sm'>Pasword: </span>
          <span>{user?.password}</span>
        </p>
        <button
          onClick={onLoginHandler}
          className='bg-white disabled:bg-white/40 text-black w-full rounded-lg py-3 mt-4 mb-2'
        >
          Log in
        </button>
        <div className='text-center'>
          <a href='/'>Did you forget your password?</a>
        </div>
        <Link to={getUrl("/sign-in")}>
          <button className='border border-white disabled:text-white/40 w-full disabled:border-white/40 rounded-lg mt-6 py-3'>
            Sign Up
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export { Login };

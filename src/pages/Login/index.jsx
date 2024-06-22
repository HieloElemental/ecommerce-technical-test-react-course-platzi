import { Link } from "react-router-dom";

import { Layout } from "../../Containers/Layout";

const Login = () => {
  return (
    <Layout>
      <div className='flex flex-col w-80'>
        <h1 className='text-center text-2xl mb-4'>Login</h1>
        <p>
          <span className='font-light text-sm'>Email: </span>
          <span>Hielo</span>
        </p>
        <p>
          <span className='font-light text-sm'>Pasword: </span>
          <span>123123</span>
        </p>
        <Link>
          <button className='bg-white disabled:bg-white/40 text-black w-full rounded-lg py-3 mt-4 mb-2'>
            Log in
          </button>
        </Link>
        <div className='text-center'>
          <a href='/'>Did you forget your password?</a>
        </div>
        <Link>
          <button className='border border-white disabled:text-white/40 w-full disabled:border-white/40 rounded-lg mt-6 py-3'>
            Sign Up
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export { Login };

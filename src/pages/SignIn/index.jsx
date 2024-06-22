import { Layout } from "../../Containers/Layout";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <Layout>
      <form className='flex flex-col w-80'>
        <h1 className='text-center text-2xl mb-4'>Sign Up</h1>
        <div>
          <label className='font-bold text-lg mb-4'>Email: </label>
          <input
            placeholder='example@example.com'
            className='rounded-lg border border-white bg-black w-full py-2 px-4 mb-4 focus:outline-none'
            type='text'
          />
        </div>
        <div>
          <label className='font-bold text-lg mb-4'>Password: </label>
          <input
            placeholder='******'
            className='rounded-lg border border-white bg-black w-full py-2 px-4 mb-4 focus:outline-none'
            type='password'
          />
        </div>
        <input
          type='button'
          value='Sign Up'
          className='bg-white disabled:bg-white/40 text-black w-full rounded-lg py-3 mt-4 mb-2'
        />
        <div className='text-center'>
          Already have an account?{" "}
          <span className='font-bold underline'>
            <Link>Log in</Link>
          </span>
        </div>
      </form>
    </Layout>
  );
};

export { SignIn };

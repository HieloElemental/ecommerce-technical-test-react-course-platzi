import { Layout } from "../../Containers/Layout";

const MyAccount = () => {
  return (
    <Layout>
      <div className='flex flex-col w-80'>
        <h1 className='text-center text-2xl mb-4'>My Account</h1>
        <p>
          <span className='font-light text-sm'>Email: </span>
          <span>Hielo</span>
        </p>
        <p>
          <span className='font-light text-sm'>Password: </span>
          <span>123123</span>
        </p>
        <button className='border border-white disabled:text-white/40 w-full disabled:border-white/40 rounded-lg mt-6 py-3'>
          Log Out
        </button>
      </div>
    </Layout>
  );
};

export { MyAccount };

import { useContext, useState } from "react";
import { Layout } from "../../Containers/Layout";
import { Link, useNavigate } from "react-router-dom";

import { validateEmail } from "../../utils/validateEmail";
import { Alert } from "../../Components/Alert";
import { UserContext } from "../../Contexts/UserProvider";
import { getUrl } from "../../utils/getUrl";

const SignIn = () => {
  const { signUpUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ userEmail: "", password: "" });
  const [error, setError] = useState(null);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const onCloseErrorHandler = () => {
    setError(null);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!form.userEmail || !form.password) {
      setError("Please fill all the fields");
      return;
    }
    if (!validateEmail(form.userEmail)) {
      setError("Please enter a valid email");
      return;
    }
    signUpUser(form);
    navigate(getUrl("/"));
  };

  return (
    <Layout>
      <form className='flex flex-col w-80' onSubmit={onSubmitHandler}>
        <h1 className='text-center text-2xl mb-4'>Sign Up</h1>
        {error && (
          <Alert
            type='danger'
            title='Whoops!'
            text={error}
            onClose={onCloseErrorHandler}
          />
        )}
        <div>
          <label className='font-bold text-lg mb-4'>Email: </label>
          <input
            placeholder='example@example.com'
            className='rounded-lg border border-white bg-black w-full py-2 px-4 mb-4 focus:outline-none'
            type='email'
            pattern='[^@\s]+@[^@\s]+\.[^@\s]+'
            name='userEmail'
            value={form.userEmail}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label className='font-bold text-lg mb-4'>Password: </label>
          <input
            placeholder='******'
            className='rounded-lg border border-white bg-black w-full py-2 px-4 mb-4 focus:outline-none'
            type='password'
            name='password'
            value={form.password}
            onChange={onInputChange}
          />
        </div>
        <input
          type='submit'
          name='submit'
          value='Sign Up'
          className='cursor-pointer bg-white disabled:bg-white/40 text-black w-full rounded-lg py-3 mt-4 mb-2'
        />
        <div className='text-center'>
          Already have an account?{" "}
          <span className='font-bold underline'>
            <Link to={getUrl("/login")}>Log in</Link>
          </span>
        </div>
      </form>
    </Layout>
  );
};

export { SignIn };

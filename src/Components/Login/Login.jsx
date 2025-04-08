import { useState } from 'react';
import icon from '../../assets/nik-781AooDi4H0-unsplash.jpg';
import { useNavigate } from 'react-router-dom';
import { activateOtp, getUserActivate, googleLogin, login } from '../../Api';
import { useDispatch } from 'react-redux';
import { getUserlist } from '../../utils/Store/UserSlice';
import { jwtDecode } from 'jwt-decode';
import { GoogleLogin } from '@react-oauth/google';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    try {
      const userData = await login('login', { email, password });
      if (userData?.data?.data) {
        const maskedPassword = '*'.repeat(password.length);
        userData.data.data = {
          ...userData.data.data,
          password: maskedPassword
        };
      }
      setEmail('');
      setPassword('');
      dispatch(getUserlist(userData?.data?.data));
      navigate('/dashboard/home');
    } catch (error) {
      if (error?.response?.data?.message === 'User not activated') {
        setErrorMessage('User not activated');
      } else if (
        error?.response?.data?.message === 'Invalid login credentials'
      ) {
        setErrorMessage('Invalid email or password');
      } else {
        setErrorMessage('Login failed');
      }
    }
  };

  const handleSSOClick = async (data) => {
    try {
      const userData = await googleLogin('glogin', { email: data.email });
      if (userData?.data?.data) {
        const maskedPassword = '*'.repeat(password.length);
        userData.data.data = {
          ...userData.data.data,
          password: maskedPassword
        };
      }
      setEmail('');
      setPassword('');
      dispatch(getUserlist(userData?.data?.data));
      navigate('/dashboard/home');
    } catch (error) {
      if (error?.response?.data?.message === 'Invalid login credentials') {
        setErrorMessage('User not found');
      } else if (
        error?.response?.data?.message === 'Invalid login credentials'
      ) {
        setErrorMessage('User not activated');
      } else {
        setErrorMessage('Login failed');
      }
    }
  };

  const handleActivate = async () => {
    try {
      const userData = await getUserActivate('getuser', { email });
      await activateOtp('actOtp', { _id: userData?.data?.data._id });
      navigate('/activate', {
        state: {
          _id: userData?.data?.data._id,
          otpSentMessage: 'Otp sent successfully'
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="flex items-center justify-center
     min-h-screen bg-gray-900 dark:bg-gray-900"
    >
      <div
        className="w-full max-w-sm px-8 py-6
       space-y-8 bg-white dark:bg-gray-800 rounded-lg shadow-md"
      >
        <div className="flex w-full justify-evenly items-center">
          <img src={icon} alt="Logo" className="w-12 h-12 rounded-lg" />
          <h2
            className="text-3xl font-bold
          text-center text-gray-900 dark:text-gray-100 font-mono"
          >
            Login here!
          </h2>
        </div>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium
               text-gray-700 dark:text-gray-300"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-3 py-2 mt-1 border
               border-gray-300 dark:border-gray-600 rounded-md shadow-sm
                focus:outline-none focus:ring-indigo-500
                 focus:border-indigo-500 sm:text-sm bg-gray-100
                  dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium
               text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full px-3 py-2 mt-1 border
               border-gray-300 dark:border-gray-600 rounded-md shadow-sm
                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                 sm:text-sm bg-gray-100 dark:bg-gray-700 text-gray-900
                  dark:text-gray-100"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 text-indigo-600
                 border-gray-300 dark:border-gray-600
                  rounded focus:ring-indigo-500"
              />
              <label
                htmlFor="remember-me"
                className="block ml-2 text-sm text-gray-700 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={() => navigate('/forgetpassword')}
              >
                Forgot your password?
              </button>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium
               text-white bg-indigo-600 border border-transparent
                rounded-md shadow-sm hover:bg-indigo-700
                 focus:outline-none focus:ring-2
                  focus:ring-offset-2 focus:ring-indigo-500"
              onClick={(e) => handleSubmit(e)}
            >
              Sign in
            </button>
          </div>
        </form>
        {errorMessage && (
          <div className="text-red-500 text-sm text-center h-2">
            {errorMessage}
            {errorMessage === 'User not activated' ? (
              <span className="text-white">
                {' '}
                Click
                <span
                  className="text-blue-400 cursor-pointer"
                  onClick={() => handleActivate()}
                >
                  {' '}
                  here{' '}
                </span>
                to activate the account
              </span>
            ) : (
              <></>
            )}
            {errorMessage === 'User not found' ? (
              <span className="text-white">
                {' '}
                Click
                <span
                  className="text-blue-400 cursor-pointer"
                  onClick={() => navigate('/')}
                >
                  {' '}
                  here{' '}
                </span>
                to signUp!
              </span>
            ) : (
              <></>
            )}
          </div>
        )}
        <div className="relative flex items-center justify-center w-full mt-2">
          <div
            className="absolute w-full border-t
           border-gray-300 dark:border-gray-600"
          ></div>
          <div
            className="relative px-4 text-sm
           bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-300"
          >
            Or continue with
          </div>
        </div>
        <div>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const details = jwtDecode(credentialResponse.credential);
              handleSSOClick(details);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
